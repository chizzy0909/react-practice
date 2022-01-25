import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import {
  getShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
} from "../../redux/nbmCart/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { confirm } from "react-confirm-box";
import "./nbmCartPage.css";

export const NbmPage = () => {
  const loading = useSelector((state) => state.shoppingCart.loading);
  const error = useSelector((state) => state.shoppingCart.error);
  const shoppingCart = useSelector((state) => state.shoppingCart.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingCart());
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
  const { myShoppingCartItems, itemsTotal, priceTotal } = shoppingCart.data;

  const updateItem = (e, id) => {
    const cartItemId = +id;
    const goodsCount = +e.target.value;
    dispatch(
      updateShoppingCart({ cartItemId: cartItemId, goodsCount: goodsCount })
    );
  };

  const deleteItem = async (id) => {
    const result = await confirm("このアイテムを削除してもよろしいですか？");
    if (result) {
      dispatch(deleteShoppingCart(id));
      return;
    }
    // console.log("You click No!");
  };

  return (
    <>
      <div id="cart">
        <div className="banner_x center">
          <a href="/" target="_blank">
            <div className="logo fl">
              <img src="../../assets/nbmImages/new-bee-logo-3.png" alt="" />
            </div>
          </a>

          <div className="wdgwc fl ml20">购物车</div>
          <div className="wxts fl ml20">
            温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
          </div>
          <div className="clear"></div>
        </div>
        <div className="cart_line"></div>
        <div className="cart_bg">
          {myShoppingCartItems === null && myShoppingCartItems === "" ? (
            <div className="list center">
              <img
                style={{ position: "absolute", marginTop: "16px", left: "45%" }}
                src="/mall/image/null-content.png"
                alt=""
              />
            </div>
          ) : (
            <div className="list center">
              <div className="top2 center">
                <div className="sub_top fl"></div>
                <div className="sub_top fl">商品名称</div>
                <div className="sub_top fl">单价</div>
                <div className="sub_top fl">数量</div>
                <div className="sub_top fl">小计</div>
                <div className="sub_top fr">操作</div>
                <div className="clear"></div>
              </div>
              {myShoppingCartItems.map((el, index) => (
                <div className="content2 center" key={index}>
                  <div className="sub_content fl "></div>
                  <div className="sub_content cover fl">
                    <img
                      src={`http://localhost:8081/${el.goodsCoverImg}`}
                      alt={el.goodsName}
                    />
                  </div>
                  <div className="sub_content fl ft20">{el.goodsName}</div>
                  <div className="sub_content fl">{el.sellingPrice}元</div>
                  <div className="sub_content fl">
                    <input
                      className="goods_count"
                      id={`goodsCount${el.cartItemId}`}
                      type="number"
                      onChange={(e) => updateItem(e, `${el.cartItemId}`)}
                      defaultValue={el.goodsCount}
                      step="1"
                      min="1"
                      max="5"
                    />
                  </div>
                  <div className="sub_content fl">
                    {el.goodsCount * el.sellingPrice}元
                  </div>
                  <div className="sub_content fl">
                    <a href="##" onClick={() => deleteItem(`${el.cartItemId}`)}>
                      ×
                    </a>
                  </div>
                  <div className="clear"></div>
                </div>
              ))}
            </div>
          )}
          <div className="pre_order mt20 center">
            <div className="tips fl ml20">
              <ul>
                <li>
                  <a href="/">继续购物</a>
                </li>
                <li>|</li>
                <li>
                  共<span>{itemsTotal}</span>件商品
                </li>
                <div className="clear"></div>
              </ul>
            </div>
            <div className="order_div fr">
              <div className="order_total fl">
                合计（不含运费）：<span>{priceTotal}.00元</span>
              </div>
              <div className="order_button fr">
                {itemsTotal === 0 ? (
                  <input
                    className="order_button_c"
                    type="button"
                    name="tip"
                    //    onclick="tip()"
                    value="去结算"
                  />
                ) : (
                  <input
                    className="order_button_d"
                    type="button"
                    name="settle"
                    //    onclick="settle()"
                    value="去结算"
                  />
                )}
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </>
  );
};
