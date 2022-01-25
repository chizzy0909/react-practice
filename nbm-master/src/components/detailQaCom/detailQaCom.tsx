import React from "react";
// import { useSelector } from "../../redux/hooks";
import { postSannkou } from "../../redux/detailQA/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import moment from "moment";
import "../detailQA/detailQA.css";

export const DetailQACom = ({ items, ...otherProps }) => {
  const { answer, answersDate, helpNum, question, questionsId, submitDate } =
    items;
  const params = useParams();
  const goodsId: number = parseInt(params.goodsId!);

  const dispatch = useDispatch();

  const thumbsUp = () => {
    dispatch(
      postSannkou({
        goodsId: goodsId,
        questionsId: questionsId,
        userId: 1004,
      })
    );
  };

  return (
    <>
      <div className="zv-cqa">
        <div className="zv-cqa-question">
          <span className="zv-space">Q. </span>
          <span className="zv-cqa-q-text">{question}</span>
        </div>
        <div className="zv-cqa-q-info">
          <span>
            投稿日{" "}
            <div className="zv-cqa-q-created-at">
              {moment(submitDate).format("YYYY年MM月DD日")}
            </div>
          </span>
        </div>
        <div className="zv-cqa-answers">
          <div className="zv-cqa-answer">
            <span className="zv-space">A. </span>
            <div className="zv-cqa-a-content">
              <div className="zv-cqa-a-text">
                <p className="zv-p">{answer}</p>
              </div>

              <div className="zv-cqa-a-info">
                <span className="zv-space"></span>
                <span className="zv-cqa-q-created-at">{`回答日 ${moment(
                  answersDate
                ).format("YYYY年MM月DD日")}`}</span>
              </div>

              <div className="zv-helpful-form">
                <span className="zv-helpful-col">
                  <span
                    className="zv-help"
                    id="help-sannkou"
                    onClick={thumbsUp}
                  >
                    <i className="far fa-thumbs-up"></i>
                    <span className="zv-helpful"> 参考になった </span>
                    <span>
                      (
                      <span
                        className="zv-helpful zv-helpful-num"
                        id="qa-help-num"
                      >
                        {helpNum}
                      </span>
                      人)
                    </span>
                    <span className="hiddenQuestionId">{questionsId}</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
