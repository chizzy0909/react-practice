import React from "react";
import { NbmNav, NbmBar, HPContent, NbmHeader } from "../../components";
import "./NbmHomePage.css";

export const NbmHomePage = () => {
  return (
    <div className="content">
      <NbmHeader />
      <NbmNav />
      <NbmBar />
      <HPContent />
    </div>
  );
};
