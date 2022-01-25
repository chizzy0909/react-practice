import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getHpRec } from "../../redux/nbmHpRec/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import "./nbmHpRec.css";

export const HpRec = () => {
  const loading = useSelector((state) => state.goodsRecommend.loading);
  const error = useSelector((state) => state.goodsRecommend.error);
  const goodsRecommend = useSelector((state) => state.goodsRecommend.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHpRec());
  }, [dispatch]);

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
  const { data } = goodsRecommend;

  return (
    <div id="recommend">
      <h2>为你推荐</h2>
      <a href="##" className="more">
        查看更多&gt;&gt;
      </a>
      <ul>
        {data.map((el, index) => (
          <li key={index}>
            <a href={`http://localhost:8081/goods/detail/${el.goodsId}`}>
              <div className="info discount">{el.tag}</div>
              <img
                src={`http://localhost:8081/${el.goodsCoverImg}`}
                alt={el.goodsName}
              />
              <p className="name">{el.goodsName}</p>
              <p className="item_price">{el.sellingPrice}</p>
              <p className="counter">猜你喜欢</p>
              <div className="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
