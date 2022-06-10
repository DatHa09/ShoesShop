import {createAsyncThunk} from '@reduxjs/toolkit';
export const fetchSearchProducts = createAsyncThunk(
  'search/fetchSearchProducts',
  async key => {
    const resp = await fetch(
      `http://svcy3.myclass.vn/api/Product?keyword=${key}`,
    );
    const json = await resp.json();
    return json.content;
  },
);
