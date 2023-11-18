// NOTE:: To write jQuery for selection of DOM elements we can:
// jQuery.
// or $

// Select h1 DOM element and change it's CSS by color to red
// document.querySelector("h1").style.color = "red";
// jQuery("h1").css("color","red");
// OR
$("h1").css("color", "red");

// NOTE:: To avoid confusions about placement of jQuery CDN,
// we check whether the jQuery is ready or not by callbacks
// Do this or put jQuery script at last of the HTML document.
// $(document).ready(function(){
//     $("h1").css("color", "red");
// })

// STYLE
var currentColor = $("h1").css("color");
console.log(currentColor);

var currentFontSize = $("h1").css("font-size");
console.log(currentFontSize);

// to keep separation of concern, we can add or remove class
$("h1").addClass("big-title margin-50");

// $("h1").removeClass("margin-50");

// to check if class is there or not
var hasClass = $("h1").hasClass("margin-50");
console.log(hasClass);


// TEXT Manipulation
$("h1").text("Changed text, Click Me!!");

// Text via Inner HTML
$("button").html("<em>Changed Inner HTML</em>")


// ATTRIBUTE Manipulation
// GET
var currentSource = $("img").attr("src");
console.log(currentSource);

// SET
$("a").attr("href", "https://github.com/SyedAanif");


// EVENT LISTENERS
// on click
$("h1").click(function(){
    $("h1").text("Welcome to jQuery!");
    $("h1").css("color","black");
});

// Keypress
$("input").keydown(function(event){
    console.log(event);
});

// $(document) --> Whole document
$(document).keypress(function(event){
    var pressedKey = event.key;
    $("h1").text(pressedKey);
});

// Using "on" function for event-type
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});

// Adding HTML elements
$("h1").before("<button>Before</button>");

$("h1").after("<button>After</button>");

$("h1").prepend("<button>Prepend</button>");

$("h1").append("<button>Append</button>");

// Removing
$("img").remove();

// ANIMATIONS
$("button").click(function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity:0.5}); // CSS rules with numeric values
    $("h1").slideUp().slideDown().animate({opacity:0.5}); // Chaining
});