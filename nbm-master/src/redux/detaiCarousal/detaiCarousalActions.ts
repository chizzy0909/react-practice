export const CLICK_DOT = "CLICK_DOT";
export const CHANGE_CAROUSAL = "CHANGE_CAROUSAL";
export const CLICK_IMG = "CLICK_IMG";

interface ClickDot {
  type: typeof CLICK_DOT;
  payload: {
    transformX: string;
    dotId: number;
  };
}
interface ChangeCarousal {
  type: typeof CHANGE_CAROUSAL;
  payload: {
    transformX1: string;
    imgBlockId: number;
  };
}
interface ClickImg {
  type: typeof CLICK_IMG;
  payload: {
    imgBlockIndex: number;
    imgIndex: number;
    imgSrc: string;
  };
}

export type DetailCarousalTypes = ClickDot | ChangeCarousal | ClickImg;

export const ClickDotActionCreater = (isClickDot: {
  transformX: string;
  dotId: number;
}): ClickDot => {
  return {
    type: CLICK_DOT,
    payload: isClickDot,
  };
};

export const ChangeCarousalAction = (isChangeCarousal: {
  transformX1: string;
  imgBlockId: number;
}): ChangeCarousal => {
  return {
    type: CHANGE_CAROUSAL,
    payload: isChangeCarousal,
  };
};

export const ClickImgAction = (isClickImg: {
  imgBlockIndex: number;
  imgIndex: number;
  imgSrc: string;
}): ClickImg => {
  return {
    type: CLICK_IMG,
    payload: isClickImg,
  };
};
