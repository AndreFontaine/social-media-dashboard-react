import React, { useState, useEffect } from "react";
import "./globals.css";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import DetailCardList from "./components/DetailCardList/DetailCardList";
import Switch from "./components/Switch/Switch";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [osDarkMode, setOsDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  const handleChange = (event) => {
    setDarkMode(event.target.checked);
    setOsDarkMode(event.target.checked);
  };

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setOsDarkMode(mq.matches);
  }

  useEffect(() => {
    // valdiate the user os prefered color scheme

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);

    setDarkMode(mq.matches);
    setOsDarkMode(mq.matches);

    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch handleChange={handleChange} default={osDarkMode} />
      </Header>
      <CardList />
      <DetailCardList />
    </main>
  );
}

export default App;
