import React, { useRef } from "react";
import uuid from "uuid";
import { useStateValue } from "../../context";
import { getActiveEl } from "../../utils/getActiveEl";
import { FaRegImage } from "react-icons/fa";
import { updateElState } from "../../context/actions";
import { updateElementData } from "../../utils/updateElData";

const Slider = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const durRef = useRef(null);
  let fileRef = [];

  const SD = getActiveEl(layout).elData;

  const handleOnImgSrcChange = id => {
    const reader = new FileReader();
    const file = fileRef.filter(file => file.id === id)[0].files[0];

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let elData;
        els.forEach((element, i) => {
          if (element.elId === layout.activeEl.id) {
            elData = Object.assign({}, SD, {
              imgSrc: els[i].elData.imgSrc.map(imgSrc =>
                imgSrc.id === id ? { ...imgSrc, value: reader.result } : imgSrc
              )
            });
          }
        });
        const elements = updateElementData(els, activeElId, { ...elData });
        dispatch(updateElState(elements));
      };
    }
  };

  const handleOnDurationChange = () => {
    const duration = +durRef.current.value;
    const elements = updateElementData(els, activeElId, { ...SD, duration });
    dispatch(updateElState(elements));
  };

  const handleOnAddImage = () => {
    const elements = updateElementData(els, activeElId, {
      ...SD,
      imgSrc: [...SD.imgSrc, { id: uuid.v4(), value: null }]
    });
    dispatch(updateElState(elements));
  };

  const handleOnRemoveImage = id => {
    if (SD.imgSrc.length > 2) {
      const duration = +durRef.current.value;

      const elements = updateElementData(els, activeElId, {
        duration,
        imgSrc: SD.imgSrc.filter(item => item.id !== id)
      });
      dispatch(updateElState(elements));
    }
  };

  return (
    <div className="slider">
      <h3>Slider</h3>
      <form>
        <div className="slider-row-1">
          <label>Duration: </label>
          <input
            type="number"
            min="0"
            value={SD.duration}
            placeholder="seconds"
            ref={durRef}
            onChange={handleOnDurationChange}
          />
        </div>
        <div className="slider-images">
          {SD.imgSrc.map(imgSrc => (
            <div className="image-uploader" key={imgSrc.id}>
              <div className="image-preview">
                {imgSrc.value ? (
                  <img src={imgSrc.value} width="100" height="100" alt="img" />
                ) : (
                  <FaRegImage size="100px" />
                )}
              </div>
              <div className="image-tools">
                <span>
                  <label htmlFor={imgSrc.id} className="custom-file-upload">
                    {imgSrc.value ? "Change" : "Insert"}
                  </label>
                  <input
                    id={imgSrc.id}
                    type="file"
                    ref={el => fileRef.push(el)}
                    onChange={() => handleOnImgSrcChange(imgSrc.id)}
                  />
                </span>
                <span
                  className="image-remove"
                  onClick={() => handleOnRemoveImage(imgSrc.id)}
                >
                  Remove
                </span>
              </div>
            </div>
          ))}
        </div>
        <input
          type="button"
          value="Add another image"
          onClick={handleOnAddImage}
        />
      </form>
    </div>
  );
};

export default Slider;
