<script>
  import Header from './Header.svelte';
  import Login from './Login.svelte';
  import Main from './Main.svelte';
  import Registration from './Registration.svelte';
  import { onMount } from 'svelte';
  import { loggedIn, login, logout } from './stateStore.js';

  let registered = false;
  let loggedInState;

  onMount(() => {
    loggedIn.subscribe((value) => {
      loggedInState = value;
    });
  });

  let showRegForm = false;

  let registeredUsername = '';
  let registeredPassword = '';

  const register = () => {
    showRegForm = !showRegForm;
    console.log('showRegForm is ' + showRegForm);
  };

  const handleRegistrationSuccess = (event) => {
    const { detail } = event;
    registeredUsername = detail.username;
    registeredPassword = detail.password;
    setTimeout(() => {
      showRegForm = false;
      registered = true;
    }, 3000);
  };

  const updateLoggedInState = (value) => {
    if (value) {
      login();
    } else {
      logout();
    }
  };

  let awards = [];

  onMount(async () => {
    const apiUrl = 'https://statsapi.web.nhl.com/api/v1/awards/';

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Cannot fetch the data');
      }

      const data = await response.json();
      awards = data.awards;

      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  });
</script>

<Header />
<div class="content">
  <main>
    {#if showRegForm}
      <Registration on:registrationSuccess={handleRegistrationSuccess} />
    {:else if registered && loggedInState}
      <Main {awards} />
    {:else}
      <Login {register} {registeredUsername} {registeredPassword} />
    {/if}
  </main>
</div>

<style>
  .content {
    max-width: 50%;
    margin: 0 auto;
    padding: 1em;
    text-align: center;
    background-color: gray;
  }
  main {
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
