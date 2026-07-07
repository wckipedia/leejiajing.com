import { goto } from '$app/navigation';

type TransitionDirection = 'to-contact' | 'to-home';

type RouteTransitionOptions = {
	href: string;
	direction: TransitionDirection;
	beforeNavigate?: () => void;
};

type ViewTransitionDocument = Document & {
	startViewTransition?: (updateCallback: () => Promise<void>) => {
		finished: Promise<void>;
		ready: Promise<void>;
		updateCallbackDone: Promise<void>;
	};
};

const transitionStateClass = 'is-route-transitioning';
const incomingClass = 'route-transition-incoming';
const snapshotClass = 'route-transition-snapshot';

function prefersReducedMotion() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isModifiedClick(event: MouseEvent) {
	return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

function getMainContent() {
	return document.querySelector<HTMLElement>('#main-content');
}

function prepareMainForIncoming(direction: TransitionDirection) {
	const main = getMainContent();
	if (!main) return;

	main.dataset.routeTransition = direction;
	main.classList.add(incomingClass);
	window.setTimeout(() => {
		main.classList.remove(incomingClass);
	}, 520);
}

function removeTransitionState() {
	document.documentElement.classList.remove(transitionStateClass);
	getMainContent()?.removeAttribute('data-route-transition');
}

async function runFallbackTransition(href: string, direction: TransitionDirection) {
	const main = getMainContent();
	const snapshot = main?.cloneNode(true) as HTMLElement | undefined;

	document.documentElement.classList.add(transitionStateClass);

	if (snapshot && main) {
		const rect = main.getBoundingClientRect();
		snapshot.id = '';
		snapshot.setAttribute('aria-hidden', 'true');
		snapshot.setAttribute('inert', '');
		snapshot.classList.add(snapshotClass);
		snapshot.dataset.routeTransition = direction;
		Object.assign(snapshot.style, {
			top: `${rect.top}px`,
			left: `${rect.left}px`,
			width: `${rect.width}px`,
			minHeight: `${rect.height}px`
		});
		document.body.append(snapshot);
	}

	await goto(href, { noScroll: false });
	prepareMainForIncoming(direction);

	window.setTimeout(() => {
		snapshot?.remove();
		removeTransitionState();
	}, 520);
}

async function navigateWithTransition(href: string, direction: TransitionDirection) {
	if (prefersReducedMotion()) {
		await goto(href, { noScroll: false });
		return;
	}

	const viewTransitionDocument = document as ViewTransitionDocument;
	if (viewTransitionDocument.startViewTransition) {
		document.documentElement.dataset.routeTransition = direction;
		const transition = viewTransitionDocument.startViewTransition(async () => {
			await goto(href, { noScroll: false });
		});
		await transition.finished.finally(() => {
			delete document.documentElement.dataset.routeTransition;
		});
		return;
	}

	await runFallbackTransition(href, direction);
}

export function routeTransition(node: HTMLAnchorElement, options: RouteTransitionOptions) {
	let currentOptions = options;

	async function handleClick(event: MouseEvent) {
		if (isModifiedClick(event) || currentOptions.href === window.location.pathname) return;

		event.preventDefault();
		currentOptions.beforeNavigate?.();
		await navigateWithTransition(currentOptions.href, currentOptions.direction);
	}

	node.addEventListener('click', handleClick);

	return {
		update(nextOptions: RouteTransitionOptions) {
			currentOptions = nextOptions;
		},
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
}
