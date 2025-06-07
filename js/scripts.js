// Simplify scroll behavior
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  });
});

$(function () {
  $(".video, .video2, .video3, .video4").click(function () {
    let theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC;
    $(theModal + " iframe").attr("src", videoSRCauto);
  });
  
  // Handle all video modals with a single event handler
  $(".modal").on("hidden.bs.modal", function (e) {
    $(this).find("iframe").attr("src", "");
  });
});

//activating the email link
$(document).ready(function () {
  $("#mailbutton").click(function (event) {
    window.location = "mailto:jazzyspoon@gmail.com";
  });
});

$(".navbar-nav>li").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

