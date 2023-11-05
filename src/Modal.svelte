<script>
  import { fade } from 'svelte/transition';
</script>

<div transition:fade class="modal">
  <p>Registration successful!</p>
</div>

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: gray;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    color: green;
  }
</style>
