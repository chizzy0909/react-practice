import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { searchGoods } from "../../redux/nbmSearch/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import "./nbmSearchs.css";
import { useNavigate, useLocation } from "react-router";

export const NbmSearchCom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const urlStr = location.search.split("&");
  // let urlItems: string[] = [];
  // urlStr.map((el) => urlItems.push(el.split("=")[1]));
  // console.log(urlItems);

  const keywordStr = location.search.split("keyword=")[1];
  let keyword: string | null;
  keywordStr
    ? keywordStr.includes("&")
      ? (keyword = keywordStr.split("&")[0])
      : (keyword = keywordStr)
    : (keyword = null);

  const categoryIdStr = location.search.split("goodsCategoryId=")[1];
  let goodsCategoryId: number | null;
  categoryIdStr
    ? categoryIdStr.includes("&")
      ? (goodsCategoryId = parseInt(categoryIdStr.split("&")[0]))
      : (goodsCategoryId = parseInt(categoryIdStr))
    : (goodsCategoryId = null);

  const orderByStr = location.search.split("orderBy=")[1];
  let orderBy: string;
  orderByStr
    ? orderByStr.includes("&")
      ? (orderBy = orderByStr.split("&")[0])
      : (orderBy = orderByStr)
    : (orderBy = "default");

  const pageStr = location.search.split("page=")[1];
  let page: number;
  pageStr
    ? pageStr.includes("&")
      ? (page = parseInt(pageStr.split("&")[0]))
      : (page = parseInt(pageStr))
    : (page = 1);

  const loading = useSelector((state) => state.goodsSearch.loading);
  const error = useSelector((state) => state.goodsSearch.error);
  const searchByKeyword = useSelector((state) => state.goodsSearch.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      searchGoods({
        keyword: keyword,
        page: page,
        orderBy: orderBy,
        goodsCategoryId: goodsCategoryId,
      })
    );
  }, [dispatch, goodsCategoryId, keyword, orderBy, page]);

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

  let list, currPage, totalPage;
  if (searchByKeyword.data.pageResult) {
    list = searchByKeyword.data.pageResult.list;
    currPage = searchByKeyword.data.pageResult.currPage;
    totalPage = searchByKeyword.data.pageResult.totalPage;
  }

  function changePage(num) {
    if (num === -1) {
      page--;
      if (page <= 0) {
        page = 1;
        return;
      } else {
        navigate(
          `?keyword=${keyword === null ? "" : keyword}&goodsCategoryId=${
            goodsCategoryId === null ? "" : goodsCategoryId
          }&orderBy=${orderBy}&page=${page}`
        );
      }
    }
    if (num === 1) {
      page++;
      if (page > totalPage) {
        page = totalPage;
        return;
      } else {
        navigate(
          `?keyword=${keyword === null ? "" : keyword}&goodsCategoryId=${
            goodsCategoryId === null ? "" : goodsCategoryId
          }&orderBy=${orderBy}&page=${page}`
        );
        // window.location.href = window.location.href;
      }
    }
    console.log(page, totalPage);
  }

  return (
    <>
      {/* 分類+フィルター */}
      <div className="classify">
        <div className="category">
          <div className="category_bar">
            {!Number.isNaN(goodsCategoryId) && goodsCategoryId !== null ? (
              <div className="fm c">
                <a href="##" className="qqq">
                  CategoryName
                </a>
                <span> goodsCategoryName</span>
              </div>
            ) : (
              ""
            )}
            {keyword !== "" && keyword !== null ? (
              <div className="findword">
                搜索 " <span>{keyword}</span> "
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* ソート  */}
      <div className="sort">
        <div className="list">
          <a
            href={`/nbmSearch?keyword=${
              keyword === null ? "" : keyword
            }&goodsCategoryId=${
              goodsCategoryId === null ? "" : goodsCategoryId
            }&orderBy=default`}
          >
            <div
              className={`${
                orderBy === undefined || orderBy === "default" ? "active" : ""
              }`}
            >
              推荐
            </div>
          </a>
          <a
            href={`/nbmSearch?keyword=${
              keyword === null ? "" : keyword
            }&goodsCategoryId=${
              goodsCategoryId === null ? "" : goodsCategoryId
            }&orderBy=new`}
          >
            <div className={`${orderBy === "new" ? "active" : ""}`}>新品</div>
          </a>
          <a
            href={`/nbmSearch?keyword=${
              keyword === null ? "" : keyword
            }&goodsCategoryId=${
              goodsCategoryId === null ? "" : goodsCategoryId
            }&orderBy=price`}
          >
            <div className={`${orderBy === "price" ? "active" : ""}`}>价格</div>
          </a>
        </div>
      </div>

      <div className="goods_item center">
        {/* items */}
        <div className="main center">
          {!list ? (
            <img
              style={{ marginTop: "16px", padding: "16px 20px" }}
              src=""
              alt="empty"
            />
          ) : (
            list.map((el, index) => (
              <div className="item_card_frame" key={index}>
                <div className="item_card">
                  <a href={`http://localhost:8081/goods/detail/${el.goodsId}`}>
                    <img
                      src={`http://localhost:8081/${el.goodsCoverImg}`}
                      alt={el.goodsName}
                    />
                  </a>
                </div>
                <div className="item_brand">
                  <a href={`http://localhost:8081/goods/detail/${el.goodsId}`}>
                    {el.goodsName}
                  </a>
                </div>
                <div className="item_sub_intro">{el.goodsIntro}</div>
                <div className="item_price">{el.sellingPrice + ".00元"}</div>
              </div>
            ))
          )}
          <div className="clear"></div>
        </div>

        {/* page */}
        <div className="pages">
          <div className="page_wrap">
            {!list ? (
              <span className="page_span1">
                {/* <a
							href={`${currPage===1?'##':'/nbmSearch?keyword='keyword===null?'':keyword}&page=${currPage-1}&orderBy=${orderBy===null?'':orderBy}`}>
							&gt; 上一页 
              </a> */}
                <a
                  href="##"
                  onClick={changePage.bind(this, -1)}
                  className={page === 1 ? "page_over" : ""}
                >
                  {"<"}上一页
                </a>

                {currPage - 2 >= 1 ? (
                  <a
                    href={`/nbmSearch?keyword=${
                      keyword == null ? "" : keyword
                    }&goodsCategoryId=${
                      goodsCategoryId === null ? "" : goodsCategoryId
                    }&orderBy=${orderBy == null ? "" : orderBy}&page=${
                      currPage - 2
                    }
										`}
                  >
                    {currPage - 2}
                  </a>
                ) : (
                  ""
                )}
                {currPage - 1 >= 1 ? (
                  <a
                    href={`/nbmSearch?keyword=${
                      keyword == null ? "" : keyword
                    }&goodsCategoryId=${
                      goodsCategoryId === null ? "" : goodsCategoryId
                    }&orderBy=${orderBy == null ? "" : orderBy}&page=${
                      currPage - 1
                    }
										`}
                  >
                    {currPage - 1}
                  </a>
                ) : (
                  ""
                )}
                <a href="##" className="active">
                  {currPage}
                </a>
                {currPage + 1 <= totalPage ? (
                  <a
                    href={`/nbmSearch?keyword=${
                      keyword == null ? "" : keyword
                    }&goodsCategoryId=${
                      goodsCategoryId === null ? "" : goodsCategoryId
                    }&orderBy=${orderBy == null ? "" : orderBy}&page=${
                      currPage + 1
                    }
										`}
                  >
                    {currPage + 1}
                  </a>
                ) : (
                  ""
                )}
                {currPage + 2 <= totalPage ? (
                  <a
                    href={`/nbmSearch?keyword=${
                      keyword == null ? "" : keyword
                    }&goodsCategoryId=${
                      goodsCategoryId === null ? "" : goodsCategoryId
                    }&orderBy=${orderBy == null ? "" : orderBy}&page=${
                      currPage + 2
                    }
										`}
                  >
                    {currPage + 2}
                  </a>
                ) : (
                  ""
                )}

                <a
                  href="##"
                  onClick={changePage.bind(this, 1)}
                  className={page === totalPage ? "page_over" : ""}
                >
                  下一页 {">"}
                </a>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
