var quotes = [];
var colors = [
  "#C62828",
  "#AD1457",
  "#4A148C",
  "#311B92",
  "#1A237E",
  "#0D47A1",
  "#01579B",
  "#004D40",
  "#1B5E20",
  "#F9A825",
  "#E65100",
  "#263238",
];

function GetQuotes() {
  return fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      quotes = data;

      change();
    });
}

function change() {
  var count = quotes.length;
  var randomNumber = Math.floor(Math.random() * count);
  document.getElementById("text").innerText = quotes[randomNumber].text;
  document.getElementById("author").innerText =
    "-" + quotes[randomNumber].author;

  var randomColor = Math.floor(Math.random() * 12);
  document.body.style.backgroundColor = colors[randomColor];
}

GetQuotes();
