# Setting up the Family Diary

This takes about 15 minutes. It's easier on a computer, but a phone works.

## 1. Create the storage (Firebase, free)

1. Go to https://console.firebase.google.com and sign in with a Google account.
2. Tap **Create a project**. Call it something like `family-diary`. You can turn off Google Analytics.
3. **Database:** in the left menu, open **Build > Firestore Database > Create database**.
   - Pick a location near you (for example `australia-southeast1` in Australia or `europe-west2` in the UK).
   - Choose **production mode**.
4. **Security rules:** in Firestore, open the **Rules** tab. Replace everything there with the contents of `firestore.rules` from this repo, then tap **Publish**.
5. **Family login:** open **Build > Authentication > Get started**.
   - Under **Sign-in method**, turn on **Email/Password**.
   - Under **Users**, tap **Add user**. Use the email `family@example.com` and choose a family password. This is the password you'll both type in.
   - Under **Settings > User actions**, untick **Enable create (sign-up)** so nobody else can make a login.
6. **Connection settings:** open **Project settings** (the cog icon) and go to **Your apps**. Tap the **web** icon `</>`, give it any name, and tap **Register app**. Leave Firebase Hosting unticked.
   - Copy the `firebaseConfig` block it shows you and paste its values into `config.js` (or send them to Claude to do it).

## 2. Put the diary online (GitHub Pages, free)

GitHub only hosts free sites from **public** repos. The code is safe to make public: it contains no diary entries. Your data lives in Firebase, behind the family password.

1. In this repo on GitHub, open **Settings > General**, scroll to **Danger Zone**, and choose **Change visibility > Public**.
2. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Pick the branch `claude/family-diary` and the folder `/ (root)`, then tap **Save**.
3. After a minute or two the diary is live at **https://srmay83-lab.github.io/scott-test/**

## 3. Add it to each device

On each iPhone and the iPad:

1. Open the link above in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Open it from the home screen and enter the family password once.

For the kitchen iPad, turn off **Settings > Display & Brightness > Auto-Lock**, or use the **Keep screen on** button if it appears.
