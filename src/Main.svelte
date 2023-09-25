<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let awards;
  export let selectedTrophyIndex;

  const handlePrevious = () => {
    dispatch('previous');
  };

  const handleNext = () => {
    dispatch('next');
  };
</script>

<div class="container">
  <h1>Awards</h1>
  <div>{awards[selectedTrophyIndex].name}</div>
  <div>
    <img src={awards[selectedTrophyIndex].imageUrl} alt="nhllogo.png" />
  </div>
  <button on:click={handlePrevious}>Previous</button>

  <button on:click={handleNext}> Next</button>
</div>

<style>
  .container {
    width: 300px; /* Adjust the max-width as needed */
    height: 25rem;
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
