import { useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import WeatherCard from "./WeatherCard";

import "../blocks/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <WeatherCard />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
