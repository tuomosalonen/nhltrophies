<script>
  import TextInput from './TextInput.svelte';
  import { loggedIn } from './stateStore.js';
  import { onMount } from 'svelte';

  export let register;
  export let registeredUsername;
  export let registeredPassword;

  let username = '';
  let password = '';

  let loginSuccess = false;
  let error = '';

  onMount(() => {
    const unsubscribe = loggedIn.subscribe((value) => {
      console.log('loggedIn is ' + value); // The value of loggedIn when the component is mounted
    });

    return unsubscribe;
  });

  const handleLogin = () => {
    if (
      username === registeredUsername &&
      password === registeredPassword &&
      username !== '' &&
      password !== ''
    ) {
      setTimeout(() => {
        loggedIn.set(true);
        loginSuccess = true;
        setTimeout(() => {}, 2000);
      }, 2000);
    } else {
      error = 'Invalid username or password';
    }
  };

  $: console.log('Username is ' + username);
  $: console.log('Registered username is ' + registeredUsername);
</script>

<div class="container">
  {#if error}
    <p class="error">{error}</p>
  {/if}

  {#if loginSuccess}
    <p class="success">Login successful!</p>
  {/if}
  <form on:submit|preventDefault={handleLogin}>
    <TextInput
      id="uname"
      label="Username"
      placeholder="Enter username"
      errmsg="Invalid username"
      bind:value={username}
    />
    <TextInput
      type="password"
      label="Password"
      placeholder="Enter password"
      errmsg="Invalid password"
      bind:value={password}
    />

    <button on:click={handleLogin} type="submit">Login</button>
    <div class="link-button">
      <button on:click={register}>New user? Register here!</button>
    </div>
  </form>
</div>

<style>
  .container {
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
    padding: 1em;
    background-color: rgb(173, 168, 168);
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .link-button {
    background: none;
    border: none;
    color: #ffcb00; /* or your desired link color */
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
    cursor: pointer;
    transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out,
      text-decoration 0.3s ease-in-out;
  }

  .link-button:hover {
    color: #ffffff;
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }
</style>
