$(document).ready(function() {
        
        // При нажатии на кнопку
        $("#toggle-button").click(function() {
          var parsed = parser($("#input-field").val());
          $(".lib").html(parsed);
          // Переключение элементов
          $(".editor, .lib").toggleClass("hidden");          
        });
        
      });

function parser(inputed) {
  inputed = inputed.split("\n");
  inputed = inputed.map(i => {
  if (i.trim() === '') {
    return '&nbsp;';
  } else {
    return `<p>${i}</p>`;
  }
  });
  inputed = inputed.join("");
  return inputed;
}
