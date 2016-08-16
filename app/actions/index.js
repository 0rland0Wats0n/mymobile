import Rebase from 're-base';

//initialize rebase
const base = Rebase.createClass({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET
});

//auth callback
function authDatCallback(authData) {
  if(authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
    return authData;
  }
  console.log("User is logged out.");
  return;
}

export const IS_LOGGED_IN = 'IS_LOGGED_IN';

const AUTH_URL = process.env.AUTH_DOMAIN;

export function isLoggedIn() {
  const authData = base.onAuth(authDatCallback);

  return {
    type: IS_LOGGED_IN,
    payload: authData
  }
}
