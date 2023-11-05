<script>
  //Sisäänkirjautumiskomponentti
  import Button from './Button.svelte';
  import TextInput from './TextInput.svelte';
  import { loggedIn } from './stateStore.js';
  import Modal from './Modal.svelte';
  import { onMount } from 'svelte';

  export let register;
  export let registeredUsername;
  export let registeredPassword;

  let username = '';
  let password = '';

  let loginSuccess = false;
  let loading = false;
  let showModal = false;
  let error = '';

  const handleLogin = () => {
    loading = true;
    //funktio, jossa käsitellään sisäänkirjautuminen
    if (
      //username ja password on sidottu textinput-kenttiin,
      //katsotaan että arvot mätsäävät rekisteröityneeseen käyttäjään eikä kentät ole tyhjiä
      username === registeredUsername &&
      password === registeredPassword &&
      username !== '' &&
      password !== ''
    ) {
      setTimeout(() => {
        loggedIn.set(true); //päivitetään store
        loginSuccess = true;
        showModal = true;
        loading = false;
      }, 2000);
    } else {
      error = 'Invalid username or password';
      loading = false;
    }
  };
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
      id="pword"
      type="password"
      label="Password"
      placeholder="Enter password"
      errmsg="Invalid password"
      bind:value={password}
    />
    <Button text="Login" on:click={handleLogin} />

    <Button text="New user? Register here!" on:click={register} />
  </form>
  {#if showModal}
    <Modal />
  {/if}

  {#if loading}
    <div class="backdrop" />
    <div class="loader" />
  {/if}
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
    position: relative;
  }

  .loader {
    border: 8px solid #f3f3f3; /*Chat GPT:n generoima luokka */
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .backdrop {
    /*Chat GPT:n generoima luokka */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    z-index: 1;
  }

  @keyframes spin {
    /*Chat GPT:n generoima spinneri */
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }
</style>
