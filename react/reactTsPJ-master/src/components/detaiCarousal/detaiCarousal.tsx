import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getDetaiCarousal } from "../../redux/detaiCarousal/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { useParams } from "react-router";
import {
  ClickDotActionCreater,
  ChangeCarousalAction,
  ClickImgAction,
} from "../../redux/detaiCarousal/detaiCarousalActions";
import "./detaiCarousal.css";

export const DetaiCarousal = () => {
  const params = useParams();
  const goodsId = params.goodsId;

  const loading = useSelector((state) => state.detaiCarousal.loading);
  const error = useSelector((state) => state.detaiCarousal.error);
  const detaiCarousal = useSelector((state) => state.detaiCarousal.data);
  const dispatch = useDispatch();

  const transformX = useSelector((s) => s.detaiCarousalReducer.transformX);
  const dotId = useSelector((s) => s.detaiCarousalReducer.dotId);
  const transformX1 = useSelector((s) => s.detaiCarousalReducer.transformX1);
  const imgBlockId = useSelector((s) => s.detaiCarousalReducer.imgBlockId);
  const imgBlockIndex = useSelector(
    (s) => s.detaiCarousalReducer.imgBlockIndex
  );
  const imgIndex = useSelector((s) => s.detaiCarousalReducer.imgIndex);

  useEffect(() => {
    dispatch(getDetaiCarousal(goodsId));
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
  const { data } = detaiCarousal;

  function clickImg({ e, index, index1 }) {
    dispatch(
      ClickImgAction({
        imgBlockIndex: index,
        imgIndex: index1,
        imgSrc: e.target.src,
      })
    );
  }

  function clickDot(index) {
    dispatch(
      ClickDotActionCreater({
        transformX: `translateX(${-index * 490}px)`,
        dotId: index,
      })
    );
  }

  function changeCarousal(num) {
    let blockId = imgBlockId;
    if (num === -1) {
      blockId--;
      if (blockId < 0) {
        blockId = data.length - 1;
      }
      dispatch(
        ChangeCarousalAction({
          transformX1: `translateX(${-blockId * 490}px)`,
          imgBlockId: blockId,
        })
      );
    }
    if (num === 1) {
      blockId++;
      if (blockId > data.length - 1) {
        blockId = 0;
      }
      dispatch(
        ChangeCarousalAction({
          transformX1: `translateX(${-blockId * 490}px)`,
          imgBlockId: blockId,
        })
      );
    }
  }

  return (
    <>
      <section className="img-container">
        <div className="slg">
          <div
            className=" img-column"
            style={{ transform: transformX || transformX1 }}
          >
            {data.map((el, index) => (
              <div className="img-block" key={index}>
                {el.map((el1, index1) => (
                  <img
                    key={index1}
                    className={
                      imgBlockIndex !== null && imgIndex !== null
                        ? `${
                            index === imgBlockIndex && index1 === imgIndex
                              ? "active"
                              : ""
                          } phone-img`
                        : `${
                            index === 0 && index1 === 0 ? "active" : ""
                          } phone-img`
                    }
                    src={`http://localhost:8081/${el1.goodsImgUrl}`}
                    alt={`imgId:${index}-${index1}`}
                    onClick={(e) => clickImg({ e, index, index1 })}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="slide-controls">
          <div className="slide-left">
            <i
              className="fas fa-chevron-left"
              title="Previous"
              onClick={() => changeCarousal(-1)}
            ></i>
          </div>
          <div className="dot">
            {data.map((el, index) => (
              <i
                key={index}
                className={
                  !imgBlockId
                    ? dotId
                      ? `${index === dotId ? "activeDot" : ""} fas fa-circle`
                      : `${index === 0 ? "activeDot" : ""} fas fa-circle`
                    : `${index === imgBlockId ? "activeDot" : ""} fas fa-circle`
                }
                onClick={() => clickDot(index)}
              ></i>
            ))}
          </div>
          <div className="slide-right">
            <i
              className="fas fa-chevron-right"
              title="Next"
              onClick={() => changeCarousal(1)}
            ></i>
          </div>
        </div>
      </section>
    </>
  );
};
