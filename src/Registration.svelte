<script>
  import TextInput from './TextInput.svelte';
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  let username = '';
  let password = '';
  let confirmPassword = '';
  let registered = false;
  let error = '';
  let formSubmitted = false;

  $: validUsername = username.length > 5;
  $: validPassword = password.length > 5;

  const handleRegistration = () => {
    formSubmitted = true;
    if (password === confirmPassword && validUsername && validPassword) {
      registered = true;
      dispatch('registrationSuccess', { username, password });
    } else {
      error = 'There was a problem with one or more fields.';
    }
  };
</script>

<div class="container" transition:fade>
  <form on:submit|preventDefault={handleRegistration}>
    <TextInput
      id="uname"
      label="Username"
      placeholder="Enter username"
      valid={validUsername}
      errmsg={formSubmitted && !validUsername
        ? 'Username must be at least 6 characters'
        : ''}
      bind:value={username}
    />
    <TextInput
      type="password"
      label="Password"
      placeholder="Enter password"
      valid={validPassword}
      errmsg={formSubmitted && !validPassword
        ? 'Password must be at least 6 characters'
        : ''}
      bind:value={password}
    />

    <TextInput
      type="password"
      label="Confirm password"
      placeholder="Retype password"
      valid={validPassword}
      errmsg={formSubmitted && password !== confirmPassword
        ? 'Passwords must match'
        : ''}
      bind:value={confirmPassword}
    />

    <button on:click={handleRegistration} type="submit">Create user</button>
  </form>

  {#if error}
    <p class="error">{error}</p>
  {/if}

  {#if registered}
    <p class="success">Registration successful!</p>
  {/if}
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

  .success {
    color: green;
  }

  .error {
    color: red;
  }
</style>
