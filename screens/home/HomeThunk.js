import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const resp = await fetch('https://shop.cyberlearn.vn/api/Product');
    const json = await resp.json();
    return json.content;
  },
);

export const fetchCategoriesGender = createAsyncThunk(
  'category/fetchCategoriesGender',
  async () => {
    const resp = await fetch(
      'https://shop.cyberlearn.vn/api/Product/getAllCategory',
    );
    const json = await resp.json();

    return json.content;
  },
);

export const fetchCategoriesShoesBrand = createAsyncThunk(async () => {
  const resp = await fetch(
    'https://shop.cyberlearn.vn/api/Product/getAllCategory',
  );
  const json = await resp.json();
  return json.content;
});

export const fetchCategoriesFirstTime = createAsyncThunk(
  'category/fetchCategoriesFirstTime',
  async () => {
    const resp = await fetch(
      'https://shop.cyberlearn.vn/api/Product/getAllCategory',
    );
    const json = await resp.json();

    //lọc và lấy 2 danh mục MEN và WOMEN
    let data = json.content.filter(
      item => item.id === 'MEN' || item.id === 'WOMEN',
    );

    return data;
  },
);

export const fetchProductsByBrand = createAsyncThunk(
  'productsByBrand/fetchProductsByBrand',
  async params => {
    const resp = await fetch(
      `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${params.idScreen}`,
    );
    if (resp.status === 200 || resp.status === 201) {
      const json = await resp.json();
      const data = {gender: params.gender, content: json.content};
      return data;
    } else {
      return [];
    }
  },
);
