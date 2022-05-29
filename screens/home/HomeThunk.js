import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const resp = await fetch('http://svcy3.myclass.vn/api/Product');
    const json = await resp.json();
    return json.content;
  },
);

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (_, {dispatch, getState}) => {
    const resp = await fetch(
      'http://svcy3.myclass.vn/api/Product/getAllCategory',
    );
    const json = await resp.json();

    dispatch(fetchProductsByCategory(getState().homeReducer.categorySelected));

    return json.content;
  },
);

export const fetchProductsByCategory = createAsyncThunk(
  'productsByCategory/fetchProductsByCategory',
  async category => {
    const resp = await fetch(
      `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${category}`,
    );
    if (resp.status === 200 || resp.status === 201) {
      const json = await resp.json();
      return json.content;
    } else {
      return [];
    }
  },
);

export const fetchCategoriesFirstTime = createAsyncThunk(
  'category/fetchCategoriesFirstTime',
  async () => {
    const resp = await fetch(
      'http://svcy3.myclass.vn/api/Product/getAllCategory',
    );
    const json = await resp.json();

    return json.content;
  },
);

export const fetchProductsByMenShoes = createAsyncThunk(
  'productsByCategory/fetchProductsByMenShoes',
  async () => {
    const resp = await fetch(
      'http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=MEN',
    );
    const json = await resp.json();
    return json.content;
  },
);

export const fetchProductsByWomenShoes = createAsyncThunk(
  'productsByCategory/fetchProductsByWomenShoes',
  async () => {
    const resp = await fetch(
      'http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=WOMEN',
    );
    const json = await resp.json();
    return json.content;
  },
);

export const fetchProductsByFeature = createAsyncThunk(
  'productsByCategory/fetchProductsByFeature',
  async () => {
    const resp = await fetch('http://svcy3.myclass.vn/api/Product');
    const json = await resp.json();
    let data = json.content.filter(item => item.feature === true);
    return data;
  },
);
