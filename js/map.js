// Initialize and add the map
function initMap() {
    // The location of ABS
    const abs = { lat: -3.4292559690354936, lng: 114.80950728465643 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: abs,
    });
    // The marker, positioned at ABS
    const marker = new google.maps.Marker({
      position: abs,
      map: map,
    });
  }