import React from "react";
import { FaFilter } from "react-icons/fa";

const ListGroup = (props) => {
  const { items, selectedTag, onTagSelect } = props;
  return (
    <>
      <p className="filter-heading">
        <FaFilter size={20} className="me-2" />
        Filter through tags
      </p>
      <ul className="list-group">
        {items?.map((item, index) => (
          <li
            key={index}
            className={"list-group-item"}
            // onClick={() => onTagSelect(item)}
          >
            <span className="me-4">
              {" "}
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
