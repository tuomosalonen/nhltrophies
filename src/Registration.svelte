<script>
</script>

<form action="login">
  <div class="container">
    <label for="uname"><b>Choose username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" />

    <label for="psw"><b>Choose password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" />

    <button on:click type="submit">Create user</button>
  </div>
</form>

<style>
  form {
    text-align: center;
  }

  .container {
    max-width: 300px; /* Adjust the max-width as needed */
    margin: 0 auto;
    padding: 1em;
    background-color: rgb(173, 168, 168);
    border-radius: 5px; /* Optional: Add rounded corners to the container */
  }

  label {
    display: block; /* Display labels on separate lines */
    margin-bottom: 8px; /* Add some space between labels and input fields */
    float: left;
  }

  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
</style>
