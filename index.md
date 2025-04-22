# Has a nuke gone off?

**Good question!** 


### Nuke Status

<div id="nuke-status">Loading...</div>

### Last Updated

<div id="last-updated">Loading...</div>

### Station Location

<div id="map" style="height: 400px; width: 100%;"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<script>
  
// Fetch the JSON data
fetch('https://api.github.com/repos/bigcrimping/ned_json/contents/events.json', {
  headers: {
    'Accept': 'application/vnd.github.v3.raw'
  }
})
  .then(response => response.json())
  .then(data => {
    // Update nuke status
    const statusElement = document.getElementById('nuke-status');
    statusElement.textContent = data['nuke gone off?'] === 'no' ? 'No' : 'Yes';

    // Update last updated time
    const lastUpdatedElement = document.getElementById('last-updated');
    lastUpdatedElement.textContent = data['last monitor upload date'];

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
    console.error('Error fetching data:', error);
    document.getElementById('nuke-status').textContent = 'Error loading status';
    document.getElementById('last-updated').textContent = 'Error loading update time';
  });
</script>






