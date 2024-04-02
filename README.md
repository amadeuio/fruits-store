![stack](https://img.shields.io/badge/Stack-React_|_TypeScript-149eca)
![license](https://img.shields.io/badge/License-MIT-green)

# Fruits Store

Powerful and lightweight fruits e-commerce store.

## Demo

<p align="center">
  <img src="public/screenshots/screenshot1.png" width="650px" alt="screenshot">
</p>
<p align="center">
  <img src="public/screenshots/screenshot2.png" width="650px" alt="screenshot">
</p>
<h2 align="center">
  <a href="https://amadeuio.github.io/fruits-store">👉 Demo</a>
</h2>

## Features

- Home, Store, Fruit, and Bag pages
- Fruit Filtering
- Add to Bag or Favorites
- Bag Preview on hover
- Minimalistic design, smooth animations and performance
- Design inspired by Nike and Apple
- Responsive

## Fruit Filtering

Filters help you narrow down the displayed fruits.

- Filter fruits by colors, family, vitamins, favorites or a search query
- Multiple filters can be combined
- Results update in real-time

#### Search Query

- Useful to search a fruit by it's name using text
- Case, spaces and symbols insensitive
- Aditionally, the search also works with colors, family or vitamins, but you may use the dedicated checkboxes for that
- Try these examples:
  - Searching `um` yields Cucumber, Pumpkin
  - Searching `b6` yields Banana, Pineapple, Cocounut (i.e fruits with Vitamin B6)
  - Searching `pepper` and selecting the `Red` checkbox yields Hot Pepper (example of filters combined)

## Tech Stack

- **UI Library:** React
- **Languages:** TypeScript, CSS, HTML
- **Build Tool:** Vite
- **Dependencies:**
  - react-burger-menu: Expandable burger menu for mobile
  - react-flip-toolkit: Transition effect when fruits re-arrange
  - react-router-dom: Page routing
  - react-slick: Home page carousel
  - react-tooltip: Bag tooltip
  - uuid: Unique ID's
  - css-modules: Modular CSS

## Main Directories

Located in `src`:

- `components`: React components and it's stylesheet modules
- `data`: Storage of data and it's type definitions
- `utils`: Utility functions used multiple times throughout the app
- `css`: Global CSS styles
- `Context.tsx`: Context API provider component, used to share the data throughout the app
- `Router.tsx`: React router provider component
- `main.tsx`: Entry point for the React app

Located the root:

- `docs`: Distribution files generated during the build, GitHub pages is reading the root of this directory
- `public`: Images and font

## Data & Functionality

The app uses the following state data, shared througout the whole app using Context API.

#### 1. `Fruit` Object

Represents each fruit in the store. All fruit objects are stored in a `fruits` array. Example:

```javascript
{
  id: uuidv4(),
  name: "Blueberries",
  slug: "blueberries",
  price: 4.5,
  quantity: 1,
  colors: ["Blue", "Black"],
  family: "Berry",
  vitamins: ["Vitamin C", "Vitamin K"],
  isFavorite: false,
  inBag: true,
}
```

#### 2. `Filters` Object:

Represents all the filters and their active or inactive state. Example:

```javascript
{
  colors: [
    { name: "Purple", isChecked: false },
    { name: "Green", isChecked: false },
    // ...etc
  ],
  families: [
    { name: "Rose", isChecked: false },
    { name: "Citrus", isChecked: true },
    // ...etc
  ],
  vitamins: [
    { name: "Vitamin C", isChecked: false },
    { name: "Vitamin A", isChecked: false },
    // ...etc
  ],
  favorite: false,
  query: "tangeri",
}
```

The app is constantly reading, rendering and updating this data according to user interactions, ensuring the it reflects the state correctly at all times.

#### How does the filtering functionality work?

The [`filterFruits`](src/utils/filterFruits.ts) function is the key to this functionality. It takes both `fruits` and `filters` and returns an array of the fruits that match the filters.

The [`fruitSection`](src/components/FruitSection/FruitSection.tsx) component is rendering this array, showing only the matching fruits on screen.

Because `fruits` and `filters` are state variables, a re-render is triggered everytime they change and `filterFruits` is re-called, ensuring the shown fruits are always up-to date with the the filters.

## Customization

Because the app is a representation of the fruit and filter data, you can customize it by simply editing that data with your own desired products and filters with relative ease and minimal code tweaks.

Your own products data should be used with the same formatting in [`fruits.ts`](src/data/fruits.ts), and their correpsonding filters in [`filters.ts`](src/data/filters.ts). Feel free to contact me if you need help with this.

## Run Locally

Clone the project

```bash
  git clone https://github.com/amadeuio/fruits-store
```

Go to the project directory

```bash
  cd fruits-store
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Acknowledgements

- [Apple Fruit Emojis](https://emojipedia.org/apple)
- [Google Icons](https://fonts.google.com/icons)
- [GPT](https://chat.openai.com)
- [shields.io](https://shields.io)

## License

[MIT](https://choosealicense.com/licenses/mit/)
