import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './app/navigations/Navigation';
import { firebaseApp } from './app/utils/firebase';
import * as firebase from "firebase";

export default function App() {

  return <Navigation />;
}

