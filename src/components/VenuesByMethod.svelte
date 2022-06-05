<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

  const donationService = getContext("DonationService");

   let chartType="bar";
   let venueCount ;
   let vNmame = ""
   let totalByMethod;
    let data = {
        labels: ['Indoor', 'Outdoor', 'Hybrid'],
        datasets: [
          {
            values: [10, 12, 3]
          }
        ]
      };


   /* function populateByVenue(venueList) {
        venueList.forEach(venue => {
        if (venue.method == "indoor") {
          totalByMethod.datasets[0].values[0] += venue.vName
        } else if (venue.method == "outdoor") {
          totalByMethod.datasets[0].values[1] += venue.vNAme
        } else if (venue.method == "hybrid") {
          totalByMethod.datasets[0].values[2] += venue.vName
        }
      });
    }
*/
    onMount(async () => {
    let venueList = await donationService.getVenues();
    venueCount = venueList.length;

  //  populateByVenue(venueList);
    });
  </script>

<h1 class="title is-4">By Venue</h1>
<Chart data={data} type="pie"/>
