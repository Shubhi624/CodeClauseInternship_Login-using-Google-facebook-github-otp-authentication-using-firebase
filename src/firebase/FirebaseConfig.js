import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkEQQAVToWad7_VzmuMXztiYcYQbQb9X0",
  authDomain: "signin-code-clause-project.firebaseapp.com",
  projectId: "signin-code-clause-project",
  storageBucket: "signin-code-clause-project.appspot.com",
  messagingSenderId: "308937690359",
  appId: "1:308937690359:web:f8db73c3404e336322d7f2",
  measurementId: "G-WMCXPH5ZCN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const googleProvider = new GoogleAuthProvider();