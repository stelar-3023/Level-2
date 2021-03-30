window.onload = function () {
  let getText = document.getElementById("getText");

  let content = document.getElementById("content");

  let xhr = new XMLHttpRequest();

  getText.addEventListener("click", function () {
    xhr.addEventListener("readystatechange", function () {
      content.innerHTML = this.responseText;
    });
    xhr.open("GET", "hello.txt", true);
    xhr.send();
  });
};
