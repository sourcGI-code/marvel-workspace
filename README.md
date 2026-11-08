# Marvel Workspace

The web client for the Marvel team workspace. Open https://sourcgi-code.github.io/marvel-workspace/ using your private team link.

This repository contains the public interface only. Company boards, notes, task records, team access tokens, and API keys are not included. The shared service authorizes every data request.

Features: workspace home, task boards, table and Kanban views, calendar, notes, owners, statuses, dates, browser reminders, calendar export, reporting, and reviewable AI task proposals when connected.

## Build

Run `npm ci` and `npm run build` inside `source/`. Copy the resulting `source/dist/` files to the repository root to publish with GitHub Pages. Backend code is maintained separately in the private schedule repository.

The website does not require a user account. Anyone with the private team link can read and edit that workspace, so share the link only with intended teammates. New visitors without a valid link cannot read company records. Browser notifications require permission and an open page; imported calendar alarms run in the user's calendar app. Email delivery and in-app Astra require their server-side connections.
