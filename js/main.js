// Готовность документа
$(document).ready(() => {
  // Сохраняем ссылки на элементы jQuery в переменные
  const $editorButton = $("#editor-button");
  const $settingsButton
  const $inputField = $("#input-field");
  
  const $editor = $(".editor");
  const $lib = $(".lib");
  const $settings = $(".settings");
  
  
  
  const $colorTheme = $("#color-theme");
  const $padding = $("#padding");
  const $fontSize = $("#font-size");
  const $lineHeight = $("#line-height");
  const $containerWidth = $("#container-width");
  const $paragraphSpacing = $("#paragraph-spacing");
  
  // При нажатии на кнопку
  $editorButton.click(() => {
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
  for (let i = 0; i < parsed.length; i++) {
    // Заменяем [[checkbox]] на HTML-код чекбокса
    parsed[i] = parsed[i].replace(/\[\[checkbox\]\]/g, '<input type="checkbox">');

    // Создаем спойлеры
    parsed[i] = parsed[i].replace(/\[\[spoiler=(.*?)\]\](.*?)\[\[spoiler\]\]/g, 
      '<details><summary>$1</summary><p>$2</p></details>');
  }
  parsed = parsed.join("");
  return parsed;
};

