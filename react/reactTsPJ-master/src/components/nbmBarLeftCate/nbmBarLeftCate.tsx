import React, { useEffect } from "react";
import "./nbmBarLeftCate.css";
import { getBarleft } from "../../redux/nbmBarLeft/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { BarLeftComponent } from "../nbmBarLeftCom/nbmBarLeftCom";
import { BarLeftHoverActionCreater } from "../../redux/nbmBarLeft/newBarLeftActions";

export const NbmBarLeftCate = () => {
  const loading = useSelector((state) => state.nbmCategories.loading);
  const error = useSelector((state) => state.nbmCategories.error);
  const nbmCategories = useSelector((state) => state.nbmCategories.data);
  const dispatch = useDispatch();

  const hover = useSelector((state) => state.barLeft.hover);
  const diyOrder = useSelector((state) => state.barLeft.diyOrder);

  useEffect(() => {
    dispatch(getBarleft());
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
  const { data } = nbmCategories;

  function hoverBarLeft(e) {
    const order = +e.target.getAttribute("diy-order");
    dispatch(
      BarLeftHoverActionCreater({
        hover: "hover",
        display: "block",
        diyOrder: order,
      })
    );
  }
  function deleteHoverBarLeft(e) {
    dispatch(
      BarLeftHoverActionCreater({
        hover: "",
        display: "none",
        diyOrder: -1,
      })
    );
  }

  return (
    <div className="all-sort-list">
      {data.map((el, index) => (
        <div
          className={index === diyOrder ? `item ${hover}` : "item"}
          diy-order={index}
          onMouseEnter={hoverBarLeft}
          onMouseLeave={deleteHoverBarLeft}
          key={index}
        >
          <h3>
            <a href="##">
              <div>
                <span>·</span>
                {el.categoryName}
              </div>
            </a>
          </h3>
          <BarLeftComponent items={el} zindex={index} />
        </div>
      ))}
    </div>
  );
};
