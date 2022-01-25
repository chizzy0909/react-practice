import { BAR_LEFT_HOVER, BarLeftHover } from "./newBarLeftActions";

interface HoverState {
  hover: string;
  display: string;
  diyOrder: number | null;
}

const defaultState: HoverState = {
  hover: "",
  display: "none",
  diyOrder: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState, action: BarLeftHover) => {
  switch (action.type) {
    case BAR_LEFT_HOVER:
      return {
        ...state,
        hover: action.payload.hover,
        display: action.payload.display,
        diyOrder: action.payload.diyOrder,
      };
    default:
      return state;
  }
};
