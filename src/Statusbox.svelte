<script>
  import { logout } from './stateStore';

  export let loggedInUser;
</script>

<div class="status-box">
  <p>Logged in as {loggedInUser}</p>
  <div class="logoutbutton">
    <button on:click={logout}>
      Log out
      <img src="logout.png" alt="Logout" />
    </button>
  </div>
</div>

<style>
  .status-box {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: rgb(173, 168, 168);
    padding: 10px;
    border: 10px solid gray;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .logoutbutton {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .logoutbutton button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .logoutbutton img {
    width: 20px;
    height: 20px;
  }
</style>
