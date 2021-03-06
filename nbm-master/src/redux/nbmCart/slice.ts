import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ShoppingCartState {
  loading: boolean;
  error: string | null;
  data: any;
}
const initialState: ShoppingCartState = {
  loading: true,
  error: null,
  data: Object,
};

export const getShoppingCart = createAsyncThunk(
  "ShoppingCart/getShoppingCart",
  async () => {
    let url = `http://localhost:8081/nbmCartItems`;
    const response = await axios.get(url);
    return {
      data: response.data,
    };
  }
);

export const InsertToCart = createAsyncThunk(
  "ShoppingCart/InsertIntoCart",
  async (paramaters: { goodsId: number; goodsCount: number }) => {
    const { data } = await axios.post(`http://localhost:8081/insertCart`, {
      goodsId: paramaters.goodsId,
      goodsCount: paramaters.goodsCount,
    });
    return data;
  }
);

export const updateShoppingCart = createAsyncThunk(
  "ShoppingCart/updateShoppingCart",
  async (paramaters: { cartItemId: number; goodsCount: number }) => {
    let url = `http://localhost:8081/cart/update`;
    const { data } = await axios.put(url, {
      cartItemId: paramaters.cartItemId,
      goodsCount: paramaters.goodsCount,
    });
    return data;
  }
);

export const deleteShoppingCart = createAsyncThunk(
  "ShoppingCart/deleteShoppingCart",
  async (cartItemId: any) => {
    let url = `http://localhost:8081/cart/delete`;
    if (cartItemId) {
      url += `/${cartItemId}`;
    }
    const { data } = await axios.delete(url);
    return data;
  }
);

export const ShoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {},
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {
      // state.loading = true;
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    [InsertToCart.fulfilled.type]: (state, action) => {
      if (action.payload.resultCode === 200) {
        state.data.data.itemsTotal =
          state.data.data.myShoppingCartItems.length + 1;
      }
      state.loading = false;
      state.error = null;
    },
    [updateShoppingCart.fulfilled.type]: (state, action) => {
      if (action.payload.data !== null) {
        //??????????????????
        let cartList = state.data.data.myShoppingCartItems.filter(
          (item) => item.cartItemId === action.payload.data.cartItemId
        );
        cartList[0].goodsCount = action.payload.data.goodsCount;
        //???????????????
        let totalPrice = 0;
        state.data.data.myShoppingCartItems.map(
          (item) => (totalPrice += item.goodsCount * item.sellingPrice)
        );
        state.data.data.priceTotal = totalPrice;
      }
      state.loading = false;
      state.error = null;
    },
    [deleteShoppingCart.fulfilled.type]: (state, action) => {
      if (action.payload.data !== null) {
        //????????????
        state.data.data.myShoppingCartItems =
          state.data.data.myShoppingCartItems.filter(
            (item) => item.cartItemId !== action.payload.data
          );
        //???????????????
        let totalPrice = 0;
        state.data.data.myShoppingCartItems.map(
          (item) => (totalPrice += item.goodsCount * item.sellingPrice)
        );
        state.data.data.priceTotal = totalPrice;
        //????????????
        state.data.data.itemsTotal = state.data.data.myShoppingCartItems.length;
      }
      state.loading = false;
      state.error = null;
    },
    [getShoppingCart.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
