import {createAsyncThunk} from '@reduxjs/toolkit';
import {PAGING} from '../../common/Contants';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const resp = await fetch('http://svcy3.myclass.vn/api/Product');
    const json = await resp.json();
    return json.content;
  },
);

export const fetchCategoriesGender = createAsyncThunk(
  'category/fetchCategoriesGender',
  async () => {
    const resp = await fetch(
      'http://svcy3.myclass.vn/api/Product/getAllCategory',
    );
    const json = await resp.json();

    // dispatch(fetchProductsByCategory(getState().homeReducer.categorySelected));

    return json.content;
  },
);

export const fetchCategoriesShoesBrand = createAsyncThunk(async () => {
  const resp = await fetch(
    'http://svcy3.myclass.vn/api/Product/getAllCategory',
  );
  const json = await resp.json();
  return json.content;
});

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

export const fetchCategoriesFirstTime = createAsyncThunk(
  'category/fetchCategoriesFirstTime',
  async () => {
    const resp = await fetch(
      'http://svcy3.myclass.vn/api/Product/getAllCategory',
    );
    const json = await resp.json();

    let data = json.content.filter(
      item => item.id === 'MEN' || item.id === 'WOMEN',
    );

    return data;
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
    let paging = 0;
    let dataFilter = json.content.filter(item => {
      if (paging <= 3 && item.feature === true) {
        paging = paging + 1;
        return item;
      }
    });
    return dataFilter;
  },
);
