import React from "react";
import "./Card.css";

function Card({
  propertyName,
  propertytype,
  unittype,
  location,
  image,
  network,
  shower,
  balcony,
  parking,
  amount,
}) {
  return (
    <div> </div>
    // <div className="card">
    //   {/* set background image for styling images with unstandard size */}
    //   <div className="hse-image" style={{ backgroundImage: `url(${image})` }} />
    //   <div className="cardInfo">
    //     <h6 className="estate">{propertyName}</h6>
    //     <h4>{`${unittype} ${propertytype} ${location}`}</h4>
    //     <div className="infoSections">
    //       <div className="section1">
    //         <div className="infoicons">
    //           <h6>
    //             <i className="symbol fa fa-wifi" aria-hidden="true"></i>
    //             {network}
    //           </h6>
    //         </div>
    //         <div className="infoicons">
    //           <h6>
    //             <i className=" symbol fa fa-shower" aria-hidden="true"></i>
    //             {shower}
    //           </h6>
    //         </div>
    //       </div>
    //       <div className="section2">
    //         <div className="infoicons">
    //           <h6>
    //             <i className=" symbol fa fa-car" aria-hidden="true"></i>
    //             {parking}
    //           </h6>
    //         </div>
    //         <div className="infoicons">
    //           <i className="symbol fa fa-bath" aria-hidden="true"></i>
    //           <h6>{balcony}</h6>
    //         </div>
    //       </div>
    //     </div>
    //     <button className="price-button">{amount}</button>
    //   </div>
    // </div>
  );
}

export default Card;
