$("button").click(function () {
  let input = $("input").val();
  if (input) {
    $(".list").append(`<p>${input} <span>delete</span></p>`);
  }
  $("input").val("");
  $("input").focus();
});

$(".list").on("click", "span", function () {
  $(this).parent().remove();
});
