import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailReviewState {
  loading: boolean;
  error: string | null;
  data: any;
  uploadImg: any;
}

const initialState: DetailReviewState = {
  loading: true,
  error: null,
  data: { data: [] },
  uploadImg: {},
};

export const getDetailReview = createAsyncThunk(
  "DetailReview/getDetailReview",
  async (goodsId: undefined | string) => {
    const { data } = await axios.get(
      `http://localhost:8081/detaiReview?goodsId=${goodsId}`
    );
    return data;
  }
);

export const reviewSannkouHp = createAsyncThunk(
  "DetailReview/reviewSannkouHp",
  async (paramaters: {
    goodsId: number;
    reviewId: number;
    sannkouUserId: number;
  }) => {
    const { data } = await axios.post(`http://localhost:8081/review/HelpNum`, {
      goodsId: paramaters.goodsId,
      reviewId: paramaters.reviewId,
      sannkouUserId: paramaters.sannkouUserId,
    });
    return data;
  }
);

export const reviewSannkouMore = createAsyncThunk(
  "DetailReview/reviewSannkouMore",
  async (paramaters: {
    goodsId: number;
    reviewId: number;
    sannkouUserId: number;
  }) => {
    const { data } = await axios.post(`http://localhost:8081/review/HelpNum`, {
      goodsId: paramaters.goodsId,
      reviewId: paramaters.reviewId,
      sannkouUserId: paramaters.sannkouUserId,
    });
    return data;
  }
);

export const insertReview = createAsyncThunk(
  "DetailReview/insertReview",
  async (paramaters: {
    goodsId: number;
    reviewUserId: number;
    star: number;
    reviewTitle: string;
    reviewDetail: string;
    imageUrl: string | null;
  }) => {
    const { data } = await axios.post(`http://localhost:8081/insertReview`, {
      goodsId: paramaters.goodsId,
      reviewUserId: paramaters.reviewUserId,
      star: paramaters.star,
      reviewTitle: paramaters.reviewTitle,
      reviewDetail: paramaters.reviewDetail,
      imageUrl: paramaters.imageUrl,
    });
    return data;
  }
);

export const uplodaImg = createAsyncThunk(
  "DetailReview/uplodaImg",
  async (file: FormData) => {
    const { data } = await axios.post(
      `http://localhost:8081/upload/reviewFile`,
      file
    );
    return data;
  }
);

export const DetailReviewSlice = createSlice({
  name: "DetailReview",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailReview.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [getDetailReview.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [reviewSannkouHp.fulfilled.type]: (state, action) => {
      if (action.payload.data !== null) {
        let reviewList = state.data.data.reviewHP.filter(
          (re) => re.reviewId === action.payload.data.reviewId
        );
        reviewList[0].helpNum = action.payload.data.helpNum;
      }
      state = { ...state };
      state.loading = false;
      state.error = null;
    },
    [reviewSannkouMore.fulfilled.type]: (state, action) => {
      if (action.payload.data !== null) {
        let reviewList = state.data.data.reviewMore.filter(
          (re) => re.reviewId === action.payload.data.reviewId
        );
        reviewList[0].helpNum = action.payload.data.helpNum;
      }
      state = { ...state };
      state.loading = false;
      state.error = null;
    },
    [insertReview.fulfilled.type]: (state, action) => {
      state = { ...state };
      state.loading = false;
      state.error = null;
    },
    [uplodaImg.fulfilled.type]: (state, action) => {
      if (action.payload.data !== null) {
        let uploadImg = {
          imgUrl: action.payload.data,
          message: action.payload.message,
          resultCode: action.payload.resultCode,
        };
        // state.data["uploadImg"] = uploadImg;
        state.uploadImg = uploadImg;
      }
      state.loading = false;
      state.error = null;
    },
    [getDetailReview.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
