import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { CarryOutTwoTone, HomeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="shrink-0 mt-auto sticky bottom-0 bg-slate-400 py-1 flex justify-center items-center">
      <div className="mx-auto">
        <Link to="/">
          <HomeTwoTone className="mobile-btn" />
        </Link>
      </div>
      <Link className="mx-auto" to="/aspire">
        <div className="bg-blue-500 hover:bg-blue-400 transition-all ease-in-out duration-300 rounded-full cursor-pointer new-aspiration-btn">
          <FontAwesomeIcon
            className="new-aspiration"
            icon={solid("earth-europe")}
          />
        </div>
      </Link>
      <div className="mx-auto">
        <Link to="/calendar">
          <CarryOutTwoTone className="mobile-btn" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
