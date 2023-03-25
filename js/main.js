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
        if (i.trim() !== '') {
            i = `<p>${i}</p>`;
            i = i.replace('[[checkbox]]', '<input type="checkbox">');
        } else {
            i = '&nbsp;';
        }
        return i;
    });
    inputed = inputed.join('');
    return inputed;
}

