import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getCampaignInfo } from "../../redux/campaign/slice";
import { useDispatch } from "react-redux";
import "../../pages/campaign/campaign";

export const Campaign2 = () => {
  const campaignInfo = useSelector((state) => state.campaign.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaignInfo());
  }, [dispatch]);

  let campaign, gOrcList;
  if (campaignInfo.data) {
    campaign = campaignInfo.data.campaign;
    gOrcList = campaignInfo.data.gOrcList;
  }

  const show2 = () => {};
  const present = () => {};

  return (
    <div className="show1-sec">
      <div id="show1-div">
        <div className="show1-div">
          <div className="g-c-form-core-1">
            <div className="g-c-form-item" id="show1-opt"></div>
            <div className="g-c-form-item show1-cbox">
              <input type="checkbox" id="cbox2" />
              <label
                className="show-cbox"
                htmlFor="cbox2"
                id="show1-cbox"
              ></label>
            </div>
          </div>
          <div className="plus2">
            <i
              className="fas fa-plus-circle plus-munus"
              id="plus2"
              onClick={show2}
            ></i>
          </div>
          <div className="present">
            <i
              className="fas fa-gift plus-munus"
              id="present"
              onClick={present}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
