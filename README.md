# Тренажёр тестов ЕНТ

Веб-приложение для подготовки к ЕНТ. Работает офлайн как PWA (Progressive Web App).

## Структура файлов

```
Test.html          — главная страница
manifest.json      — конфиг PWA (имя, иконки)
sw.js              — service worker (офлайн-кэш)
icon-192.png       — иконка приложения
icon-512.png       — иконка приложения
topics/            — папка с темами
    bones.js
    chemistry_qualitative.js
    example_math.js
    SlivBiology.js
    SlivChimestry.js
    SlivHistory.js
```

---

## Запуск на компьютере

### Вариант 1 — через Node.js (рекомендуется)

Установи [Node.js](https://nodejs.org), затем в папке проекта:

```bash
npx serve .
```

Открой в браузере: `http://localhost:3000`

### Вариант 2 — через Python

```bash
# Python 3
python -m http.server 8080
```

Открой в браузере: `http://localhost:8080/Test.html`

### Вариант 3 — расширение VS Code

Установи расширение **Live Server** в VS Code, открой `Test.html`, нажми "Go Live" внизу.

> ⚠️ Открывать файл напрямую через `file://` нельзя — PWA и service worker не работают без сервера.

---

## Установка на телефон (PWA)

Чтобы приложение работало офлайн без сервера, нужно один раз открыть его через интернет и установить.

### Способ 1 — GitHub Pages (бесплатно)

1. Создай репозиторий на [github.com](https://github.com)
2. Загрузи все файлы проекта
3. Зайди в Settings → Pages → выбери ветку `main`, папку `/root`
4. GitHub даст ссылку вида `https://username.github.io/repo-name/Test.html`
5. Открой эту ссылку на телефоне

### Способ 2 — Vercel (бесплатно)

1. Зайди на [vercel.com](https://vercel.com)
2. Подключи GitHub-репозиторий или загрузи папку через drag-and-drop
3. Vercel автоматически опубликует сайт и выдаст ссылку

---

## Установка на экран телефона

После открытия сайта по HTTPS-ссылке:

**Android (Chrome):**

- Меню (три точки) → "Добавить на главный экран"

**iOS (Safari):**

- Кнопка "Поделиться" → "На экран «Домой»"

После установки сайт работает как приложение — без браузера, без интернета.

---

## Загрузка изменений на GitHub

```bash
git add .
git commit -m "Обновлен проект"
git push
```

---

## Добавление новой темы

1. Создай файл в папке `topics/`, например `topics/math.js`:

```js
registerTopic("Название темы", [
  {
    q: "Текст вопроса?",
    options: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
    answer: "Вариант 1",
  },
  // ... остальные вопросы
]);
```

2. Подключи файл в `Test.html` (в блок с остальными темами):

```html
<script src="topics/math.js"></script>
```

3. Добавь путь к файлу в массив `FILES_TO_CACHE` в `sw.js`:

```js
'./topics/math.js',
```
