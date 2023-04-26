// STYLING
$("body").css({
  margin: "0",
  padding: "0",
  "font-family": "arial",
});

$(".hover-menu").css({
  height: "100vh",
  width: "200px",
  "background-color": "#EEE",
  position: "relative",
  left: "-170px",
});

$(".menu-item").css({
  padding: "10px",
});

$(".item-header").css({
  height: "40px",
  cursor: "pointer",
  "font-weight": "bold",
  display: "flex",
  "align-items": "center",
});

$(".item")
  .css({
    height: "40px",
    display: "flex",
    "align-items": "center",
  })
  .slideUp();

// FUNCTIONALITY
$(".hover-menu").hover(
  function () {
    $(".hover-menu").animate({ left: "0" }, 500);
  },
  function () {
    $(".hover-menu").animate({ left: "-170px" }, 500);
  }
);

$(".header-1").click(function () {
  $(".item-1").slideToggle(300);
});

$(".header-2").click(function () {
  $(".item-2").slideToggle(300);
});
