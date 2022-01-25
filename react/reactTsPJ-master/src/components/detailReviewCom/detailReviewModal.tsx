// import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { HiddenModalAction } from "../../redux/detailReview/detailReviewActions";
import { insertReview, uplodaImg } from "../../redux/detailReview/slice";

export const DetailReviewModal = () => {
  const params = useParams();
  const goodsId = +params.goodsId!;

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(HiddenModalAction({ isHidden: true }));
  };

  window.onclick = (e) => {
    const modal = document.querySelector("#carouselModal")! as HTMLElement;
    if (e.target === modal) {
      dispatch(HiddenModalAction({ isHidden: true }));
    }
  };

  const [selectedFile, setSelectedFile] = useState<any>(null);

  const selectImg = (e) => {
    e.preventDefault();
    const fileInput = document.querySelector("#fileInput")! as HTMLElement;
    fileInput.click();
  };
  const selectFileInput = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      let src = URL.createObjectURL(e.target.files[0]);
      let preview = document.getElementById("carouselImg")! as HTMLImageElement;
      preview.src = src;
    }
  };

  const fileUpload = (e) => {
    e.preventDefault();
    if (selectedFile !== null) {
      const formData = new FormData();
      const extension = selectedFile.name.split(".").pop();
      if (
        !(extension && /^(jpg|jpeg|png|gif)$/.test(extension.toLowerCase()))
      ) {
        alert("只支持jpg、png、gif格式的文件！");
        return false;
      } else {
        formData.append("file", selectedFile, selectedFile.name);
        // console.log(formData.get("file"));
        dispatch(uplodaImg(formData));
        // axios.post("http://localhost:8081/upload/reviewFile", formData);
      }
    }
  };

  const stars = document.querySelectorAll(
    "#stars"
  )! as NodeListOf<HTMLInputElement>;
  let star: number | undefined;
  for (let i in stars) {
    if (stars.hasOwnProperty(i)) {
      // eslint-disable-next-line no-loop-func
      stars[i].onclick = function () {
        star = +stars[i].value;
      };
    }
  }
  const reviewSubmit = () => {
    const reviewTitleInput = document.querySelector(
      "#reviewTitle"
    )! as HTMLInputElement;
    const reviewTitle = reviewTitleInput.value;
    const reviewDetailInput = document.querySelector(
      "#reviewDetail"
    )! as HTMLInputElement;
    const reviewDetail = reviewDetailInput.value;
    const reviewImgInput = document.querySelector(
      "#carouselImg"
    )! as HTMLImageElement;
    const reviewImg: string = reviewImgInput.src;
    if (reviewTitle !== "" && reviewDetail !== "" && star !== undefined) {
      dispatch(
        insertReview({
          goodsId: goodsId,
          reviewUserId: 1007,
          star: star,
          reviewTitle: reviewTitle,
          reviewDetail: reviewDetail,
          imageUrl: reviewImg,
        })
      );
    } else {
      alert("error");
    }
    reviewTitleInput.value = "";
    reviewDetailInput.value = "";
    reviewImgInput.src = "/admin/dist/img/img-upload.png";
    for (let i in stars) {
      if (stars.hasOwnProperty(i)) {
        stars[i].checked = false;
      }
    }
  };

  return (
    <>
      <div className="modal-dialog" role="document">
        <form id="indexConfigForm">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="carouselModalLabel">
                レビューを追加する
              </h6>
              <button
                type="button"
                className="close-modal"
                onClick={closeModal}
              >
                <i className="fas fa-times" id="close-modal"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <div className="col-sm-4">
                  <img
                    id="carouselImg"
                    src="/admin/dist/img/img-upload.png"
                    alt=""
                    style={{
                      height: "128px",
                      width: "128px",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-4">
                  <div style={{ height: "0px", overflow: "hidden" }}>
                    <input
                      type="file"
                      id="fileInput"
                      name="fileInput"
                      onChange={selectFileInput}
                    />
                  </div>
                  <button
                    className="btn btn-info"
                    style={{ marginBottom: "5px" }}
                    id="uploadRVImage"
                    onClick={selectImg}
                  >
                    <i className="far fa-image"></i> <span>選択</span>
                  </button>
                  {"　"}
                  <button
                    className="btn btn-info"
                    style={{ marginBottom: "5px" }}
                    id="uploadRVImage"
                    onClick={fileUpload}
                  >
                    <i className="far fa-image"></i> <span>アップロード</span>
                  </button>
                </div>
              </div>
              <div className="form-group rating-group">
                <span className="star-p">ほし: </span>
                <div className="rating">
                  <label>
                    <input
                      type="radio"
                      id="stars"
                      name="stars"
                      defaultValue="1"
                      required
                    />
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="stars"
                      name="stars"
                      defaultValue="2"
                    />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="stars"
                      name="stars"
                      defaultValue="3"
                    />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="stars"
                      name="stars"
                      defaultValue="4"
                    />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="stars"
                      name="stars"
                      defaultValue="5"
                    />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="reviewTitle" className="control-label">
                  大見出し:
                </label>
                <input
                  type="text"
                  className="form-text"
                  id="reviewTitle"
                  name="reviewTitle"
                  placeholder="レビューの大見出しを入力してください"
                  defaultValue=""
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reviewDetail" className="control-label">
                  詳細なレビュー:
                </label>
                <input
                  type="text"
                  className="form-text"
                  id="reviewDetail"
                  name="redirectUrl"
                  placeholder="詳細なレビューを入力してください"
                  defaultValue=""
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-cancel" id="rvCancelBt">
                キャンセル
              </button>
              <button
                type="button"
                className="btn btn-kakuninn"
                id="rvSaveBt"
                onClick={reviewSubmit}
              >
                確認
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
