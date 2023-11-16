import React, { useState } from "react";
import "./styles.css";

function CoinInfo({ heading, desc }) {
  const [short, setShort] = useState(true);
  const shortDesc =
    desc.slice(0, 200) +
    "<span style = 'color:var(--grey)'>  Read More...</span>";
  const longDesc = desc;

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 200 ? (
        <p
          onClick={() => {
            setShort(!short);
          }}
          className="coin-info-para"
          dangerouslySetInnerHTML={{ __html: short ? shortDesc : longDesc }}
        ></p>
      ) : (
        <p
          className="coin-info-para"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      )}
    </div>
  );
}

export default CoinInfo;
