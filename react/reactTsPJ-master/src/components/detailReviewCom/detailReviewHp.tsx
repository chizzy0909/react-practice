import moment from "moment";
import { DetailReviewMore } from "./detailReviewMore";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { reviewSannkouHp } from "../../redux/detailReview/slice";
import "../detailReview/detailReview.css";

export const DetailReviewHp = ({ reviewHP, reviewMore, totalReview }) => {
  const params = useParams();
  const goodsId = +params.goodsId!;
  const dispatch = useDispatch();

  const [isActive, setActive] = useState(true);
  const toggleMoreReview = () => {
    setActive(!isActive);
  };

  const thumbsUpHp = (reviewId) => {
    dispatch(
      reviewSannkouHp({
        goodsId: goodsId,
        reviewId: reviewId,
        sannkouUserId: 102,
      })
    );
  };

  return (
    <>
      <div id="js-reviewList">
        <ul className="g-reviewList">
          <p className="g-label-brand g-reviewList_label">
            ピックアップレビュー
          </p>

          {reviewHP.map((el, index) => (
            <li className="g-reviewList_item" key={index}>
              <div className="g-lg-flow-sm">
                <div className="star-ratings reviewStar">
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
                <p className="g-reviewList_user">
                  <b>{el.reviewUserId}</b>さん
                  <span> {moment(el.submitDate).format("YYYY年MM月DD日")}</span>
                </p>
              </div>
              <p className="g-reviewList_info">購入商品: {el.goodsId}</p>
              <p className=" g-reviewList_h"> {el.reviewTitle}</p>
              <p>{el.reviewDetail}</p>

              <ul
                className="g-sm-flow-sm g-lg-flow g-reviewList_pics"
                style={{ display: el.imageUrl ? "block" : "none" }}
              >
                <li>
                  <img
                    className="g-fw p-review-gallery_photo"
                    src={el.imageUrl}
                    alt=""
                  />
                </li>
              </ul>

              <div className="g-reviewList_like">
                <div
                  className="g-link reviewLike0"
                  id="js-hitLike"
                  onClick={() => thumbsUpHp(el.reviewId)}
                >
                  <i className="far fa-thumbs-up"></i>
                  <span className="review-sannkou">
                    参考になった（
                    <span id="review-helpNum">{el.helpNum}</span>人）
                  </span>
                </div>
              </div>
              <span className="hiddenReviewId">{el.reviewId}</span>
            </li>
          ))}

          <div className={`${isActive ? "moreReviewHidden" : ""}`}>
            <DetailReviewMore
              reviewMore={reviewMore}
              totalReview={totalReview}
            />
          </div>

          <div
            className="g-foot-v g-foot-sm"
            id="js-review-more"
            aria-hidden="true"
          >
            <div className="g-align-tc">
              <div
                className="g-link"
                id="displaymorereview"
                onClick={toggleMoreReview}
              >
                <span id="moreReviewMsg">
                  {`${
                    isActive
                      ? `レビューをもっと見る（3/${totalReview}）`
                      : "閉じる "
                  }`}
                </span>
                <i
                  className={`fas ${
                    isActive ? "fa-chevron-down" : "fa-chevron-up"
                  }`}
                  id="moreReviewIc"
                ></i>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
