import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { getShoppingCart } from "../../redux/nbmCart/slice";
import "./nbmHeader.css";

export const NbmHeader = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart.data);

  useEffect(() => {
    dispatch(getShoppingCart());
  }, [dispatch]);

  const { data } = shoppingCart;

  return (
    <>
      <header id="header">
        <div className="center">
          <ul className="fl">
            <li>
              <a href="/index">新蜂商城</a>
            </li>
            <li>
              <a href="/admin">后台管理系统</a>
            </li>
            <li>
              <a href="https://edu.csdn.net/course/detail/26258">课程视频</a>
            </li>
            <li>
              <a href="https://juejin.im/book/5da2f9d4f265da5b81794d48?referrer=59199e22a22b9d0058279886">
                课程文档
              </a>
            </li>
            <li>
              <a href="https://gitee.com/newbee-ltd/newbee-donate">捐赠</a>
            </li>
            <li>
              <a href="https://github.com/newbee-ltd/newbee-mall/issues">
                问题反馈
              </a>
            </li>
            <li>
              <a href="https://github.com/newbee-ltd/newbee-mall">
                GitHub 地址
              </a>
            </li>
            <li>
              <a href="https://gitee.com/newbee-ltd/newbee-mall">
                码云Gitee 地址
              </a>
            </li>
          </ul>
          <div className="fr">
            {/* <th:block th:unless="${session.newBeeMallUser==null}">
            <div className="user">
              <ul className="selector">
                <li>
                  <a href="/personal">个人中心</a>
                </li>
                <li>
                  <a href="/orders">我的订单</a>
                </li>
                <li>
                  <a href="/logout">退出登录</a>
                </li>
              </ul>
              <a href="##" className="username">
                <th:block th:text="${session.newBeeMallUser.nickName}"></th:block>
                <i className="iconfont icon-down"></i>
              </a>
            </div>
            <div className="shopcart">
              <a href="/shop-cart" style={{ color: "white" }}>
                <i className="iconfont icon-cart"></i>
                购物车(
                <th:block th:text="${session.newBeeMallUser.shopCartItemCount}"></th:block>
                )
              </a>
            </div>
            </th:block> */}
            {/* <th:block th:if="${session.newBeeMallUser==null}"> */}
            <ul className="login">
              <li>
                <a href="/login">登录</a>
              </li>
              <li>
                <a href="/register">注册</a>
              </li>
            </ul>
            <div className="shopcart">
              <a href="/shop/cart" style={{ color: "white" }}>
                <i className="iconfont icon-cart"></i>
                购物车({data ? data.itemsTotal : "0"})
              </a>
            </div>
            {/* </th:block> */}
          </div>
        </div>
      </header>
    </>
  );
};
