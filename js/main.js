// Готовность документа
$(document).ready(() => {
  // Сохраняем ссылки на элементы jQuery в переменные
  const $toggleButton = $("#toggle-button");
  const $inputField = $("#input-field");
  const $lib = $(".lib");
  const $editorLibToggle = $(".editor,.lib");
  
  // При нажатии на кнопку
  $toggleButton.click(() => {
    // Парсим введенный текст
    const parsed = parser($inputField.val());
    // Записываем результат в элемент с классом "lib"
    $lib.html(parsed);
    // Переключение элементов
    $editorLibToggle.toggleClass("hidden");
  });
});

// Функция парсинга текста
const parser = inputed => {
  let parsed = inputed.split("\n");
  parsed = parsed.map(i => {
    if (i.trim() !== "") {
      return `<p>${i}</p>`;
    } else {
      return "&nbsp;";
    }
  });
  parsed = parsed.map(i => i.replace("[[checkbox]]", '<input type="checkbox">'));
  parsed = parsed.join("");
  return parsed;
};
