<script>
  import Header from './Header.svelte'; //Importataan tarvittavat komponentit
  import Login from './Login.svelte';
  import Main from './Main.svelte';

  import Registration from './Registration.svelte';
  import { onMount } from 'svelte'; //Importataan Svelten onMount-elinkaarifunktio
  import { loggedIn } from './stateStore.js'; //Importataan store

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
    //määrittelee näytetäänkö rekisteröintilomake
    showRegForm = !showRegForm;
  };

  const handleRegistrationSuccess = (event) => {
    //Funktio joka käsittelee onnistuneen rekisteröitymisen
    const { detail } = event; //Registration-komponentissa luotu registrationSuccess-tapahtuma välitetään tänne
    registeredUsername = detail.username;
    registeredPassword = detail.password;
    //odottaa 2 sekuntia jonka jälkeen rekisteröitymislomaketta ei enää näytetä
    setTimeout(() => {
      showRegForm = false;
      registered = true;
    }, 2000);
  };

  let awards = [];

  onMount(async () => {
    //onMount-funktio, jolla haetaan dataa apiUrl-linkin takaa
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
    <!--If-lohkossa määritellään mikä komponentti renderöidään-->
    {#if showRegForm}
      <Registration on:registrationSuccess={handleRegistrationSuccess} />
    {:else if registered && loggedInState}
      <Main {awards} {registeredUsername} />
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
