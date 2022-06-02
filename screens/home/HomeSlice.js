import {createSlice} from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchCategoriesFirstTime,
  fetchCategoriesGender,
  fetchProducts,
  fetchProductsByCategory,
  fetchProductsByFeature,
  fetchProductsByMenShoes,
  fetchProductsByWomenShoes,
} from './HomeThunk';
const initialState = {
  isLoading: false,
  dataProducts: [],
  dataProductsByCategory: [],

  dataMenShoes: [],
  dataWomenShoes: [],
  dataFeaturedShoes: [],
  dataCategories: [],

  dataCategoriesGender: [],
  dataCategoriesBrand: [],
  dataProductsByBrandAndMen: [],
  dataProductsByBrandAndWomen: [],

  categorySelected: '',
  categorySelectedFirstTime: '',

  showMenu: false,
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    onSelectedCategory: (state, action) => {
      let categoryId = action.payload;
      state.categorySelected = categoryId;
    },

    onSelectedMenu: (state, action) => {
      let showMenu = action.payload;
      state.showMenu = showMenu;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.dataProducts = action.payload;
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.dataCategories = action.payload;
      })
      .addCase(fetchCategoriesGender.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesGender.fulfilled, (state, action) => {
        let dataCategoriesGender = action.payload.filter(
          item => item.id === 'MEN' || item.id === 'WOMEN',
        );
        // console.log(dataCategoriesGender);
        state.dataCategoriesGender = dataCategoriesGender;

        let dataBrand = action.payload.filter(item => item.id === 'MEN');

        state.dataCategoriesBrand = JSON.parse(dataBrand[0].categoryChild);

        // console.log(state.dataCategoriesBrand);
      })
      .addCase(fetchProductsByCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.dataProductsByCategory = action.payload;
      })
      .addCase(fetchCategoriesFirstTime.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesFirstTime.fulfilled, (state, action) => {
        // console.log("🚀 ~ file: HomeSlice.js ~ line 81 ~ .addCase ~ dataCategoriesGender", dataCategoriesGender[0].id)
        state.categorySelectedFirstTime = action.payload[0].id;
        state.categorySelected = action.payload[0].id;
      })
      .addCase(fetchProductsByMenShoes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByMenShoes.fulfilled, (state, action) => {
        state.dataMenShoes = action.payload;
      })
      .addCase(fetchProductsByWomenShoes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByWomenShoes.fulfilled, (state, action) => {
        state.dataWomenShoes = action.payload;
      })
      .addCase(fetchProductsByFeature.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByFeature.fulfilled, (state, action) => {
        state.dataFeaturedShoes = action.payload;
      });
  },
});
export const {onSelectedCategory, onSelectedMenu} = homeSlice.actions;
export default homeSlice.reducer;
