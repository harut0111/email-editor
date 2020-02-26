import React from "react";
import { useStateValue } from "../../context";
import {
  ADD_NEW_ELEMENT,
  REMOVE_ELEMENT,
  CHANGE_ACTIVE_ELEMENT
} from "../../context/actions";
import uuid from "uuid";
import { EL_LIST, EL_DATA_LIST } from "../../configs/constants";
import { filterElement } from "../../utils/filterElement";
import Toolbar from "../../core/Toolbar";

const Dashboard = () => {
  const [{ layout }, dispatch] = useStateValue();

  const handleOnDrop = e => {
    const elLabel = e.dataTransfer.getData("text/plain");
    const el = EL_LIST.filter(el => el.label === elLabel)[0];

    dispatch({
      type: ADD_NEW_ELEMENT,
      payload: {
        elLabel: el.label,
        elId: uuid.v4(),
        elData: null
      }
    });
  };

  const handleOnToolClick = (ev, id) => {
    ev.stopPropagation();
    const filteredEls = filterElement(layout, id);
    dispatch({ type: REMOVE_ELEMENT, payload: filteredEls });
  };

  const handleOnElementClick = id => {
    dispatch({ type: CHANGE_ACTIVE_ELEMENT, payload: id });
  };

  const getElementData = el => (
    <>
      {EL_DATA_LIST.map(item =>
        item.label === el.elLabel ? (
          <item.Data
            key={item.id}
            elData={el.elData}
          />
        ) : null
      )}
    </>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <div className="dashboard-main-header">Header</div>
        <div
          className="dashboard-main-body"
          onDrop={handleOnDrop}
          onDragOver={e => e.preventDefault()}
        >
          {layout.elements.map(el => (
            <div
              className={`element-wrapper ${el.elId === layout.activeEl.id ? "element-wrapper-active" : ""}`}
              key={el.elId}
              onClick={() => handleOnElementClick(el.elId)}
            >
              <Toolbar
                className={"toolbar"}
                onClick={ev => handleOnToolClick(ev, el.elId)}
              />
              {getElementData(el)}
            </div>
          ))}
        </div>
        <div className="dashboard-main-footer">Footer</div>
      </div>
    </div>
  );
};

export default Dashboard;
