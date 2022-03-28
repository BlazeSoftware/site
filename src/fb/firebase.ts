import { initializeApp } from 'firebase/app';
import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyB7tZI04Ko025sh6AuHHW2jNKIrv1lRZlw',
  authDomain: 'blaze-docs.firebaseapp.com',
  projectId: 'blaze-docs',
  storageBucket: 'blaze-docs.appspot.com',
  messagingSenderId: '897820894945',
  appId: '1:897820894945:web:75753cd089e7e74e56b9a0',
  measurementId: 'G-WTTSQ2TRKC',
};

initializeApp(config);

const analytics = getAnalytics();

setAnalyticsCollectionEnabled(analytics, location.hostname !== 'localhost');
