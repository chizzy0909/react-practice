import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getHpFlash } from "../../redux/nbmHpFlash/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import "./nbmHpFlesh.css";

export const HpFlesh = () => {
  const loading = useSelector((state) => state.newGoodses.loading);
  const error = useSelector((state) => state.newGoodses.error);
  const newGoodses = useSelector((state) => state.newGoodses.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHpFlash());
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
  const { data } = newGoodses;
  // console.log(data);

  return (
    <div id="flash">
      <h2>新品上線</h2>
      <ul>
        {data.map((el, index) => (
          <li key={index}>
            <a href={`http://localhost:8081/goods/detail/${el.goodsId}`}>
              <img
                src={`http://localhost:8081/${el.goodsCoverImg}`}
                alt={el.goodsName}
              />
              <p className="name">{el.goodsName}</p>
              <p className="discount">{el.goodsIntro}</p>
              <p className="item_price">{el.sellingPrice}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
