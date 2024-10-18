# PlaylistApp Automation

Automation of cores functionalities of PlaylistApp

## Features

- Test the search Bar
- Add a track to the playlist
- Add multiple tracks to the playlist

## Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   gh repo clone On33-3/PlaylistApp <- on Terminal / Console
   https://github.com/On33-3/PlaylistApp.git <- HTTP

2. Set the URL base in playwright.config.ts in use: { baseURL: "" }

3. For a execution with the command npm test go to package.json in the section scripts set "test": "npx playwright test"

4. Delete the browsers firefox and webkit in project section from file playwright.config.ts