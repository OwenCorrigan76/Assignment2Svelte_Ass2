<script>
  import band from "/src/assets/band.jpg";
  import Menu from "../components/Menu.svelte";
  import VenuesByCountry from "../components/VenuesByCountry.svelte";
  import VenuesByMethod from "../components/VenuesByMethod.svelte";

</script>

<div class="columns is-vcentered">

  <div class="column">
    <Menu/>
  </div>
</div>

<div class="columns">
  <div class="column  has-text-centered">
     <VenuesByMethod/>
  </div>
  <div class="column has-text-centered">
     <VenuesByCountry/>
  </div>
</div>