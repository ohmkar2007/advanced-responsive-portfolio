# Ohmkar K — Semantic HTML5 Portfolio

A responsive four-page portfolio created with semantic HTML5, CSS, and a small amount of JavaScript.

## Pages

- `index.html` — Home and featured projects
- `about.html` — Introduction, education, and skills in progress
- `projects.html` — Project descriptions and external links
- `contact.html` — Accessible demo contact form
- `style.css` — Shared responsive styles
- `script.js` — Current year and client-side form feedback

## Run the website

1. Extract the ZIP file.
2. Open the `semantic-portfolio` folder.
3. Double-click `index.html` to open it in your browser.

For editing, open the folder in Visual Studio Code. You can use the Live Server extension if installed, but it is not required.

## Accessibility and semantic features

- `<!doctype html>` and `lang="en"`
- Semantic `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` elements
- A skip link to the main content
- One main page heading per page and a logical heading hierarchy
- Descriptive link text and accessible names
- Visible keyboard focus styles and native keyboard-operable links/buttons
- Contact form fields with explicit labels, instructions, and browser validation
- Live status message using `role="status"` and `aria-live="polite"`
- Responsive layout, reduced-motion support, and a high-contrast preference
- Unique page titles, meta descriptions, author information, and Open Graph metadata
- External links use `rel="noopener noreferrer"` when opened in a new tab

## Test with Lighthouse

1. Open the site in Google Chrome.
2. Press `F12` to open Developer Tools.
3. Select **Lighthouse**.
4. Choose **Accessibility**, **Best Practices**, and **SEO**.
5. Generate a report and review any suggestions.

A perfect Lighthouse score cannot be guaranteed in advance. Scores can vary with browser, environment, and audit version. Fix any reported issues before submitting.

## Important notes before submission

- Review the personal introduction and project descriptions so they accurately represent your work.
- The contact form is a front-end demonstration. It validates the fields but does not send or store submissions; a working production form needs a backend or form service.
- Replace any project links or details that are no longer accurate.
- This project is a starter you should understand, test, and personalize before submitting.
