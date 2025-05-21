# Компонент створення списку чисел та виведення додаткової інформації про них.

## tech stack: React | TypeScript | SCSS | Vite

## libreries: Lucide (icons)

- Розробив компонент з текстовим полем та кнопкою яка додає числа до списку і автоматично розраховує і відображує середнє значення і максимальне та мінімальне число у списку.

- Використовую два стейта (useState) де зберігаю поточне значення з input та поточний список вже введених чисел. Поточний список введених чисел додатково зберігаю в локальному сховищі браузера для збереження списку при оновленні сторінки.

Створив три функції:
зберігання поточного значення з input під час введення
додавання числа до списку
функція видалення числа

Також додатково створив невеличкий компонент для відображення числа і кнопки що його видаляє. В цей компонент передаю через props саме число, а також індекс цього числа і функцію setState для реалізації видалення числа зі списку. В більш складних випадках я використовував би Context або Redux. Але вважаю що у данному випадку це не було необхідно.

## Installation

1. Clone the repository:

    #### `git clone https://github.com/mixelio/product-catalog.git`

2. Navigate to the project directory:

    #### `cd product-catalog

3. Install the dependencies:

    #### `npm install`

4. Start the development server:

    #### `npm run dev`

## Author

  Developed by Mykhailo Hubko. You can reach me via: [Linkedin](https://www.linkedin.com/in/michael-hubko/)
  Email: mixelios@gmail.com