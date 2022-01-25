import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { RootReducerIF } from "../store";

interface paramaters {
  goodsId: number;
  questionsId: number;
  userId: number;
}

interface DetailQAState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: DetailQAState = {
  loading: true,
  error: null,
  data: Object,
};

export const getDetailQA = createAsyncThunk(
  "DetailQA/getDetailQA",
  async (paramaters: {
    goodsId: string | undefined;
    currentPage: number | null;
    limit: number | null;
    orderByColumn: string | null;
    ascOrDesc: string | null;
  }) => {
    let url = `http://localhost:8081/detaiQA?goodsId=${paramaters.goodsId}`;
    if (paramaters.currentPage) {
      url += `&currentPage=${paramaters.currentPage}`;
    }
    if (paramaters.limit) {
      url += `&limit=${paramaters.limit}`;
    }
    if (paramaters.orderByColumn) {
      url += `&orderByColumn=${paramaters.orderByColumn}`;
    }
    if (paramaters.ascOrDesc) {
      url += `&ascOrDesc=${paramaters.ascOrDesc}`;
    }
    const response = await axios.get(url);
    return {
      data: response.data,
    };
  }
);

// export const postSannkou = createAsyncThunk<
//   object,
//   paramaters,
//   { state: RootReducerIF }
// >("QaSannkou/postSannkou", async (paramaters, thunkApi) => {
//   const { data } = await axios.post(`http://localhost:8081/QA/helpNum`, {
//     goodsId: paramaters.goodsId,
//     questionsId: paramaters.questionsId,
//     userId: paramaters.userId,
//   });
//   const wholeState = thunkApi.getState();

//   const qaSannkouData: object = {
//     insertData: data,
//     wholeState: wholeState,
//   };
//   return qaSannkouData;
// });

export const postSannkou = createAsyncThunk<Object, paramaters>(
  "DetailQA/postSannkou",
  async (paramaters) => {
    const { data } = await axios.post(`http://localhost:8081/QA/helpNum`, {
      goodsId: paramaters.goodsId,
      questionsId: paramaters.questionsId,
      userId: paramaters.userId,
    });
    return data;
  }
);

export const DetailQASlice = createSlice({
  name: "DetailQA",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailQA.pending.type]: (state) => {
      // state.loading = true;
    },
    [getDetailQA.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    [postSannkou.fulfilled.type]: (state, action) => {
      if (action.payload.data !== null) {
        let qalist = state.data.data.list.filter(
          (qa) => qa.questionsId === action.payload.data.questionId
        );
        qalist[0].helpNum = action.payload.data.helpNum;
      }
      // state = { ...state };
      state.loading = false;
      state.error = null;
    },
    [getDetailQA.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
