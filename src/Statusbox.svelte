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
    background-color: #f9f9f9;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 0.7em;
  }

  .status-box p {
    margin: 0;
  }

  .logoutbutton {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
  }

  .logoutbutton button {
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }

  .logoutbutton img {
    width: 20px;
    height: 20px;
  }
</style>
