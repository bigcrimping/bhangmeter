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

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

<div>
<img src="./assets/img/how_work.png" alt="How it Works" style="float: left; margin-right: 10px;">
</div>

<div style="clear: both;"></div>

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

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


