<div>
<img src="./assets/img/current_status.png" alt="Current Status" style="float: left; margin-right: 10px;">
</div>

<div style="clear: both;"></div>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Has a nuke gone off?</th>
    <td id="nuke-status" style="border: 1px solid #ddd; padding: 8px;">Loading...</td>
  </tr>
  <tr>
    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Last Monitor Update</th>
    <td id="last-update" style="border: 1px solid #ddd; padding: 8px;">Loading...</td>
  </tr>
  <tr>
    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Total Minutes Monitored</th>
    <td id="total-minutes" style="border: 1px solid #ddd; padding: 8px;">Loading...</td>
  </tr>
</table>

<script>
fetch('https://raw.githubusercontent.com/bigcrimping/ned_json/main/events.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('nuke-status').textContent = data['nuke gone off?'];
    document.getElementById('last-update').textContent = data['last monitor upload date'];
    document.getElementById('total-minutes').textContent = data['total minutes monitored'];
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('nuke-status').textContent = 'Error loading data';
    document.getElementById('last-update').textContent = 'Error loading data';
    document.getElementById('total-minutes').textContent = 'Error loading data';
  });
</script>

<div>
<img src="./assets/img/monitoring_location.png" alt="Monitoring Location" style="float: left; margin-right: 10px;">
</div>

<div style="clear: both;"></div>


<div id="map" style="height: 400px; width: 100%; margin: 10px 0;"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<script>
fetch('https://raw.githubusercontent.com/bigcrimping/ned_json/main/events.json')
  .then(response => response.json())
  .then(data => {
    // Initialize map
    const map = L.map('map').setView([data.lat, data.long], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add marker
    L.marker([data.lat, data.long])
      .addTo(map)
      .bindPopup(`Station: ${data.station}<br>Last update: ${data['last monitor upload date']}`)
      .openPopup();
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('map').innerHTML = '<div style="color: #e74c3c; padding: 20px;">Error loading map</div>';
  });
</script>

<div>
<img src="./assets/img/how_work.png" alt="How it Works" style="float: left; margin-right: 10px;">
</div>

<div style="clear: both;"></div>

The Bhangmeter V2 uses a HSN-1000L Nuclear Event Detector device to detect the gamma ray burst from the explosion.

<p align="center">
  <a href="./assets/img/blast_to_diode.png" target="_blank">
    <img src="./assets/img/blast_to_diode.png" alt="Blast to Diode Diagram" style="max-width: 300px; margin: 10px 0;">
  </a>
</p>

Upon the pulse hitting the detector in the Bhangmeter the information is received by the on-board computer

<p align="center">
  <a href="./assets/img/computer.png" target="_blank">
    <img src="./assets/img/computer.png" alt="On-board Computer Diagram" style="max-width: 300px; margin: 10px 0;">
  </a>
</p>

After being detected by the on-board computer the information is uploaded to the cloud for storage in perpetuity

<p align="center">
  <a href="./assets/img/cloud.png" target="_blank">
    <img src="./assets/img/cloud.png" alt="Cloud Storage Diagram" style="max-width: 300px; margin: 10px 0;">
  </a>
</p>

A short time later the blastwave will hit the Bhangmeter V2 at which time it will have completed its mission

<p align="center">
  <a href="./assets/img/destruct.png" target="_blank">
    <img src="./assets/img/destruct.png" alt="Destruction Diagram" style="max-width: 300px; margin: 10px 0;">
  </a>
</p>


<p align="center">
  <a href="./assets/img/build_title.png" target="_blank">
    <img src="./assets/img/build_title.png" alt="Build Title Diagram" style="max-width: 300px; margin: 10px 0;">
  </a>
</p>

To build your own Bhangmeter V2 please follow the below instructions

<p align="center">
  <a href="./assets/img/build_instructions.png" target="_blank">
    <img src="./assets/img/build_instructions.png" alt="Build Instructions Diagram" style="max-width: 300px; margin: 10px 0;">
  </a>
</p>

<style>
.site-title,
.site-description,
header > p,
header .header,
header .description,
header p,
header h1,
header .site-title,
header > h1,
header > .site-title {
  display: none !important;
}
</style>

