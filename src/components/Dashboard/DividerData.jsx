import React from "react";
import { areEqual } from "../../utils/comparision";

const DividerData = ({ elData }) => {
  const { borderType, borderWidth, borderColor } = elData;
  return (
    <div
      className="dividerData"
      style={{ margin: "30px 0px", padding: "1px 0 0 0" }}
    >
      <hr
        style={{ borderTop: `${borderWidth}px ${borderType} ${borderColor}` }}
      />
    </div>
  );
};

export default React.memo(DividerData, (p, n) => areEqual(p, n));
