import { writable } from 'svelte/store';

const user = writable({ uname: null, loggedIn: true });

export default user;
