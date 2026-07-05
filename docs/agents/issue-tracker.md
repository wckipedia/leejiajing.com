# Issue Tracker: GitHub

Issues and future PRDs for this repository live in GitHub Issues for
`wckipedia/leejiajing.com`. Use the authenticated `gh` CLI from this checkout.

## Common operations

- Create: `gh issue create --title "..." --body "..."`
- Read: `gh issue view <number> --comments`
- List: `gh issue list --state open --json number,title,body,labels`
- Comment: `gh issue comment <number> --body "..."`
- Label: `gh issue edit <number> --add-label "..."`
- Close: `gh issue close <number> --comment "..."`

When a skill says to publish to the issue tracker, create a GitHub issue. When it
asks for the relevant ticket, read the referenced GitHub issue and its comments.

## Pull requests as a triage surface

PRs as a request surface: no.

Review PRs when explicitly requested, but do not place external PRs into the issue
triage queue by default.
