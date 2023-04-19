// styling for the tabs
$(".tabs").css({
  color: "green",
  "margin-top": "40px",
  width: "60%",
  "list-style-type": "none",
  display: "flex",
  "justify-content": "space-around",
});

$("li").css({
  padding: "20px",
  cursor: "pointer",
});

$("li").click(function () {
  $("li").removeClass("active");
  $("li").css({ "background-color": "" }); // WHY!!!?
  $(this).addClass("active");

  var attr = $(this).attr("data-tab");
  var relatedElement = $(`[id=${attr}]`);
  relatedElement.addClass("active");
  $(".active").css({
    "background-color": "#eee",
  });

  $(".tab-content").css({
    display: "none",
  });

  relatedElement.css({
    display: "inline-block",
  });
});

// styles for the paragraphs
$(".tab-content").css({
  display: "none",
  padding: "40px",
  "margin-right": "90px",
});
