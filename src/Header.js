import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoPeopleSharp } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-between bg-lime-600 rounded-xl mb-4 px-4">
      <VscThreeBars size={35} />
      <IoPeopleSharp
        size={35}
        onClick={() => (toggle ? setToggle(false) : setToggle(true))}
      />
    </div>
  );
};

export default Header;
