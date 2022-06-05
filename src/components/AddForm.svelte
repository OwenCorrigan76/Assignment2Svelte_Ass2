<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  import Coordinates from "./Coordinates.svelte";
  const dispatch = createEventDispatcher();

  const donationService = getContext("DonationService");

  let vName = "";
  let countryList = [];
  let selectedCountry = "";
  let paymentMethods = ["Indoor", "Outdoor", "Hybrid"];
  let selectedMethod = "";
  let lat = 52.160858;
  let lng = -7.152420;
  let message = "Add a venue";

  onMount(async () => {
    countryList = await donationService.getCountries()
  });

  async function add() {
    if (selectedCountry && vName && selectedMethod) {
      const countryNames = selectedCountry.split(',')
      const country = countryList.find(country => country.country1Name == countryNames[0] && country.country2Name == countryNames[1]);
      const venue = {
        vName: vName,
        method: selectedMethod,
        country: country._id,
        lat: lat,
        lng: lng
      };
      const success = await donationService.add(venue);
      if (!success) {
        message = "Venue not added - some error occurred";
        return;
      }
      message = `Thanks! You added ${vName} to ${country.country1Name}`;
      dispatch("message", {
        venue: venue,
      });
    } else {
      message = "Please add a venue and select type and country";
    }
  }
</script>

<form on:submit|preventDefault={add}>
  <div class="field">
    <label class="label" for="vName">Enter Venue Details</label> <input bind:value={vName} class="input" id="vName"
                                                                  name="vName" placeholder="Enter Details" type="string">
  </div>
  <div class="field">
    <div class="control">
      {#each paymentMethods as method}
        <input bind:group={selectedMethod} class="radio" type="radio" value="{method}"> {method}
      {/each}
    </div>
  </div>
  <div class="field">
    <div class="select">
      <select bind:value={selectedCountry}>
        {#each countryList as country}
          <option>{country.country1Name},{country.country2Name}</option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:lat={lat} bind:lng={lng}/>
  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Add Venue</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
</form>

