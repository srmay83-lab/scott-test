// Settings for the Family Diary.
// These Firebase values are safe to be public: they only say where the
// diary's storage is. The family password and the security rules in
// firestore.rules are what keep the diary private.
window.FAMILY_DIARY_CONFIG = {
  // The one shared login. It doesn't need to be a real inbox.
  familyEmail: "family@example.com",

  // Paste the values from Firebase: Project settings > Your apps > Web app.
  firebase: {
    apiKey: "AIzaSyCSgkzBex3LxmhyGrnkm22IhdtAs0R8U_k",
    authDomain: "mayfam.firebaseapp.com",
    projectId: "mayfam",
    storageBucket: "mayfam.firebasestorage.app",
    messagingSenderId: "148362064616",
    appId: "1:148362064616:web:74f3937bf027a90ccfcf5d"
  }
};
