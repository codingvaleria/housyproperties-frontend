import React from "react";
import Card from "./Card";
import data from "./data";

function Housecards() {
  let properties = data.map((e) => {
    return (
      <Card
        key={e.id}
        propertyname={e.propertyname}
        propertytype={e.propertytype}
        unittype={e.unittype}
        location={e.location}
        image={e.image}
        network={e.network}
        shower={e.shower}
        balcony={e.balcony}
        parking={e.parking}
        amount={e.amount}
      />
    );
  });

  console.log(properties);

  return (
    <div className="houses">
      <div className="cards-container">{properties}</div>
    </div>
  );
}

export default Housecards;
