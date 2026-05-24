# The Whiskey Lexicon - Static Site

A static HTML, JavaScript, and CSS implementation of The Whiskey Lexicon.

## Features

- **Regions View**: Explore whiskey-producing regions and their legal frameworks
- **Lexicon View**: Browse whiskey terminology with search and alphabetical navigation
- **Responsive Design**: Works on desktop and mobile devices
- **Vanilla JavaScript**: No build tools or frameworks required

## Files

- `index.html` - Main HTML structure
- `assets/styles/styles.css` - CSS styles
- `assets/scripts/scripts.js` - Vanilla JavaScript for interactivity

## Usage

Simply open `index.html` in any modern web browser. No server required.

## Development

To modify styles, edit `assets/styles/styles.css`.

## Data

Whiskey terms and region data are included directly in `assets/scripts/scripts.js` as JavaScript constants.

## Manual DB Backup

`export PATH="/opt/homebrew/opt/libpq/bin:$PATH" && source .env && npm run backup`
