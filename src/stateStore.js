//Writable-store, jossa on sovelluksen tila (kirjautunut/ei kirjautunut)

import { writable } from 'svelte/store';

export const loggedIn = writable(false);

export const login = () => {
  loggedIn.set(true);
};

export const logout = () => {
  loggedIn.set(false);
};

export default loggedIn;
