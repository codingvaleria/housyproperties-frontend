import React from "react";
import Card from "./Card";

function Housecards() {
  return (
    <div className="houses">
      <div className="cards-container">
        <Card
          image="https://i.pinimg.com/564x/eb/23/16/eb2316a4c199cb12436f6b9f440a2330.jpg"
          estateName="Kagundo"
          title=" 2 Bedrooms Villa Rongai"
          network="Wifi"
          shower="Shower"
          parking="Parking"
          balcony="Balcony"
          price="Ksh 20,000"
        />
        <Card
          image="https://i.pinimg.com/564x/0f/8b/a5/0f8ba5b8d78ed7c43ababd190aafb282.jpg"
          estateName="Oak"
          title="1 Bedroom Villa Kimbo"
          network="Wifi"
          shower="Shower"
          parking="Parking"
          balcony="Balcony"
          price="Ksh 30,000"
        />
        <Card
          image="https://i.pinimg.com/564x/01/6e/ab/016eaba835b4ae2b4743c8c145586f93.jpg"
          estateName="Rock Beach"
          title="2 Bedrooms Villa Karen"
          network="Wifi"
          shower="Shower"
          parking="parking"
          balcony="Balcony"
          price="Ksh 20,000"
        />
        <Card
          image="https://i.pinimg.com/564x/5d/94/90/5d94908bebfc5fed86b87eaf7e969ad1.jpg"
          estateName="Kagundo"
          title="2 Bedrooms Villa Karen"
          network="Wifi"
          shower="Shower"
          parking="parking"
          balcony="Balcony"
          price="Ksh 20,000"
        />
        <Card
          image="https://i.pinimg.com/564x/5d/94/90/5d94908bebfc5fed86b87eaf7e969ad1.jpg"
          estateName="Kagundo"
          title="2 Bedrooms Villa Karen"
          network="Wifi"
          shower="Shower"
          parking="parking"
          balcony="Balcony"
          price="Ksh 20,000"
        />
        <Card
          image="https://i.pinimg.com/564x/07/99/cf/0799cfc4db021ced811249df3e45f936.jpg"
          estateName="Kagundo"
          title="2 Bedrooms Villa Karen"
          network="Wifi"
          shower="Shower"
          parking="parking"
          balcony="Balcony"
          price="Ksh 30,000"
        />
      </div>
    </div>
  );
}

export default Housecards;
