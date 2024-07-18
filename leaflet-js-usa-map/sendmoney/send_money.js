$(document).ready(function () {
  $("#sendMoneyContinue").on("click", function (event) {
    event.preventDefault();

    $("#user-input").addClass("d-none");
    $("#user-consent").removeClass("d-none");
  });

  $("#userConsentConinue").on("click", function (event) {
    event.preventDefault();

    let toast = {
        title: "Success",
        message: 'Successfully sent money',
        status: TOAST_STATUS.SUCCESS,
        timeout: 10000
    }
    Toast.create(toast);
    // // Get form values
    // var accountFrom = $("#accounts").val();
    // var recipient = $("#recipient").val();
    // var amount = $("#amount").val();
    // var message = $("#message").val();

    // //   // Validate form
    // if (accountFrom === "" || recipient === "" || amount === "") {
    //   $("#responseMessage").html(
    //     '<div class="alert alert-danger">Recipient and amount are required.</div>'
    //   );
    //   return;
    // }

    // // Simulate an AJAX request (in real use, you'd send this to your server)
    // $.ajax({
    //   url: "https://example.com/api/sendMoney", // Replace with your API endpoint
    //   type: "POST",
    //   data: {
    //     recipient: recipient,
    //     amount: amount,
    //     message: message,
    //   },
    //   success: function (response) {
    //     $("#responseMessage").html(
    //       '<div class="alert alert-success">Money sent successfully!</div>'
    //     );
    //     $("#sendMoneyForm")[0].reset();
    //   },
    //   error: function (error) {
    //     $("#responseMessage").html(
    //       '<div class="alert alert-danger">Error sending money. Please try again.</div>'
    //     );
    //   },
    // });

    // $("#user-input").addClass("d-none");
    // $("#user-consent").removeClass("d-none");
  });

  $("#userConsentEdit").on("click", function (event) {
    event.preventDefault();

    $("#user-input").removeClass("d-none");
    $("#user-consent").addClass("d-none");
  });

  $("#userConsentConinue").on("click", function (event) {
    event.preventDefault();

    $("#user-consent").addClass("d-none");
    $("#user-confirmation").removeClass("d-none");
  });

  $("#txnLocation").click(function () {
    //alert("button");
    // Initialize the map
    const map = L.map("map").setView([39.8282, -98.5795], 5); // Center on USA with zoom level 4

    // Set basemap (e.g., OpenStreetMap)
    L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Function to display coordinates on map click
    function onMapClick(e) {
      console.log(e);
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      const coordsText = `Coordinates: [${lat.toFixed(4)}, ${lng.toFixed(4)}]`;
      document.getElementById("coordinates").textContent = coordsText;
    }

    // Enable map click event listener
    map.on("click", onMapClick);
  });
});
