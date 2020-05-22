import React from "react";
import DetailCard from "../DetailCard/DetailCard";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import youtubeIcon from "../../images/icon-youtube.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import upIcon from "../../images/icon-up.svg";
import downIcon from "../../images/icon-down.svg";
import "./DetailCardList.css";

function DetailCardList(props) {
  return (
    <section className="detail-cards">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          <DetailCard
            title="Page views"
            socialIcon={facebookIcon}
            number="87"
            todayIcon={upIcon}
            today="2"
            classToday=""
          />
          <DetailCard
            title="Likes"
            socialIcon={facebookIcon}
            number="52"
            todayIcon={downIcon}
            today="2"
            classToday="danger"
          />
          <DetailCard
            title="Likes"
            socialIcon={instagramIcon}
            number="5462"
            todayIcon={upIcon}
            today="2256"
            classToday=""
          />
          <DetailCard
            title="Profile views"
            socialIcon={instagramIcon}
            number="52k"
            todayIcon={upIcon}
            today="1375"
            classToday=""
          />
          <DetailCard
            title="Retweets"
            socialIcon={twitterIcon}
            number="117"
            todayIcon={upIcon}
            today="303"
            classToday=""
          />
          <DetailCard
            title="Likes"
            socialIcon={twitterIcon}
            number="507"
            todayIcon={upIcon}
            today="553"
            classToday=""
          />
          <DetailCard
            title="Likes"
            socialIcon={youtubeIcon}
            number="107"
            todayIcon={downIcon}
            today="19"
            classToday="danger"
          />
          <DetailCard
            title="Total views"
            socialIcon={youtubeIcon}
            number="1407"
            todayIcon={downIcon}
            today="12"
            classToday="danger"
          />
        </div>
      </div>
    </section>
  );
}

export default DetailCardList;
