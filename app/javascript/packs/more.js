

function insertMoreContent() {
  let element = document.querySelector("#insert-here");
  let html = '<div class="row p-2 border-bottom">';
  html += '<div class="col-3">';
  html +=
    '<div class="img"><img src="https://via.placeholder.com/400x400" /></div>';
  html += "</div>";
  html += '<div class="col-9">';
  html += "<div>";
  html += "<h1>What is Lorem Ipsum?</h1>";
  html += "<p>";
  html += "Lorem Ipsum is simply dummy text of the printing and typesetting";
  html +=
    " industry. Lorem Ipsum has been the industry's standard dummy text ever";
  html += " since the 1500s, when an unknown printer took a galley of type and";
  html +=
    " scrambled it to make a type specimen book. It has survived not only";
  html += " five centuries, but also the leap into electronic typesetting,";
  html +=
    " remaining essentially unchanged. It was popularised in the 1960s with";
  html +=
    " the release of Letraset sheets containing Lorem Ipsum passages, and";
  html +=
    " more recently with desktop publishing software like Aldus PageMaker";
  html += " including versions of Lorem Ipsum.";
  html += "</p>";
  html += "</div>";
  html += "</div>";
  html += "</div>";

  setInterval(function () {
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        let li = document.createElement("li");
        li.innerHTML = html;
        element.parentElement.insertBefore(li, element);
      }
      let value = document.querySelector('#counter').innerText
      document.querySelector('#counter').innerText = parseInt(value) + 3
      // praseInt đổi ký tự sang số
    }, 2000);
  }, 1000*5);
}
