import React from "react";

export const Header = () => {
  const logo_header = require("./logo_header.png");

  return (
    <div className="h-fit w-full bg-logo text-[4vw] font-bold text-lightGrey text-center p-3">
      <img src={String(logo_header)} className="max-h-[15vw]" alt="logo" />
    </div>
  );
};
