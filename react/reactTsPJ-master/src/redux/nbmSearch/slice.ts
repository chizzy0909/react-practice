import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface goodsSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  fuzzySearch: any;
  searchHistory: any;
}

const initialState: goodsSearchState = {
  loading: true,
  error: null,
  data: { data: [] },
  fuzzySearch: {},
  searchHistory: {},
};

export const searchGoods = createAsyncThunk(
  "goodsSearch/searchGoods",
  async (paramaters: {
    keyword: string | null;
    page: number | null;
    orderBy: string | null;
    goodsCategoryId: number | null;
  }) => {
    let url = `http://localhost:8081/searchPages?`;

    if (paramaters.keyword) {
      url += `keyword=${paramaters.keyword}`;
    }
    if (paramaters.page) {
      url += `&page=${paramaters.page}`;
    }
    if (paramaters.orderBy) {
      url += `&orderBy=${paramaters.orderBy}`;
    }
    if (paramaters.goodsCategoryId) {
      url += `&goodsCategoryId=${paramaters.goodsCategoryId}`;
    }

    const response = await axios.get(url);
    return {
      data: response.data,
    };
  }
);

export const getSearchHistory = createAsyncThunk(
  "goodsSearch/getSearchHistory",
  async (userId: number) => {
    let url = `http://localhost:8081/searchHistory?`;
    if (userId) {
      url += `userId=${userId}`;
    }
    const response = await axios.get(url);
    return {
      searchHistory: response.data,
    };
  }
);

export const getFuzzySearch = createAsyncThunk(
  "goodsSearch/fuzzySearch",
  async (keyword: string | null) => {
    let url = `http://localhost:8081/fuzzySearch?`;
    if (keyword) {
      url += `keyword=${keyword}`;
    }
    const response = await axios.get(url);
    return {
      fuzzySearch: response.data,
    };
  }
);

export const insertHistory = createAsyncThunk(
  "DetailQA/insertHistory",
  async (params: { historyName: number }) => {
    const { data } = await axios.post(`http://localhost:8081/insertHistory`, {
      historyName: params.historyName,
    });
    return data.message;
  }
);

export const goodsSearchSlice = createSlice({
  name: "goodsSearch",
  initialState,
  reducers: {},
  extraReducers: {
    [searchGoods.pending.type]: (state) => {
      return { ...state, loading: true };
    },
    [searchGoods.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    [getSearchHistory.fulfilled.type]: (state, action) => {
      state.searchHistory = action.payload.searchHistory;
      state.loading = false;
      state.error = null;
    },
    [getFuzzySearch.fulfilled.type]: (state, action) => {
      state.fuzzySearch = action.payload.fuzzySearch;
      state.loading = false;
      state.error = null;
    },
    [insertHistory.fulfilled.type]: (state, action) => {
      state.searchHistory.data.unshift({ historyName: action.payload });
      state.loading = false;
      state.error = null;
    },
    [searchGoods.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
