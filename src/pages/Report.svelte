<script>
  import band from "/src/assets/band.jpg";
  import VenueList from "../components/VenueList.svelte";
  import Menu from "../components/Menu.svelte";
</script>

<div class="columns is-vcentered">
 <div class="column">
    <Menu/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <img alt="Band" src={band} width="600"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Venues to date</h1>
    <VenueList/>
  </div>
</div>