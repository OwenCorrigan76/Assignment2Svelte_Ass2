<script>
  import band from "/src/assets/band.jpg"
  import PlaytimeBrand from "../components/PlaytimeBrand.svelte";

</script>

<nav class="navbar">
  <div class="navbar-brand">
    <PlaytimeBrand/>
  </div>
  <div class="navbar-menu" id="navMenu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a id="add" class="button" href="/#/add"> Add Venue </a>
          <a id="map" class="button" href="/#/map"> Map </a>
          <a id="charts" class="button" href="/#/charts"> Charts </a>
          <a id="report" class="button" href="/#/report"> Report </a>
          <a id="logout" class="button" href="/#/logout"> Logout </a>
        </div>
      </div>
    </div>
  </div>
</nav>

