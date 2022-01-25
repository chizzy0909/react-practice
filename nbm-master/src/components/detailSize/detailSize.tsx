import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getDetailSize } from "../../redux/detailSize/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { useParams } from "react-router";
import "./detailSize.css";

export const DetailSize = () => {
  const params = useParams();
  const goodsId = params.goodsId;

  const loading = useSelector((state) => state.detailSize.loading);
  const error = useSelector((state) => state.detailSize.error);
  const detailSize = useSelector((state) => state.detailSize.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailSize(goodsId));
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
  const { data } = detailSize;
  // console.log(data[0].goodsId);

  return (
    <>
      <div className="size-container">
        <h2 className="g-h-2">
          <i className="fas fa-ruler-horizontal"></i>
          <span> 仕様・サイズ</span>
        </h2>

        <ul className="g-flow-xs">
          <li>
            <img
              src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8882205786142/pic01230.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8884214497310/pic01232.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8878563459102/pic01091.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8878558904350/pic01041.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8878565359646/pic01137.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8926533419038/pic01283.jpg"
              alt=""
            />
          </li>
        </ul>

        <ul className="g-flow-lg">
          <li>
            <a
              className="g-link"
              href="/ecstatic/image/pdf/5655555.pdf"
              target="_blank"
            >
              <i className="fas fa-tools " aria-hidden="true"></i>
              <span> 組立説明書（PDF） </span>
            </a>
          </li>
        </ul>

        <div id="p-specMore">
          <table className="g-table-a">
            <thead>
              <tr className="g-tr">
                <th>商品コード</th>
                <td>{data[0].goodsId}</td>
              </tr>
              <tr className="g-tr">
                <th>カラー</th>
                <td>{data[0].goodsColor}</td>
              </tr>
              <tr className="g-tr">
                <th>サイズ</th>
                <td>{`幅${data[0].goodsSizeWidth}×奥行${data[0].goodsSizeLength}×高さ${data[0].goodsSizeHeight}cm`}</td>
              </tr>
              <tr className="g-tr">
                <th>素材</th>
                <td>{data[0].goodsMaterial}</td>
              </tr>
              <tr className="g-tr">
                <th>重量</th>
                <td>{data[0].goodsSizeWeight + data[0].goodsSizeWeightUnit}</td>
              </tr>
              <tr className="g-tr">
                <th>保証年数</th>
                <td>
                  {data[0].goodsWarrantyYear + data[0].goodsWarrantyYearUnit}
                </td>
              </tr>
              <tr className="g-tr">
                <th>組立時間</th>
                <td>
                  {data[0].goodsAssemblyTime + data[0].goodsAssemblyTimeUnit}
                </td>
              </tr>
              <tr className="g-tr">
                <th>梱包サイズ</th>
                <td>{data[0].goodsPackageSize}</td>
              </tr>
            </thead>
          </table>
        </div>

        <div className="g-foot-v g-foot-sm">
          <p className="g-align-tc">
            <a
              className="g-btn g-btn-w-md displaymorespec"
              href="#p-specMore"
              role="button"
              aria-expanded="true"
              aria-controls="p-specMore"
              data-label="閉じる"
              data-accordion='{"scroll":false}'
            >
              <span>仕様・サイズをもっと見る</span>
              <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
