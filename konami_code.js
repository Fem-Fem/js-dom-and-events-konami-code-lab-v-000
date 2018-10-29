const main = document.body;

main.addEventListener('keydown', function(event) {
  init(event);
});

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init(event) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(event.detail || event.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

init();
// function onKeyDownHandler(e) {
//   const key = parseInt(e.detail || e.which);
//
//   if (key === alphabet[index]) {
//     index++;
//
//     if (index === alphabet.length) {
//       alert("Hurray!");
//
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }
