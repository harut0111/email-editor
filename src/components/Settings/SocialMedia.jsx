import React from "react";

import { SOCIAL_MEDIA_LIST } from "../../configs/constants";
import { getActiveEl } from "../../utils/getActiveEl";
import { useStateValue } from "../../context";
import { updateElState } from "../../context/actions";
import { getSocialMediaIcon } from "../../utils/getSocialMediaIcon";
import {
  setSocialMediaVal,
  setSocialMediaUrlVal,
  setRemoveSocialMedia,
  setAddSocialMedia
} from "../../utils/setStateValues";

const SocialMedia = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  let socialMediaRef = [];
  let urlRef = [];

  const SMD = getActiveEl(layout).elData;

  const handleOnAdd = () => {
    dispatch(updateElState(setAddSocialMedia(els, activeElId, SMD)));
  };

  const handleOnRemove = i => {
    if (SMD.length > 1)
      dispatch(updateElState(setRemoveSocialMedia(els, activeElId, i)));
  };

  const handleOnSocialMediaChange = i => {
    dispatch(
      updateElState(setSocialMediaVal(socialMediaRef, els, activeElId, i, SMD))
    );
  };

  const handleOnUrlChange = i => {
    dispatch(
      updateElState(setSocialMediaUrlVal(urlRef, els, activeElId, i, SMD))
    );
  };

  return (
    <div className="socialMedia">
      <h3>Social Media</h3>
      {SMD.map(({ socialMedia, url, id }, i) => (
        <div className="socialMedia-main" key={id} id={id}>
          {getSocialMediaIcon(socialMedia)}
          <form onSubmit={e => e.preventDefault()}>
            <select
              value={socialMedia}
              ref={el => socialMediaRef.push(el)}
              onChange={() => handleOnSocialMediaChange(i)}
            >
              {SOCIAL_MEDIA_LIST.map(({ label, id }) => (
                <option key={id} value={label}>
                  {label}
                </option>
              ))}
            </select>
            <input
              type="url"
              placeholder="URL"
              ref={el => urlRef.push(el)}
              onChange={() => handleOnUrlChange(i)}
              value={url}
            />
            <hr />
            <input
              type="button"
              value="Delete"
              onClick={() => handleOnRemove(i)}
            />
          </form>
          <hr />
        </div>
      ))}
      <button onClick={handleOnAdd}>Add another service</button>
    </div>
  );
};
export default SocialMedia;
