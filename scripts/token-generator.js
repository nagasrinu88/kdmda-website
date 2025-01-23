const admin = require('firebase-admin');
const serviceAccount = require('../firebase-adminsdk-prod.json'); // Adjust the path as necessary

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function generateAccessToken() {
  try {
    const accessToken = await admin.credential.cert(serviceAccount).getAccessToken();
    console.log('Access Token:', accessToken.access_token);
  } catch (error) {
    console.error('Error generating access token:', error);
  }
}

generateAccessToken();