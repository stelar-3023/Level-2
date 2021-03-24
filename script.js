// const str = `{"data": [{ "shoppingCart": "Tenzo tea", "items": ["tea", "whisk"]}]}`;

// const obj = {data: [{ shoppingCart: "Tenzo tea", "items": ["tea", "whisk"]}]};

// // console.log(strdata[0].shoppingCart);

// console.log(obj.data[0].shoppingCart)

// console.log(JSON.parse(str).data[0].items)

// $.get("/Code_X/Level2/getJSON.json").done((data) => {
//   console.log(typeof data);
//   console.log(data);
//   const dataToString = JSON.stringify(data);
//   console.log(typeof dataToString);
//   console.log(dataToString);
// });

// fetch("/Code_X/Level2/getJSON.json")
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data.name);
//     console.log(data.languages);
//   })
//   .catch(error => {
//     console.log(error);
//   })
let listElements;
listElements = $("li").hasClass("nav-item");
console.log(listElements);

let active;
active = $(".active");
active.toggleClass("active").next().css("background-color", "orange");

var navList, firstItem, link;
navList = $(".nav-list");
firstItem = navList.children().first();
link = firstItem.find("a");
link.attr("href", "#1");

console.log(navList.text());
// active.remove()
$(".input-test").on("keypress", function () {
  // console.log("The event happened");
  $("body").css("background-color", "aqua");
});

$("#my-button").on("click", function () {
  $("button").remove();
  $("body").addClass("success");
});

$("#my-list").on("click", "li", function () {
  $("li").css("background-color", "yellow");
});
