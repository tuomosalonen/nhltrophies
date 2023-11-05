<script>
  import Statusbox from './Statusbox.svelte';
  import { fade } from 'svelte/transition';

  export let awards;
  export let selectedAward;
  export let registeredUsername;

  let awardInfo = {};

  const handleSelection = () => {
    awardInfo = awards.find((award) => award.name === selectedAward);

    console.log(selectedAward);
  };
</script>

<div class="content">
  <Statusbox loggedInUser={registeredUsername} />
</div>
<div transition:fade class="container">
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
    </div>
  {/if}
</div>

<style>
  .container {
    margin: 0 auto;
    padding: 1em;
    background-color: rgb(173, 168, 168);
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    height: auto;
    width: 150px;
    border-radius: 5px;
  }
</style>
