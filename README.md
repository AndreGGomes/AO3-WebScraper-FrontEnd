# AO3-WebScraper-FrontEnd

An implementation of a frontend UI for the project [AO3 Unnoficial API](https://github.com/AndreGGomes/AO3-WebScraper-API) made by myself.

Currently, the frontend UI supports searching an AO3's work data by its **Work ID**, that can be visualized raw or in **JSON** format.

> **Disclaimer:** This project is not affiliated with or endorsed by OTW or AO3. It is intended for educational and personal use. Please be mindful of AO3's Terms of Service and avoid aggressive scraping that could strain their servers.

---

## Features
- **Work Metadata Extraction:** Get title, author, rating, tags, fandoms, and statistics.
- **JSON Output:** Visualize clean and structured data in **JSON** format.
- **raw Output:** Visualize raw data as an single string of characters.
- **Copy to Clipboard:** Copy the data extracted to the clipboard

## Tech Stack
- **React**
- **Vite**
- **TailwindCSS**
- **npm** (Dependency Management)
- **docker** (conteinarization)

## Instalation

Clone the repo with `git clone git@github.com:AndreGGomes/AO3-WebScraper-FrontEnd.git`

With docker && docker compose installed run `docker compose up --build`

Now open in your browser the link to the now exposed frontend `http://localhost:5173/`

## API Usage

If u want to use the [AO3 Unnoficial API](https://github.com/AndreGGomes/AO3-WebScraper-API) with an front end UI, run the backend spring application first (instructions on the API GitHub repository) and than run 
this react frontend application.

## UI Preview

The UI follow the design choices of the original [Archive of Our Own webpage](https://archiveofourown.org/).

![UI implementation](https://github.com/AndreGGomes/AO3-WebScraper-API/blob/main/image.png)

## Upcomming Features

- **UI improvement:** Loading icon for the API reponse waiting time
- **About Section:** Section that explains the usage of the API
- **Search by author**: Search all the works an author has 
