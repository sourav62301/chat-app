
import { Notification as Toast } from 'rsuite';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getMessaging, isSupported, onMessage } from 'firebase/messaging';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { isLocalhost } from './helpers';

const firebaseConfig = {
  apiKey: "AIzaSyBX8zE7Ln3grSCZSL3icHhcW74jGgHwvX8",
  authDomain: "sourav-chat-app-t02.firebaseapp.com",
  databaseURL: "https://sourav-chat-app-t02-default-rtdb.firebaseio.com",
  projectId: "sourav-chat-app-t02",
  storageBucket: "sourav-chat-app-t02.appspot.com",
  messagingSenderId: "675849697368",
  appId: "1:675849697368:web:140f7e6e5db34319dbf22d"
};

export const fcmVapidKey =
  'BLs_I-HQyrAuUJJh8H3U0vtHGhVhXLMqoVoomeNL90GMKm0-o7sSoN9CJYRiBAVz-Yi7ZAni8mKateJfDwodTnw';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'asia-south1 ');


export const messaging = isSupported() ? getMessaging(app) : null;

if (messaging) {
  onMessage(messaging, ({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  connectFunctionsEmulator(getFunctions, 'localhost', 5001);
}