<script>
  import {getContext, onMount} from 'svelte'

  const donationService = getContext("DonationService");
  let venueList = [];

  onMount(async () => {
    venueList = await donationService.getVenues();
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Name</th>
    <th>Venue</th>
    <th>Adder</th>
     <th>Country</th>
  </thead>
  <tbody>
    {#each venueList as venue}
      <tr>
        <td>
          {venue.vName}
        </td>
        <td>
          {venue.method}
        </td>
         <td>
          {venue.adder.lastName},  {venue.adder.firstName}
         </td>
        <td>
          {venue.country.country2Name}, {venue.country.country1Name}
        </td>

      </tr>
    {/each}
  </tbody>
</table>