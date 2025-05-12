---
layout: default
---

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

The Bhangmeter V2 employs an HSN-1000L Nuclear Event Detector to register the initial gamma ray burst from a nuclear explosion. This burst travels at the speed of light and reaches the detector almost instantly. It is followed shortly by the neutron flux—traveling at roughly 10% the speed of light—and then the blast wave, which moves much slower at Mach 1.5 to 3, arriving several milliseconds to seconds later depending on the distance.

<p align="center">
  <a href="./assets/img/blast_to_diode.png" target="_blank">
    <img src="./assets/img/blast_to_diode.png" alt="Blast to Diode Diagram" style="max-height: 200px; margin: 10px 0;">
  </a>
</p>

The HSN-1000L detects the gamma burst and outputs an active-low pulse, which the microcontroller interprets as a "Nuclear Event Detection" (NED). This triggers a routine that logs the exact time of the event.

<p align="center">
  <a href="./assets/img/computer.png" target="_blank">
    <img src="./assets/img/computer.png" alt="On-board Computer Diagram" style="max-height: 200px; margin: 10px 0;">
  </a>
</p>

Once detected by the onboard computer, the NED timestamp is uploaded to the cloud for permanent storage.

<p align="center">
  <a href="./assets/img/cloud.png" target="_blank">
    <img src="./assets/img/cloud.png" alt="Cloud Storage Diagram" style="max-height: 200px; margin: 10px 0;">
  </a>
</p>

A short time later—depending on the distance from the detonation site—the blast wave reaches the Bhangmeter V2, marking the completion of its mission. Its specialized polymer casing provides brief ablative cooling upon impact.

<p align="center">
  <a href="./assets/img/destruct.png" target="_blank">
    <img src="./assets/img/destruct.png" alt="Destruction Diagram" style="max-height: 200px; margin: 10px 0;">
  </a>
</p>


<div>
<img src="./assets/img/build_title.png" alt="Build Title" style="float: left; margin-right: 10px;">
</div>

To build your own Bhangmeter V2 please follow the below instructions

<p align="center">
  <a href="./assets/img/1.png" target="_blank">
    <img src="./assets/img/1.png" alt="Step 1" style="max-height: 300px; margin: 10px 0;">
  </a>
</p>
<p align="center">
  <a href="./assets/img/2.png" target="_blank">
    <img src="./assets/img/2.png" alt="Step 2" style="max-height: 300px; margin: 10px 0;">
  </a>
</p>
<p align="center">
  <a href="./assets/img/3.png" target="_blank">
    <img src="./assets/img/3.png" alt="Step 3" style="max-height: 300px; margin: 10px 0;">
  </a>
</p>
<p align="center">
  <a href="./assets/img/4.png" target="_blank">
    <img src="./assets/img/4.png" alt="Step 4" style="max-height: 300px; margin: 10px 0;">
  </a>
</p>
<p align="center">
  <a href="./assets/img/5.png" target="_blank">
    <img src="./assets/img/5.png" alt="Step 5" style="max-height: 300px; margin: 10px 0;">
  </a>
</p>
<p align="center">
  <a href="./assets/img/6.png" target="_blank">
    <img src="./assets/img/6.png" alt="Step 6" style="max-height: 300px; margin: 10px 0;">
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

