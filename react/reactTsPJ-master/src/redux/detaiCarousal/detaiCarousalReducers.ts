import {
  CLICK_DOT,
  CHANGE_CAROUSAL,
  CLICK_IMG,
  DetailCarousalTypes,
} from "./detaiCarousalActions";

interface DetailCarousalState {
  transformX: string;
  dotId: number;
  transformX1: string;
  imgBlockId: number;
  imgBlockIndex: number;
  imgIndex: number;
  imgSrc: string;
}

const defaultState: DetailCarousalState = {
  transformX: "",
  dotId: 0,
  transformX1: "",
  imgBlockId: 0,
  imgBlockIndex: 0,
  imgIndex: 0,
  imgSrc: "",
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState, action: DetailCarousalTypes) => {
  switch (action.type) {
    case CLICK_DOT:
      return {
        ...state,
        transformX: action.payload.transformX,
        dotId: action.payload.dotId,
      };
    case CHANGE_CAROUSAL:
      return {
        ...state,
        transformX: action.payload.transformX1,
        imgBlockId: action.payload.imgBlockId,
      };
    case CLICK_IMG:
      return {
        ...state,
        imgBlockIndex: action.payload.imgBlockIndex,
        imgIndex: action.payload.imgIndex,
        imgSrc: action.payload.imgSrc,
      };
    default:
      return state;
  }
};
