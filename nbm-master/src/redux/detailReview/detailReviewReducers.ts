import { MODAL_HIDDEN, DetailReviewTypes } from "./detailReviewActions";

interface DetailReviewState {
  isHidden: boolean;
}

const defaultState: DetailReviewState = {
  isHidden: true,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState, action: DetailReviewTypes) => {
  switch (action.type) {
    case MODAL_HIDDEN:
      return {
        ...state,
        isHidden: action.payload.isHidden,
      };
    default:
      return state;
  }
};
