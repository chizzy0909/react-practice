import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface CampaignInfoState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: CampaignInfoState = {
  loading: true,
  error: null,
  data: {},
};

export const getCampaignInfo = createAsyncThunk(
  "campaignInfo/getCampaignInfo",
  async () => {
    const { data } = await axios.get(`http://localhost:8081/nbmCampaign`);
    return data;
  }
);
export const getGoodsrCaregory = createAsyncThunk(
  "campaignInfo/getGoodsrCaregory",
  async (parems: { parentId: number; campaignId: number }) => {
    let url = `http://localhost:8081/applyCampaign`;
    if (parems.parentId) {
      url += `?parentId=${parems.parentId}`;
    }
    const response = await axios.get(url);
    return {
      data: response.data,
    };
  }
);

export const CampaignInfoSlice = createSlice({
  name: "campaignInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [getCampaignInfo.pending.type]: (state) => {
      // state.loading = true;
    },
    [getCampaignInfo.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getGoodsrCaregory.fulfilled.type]: (state, action) => {
      if (action.payload.data !== null) {
        // let gclist: object = state.data.data.gOrcList.filter(
        //   (list) =>
        //     list.categoryId === action.meta.arg.parentId &&
        //     list.campaignId === action.meta.arg.campaignId
        // );
        // const goodsOrCategory = { goodsOrCategory: action.payload.data.data };
        // Object.assign(gclist[0], goodsOrCategory);
        // // let a = {...gclist[0], ...goodsOrCategory}

        state.data.data["goodsOrCategory"] = action.payload.data.data;
      }
      state.loading = false;
      state.error = null;
    },
    [getCampaignInfo.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
