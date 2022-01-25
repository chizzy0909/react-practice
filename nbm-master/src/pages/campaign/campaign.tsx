import React from "react";
import { Campaign1 } from "../../components";
import "./campaign.css";

export const Campaign = () => {
  return (
    <>
      <div className="campaign">
        <div className="g-c-title">
          <h2 className="g-h-2 g-h-i">
            <i className="fas fa-comment-dots"></i>
            <span> キャンペーン</span>
          </h2>
        </div>
        <Campaign1 />
      </div>
    </>
  );
};
