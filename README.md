# Marvel Workspace

The web client for the Marvel team workspace. Open https://sourcgi-code.github.io/marvel-workspace/ using your private team link.

This repository contains the public interface only. Company boards, notes, task records, team access tokens, and API keys are not included. The shared service authorizes every data request.

Features: workspace home, task boards, table and Kanban views, calendar, notes, owners, statuses, dates, browser reminders, calendar export, reporting, and reviewable AI task proposals, inline quick-add, keyboard search (Ctrl/Cmd K), and saved board navigation.

## Build

Run `npm ci` and `npm run build` inside `source/`. Push source changes to `main`; GitHub Actions builds, tests, and publishes `source/dist/` automatically. Backend code is maintained separately in the private schedule repository.

The website does not require a user account. Anyone with the private team link can read and edit that workspace, so share the link only with intended teammates. New visitors without a valid link cannot read company records. Browser notifications require permission and an open page; imported calendar alarms run in the user's calendar app. The workspace PC runs a signed-in Codex client for in-app Astra; it must stay awake and online. No OpenAI API key is required for that path. Email delivery remains unconfigured.
