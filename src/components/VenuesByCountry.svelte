<script>
  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";
  const donationService = getContext("DonationService");

  let totalByCountry = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  }

  let venueList;
  let countries;

  function populateByCountry(venueList, countries) {
    totalByCountry.labels = [];
    countries.forEach(country => {
      totalByCountry.labels.push(`${country.country2Name}, ${country.country1Name}`)
      totalByCountry.datasets[0].values.push(0);
    })
    countries.forEach((country, i) => {
      venueList.forEach(venue => {
        if (venue.country._id == country._id) {
          totalByCountry.datasets[0].values[i] += venue.vName;
        }
      });
    });
  }

  onMount(async () => {
   venueList = await donationService.getVenues();
   countries = await donationService.getCountries()
    populateByCountry(venueList, countries);
  });

</script>

<h1 class="title is-4">By Country</h1>
<Chart data={totalByCountry} type="bar"/>