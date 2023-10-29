<script>
  import { loggedIn } from './stateStore.js';
  import { onMount } from 'svelte';

  export let register;
  export let registeredUsername;
  export let registeredPassword;

  let username = '';
  let password = '';

  onMount(() => {
    const unsubscribe = loggedIn.subscribe((value) => {
      console.log('loggedIn is ' + value); // The value of loggedIn when the component is mounted
    });

    return unsubscribe;
  });

  const handleLogin = () => {
    if (username === registeredUsername && password === registeredPassword) {
      alert('Login successful');
      loggedIn.set(true); // Setting the value of loggedIn to true upon successful login
    } else {
      alert('Virhe');
    }
  };
</script>

<div class="container">
  <label for="uname"><b>Username</b></label>
  <input
    bind:value={username}
    type="text"
    placeholder="Enter Username"
    name="uname"
  />

  <label for="psw"><b>Password</b></label>
  <input
    bind:value={password}
    type="password"
    placeholder="Enter Password"
    name="psw"
  />

  <button on:click={handleLogin} type="submit">Login</button>
  <div class="register">
    <button on:click={register}>New user? Register here!</button>
  </div>
</div>

<style>
  .container {
    text-align: center;
    max-width: 300px; /* Adjust the max-width as needed */
    margin: 0 auto;
    padding: 1em;
    background-color: rgb(173, 168, 168);
    border-radius: 5px; /* Optional: Add rounded corners to the container */
  }

  label {
    display: block; /* Display labels on separate lines */
    margin-bottom: 8px; /* Add some space between labels and input fields */
    float: left;
  }

  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .register {
    padding-top: 10px;
    color: orangered;
  }
</style>
