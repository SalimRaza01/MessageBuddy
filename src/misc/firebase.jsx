import { Notification as Toast } from 'rsuite';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getMessaging, isSupported, onMessage } from 'firebase/messaging';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyD9eJZcS-jZbhbSZt65OWzepOwX99jkpUM',
  authDomain: 'message-buddy-e9efb.firebaseapp.com',
  databaseURL: 'https://message-buddy-e9efb-default-rtdb.firebaseio.com',
  projectId: 'message-buddy-e9efb',
  storageBucket: 'message-buddy-e9efb.appspot.com',
  messagingSenderId: '332050796865',
  appId: '1:332050796865:web:279e3d6bc40f75b98991c0',
};

export const fcmVapidKey =
  'BBTWtmEGQUTsQkeJ7PbJy5mEAl8EtpMYsp4Vkmjduvk5yLXexvGN-S_XhTvBqxDxgKaro8Jdd5R1zfIz4epYy-E';

const app = initializeApp(config);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'europe-west3');

export const messaging = isSupported() ? getMessaging(app) : null;

if (messaging) {
  onMessage(messaging, ({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}
