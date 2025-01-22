// src/lib/firebaseAdmin.js
import { initializeApp, cert, getApps } from 'firebase-admin/app';

let firebaseAdminApp;

if (!getApps().length) {
    firebaseAdminApp  = initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

export default firebaseAdminApp;