# React Movie App

A movie discovery app built with React and Vite. Search for movies using the OMDb API, open a movie's details page, and keep track of movies you have watched or marked as favorites. Your lists are saved in the browser's `localStorage`, so they remain available when you revisit the app in the same browser.

## Features

- **Search movies:** Find movies using the OMDb API.
- **Movie details:** Select a search result to navigate to its details page.
- **Watched list:** Add movies to a list of movies you have watched.
- **Favorites list:** Save movies to a personal favorites list.
- **Persistent data:** Watched and favorite selections are stored in `localStorage` and persist across page reloads in the same browser.
- **Client-side navigation:** Move between the movie search experience and movie detail pages.

## Tech Stack

- [React](https://react.dev/)
- JavaScript
- CSS
- [Vite](https://vite.dev/)
- [OMDb API](https://www.omdbapi.com/)
- Browser `localStorage`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- An OMDb API key from [omdbapi.com](https://www.omdbapi.com/apikey.aspx)

### 1. Clone the repository

Replace `YOUR-USERNAME` with your GitHub username:

```bash
git clone https://github.com/YOUR-USERNAME/react-movie-app.git
cd react-movie-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the OMDb API key

Create a `.env` file in the project's root directory, alongside `package.json`, and add your key:

```dotenv
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

Use your actual key in your local `.env` file. Do not commit that file to GitHub. Make sure `.env` is included in `.gitignore`.

In your app code, read the variable with Vite's environment API:

```js
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
```

If your code already reads the key using a different variable name, either update the code or use the name expected by your existing implementation. Restart the Vite development server after changing environment variables.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed in your terminal.

## Environment File Example

You may commit a `.env.example` file so other developers know which variable to configure. It should contain only a placeholder, never your real key:

```dotenv
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

## Data Persistence

The app uses the browser's `localStorage` to remember watched movies and favorites. This data is stored locally in the browser and is not automatically synchronized across different browsers or devices. Clearing the browser's site data may remove it.

## Security Note

Vite exposes variables prefixed with `VITE_` to client-side code. This makes the OMDb key available in the browser bundle; putting it in `.env` keeps it out of your source repository when properly ignored, but does not make it secret in a deployed frontend. For a public production app where the key must remain private, route API requests through a backend or serverless function.

## Available Scripts

The standard Vite scripts are usually:

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

Check the `scripts` section of `package.json` if your project defines different commands.

## Future Improvements

- Add pagination or infinite scrolling for search results.
- Add filters and sorting for saved movies.
- Add export/import for watched and favorite lists.
