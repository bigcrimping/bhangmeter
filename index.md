# Has a nuke gone off?

**Good question!** 

<div style="margin: 20px 0;">
  <h3>Nuke Status</h3>
  <div id="nuke-status" style="font-size: 24px; font-weight: bold; margin: 10px 0;">Loading...</div>

  <h3>Last Updated</h3>
  <div id="last-updated" style="color: #666; margin: 10px 0;">Loading...</div>

  <h3>Station Location</h3>
  <div id="map" style="height: 400px; width: 100%; margin: 10px 0;"></div>

  <!-- Updated Table Section -->
  <h3>Details</h3>
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tbody>
      <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Nuke Status</th>
        <td id="table-nuke-status" style="border: 1px solid #ddd; padding: 8px;">Loading...</td>
      </tr>
      <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Last Update</th>
        <td id="table-last-updated" style="border: 1px solid #ddd; padding: 8px;">Loading...</td>
      </tr>
      <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Total Minutes Monitored</th>
        <td id="table-total-minutes" style="border: 1px solid #ddd; padding: 8px;">Loading...</td>
      </tr>
    </tbody>
  </table>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<script>
// Fetch the JSON data
fetch(`https://api.github.com/repos/bigcrimping/ned_json/contents/events.json?t=${Date.now()}`, {
  headers: {
    'Accept': 'application/vnd.github.v3.raw'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Update nuke status with styling
    const statusElement = document.getElementById('nuke-status');
    const isNukeGoneOff = data['nuke gone off?'] === 'no' ? 'No' : 'Yes';
    statusElement.textContent = isNukeGoneOff;
    statusElement.style.color = isNukeGoneOff === 'No' ? '#2ecc71' : '#e74c3c';

    // Update last updated time with formatting
    const lastUpdatedElement = document.getElementById('last-updated');
    const lastUpdate = new Date(data['last monitor upload date']);
    lastUpdatedElement.textContent = lastUpdate.toLocaleString();

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

    // Update table values
    document.getElementById('table-nuke-status').textContent = isNukeGoneOff;
    document.getElementById('table-last-updated').textContent = lastUpdate.toLocaleString();
    document.getElementById('table-total-minutes').textContent = `${data['total minutes monitored']} minutes`;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('nuke-status').innerHTML = '<span style="color: #e74c3c;">Error loading status</span>';
    document.getElementById('last-updated').innerHTML = '<span style="color: #e74c3c;">Error loading update time</span>';
    document.getElementById('map').innerHTML = '<div style="color: #e74c3c; padding: 20px;">Error loading map</div>';
  });
</script>

<style>
.site-title {
  display: none !important;
}
.site-description {
  display: none !important;
}
</style>

<style>
.site-title,
.site-description,
header > p,
header .header,
header .description,
header p {
  display: none !important;
}
</style>

<style>
.site-title,
header h1,
header .site-title,
header > h1,
header > .site-title {
  display: none !important;
}
</style>


