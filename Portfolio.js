$(() => {
  /* 
  
  This is the function for the navigation hamburger menu. This code reads:
  - Grab the class holding all the navigation links.
  - Grab the class holding the hamburger menu.
  - On click, switch from off to on, using toggle. Toggle is used to show and hide elements. If the element is hidden, it will show the element and vice versa.

  */
  const $allNavLinks = $(".allNavLinks");
  const $hamburger = $(".hamburger");
  $hamburger.on("click", () => {
    $allNavLinks.toggle();
  });
  /* ======================================= */
  /* This group of code is being used to change the color of the links from the navigation bar after they are clicked. First, I grabbed the ID from HTML.
  Second, I assigned the .click element.
  Lastly, I assigned the color I wanted it to change to. 

  This is one part that I did struggle with. I added multiple lines of code that I could have condensed into a few lines, but wasn't able to because of the alotted time. I tried to prioritize by importance of functionality.*/

  const $navItem1 = $("#changeColorWhenClicked1");
  $("#changeColorWhenClicked1").click(() => {
    $navItem1.css("color", "#660000");
  });

  const $navItem2 = $("#changeColorWhenClicked2");
  $("#changeColorWhenClicked2").click(() => {
    $navItem2.css("color", "#660000");
  });

  const $navItem3 = $("#changeColorWhenClicked3");
  $("#changeColorWhenClicked3").click(() => {
    $navItem3.css("color", "#660000");
  });

  const $navItem4 = $("#changeColorWhenClicked4");
  $("#changeColorWhenClicked4").click(() => {
    $navItem4.css("color", "#660000");
  });
  /* ======================================= */
  /* In this code, I'm creating the dark mode theme using JQuery. I decided to use a conditional statement to tackle this code. By using a conditional statement, it allowed me to shift between dark and light mode based off of the assigned class.
   */

  $(".changeToDarkMode").on("click", () => {
    if ($("body").hasClass("dark-theme")) {
      $("body").removeClass("dark-theme");
      $(".changeToDarkMode").show(".bi bi-brightness-high");
    } else {
      $("body").addClass("dark-theme");
      $(".changeToDarkMode").show(".bi bi-moon-fill");
    }
  });
  /* ======================================= */

  /* I decided I wanted to change my greeting everytime someone clicked on my page. I started by creating an array of 3 informal greetings I've chosen. Then, I added math.floor and math.random to choose a greeting from my array of greetings. Lastly, I pulled the class called ".first" from my HTML and assigned it a random choice. 
  
  I could have erased the text that I currently have from HTML and it would not haven't changed anything. I could have also created the class using JQuery, but I thought about it after I started making this pesudo code and I'm on a time limit.
  
  */

  const greetings = [
    "Hi, I'm Cassie!",
    "Hello, I'm Cassie!",
    " Hey, I'm Cassie!",
  ];
  const randomIndex = Math.floor(Math.random() * greetings.length);

  const randomChoice = greetings[randomIndex];
  $(".first").text(randomChoice);

  /* ======================================= */
});
