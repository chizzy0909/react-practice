import React from "react";
import "./nbmGoodsDetail.css";
import {
  NbmHeader,
  NbmNav,
  DetailIntro,
  DetaiCarousal,
  DetailSize,
  DetailQA,
  DetailReview,
} from "../../components";

export const NbmGoodsDetail = () => {
  return (
    <div>
      <NbmHeader />
      <NbmNav />
      <DetailIntro />
      <div className="main-container">
        <DetaiCarousal />
        <DetailSize />
        <DetailQA />
        <DetailReview />
      </div>
    </div>
  );
};
