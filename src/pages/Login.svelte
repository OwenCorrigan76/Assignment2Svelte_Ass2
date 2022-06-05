<script>
  import band from "/src/assets/band.jpg";
  import WelcomeMenu from "../components/WelcomeMenu.svelte";
  import LoginForm from "../components/LoginForm.svelte";

</script>
<div class="columns is-vcentered">
  <div class="column">
    <WelcomeMenu/>
  </div>
</div>
<div class="columns">
  <div class="column has-text-centered">
    <img alt="band" src="{band}" width="600">
  </div>
  <div class="column">
    <div class="box">
      <h1 class="title">Login</h1>
      <LoginForm/>

    </div>
  </div>
</div>