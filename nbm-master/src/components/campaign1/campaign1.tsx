import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getCampaignInfo, getGoodsrCaregory } from "../../redux/campaign/slice";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Campaign2 } from "../campaign2/campaign2";
import "../../pages/campaign/campaign";

export const Campaign1 = () => {
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

  const showMore = (categoryId: number, campaignId: number) => {
    // console.log(id);
    dispatch(
      getGoodsrCaregory({ parentId: categoryId, campaignId: campaignId })
    );
  };

  const selectCam = (el) => {
    if (campaign) {
      const sele = campaign.filter((cam) => cam.campaignId === el.campaignId);
      if (sele[0]) {
        return sele[0].campaignId;
      }
    }
    return;
  };

  return (
    <div>
      {!gOrcList ? (
        <></>
      ) : (
        gOrcList.map((el, index) => (
          <div className="g-c-form" key={index}>
            <div className="g-c-form-core">
              <div className="g-c-form-item">
                <select
                  className="g-c-name"
                  id="campaignId"
                  value={selectCam(el)}
                >
                  <option value="">--キャンペーン--</option>
                  {!campaign ? (
                    <></>
                  ) : (
                    campaign.map((cam, index1) => (
                      <option
                        key={index1}
                        className="campaign-opt"
                        value={cam.campaignId}
                        // selected={
                        //   cam.campaignId === el.campaignId
                        // }
                      >
                        {cam.campaignId + ". " + cam.campaignName}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="g-c-form-item">
                <input
                  type="checkbox"
                  id="cbox1"
                  defaultValue={el.categoryId}
                  defaultChecked={el.campaignId !== 0 ? true : false}
                />
                <label htmlFor="cbox1">{el.categoryName}</label>
              </div>
              <div className="g-c-form-item g-c-date">
                <label htmlFor="date-start">開始日</label>
                <input
                  id="date-start"
                  type="datetime-local"
                  defaultValue={moment(el.validDateFrom).format(
                    "YYYY-MM-DDThh:mm"
                  )}
                />
                <label htmlFor="date-end">終了日</label>
                <input
                  id="date-end"
                  type="datetime-local"
                  defaultValue={moment(el.validDateTo).format(
                    "YYYY-MM-DDThh:mm"
                  )}
                />
              </div>
            </div>
            <i
              className="fas fa-plus-circle plus-munus"
              id="plus1"
              onClick={() => showMore(el.categoryId, el.campaignId)}
            ></i>
          </div>
        ))
      )}
      <Campaign2 />
    </div>
  );
};
