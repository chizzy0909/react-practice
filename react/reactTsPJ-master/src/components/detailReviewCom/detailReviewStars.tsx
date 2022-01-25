import React from "react";
import { DetailReviewModal } from "./detailReviewModal";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { HiddenModalAction } from "../../redux/detailReview/detailReviewActions";

import "../detailReview/detailReview.css";

export const DetailReviewStars = ({ avgStar, totalReview, starNumList }) => {
  const isHidden = useSelector((state) => state.detailReviewReducer.isHidden);
  const dispatch = useDispatch();

  // const [modalHidden, setModalHidden] = useState(true);
  const showModal = () => {
    // setModalHidden(false);
    dispatch(HiddenModalAction({ isHidden: false }));
  };

  return (
    <>
      <div className="p-reviewScore p-reviewScore-sm">
        <div className="p-reviw-graph-area">
          <div className="p-reviw-graph-area-left-row">
            <span className="p-reviw-graph-area-comp-eva">総合評価</span>
          </div>
          <div className="p-reviw-graph-area-score p-reviw-graph-area-average p-reviw-graph-area-average-sm">
            <span className="g-digit p-reviw-graph-area-g-score">
              {" "}
              {avgStar}
            </span>
          </div>
          <div className="star-ratings">
            <div
              className="fill-ratings"
              id="avgStar"
              style={{ width: `${avgStar * 20}%` }}
            >
              <span>★★★★★</span>
            </div>
            <div className="empty-ratings">
              <span>★★★★★</span>
            </div>
          </div>
          <div></div>
          <div className="p-g-left-row">
            <div className="g-link " id="js-totalrate">
              <span>
                (<span id="js-reviews">{totalReview}</span>)
              </span>
            </div>
          </div>
        </div>
        <div className="p-reviw-graph-area-right">
          {starNumList.map((el, index) => (
            <div className="g-lg-flow-sm p-reviw-graph-area-row-sm" key={index}>
              <div className="star-ratings">
                <div
                  className="fill-ratings"
                  style={{ width: `${el.star * 20}%` }}
                >
                  <span>★★★★★</span>
                </div>
                <div className="empty-ratings">
                  <span>★★★★★</span>
                </div>
              </div>
              <div
                className="a-meter g-mater-visble"
                id="js-mater5"
                data-rate="5"
              >
                <div
                  className="a-meter-bar"
                  style={{
                    width: `${(el.helpNum / totalReview) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="g-link g-link-visble" id="js-rate5">
                {el.helpNum}
              </div>
              人
            </div>
          ))}
        </div>
      </div>
      <p className="p-reviw-graph-area-foot">{totalReview}評価 1商品レビュー</p>
      <input type="hidden" id="numberOfReviews" value="2" />
      <div id="n-review-btn" className="n-review-btn">
        <button className="g-btn g-btn-w-sm" id="reviewAdd" onClick={showModal}>
          <span>商品レビューを書く</span>
        </button>
      </div>

      <div
        className="modal"
        // className={`${modalHidden ? "modal fade" : "modal"}`}
        style={{ display: `${isHidden ? "none" : "block"}` }}
        id="carouselModal"
      >
        <DetailReviewModal />
      </div>
    </>
  );
};
