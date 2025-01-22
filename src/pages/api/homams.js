import { getFirestore } from 'firebase-admin/firestore';
import firebaseAdmin from '../../lib/firebaseAdmin';


const db = getFirestore(firebaseAdmin);
const collectionName = 'homams';

export default async function handler(req, res) {
  const { id } = req.query;
  console.log('fetching data');
  if (id) {
    // Fetch a single document by ID
    const docRef = db.collection(collectionName).doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      res.status(200).json(doc.data());
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } else {
    // Fetch all documents in the collection
    const snapshot = await db.collection(collectionName).get();
    const homams = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(homams);
  }
}