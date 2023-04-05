// Готовность документа
$(document).ready(() => {
  // Сохраняем ссылки на элементы jQuery в переменные
  const $editorButton = $("#editor-button");
  const $settingsButton = $("#settings-button");
  const $backButton = $("#back-button");
  
  const $editor = $(".editor");
  const $lib = $(".lib");
  const $settings = $(".settings");
  
  const $inputField = $("#input-field");

  const $colorTheme = $("#color-theme");
  const $padding = $("#padding");
  const $fontSize = $("#font-size");
  const $lineHeight = $("#line-height");
  const $containerWidth = $("#container-width");
  const $paragraphSpacing = $("#paragraph-spacing");
  
// Нажатие на кнопку "Назад"
  $backButton.click(() => {
    $settings.addClass("hidden");
    $editor.addClass("hidden");
    $lib.removeClass("hidden");
    const parsed = parser($inputField.val());
    settingsCssReload();
    $lib.html(parsed);
  });

// Нажатие на кнопку "Редактор"
  $editorButton.click(() => {
    $settings.addClass("hidden");
    $lib.addClass("hidden");
    $editor.removeClass("hidden");
  });

// Нажатие на кнопку "Настройки"
  $settingsButton.click(() => {
    $editor.addClass("hidden");
    $lib.addClass("hidden");
    $settings.removeClass("hidden");
  });
};

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

const settingsCssReload = () => {

}
