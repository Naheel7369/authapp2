import axios from 'axios';

const API_KEY = 'AIzaSyDe1iYdhDPczyKcgHtc675QB_7Kz265hU0';

export async function authenticate(mode: any, email: any, password: any) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token =response.data.idToken;
  return token;
}

export  function createUser(email: any, password: any) {
return  authenticate('signUp', email, password);
 
}

export  function login(email: any, password: any) {
 return authenticate('signInWithPassword', email, password);
}
