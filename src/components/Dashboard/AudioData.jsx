import React from "react";
import { areEqual } from "../../utils/comparision";

const AudioData = ({ elData }) => {
  // console.log("elData", elData);
  return (
    <div className="audioData">
      <iframe
        title="audio"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/96722464&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    </div>
  );
};

export default React.memo(AudioData, (p, n) => areEqual(p, n));

// https://developers.soundcloud.com/
// return (
//   <div className={`element ${active ? "element-active" : ""}`}>
//     <audio src="horse.ogg" controls>
//       Your browser does not support the audio element.
//     </audio>
//   </div>
// );

//  <iframe
//   width="100%"
//   height="300"
//   scrolling="no"
//   frameborder="no"
//   allow="autoplay"
//   src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/96722464&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
// ></iframe>;
