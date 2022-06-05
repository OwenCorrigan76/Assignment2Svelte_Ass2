<script>
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';
  import {getContext, onMount} from "svelte";

  const donationService = getContext("DonationService");

  const mapConfig = {
    location: {lat: 52.160858, lng: -7.152420},
    zoom: 8,
    minZoom: 1,
  };
  let map = null;

  onMount(async () => {
    map = new LeafletMap("venue-map", mapConfig);
    map.showZoomControl();
    map.addLayerGroup('Venues');
    map.showLayerControl();

    const venues = await donationService.getVenues();
    venues.forEach(venue => {
      addVenueMarker(venue);
    });
  });

 export function addVenueMarker(venue) {
    const venueStr = `${venue.country.country1Name}  ${venue.vName.toString()}`;
    map.addMarker({lat: venue.lat, lng: venue.lng}, venueStr, "Venues");
   // map.moveTo(11, {lat: venue.lat, lng: venue.lng});
  }
  export function addVenueMarker2(venue) {
      const venueStr = `${venue.country.country1Name}  ${venue.vName.toString()}`;
      map.addMarker2({lat: venue.lat, lng: venue.lng}, venueStr, "Venues");
     map.moveTo(11, {lat: venue.lat, lng: venue.lng});
    }
</script>

<div class="box" id="venue-map" style="height:600px"></div>
