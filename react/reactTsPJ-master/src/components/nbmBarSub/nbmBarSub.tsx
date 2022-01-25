import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getBarSub } from "../../redux/nbmBarSub/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import "./nbmBarSub.css";

export const BarSub = () => {
  const loading = useSelector((state) => state.nbmBarSub.loading);
  const error = useSelector((state) => state.nbmBarSub.error);
  const nbmBarSub = useSelector((state) => state.nbmBarSub.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBarSub());
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
  const { data } = nbmBarSub;
  // console.log(data);

  return (
    <div id="sub_banner">
      {data.map((el, index) => (
        <div className="hot-image" key={index}>
          <a href={`http://localhost:3000/goods/detail/${el.goodsId}`}>
            <img
              src={`http://localhost:8081/${el.goodsCoverImg}`}
              alt={el.goodsName}
            />
          </a>
        </div>
      ))}
    </div>
  );
};
