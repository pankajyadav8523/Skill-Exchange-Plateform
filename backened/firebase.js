const admin = require("firebase-admin");

// Load Firebase Admin SDK using the environment variable
const serviceAccount = require(process.env.FIREBASE_ADMIN_SDK_PATH);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
