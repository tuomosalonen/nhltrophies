<script>
  import { fade } from 'svelte/transition';

  export let type = 'text';
  export let id;
  export let label;
  export let placeholder;
  export let value;
  export let max = 20;

  export let valid = true;
  export let errmsg = 'Invalid input!';

  function changeValue(e) {
    value = e.target.value;
  }
</script>

<label for={id}>{label}</label>
<input
  {id}
  {type}
  {value}
  {placeholder}
  maxlength={max}
  on:input={changeValue}
/>
{#if !valid}
  <div transition:fade class="error">{errmsg}</div>
{/if}

<style>
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 3px;
  }

  label {
    display: block; /* Display labels on separate lines */
    margin-bottom: 8px; /* Add some space between labels and input fields */
    float: left;
    font-weight: bold;
  }

  .error {
    color: red;
    text-align: left;
    font-size: 0.7em;
    margin-bottom: 2em;
  }
</style>
