import {createAsyncThunk} from '@reduxjs/toolkit';
export const fetchProductDetails = createAsyncThunk(
  'productDetail/fetchProductDetails',
  async (idProduct, {dispatch}) => {
    //không sử dụng api /api/Product/getProductByFeature vì feature toàn false
    const resp = await fetch('https://shop.cyberlearn.vn/api/Product');
    const json = await resp.json();
    let data = json.content.filter(item => item.id === idProduct);
    const newData = {
      ...data[0],
      size: JSON.parse(data[0].size),
      relatedProducts: JSON.parse(data[0].relatedProducts),
    };
    dispatch(fetchRelatedProducts(newData.relatedProducts));
    return newData;
  },
);

export const fetchRelatedProducts = createAsyncThunk(
  'productDetail/fetchRelatedProducts',
  async relatedProducts => {
    const resp = await fetch('https://shop.cyberlearn.vn/api/Product');
    const json = await resp.json();
    let newData = [];

    json.content.forEach(item => {
      relatedProducts.forEach(relatedItem => {
        if (item.id === relatedItem) {
          newData.push(item);
        }
      });
    });
    return newData;
  },
);