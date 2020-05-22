import React from "react";
import Card from "../Card/Card";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import youtubeIcon from "../../images/icon-youtube.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import upIcon from "../../images/icon-up.svg";
// import downIcon from "../../images/icon-down.svg";

const cardListData = [
  {
    id: 1,
    userName: "AndreFontaine",
    number: "1483",
    today: "12",
    todayIcon: upIcon,
    socialIcon: facebookIcon,
    social: "facebook",
  },
  {
    id: 2,
    userName: "AndreFontaine",
    number: "28k",
    today: "1229",
    todayIcon: upIcon,
    socialIcon: twitterIcon,
    social: "twitter",
  },
  {
    id: 3,
    userName: "__SrGonzalez",
    number: "6k",
    today: "121",
    todayIcon: upIcon,
    socialIcon: instagramIcon,
    social: "instagram",
  },
  {
    id: 4,
    userName: "AndresGonzalez",
    number: "12K",
    today: "877",
    todayIcon: upIcon,
    socialIcon: youtubeIcon,
    social: "youtube",
  },
];

function CardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardList;
