import { useState } from "react";

import "../vendor/fonts.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { defaultClothingItems } from "../utils/defaultClothingItems";
import "../blocks/App.css";

function App() {
  //Save as state (useState)
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  return (
    <div className="app">
      <Header />
      <Main clothingItems={clothingItems} />
      <Footer />
    </div>
  );
}

export default App;
