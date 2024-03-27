![react](https://img.shields.io/badge/Stack-React_|_TypeScript-149eca)
![license](https://img.shields.io/badge/license-MIT-green)

# Fruits Store

Powerful and lightweight e-commerce store.

## Features

- Pages: Home, Store, Fruit, and Bag
- Add to Bag or Favorites
- Edit Quantity
- Filter fruits to narrow down results
- Bag Preview on hover
- Minimalistic design, smooth animations and speed just make it a joy to use
- Design inspired by Nike and Apple
- Responsive

## Filtering

- Filter by name, color, family, vitamins, favorites or a text search

- Real-time updates: Upon activation or deactivation of filters, displayed fruits update instantly, without the need to click on any confirmation buttons.

- Stacking: Active filters combine. For example: Yellow Color + Citrus Family yields Lemon.
- Filter Tags: Active filters are displayed at the top of the page with a removal option
- Transitions: Fruits have a smooth transition effect as they re-arrange

#### Text Search

- Search fruits by name, color, family, or vitamins. For example, try searching for `um` (Result: Cucumber, Pumpkin) or `b6` (Result: Banana, Pineapple, Cocounut i.e fruits containing Vitamin B6)

- Case, spaces and symbols insensitive

## Tech Stack

- **UI Library:** React
- **Languages:** TypeScript, CSS, HTML
- **Build Tool:** Vite
- **Dependencies:**

  - react-burger-menu: Expandable burger menu (used for mobile)
  - react-flip-toolkit: Transition effect when fruits re-arrange
  - react-router-dom: Page routing
  - react-slick: Home page carousel
  - react-tooltip: Shopping bag tooltip
  - uuid: Unique ID's
  - css-modules: Modular CSS styles

## Main Directories

All of these are located in `src`

- `components`: React components and it's stylesheets
- `data`: Storage of the necessary data and it's type definitions
- `utils`: Utility functions used multiple times throughout the app
- `css`: Global CSS styles
- `Context.tsx`: Context API provider component, used to share the data throughout the app
- `Router.tsx`: Router provider component
- `App.tsx`: Navbar and outlet
- `main.tsx`: Entry point for the React app

In the root

- `docs`: Distribution files generated during the build, GitHub pages is reading the root of this directory
- `public`: Images and font

## Data & Functionality

The app uses the following state data, available througout the whole app using Context API.

#### 1. `Fruits` Array:

Represents all the fruits in the store, made of fruit objects.

Example:

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

Represents all the filters that are active or inactive at any given time

Example:

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

The `filterFruits` function takes both `fruits` and `filters` and returns an array of the fruits that match the filters, the `fruitSection` component then renders this array, showing only the matching fruits on screen.

Because `fruits` and `filters` are state variables, a re-render is triggered everytime they change and `filterFruits` is re-called, ensuring the shown fruits are always up-to date with the state of the app.

## Customization

Because the app heavily relies on data, you can customize it by using your own product's data with realative ease and minimal code tweaks.

Your own products data should be used with the same formatting in `fruits.ts`, and their correpsonding filters in `filters.ts`. Feel free to contact me if you need help with this.

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
- [GPT](https://chat.openai.com)
- [shields.io](https://shields.io)

## License

[MIT](https://choosealicense.com/licenses/mit/)
