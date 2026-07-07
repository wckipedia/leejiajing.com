import type { RequestHandler } from './$types';

const pages = [
	{ path: '', priority: '1.0' },
	{ path: 'contact', priority: '0.7' }
];

export const GET: RequestHandler = () => {
	const urls = pages
		.map(
			({ path, priority }) => `
	<url>
		<loc>https://leejiajing.com/${path}</loc>
		<changefreq>monthly</changefreq>
		<priority>${priority}</priority>
	</url>`
		)
		.join('');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'public, max-age=3600'
			}
		}
	);
};
