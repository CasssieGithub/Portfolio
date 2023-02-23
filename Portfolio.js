$(() => {
  const $allNavLinks = $(".allNavLinks");
  const $hamburger = $(".hamburger");
  $hamburger.on("click", () => {
    $allNavLinks.toggle();
  });

  // $("p").hover(function(){
  //   $(this).css("background-color", "yellow");
  //   }, function(){
  //   $(this).css("background-color", "pink");
  // });
});
