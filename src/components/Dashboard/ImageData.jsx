import React from "react";
import { areEqual } from "../../core/Comparision";

const ImageData = ({ elData, active }) => {
  const emptyDivStyle = {
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  console.log('elData', elData);
  return (
    <div className={`imageData element ${active ? "element-active" : ""}`}>
      <div>
        {(elData && elData.imgSrc) ? (
          <a
            href={elData.url}
            target="_blank"
            onClick={elData.url ? null : e => e.preventDefault()}
            rel="noopener noreferrer"
          >
            <img src={elData.imgSrc} width="200" height="150" alt="img" />
          </a>
        ) : (
          <div style={emptyDivStyle}>Choose image from assets</div>
        )}
      </div>
    </div>
  );
};

export default React.memo(ImageData, (p, n) => areEqual(p, n));
