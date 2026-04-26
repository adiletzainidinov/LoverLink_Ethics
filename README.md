# LoveLink Ethics

Сайт об этичном использовании сервиса LoveLink — платформы для создания романтичных интерактивных подарочных страниц.

## Цель

Объяснить пользователям, как использовать LoveLink с уважением, честностью и искренними намерениями. Охватывает темы: согласие, приватность, запрет манипуляций и давления.

В LoveLink/FeelLink на главной странице есть блок «Небольшое напоминание» с кнопкой «Подробнее» — она ведёт на этот сайт.

## Стек

- **Next.js 16** (App Router, Server Components)
- **React 19**
- **Tailwind CSS 4**
- **ESLint 9**
- JavaScript (без TypeScript)

## Структура

```
src/
  app/            # Next.js App Router — layout, page, globals.css
  shared/
    ui/           # Переиспользуемые UI-примитивы
    lib/           # Утилиты и хелперы
  widgets/        # Крупные блоки страниц (Hero, секции)
  features/       # Зарезервировано для фич-модулей
```

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

## Команды

| Команда         | Описание                        |
|-----------------|---------------------------------|
| `npm run dev`   | Dev-сервер с hot reload         |
| `npm run build` | Production-сборка               |
| `npm run start` | Запуск production-сборки        |
| `npm run lint`  | Проверка ESLint                 |
