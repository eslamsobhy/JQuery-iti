// Styling
$(".images-container").css({
  display: "flex",
  "justify-content": "space-between",
  gap: "10px",
  "flex-wrap": "wrap",
});

$("img").css({
  width: "400px",
  cursor: "pointer",
});

$(".overlay").css({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  left: "0",
  top: "0",
  "background-color": "rgba(0, 0, 0, 0.7)",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  gap: "10px",
});

$(".next,.prev").css("width", "30px");

// Functionality
$(".overlay").css({
  display: "none",
});

// Overlay image
let overlayImg = $(".img-container img")[0];

// Slider images count
let imagesCount = $(".images-container img").length;

$(".images-container img").click(function () {
  $(overlayImg).attr("src", $(this).attr("src"));
  $(".overlay").css("display", "flex");
});

// Slider (next and prev buttons functionality)
$(".prev").click(function () {
  let imageNum = parseInt($(overlayImg).attr("src").split("/")[2][0]);
  if (imageNum - 1 === 0) {
    $(overlayImg).attr("src", `./images/${imagesCount}.jpg`);
  } else {
    $(overlayImg).attr("src", `./images/${(imageNum - 1) % imagesCount}.jpg`);
  }
});

$(".next").click(function () {
  let imageNum = parseInt($(overlayImg).attr("src").split("/")[2][0]);
  if (imageNum + 1 === imagesCount) {
    $(overlayImg).attr("src", `./images/${imagesCount}.jpg`);
  } else {
    $(overlayImg).attr("src", `./images/${(imageNum + 1) % imagesCount}.jpg`);
  }
});

// Closing the slider when clicking empty space
$(".overlay").click(function (event) {
  if (!$(event.target).is("img")) {
    $(".overlay").css("display", "none");
  }
});
