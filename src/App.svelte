<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Login from './Login.svelte';
</script>

<Header />
<div class="content">
  <main>
    <Login />
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
