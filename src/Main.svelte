<script>
  import { fade } from 'svelte/transition';
  import { logout } from './stateStore';

  export let awards;
  export let selectedAward;

  let awardInfo = {};

  const handleSelection = () => {
    awardInfo = awards.find((award) => award.name === selectedAward);

    console.log(selectedAward);
  };

  const handleLogout = () => {
    alert('Logged out');
    logout();
  };
</script>

<div class="container">
  <div>
    <select bind:value={selectedAward} on:change={handleSelection}>
      <option value="">Select a trophy</option>
      {#each awards as award}
        <option value={award.name}>{award.name}</option>p
      {/each}
    </select>
  </div>

  {#if Object.keys(awardInfo).length !== 0}
    <div>
      <h2>{awardInfo.name}</h2>
      <img transition:fade src={awardInfo.imageUrl} alt="Trophy" />
      <p>{awardInfo.description}</p>
      <!-- Add other relevant details here -->
    </div>
  {/if}

  <div class="home"><button on:click={handleLogout}>Log out</button></div>
</div>

<style>
  .container {
    /* Adjust the max-width as needed */
    margin: 0 auto;
    padding: 1em;
    background-color: rgb(173, 168, 168);
    border-radius: 20px; /* Optional: Add rounded corners to the container */
  }

  img {
    max-width: 100%; /* Allow the image to scale down */
    height: auto; /* Maintain the image's aspect ratio */
    width: 150px; /* Set a maximum width */
    border-radius: 5px;
  }
</style>
