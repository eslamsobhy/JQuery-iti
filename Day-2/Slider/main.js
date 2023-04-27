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

$(".images-container img").click(function () {
  //   console.log($(this).attr("src"));
  $(overlayImg).attr("src", $(this).attr("src"));
  $(".overlay").css("display", "flex");
});
