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

    // dispatch(fetchProductsByCategory(getState().homeReducer.categorySelected));

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

// export const fetchCategories = createAsyncThunk(
//   'category/fetchCategories',
//   async (_, {dispatch, getState}) => {
//     const resp = await fetch(
//       'http://svcy3.myclass.vn/api/Product/getAllCategory',
//     );
//     const json = await resp.json();

//     dispatch(fetchProductsByCategory(getState().homeReducer.categorySelected));

//     return json.content;
//   },
// );

export const fetchCategoriesFirstTime = createAsyncThunk(
  'category/fetchCategoriesFirstTime',
  async () => {
    const resp = await fetch(
      'https://shop.cyberlearn.vn/api/Product/getAllCategory',
    );
    const json = await resp.json();

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

// export const fetchProductsByFeature = createAsyncThunk(
//   'productsByCategory/fetchProductsByFeature',
//   async pagingNumber => {
//     const resp = await fetch('http://svcy3.myclass.vn/api/Product');
//     const json = await resp.json();
//     let paging = 0;
//     let dataFilter = json.content.filter(item => {
//       //nếu không có tham số hoặc số <= 0 thì render toàn bộ
//       if (
//         pagingNumber === undefined ||
//         pagingNumber === null ||
//         pagingNumber <= 0
//       ) {
//         if (item.feature === true) {
//           return item;
//         }
//       }
//       //nếu có tham số thì render theo tham số
//       if (paging <= 3 && item.feature === true) {
//         paging = paging + 1;
//         return item;
//       }
//     });
//     return dataFilter;
//   },
// );
