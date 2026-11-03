// Settings for the Family Diary.
// These Firebase values are safe to be public: they only say where the
// diary's storage is. The family password and the security rules in
// firestore.rules are what keep the diary private.
window.FAMILY_DIARY_CONFIG = {
  // The one shared login. It doesn't need to be a real inbox.
  familyEmail: "family@example.com",

  // Paste the values from Firebase: Project settings > Your apps > Web app.
  firebase: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_PROJECT_ID.appspot.com",
    messagingSenderId: "PASTE_SENDER_ID",
    appId: "PASTE_APP_ID"
  }
};
