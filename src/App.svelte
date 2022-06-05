<script>
  import {setContext} from "svelte";
  import {DonationService} from "./services/donation-service";
   import Main from "./pages/Main.svelte"
    import Report from "./pages/Report.svelte"
    import Login from "./pages/Login.svelte"
    import Signup from "./pages/Signup.svelte"
    import Router from "svelte-spa-router";
    import Map from "./pages/Map.svelte";
    import About from "./pages/About.svelte";
    import Add from "./pages/Add.svelte";
    import Charts from "./pages/Charts.svelte";


  setContext("DonationService", new DonationService("http://localhost:4000"));

   let routes = {
      "/": Main,
      "/login": Login,
      "/signup": Signup,
      "/logout": Main,
      "/map": Map,

       "/report": Report,
       "/add": Add,
       "/charts": Charts,

  }
</script>

<div class="container">
  <Router {routes}/>
</div>
