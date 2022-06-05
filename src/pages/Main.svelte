<script>
  import band from "/src/assets/band.jpg";
  import WelcomeMenu from "../components/WelcomeMenu.svelte";
   import {getContext} from "svelte";
   const donationService = getContext("DonationService");
   donationService.logout();

</script>

<div class="column">
<WelcomeMenu/>
 </div>

<div class="columns is-centered ">
    <div class="column has-text-centered">
        <h1> Welcome to Music Venues Ireland. Sign up or Log in...</h1>
    </div>
</div>
<section class="hero">
    <img src="/src/assets/band.jpg" alt="bandPic">
</section>

<section class="section">
    <div class="container has-text-centered">
        <h2 class="title">Live Music Venues Ireland</h2>
        <p>This is where musicians, promoters, venue owners and punters can add to a database of music venues in
            Ireland.
            These venues can be indoor, outdoor or hybrid, where there is both indoor and outdoor space for music lovers
            to enjoy
            what they enjoy.
        </p>
    </div>
</section>

