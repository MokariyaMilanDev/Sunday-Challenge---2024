import { useState } from "react";
import iconFilter from "../images/filter.svg";
import iconCancel from "../images/minus.svg";
import "../styles/searching.css";

const filterIteams = [
  {
    mainField: "Colour",
    options: ["red", "green", "yellow"],
  },
  {
    mainField: "Fonts",
    options: ["sanse", "seric", "rounds", "Robot"],
  },
  {
    mainField: "Icons",
    options: ["Rounded", "Fancy"],
  },
];


// Searching components
const Searching = () => {
  const [filteredIteams, setFilteredIteams] = useState([]);
  const [filterShow, setFilterShow] = useState(false);

  const filterIteamSelect = (ele, indexI, indexII) => {
    ele.checked === true
      ? setFilteredIteams([
          ...filteredIteams,
          {
            mainField: filterIteams[indexI].mainField,
            option: filterIteams[indexI].options[indexII],
          },
        ])
      : filteredIteams.forEach((e, i) => {
            if (e.mainField === filterIteams[indexI].mainField && e.option === filterIteams[indexI].options[indexII]){
              filteredIteams.splice(i, 1);
              setFilteredIteams([...filteredIteams]);
            }
        });
  };

  return (
    <section className="--searching-main">
      {/* Searching */}
      <div className="--searching-input">
        <section>
          <input type="text" className="" placeholder="Search..." />
          <img
            className=""
            onClick={() =>
              filterShow == false ? setFilterShow(true) : setFilterShow(false)
            }
            src={filterShow ? iconCancel : iconFilter}
            alt=""
          />
        </section>
      </div>

      {/* Filter */}
      <div
        className="--searching-filter"
        style={filterShow == true ? { display: "grid" } : { display: "none" }}>
        <section>
          <h6 className="--filter-heading">Filter</h6>
          <ul className="--filter-options">
            {filterIteams == []
              ? ""
              : filterIteams.map((iteamI, indexI) => {
                  return (
                    <li className="--filter-option" key={indexI}>
                      <h6 className="--iteams-heading">{iteamI.mainField}</h6>

                      <div className="--filter-iteams">
                        {iteamI.options == []
                          ? ""
                          : iteamI.options.map((iteamII, indexII) => {
                              return (
                                <div className="--filter-iteam" key={indexII}>
                                  <input
                                    type="checkbox"
                                    onChange={(e) =>
                                      filterIteamSelect(
                                        e.target,
                                        indexI,
                                        indexII
                                      )
                                    }
                                  />
                                  <p key={indexII}>{iteamII}</p>
                                </div>
                              );
                            })}
                      </div>
                    </li>
                  );
                })}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Searching;
