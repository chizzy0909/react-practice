export const MODAL_HIDDEN = "MODAL_HIDDEN";

interface HiddenModal {
  type: typeof MODAL_HIDDEN;
  payload: {
    isHidden: boolean;
  };
}

export type DetailReviewTypes = HiddenModal;

export const HiddenModalAction = (isHidden: {
  isHidden: boolean;
}): HiddenModal => {
  return {
    type: MODAL_HIDDEN,
    payload: isHidden,
  };
};
