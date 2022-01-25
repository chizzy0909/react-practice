import React from "react";
import "./nbmBar.css";
import { BarRightComponent } from "../nbmBarRightCom/nbmBarRightCom";
import { NbmBarLeftCate } from "../nbmBarLeftCate/nbmBarLeftCate";

export const NbmBar = () => {
  return (
    <div id="content">
      <div id="banner">
        <NbmBarLeftCate />
        <BarRightComponent />
      </div>
    </div>
  );
};
