import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getDetailReview } from "../../redux/detailReview/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { useParams } from "react-router";
import { DetailReviewStars } from "../detailReviewCom/detailReviewStars";
import { DetailReviewHp } from "../detailReviewCom/detailReviewHp";
import "./detailReview.css";

export const DetailReview = () => {
  const params = useParams();
  const goodsId = params.goodsId;

  const loading = useSelector((state) => state.detailReview.loading);
  const error = useSelector((state) => state.detailReview.error);
  const detailReview = useSelector((state) => state.detailReview.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailReview(goodsId));
  }, [dispatch, goodsId]);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }

  const { avgStar, reviewHP, reviewMore, starNumList, totalReview } =
    detailReview.data;

  return (
    <div>
      <div className="g-grid_item g-sm-block-sm" id="js-product-reviews">
        <div id="js-replace">
          <div id="normal-productreview">
            <h2 className="g-h-2 g-h-i p-hd">
              <i className="fas fa-comment-dots"></i>
              <span> レビュー</span>
            </h2>
            <DetailReviewStars
              avgStar={avgStar}
              totalReview={totalReview}
              starNumList={starNumList}
            />
            <DetailReviewHp
              reviewHP={reviewHP}
              reviewMore={reviewMore}
              totalReview={totalReview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
