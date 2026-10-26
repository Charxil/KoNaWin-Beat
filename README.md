# Ko Nawin Mala · ကိုးနဝင်း

An 81-day Ko Nawin bead counter. It has 9 levels, a calendar, offline use and install-to-home-screen. It works on Android and iPhone.

## Put it online with GitHub Pages
1. Create a new public repository on GitHub, for example `ko-nawin-mala`.
2. Click **Add file → Upload files**. Drag in everything in this folder, including the `fonts` and `icons` folders, then click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, select branch `main` and folder `/ (root)`, then click **Save**.
4. After about a minute the app is live at `https://<your-username>.github.io/ko-nawin-mala/`

## Install on a phone
- **Android (Chrome):** open the link, tap **⋮**, then **Install app** (or **Add to Home screen**).
- **iPhone (Safari):** open the link, tap **Share**, then **Add to Home Screen**. On iPhone this only works in Safari.

## Updating the app
Upload the new `index.html`. Then open `sw.js` and change `ko-nawin-v1` to `ko-nawin-v2` (and so on) so phones download the new version. Progress already saved on phones is kept.

## Notes
- Several people can share one phone: each has their own profile (tap a name at the top to switch). Progress is saved on that phone only.
- The app works offline after it has been opened once.
- Use **Backup → Save backup to phone** now and then. It saves a `ko-nawin-backup-….json` file to Downloads (or send it to Google Drive). **Restore from backup** brings everything back on a new phone or after Chrome data is cleared.
