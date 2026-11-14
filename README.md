# The Birthday Universe

Two editable, static websites:
- `open-when/` — interactive Open When letters
- `birthday-mystery/` — six-stage treasure hunt

## Preview locally
Open each folder's `index.html` in a browser. For best results, use a simple local server, but no build step is required.

## Personalize
1. Edit `open-when/content.js` to change letter titles, teasers, messages and random reminders.
2. Edit `birthday-mystery/content.js` to change clues, answers, hints and final message.
3. Change the name or welcome copy directly in the relevant `index.html`.
4. The final treasure link currently points to `../open-when/`, which works when both folders are deployed together in the same parent directory.

## Free hosting with GitHub Pages
1. Create a GitHub repository, e.g. `birthday-universe`.
2. Upload both folders and this README to the repository root.
3. In repository Settings → Pages, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
4. Your pages will be available at:
   - `https://YOUR-USERNAME.github.io/birthday-universe/open-when/`
   - `https://YOUR-USERNAME.github.io/birthday-universe/birthday-mystery/`
5. The treasure hunt's final link to `../open-when/` will work on that same deployment.

## Free hosting with Netlify
Drag the entire `birthday_universe` folder (or its contents) into Netlify Drop. Both folders will be published under one site URL:
- `https://YOUR-SITE.netlify.app/open-when/`
- `https://YOUR-SITE.netlify.app/birthday-mystery/`

## Notes
- No backend, account or paid service is used.
- Treasure hunt progress is saved in the visitor's browser using localStorage.
- The answer checking is client-side and is meant for fun, not security.
- Google Fonts need an internet connection; system fallback fonts are included.
- Use your own private relationship details only if you're comfortable putting them in a public website. Anyone with the link may be able to view the source files.
