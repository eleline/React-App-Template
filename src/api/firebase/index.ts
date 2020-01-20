import firebase from 'firebase/app';
import 'firebase/database';

// @ts-ignore
import firebaseConfig from './firebase-config.json';

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export async function get<T = {}>(path: string) {
	const snapshot = await db.ref(path).once('value');
	if (!snapshot.exists()) {
		throw ReferenceError(`"${path}" is empty`);
	}
	const data: T = snapshot.val();
	return data;
}

export async function test<T = {}>() {
	console.log('Test');
}
