import {createSlice} from '@reduxjs/toolkit';
import {categories} from '../../common/Contants';
import {
  fetchCategoriesFirstTime,
  fetchCategoriesGender,
  fetchProducts,
  fetchProductsByBrand,
} from './HomeThunk';
const initialState = {
  isLoading: false,
  dataProducts: [],
  dataProductsByCategory: [],

  dataMenShoes: [],
  dataWomenShoes: [],
  dataFeaturedShoes: [],

  dataCategoriesGender: [],
  dataCategoriesBrand: [],
  dataProductsByBrandAndMen: [],
  dataProductsByBrandAndWomen: [],

  categorySelected: '',
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    onSelectedCategory: (state, action) => {
      let categoryId = action.payload;

      state.categorySelected = categoryId;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.dataProducts = action.payload;

        state.isLoading = false;
      })
      .addCase(fetchCategoriesGender.fulfilled, (state, action) => {
        let dataCategoriesGender = action.payload.filter(
          item => item.id === 'MEN' || item.id === 'WOMEN',
        );

        state.dataCategoriesGender = dataCategoriesGender;

        //lọc MEN từ dataCategoriesGender
        let dataMen = action.payload.filter(item => item.id === 'MEN');
        //lọc WOMEN từ dataCategoriesGender
        let dataWomen = action.payload.filter(item => item.id === 'WOMEN');

        //productList dạng string -> JSON
        //gán danh sách sản phẩm của MEN vào dataMenShoes
        state.dataMenShoes = JSON.parse(dataMen[0].productList);
        //gán danh sách sản phẩm của WOMEN vào dataWomenShoes
        state.dataWomenShoes = JSON.parse(dataWomen[0].productList);

        //get all brand của MEN => gán vào dataCategoriesBrand
        //Vì ở MEN và WOMEN đều có NIKE, VANS_CONVERSE, ADIDAS nên ta lọc brand của 1 gender là được
        state.dataCategoriesBrand = JSON.parse(dataMen[0].categoryChild);
      })
      .addCase(fetchProductsByBrand.fulfilled, (state, action) => {
        const gender = action.payload.gender;
        const dataProductByBrand = action.payload.content;
        const dataMenShoes = state.dataMenShoes;
        const dataWomenShoes = state.dataWomenShoes;

        //lọc sản phẩm có category MEN + Brand(NIKE, ADIDAS,...)
        if (gender === categories.men) {
          let data = [];
          dataMenShoes.forEach(menShoes => {
            dataProductByBrand.forEach((item, index) => {
              if (menShoes === item.id) {
                data.push(item);
              }
            });
          });
          state.dataProductsByBrandAndMen = data;
        } else if (gender === categories.women) {
          //lọc sản phẩm có category WOMEN + Brand(NIKE, ADIDAS,...)
          let data = [];
          dataWomenShoes.forEach(womenShoes => {
            dataProductByBrand.forEach((item, index) => {
              if (womenShoes === item.id) {
                data.push(item);
              }
            });
          });
          state.dataProductsByBrandAndWomen = data;
        }
      })
      .addCase(fetchCategoriesFirstTime.fulfilled, (state, action) => {
        //lấy danh mục đầu tiên là MEN để hiển thị
        state.categorySelected = action.payload[0].id;
      });
  },
});
export const {onSelectedCategory} = homeSlice.actions;
export default homeSlice.reducer;
