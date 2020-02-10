import React from "react";
import { areEqual } from "../../core/Comparision";
import { VIDEO_PROVIDER_LIST } from "../Constants";
import YtPlayer from "./_YtPlayer";
import FbPlayer from "./_FbPlayer";

const VideoData = ({ elData, active }) => {
  if (elData) {
    const { provider } = elData;

    let Player = "asdfa";

    console.log("elData", elData);
    switch (provider) {
      case VIDEO_PROVIDER_LIST[0]:
        Player = YtPlayer;
        break;
      case VIDEO_PROVIDER_LIST[1]:
        Player = FbPlayer;
        break;
      default:
        break;
    }

    return (
      <div
        className={`videoData element ${active ? "element-active" : ""}`}
        style={{ height: "220px" }}
      >
        <Player elData={elData} />
      </div>
    );
  }

  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
      style={{ height: "150px", color: "red" }}
    >
      Set Video Settings
    </div>
  );
};

export default React.memo(VideoData, (p, n) => areEqual(p, n));
