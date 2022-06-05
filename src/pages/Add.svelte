<script>
  import band from "/src/assets/band.jpg";
  import AddForm from "../components/AddForm.svelte";
  import Menu from "../components/Menu.svelte";
  import VenueMap from "../components/VenueMap.svelte";

  let venueMap = null;
  let venueMap2 = null;

  function venueMade(event) {
    console.log(event.detail.venue);
  }
 </script>

 <div class="columns is-vcentered">
  <div class="column">
    <Menu/>
  </div>
 </div>

 <div class="columns is-vcentered">
  <div class="column has-text-centered">
    <VenueMap bind:this={venueMap}/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Venues</h1>
    <AddForm on:message={venueMade}/>
  </div>
 </div>