import React,{useEffect} from "react";
import { useSelector } from "../../redux/hooks";
import { getDetailQA } from "../../redux/detailQA/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { useParams } from "react-router";
import { DetailQASannkou } from "../detailQaPost/detailQaPost";
import { DetailQACom } from "../detailQaCom/detailQaCom";
// import "./detailQA.css";

export const DetailQA = () => {
  const params = useParams();
  const goodsId = params.goodsId;

  const loading = useSelector((state) => state.detailQA.loading);
  const error = useSelector((state) => state.detailQA.error);
  const detailQA = useSelector((state) => state.detailQA.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getDetailQA({
        goodsId: goodsId,
        currentPage: 1,
        limit: null,
        orderByColumn: null,
        ascOrDesc: "desc",
      })
    );
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

  const { list, totalCount, totalPage, currPage, otherProps } = detailQA.data;

  function changeQApage(num) {
    let qaPage = currPage;
    if (num === -1) {
      qaPage--;
      if (qaPage < 1) {
        qaPage = totalPage;
      }
      dispatch(
        getDetailQA({
          goodsId,
          currentPage: qaPage,
          limit: null,
          orderByColumn: null,
          ascOrDesc: "desc",
        })
      );
    }
    if (num === 1) {
      qaPage++;
      if (qaPage > totalPage) {
        qaPage = 1;
      }
      dispatch(
        getDetailQA({
          goodsId,
          currentPage: qaPage,
          limit: null,
          orderByColumn: null,
          ascOrDesc: "desc",
        })
      );
    }
  }

  function qaSort(e) {
    const sortBy = e.target.value;
    if (sortBy === "ボトム評価") {
      dispatch(
        getDetailQA({
          goodsId,
          currentPage: 1,
          limit: null,
          orderByColumn: null,
          ascOrDesc: "asc",
        })
      );
    }
    if (sortBy === "トップ評価") {
      dispatch(
        getDetailQA({
          goodsId,
          currentPage: 1,
          limit: null,
          orderByColumn: null,
          ascOrDesc: "desc",
        })
      );
    }
  }

  return (
    <>
      <div className="g-grid_item g-sm-block-sm" id="js-product-qa">
        <h2 className="g-h-2">
          <i className="fas fa-comment-dots"></i>
          <span> 商品Q&A</span>
        </h2>
        <div id="ZVCQA">
          <div id="ZVCQuestionsArea">
            <div className="zv-cqa-step">
              <span>
                全<span id="totalCount">{totalCount}</span>件&nbsp;
              </span>
              <i
                className="fas fa-angle-left"
                id="prev-page"
                onClick={() => changeQApage(-1)}
              ></i>
              <span>
                &nbsp;ページ <span id="currPage">{currPage}</span> /&nbsp;
                <span id="totalPage">{totalPage} </span>
              </span>
              <i
                className="fas fa-angle-right"
                id="next-page"
                onClick={() => changeQApage(1)}
              ></i>

              <select
                id="zv-cqa-select-sort"
                className="zv-select"
                name="sort"
                onChange={(e) => qaSort(e)}
              >
                <option className="topRefer">トップ評価</option>
                <option className="bottomRefer">ボトム評価</option>
              </select>
            </div>

            <div className="qaSecCls">
              {list.map((el, index) => (
                <DetailQACom key={index} items={el} {...otherProps} />
              ))}
              <div className="zv-cqa-step" id="zv-cqa-step-footer">
                <span>
                  全<span id="totalCount">{totalCount}</span>件&nbsp;
                </span>
                <i
                  className="fas fa-angle-left"
                  id="prev-page"
                  onClick={() => changeQApage(-1)}
                ></i>
                <span>
                  &nbsp;ページ <span id="currPage">{currPage}</span> /&nbsp;
                  <span id="totalPage">{totalPage} </span>
                </span>
                <i
                  className="fas fa-angle-right"
                  id="next-page"
                  onClick={() => changeQApage(1)}
                ></i>
              </div>
              <DetailQASannkou />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
