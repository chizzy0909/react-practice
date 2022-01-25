import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "../../redux/hooks";
import {
  getFuzzySearch,
  getSearchHistory,
  insertHistory,
} from "../../redux/nbmSearch/slice";
import "./nbmNav.css";

export const NbmNav = () => {
  const dispatch = useDispatch();
  const fuzzySearch = useSelector((state) => state.goodsSearch.fuzzySearch);
  const searchHistory = useSelector((state) => state.goodsSearch.searchHistory);

  useEffect(() => {
    dispatch(getSearchHistory(9));
  }, [dispatch]);

  const navigate = useNavigate();
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      const keyword = e.target.value;
      if (keyword && keyword !== "") {
        dispatch(insertHistory({ historyName: keyword }));
        navigate("/nbmSearch?keyword=" + keyword);
      }
      // window.location.href = window.location.href;
    }
  }
  function searchByKey() {
    const input = document.querySelector("#keyword")! as HTMLInputElement;
    const keyword = input.value;
    if (keyword && keyword !== "") {
      navigate("/nbmSearch?keyword=" + keyword);
    }
    // window.location.reload(true);
  }
  const fuzzyList = (e) => {
    const keyword = e.target.value;
    if (keyword) {
      dispatch(getFuzzySearch(keyword));
    } else {
      dispatch(getFuzzySearch("sdvsfbdbbew3"));
    }
  };

  let fuzzySearchList, searchHistoryList;
  if (searchHistory) {
    searchHistoryList = searchHistory.data;
  }
  if (fuzzySearch) {
    fuzzySearchList = fuzzySearch.data;
  }
  // console.log(searchHistory, fuzzySearch);

  return (
    <nav id="nav">
      <div className="banner_x center">
        <a href="/" className="logo">
          <h1>新蜂商城</h1>
        </a>
        <div className="fr">
          <div className="search">
            <input
              list="resourceChoose"
              autoComplete="off"
              className="text"
              type="search"
              id="keyword"
              onKeyPress={handleKeyPress}
              onInput={fuzzyList}
            />
            {fuzzySearchList ? (
              <datalist id="resourceChoose">
                <option value="请选择">请选择</option>
                {fuzzySearchList.map((el, index) => (
                  <option value={el.goodsName} key={index}>
                    {el.goodsName}
                  </option>
                ))}
              </datalist>
            ) : (
              <datalist id="resourceChoose">
                <option value="検索履歴">検索履歴</option>
                {searchHistoryList ? (
                  searchHistoryList.map((el, index) => (
                    <option value={el.historyName} key={index}>
                      {el.historyName}
                    </option>
                  ))
                ) : (
                  <></>
                )}
              </datalist>
            )}

            <div className="search_hot"></div>
          </div>
          <div
            className="button iconfont icon-search"
            onClick={searchByKey}
          ></div>
        </div>
      </div>
    </nav>
  );
};
