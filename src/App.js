import React, { Fragment } from "react";
import "./globals.css";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import DetailCardList from "./components/DetailCardList/DetailCardList";
import Switch from "./components/Switch/Switch";

function App() {
  return (
    <Fragment>
      <Header>
        <Switch />
      </Header>
      <CardList />
      <DetailCardList />
    </Fragment>
  );
}

export default App;
