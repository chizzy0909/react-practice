import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getDetailIntro } from "../../redux/detailIntro/slice";
import { InsertToCart } from "../../redux/nbmCart/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { useParams } from "react-router";
import "./detailIntro.css";

export const DetailIntro = () => {
  const params = useParams();
  const goodsId = +params.goodsId!;

  const loading = useSelector((state) => state.detailIntro.loading);
  const error = useSelector((state) => state.detailIntro.error);
  const detailIntro = useSelector((state) => state.detailIntro.data);
  const imgSrc = useSelector((state) => state.detaiCarousalReducer.imgSrc);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailIntro(goodsId));
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
  const { data } = detailIntro;

  const insertCart = () => {
    dispatch(InsertToCart({ goodsId: goodsId, goodsCount: 1 }));
  };

  return (
    <>
      <div className="dc">
        <div className="content w">
          <div className="title fl">商品详情</div>
          <div className="clear"></div>
        </div>
      </div>

      <div className="intro mt20 w clearfix">
        <div className="left fl" style={{ position: "relative" }}>
          <div className="swiper-container fl">
            <img
              src={
                imgSrc ? imgSrc : `http://localhost:8081/${data.goodsCoverImg}`
              }
              alt={data.goodsName}
            />
          </div>
        </div>
        <div className="right fr">
          <div className="h3 ml20 mt20">{data.goodsName}"</div>
          <div className="sub_title mr40 ml20 mt10">{data.goodsIntro}</div>
          <div className="item_price mr40 ml20 mt10">
            <div>{data.sellingPrice}.00 元</div>
            <del>
              <div>{data.originalPrice}.00 元</div>
            </del>
          </div>

          <div className="order">
            <input className="car" type="button" value="立即选购" />
            <input
              className="car"
              type="button"
              value="加入购物车"
              onClick={insertCart}
            />
          </div>
          <div className="tb-extra ml20" id="J_tbExtra">
            <dl>
              <dt>承诺</dt>
              <dd>
                <a
                  className="J_Cont"
                  title="满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费。"
                  href="##"
                  target="_blank"
                >
                  <img src="/mall/image/7d.jpg" alt="" />
                  7天无理由
                </a>
              </dd>
            </dl>
            <dl>
              <dt>支付</dt>
              <dd>
                <a href="##" target="_blank">
                  <img src="/mall/image/hua.png" alt="" />
                  蚂蚁花呗
                </a>
                <a href="##" target="_blank">
                  <img src="/mall/image/card.png" alt="" />
                  信用卡支付
                </a>
                <a href="##" target="_blank">
                  <img src="/mall/image/ji.png" alt="" />
                  集分宝
                </a>
              </dd>
            </dl>
            <dl>
              <dt>支持</dt>
              <dd>
                折旧变现，买新更省钱。
                <a
                  style={{ float: "none", textDecoration: "underline" }}
                  href="##"
                >
                  详情
                </a>
              </dd>
            </dl>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </>
  );
};
