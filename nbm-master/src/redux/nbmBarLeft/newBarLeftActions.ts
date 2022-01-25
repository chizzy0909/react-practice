export const BAR_LEFT_HOVER = "BAR_LEFT_HOVER";
// export const BAR_LEFT_STYLE = "BAR_LEFT_STYLE";

export interface BarLeftHover {
  type: typeof BAR_LEFT_HOVER;
  payload: { hover: string; display: string; diyOrder: number };
}

export const BarLeftHoverActionCreater = (isHover: {
  hover: string;
  display: string;
  diyOrder: number;
}): BarLeftHover => {
  return {
    type: BAR_LEFT_HOVER,
    payload: isHover,
  };
};
