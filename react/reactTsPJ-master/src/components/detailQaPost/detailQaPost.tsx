import React, { useEffect } from "react";
// import { useSelector } from "../../redux/hooks";
import { InsertQa } from "../../redux/detailQA/insertQaSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import "../detailQA/detailQA.css";

export const DetailQASannkou = () => {
  const params = useParams();
  const goodsId: number = parseInt(params.goodsId!);

  // const loading = useSelector((state) => state.qaInsert.loading);
  // const error = useSelector((state) => state.qaInsert.error);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const postQueation = () => {
    const input = document.querySelector(
      "#ZVQuestionTextarea"
    )! as HTMLInputElement;
    const question = input.value;
    if (question) {
      dispatch(
        InsertQa({ goodsId: goodsId, question: question, answer: "そうです" })
      );
    }
    input.value = "";
  };

  return (
    <>
      <div id="ZVCQAPost">
        <div className="zv-cqa-posting-rule">
          <p className="zv-cqa-posting-rule-title">ご注意ください</p>
          <ul>
            <li>
              「ニトリ商品Q&amp;A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
            </li>

            <li>
              ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドの
              <a
                className="g-link-u"
                href="https://www.nitori-net.jp/ec/userguide/nitorinet/#zv-cqa"
                rel="noreferrer"
              >
                ニトリ商品Q&amp;Aについて
              </a>
              をご確認ください。
            </li>
          </ul>
        </div>

        <input
          type="textbox"
          id="ZVQuestionTextarea"
          className="zv-textbox"
          placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
        />
        <div
          id="ZVAskPostArea"
          data-customerqa-message-after-post-question="送信しました。回答があるまでしばらくお待ちください。"
        >
          <button
            type="button"
            id="ZVPostQuestionButton"
            className="zv-btn"
            onClick={postQueation}
          >
            質問を投稿
          </button>
        </div>
      </div>
    </>
  );
};
