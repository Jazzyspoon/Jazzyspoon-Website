//load site at top of scroll page
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

window.scroll({
  top: 0,
  left: 0,
  behavior: "auto",
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 0,
  left: 0,
  behavior: "auto",
});

$(function () {
  $(".video").click(function () {
    let theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC;
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", "");
    });
  });
});

$("#videoModal").on("hidden.bs.modal", function (e) {
  $("#videoModal").find("iframe").attr("src", "");
});

//modal2
$(function () {
  $(".video2").click(function () {
    let theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC;
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", "");
    });
  });
});

$("#videoModal2").on("hidden.bs.modal", function (e) {
  $("#videoModal2").find("iframe").attr("src", "");
});

//modal3
$(function () {
  $(".video3").click(function () {
    let theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC;
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", "");
    });
  });
});

$("#videoModal3").on("hidden.bs.modal", function (e) {
  $("#videoModal3").find("iframe").attr("src", "");
});

//modal4
$(function () {
  $(".video4").click(function () {
    let theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC;
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", "");
    });
  });
});

$("#videoModal4").on("hidden.bs.modal", function (e) {
  $("#videoModal4").find("iframe").attr("src", "");
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

// $(".img-fluid").addClass("wow fadeIn z-depth-1-half");

// new WOW().init();

// var tooltipTriggerList = [].slice.call(
//   document.querySelectorAll('[data-bs-toggle="tooltip"]')
// );
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl);
// });
