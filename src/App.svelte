<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Login from './Login.svelte';
  import Main from './Main.svelte';
  import Registration from './Registration.svelte';
  import { onMount } from 'svelte';

  let loginok = false;
  let selectedTrophyIndex = 0;
  let registering = false;

  const logIn = () => {
    alert('loggaa');
    loginok = !loginok;
  };

  const register = () => {
    alert('rekkaa');
    registering = !registering;
  };

  const previous = () => {
    if (selectedTrophyIndex > 0) selectedTrophyIndex--;
  };
  const next = () => {
    if (selectedTrophyIndex < awards.length - 1) selectedTrophyIndex++;
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
    {#if !loginok}
      <Login {logIn} {register} />
    {:else if registering}
      <Registration {register} />
    {:else}
      <Main
        {selectedTrophyIndex}
        {awards}
        on:previous={previous}
        on:next={next}
      />
    {/if}
  </main>
</div>
<Footer />

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
