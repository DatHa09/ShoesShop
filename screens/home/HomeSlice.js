import {createSlice} from '@reduxjs/toolkit';
import {
  fetchCategoriesFirstTime,
  fetchCategoriesGender,
  fetchProducts,
  fetchProductsByBrand,
  fetchProductsByFeature,
} from './HomeThunk';
const initialState = {
  isLoading: false,
  isLoadingFeatured: false,
  dataProducts: [],
  dataProductsByCategory: [],

  dataMenShoes: [],
  dataWomenShoes: [],
  dataFeaturedShoes: [],
  // dataCategories: [],

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

        state.isLoading = false;
      })
      // .addCase(fetchCategories.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchCategories.fulfilled, (state, action) => {
      //   state.dataCategories = action.payload;
      // })
      .addCase(fetchCategoriesGender.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesGender.fulfilled, (state, action) => {
        let dataCategoriesGender = action.payload.filter(
          item => item.id === 'MEN' || item.id === 'WOMEN',
        );
        // console.log(dataCategoriesGender);
        state.dataCategoriesGender = dataCategoriesGender;

        //lọc MEN từ dataCategoriesGender
        let dataBrand = action.payload.filter(item => item.id === 'MEN');

        //get all brand của MEN => gán vào dataCategoriesBrand
        //Vì ở MEN và WOMEN đều có NIKE, VANS_CONVERSE, ADIDAS nên ta lọc brand của 1 gender là được
        state.dataCategoriesBrand = JSON.parse(dataBrand[0].categoryChild);

        //gán dataLít của MEN vào dataMenShoes
        state.dataMenShoes = JSON.parse(dataBrand[0].productList);

        //lọc WOMEN từ dataCategoriesGender
        let dataWomen = action.payload.filter(item => item.id === 'WOMEN');

        //gán dataLít của WOMEN vào dataWomenShoes
        state.dataWomenShoes = JSON.parse(dataWomen[0].productList);

        state.isLoading = false;
      })
      .addCase(fetchProductsByBrand.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByBrand.fulfilled, (state, action) => {
        const gender = action.payload.gender;
        const dataProductByBrand = action.payload.content;
        const dataMenShoes = state.dataMenShoes;
        const dataWomenShoes = state.dataWomenShoes;

        //lọc sản phẩm có category MEN + Brand(NIKE, ADIDAS,...)
        if (gender === 'MEN') {
          let data = [];
          dataMenShoes.forEach(menShoe => {
            dataProductByBrand.forEach((item, index) => {
              if (menShoe === item.id) {
                const obj = {
                  id: item.id,
                  name: item.name,
                };
                data.push(item);
              }
            });
          });
          state.dataProductsByBrandAndMen = data;
        } else if (gender === 'WOMEN') {
          let data = [];
          dataWomenShoes.forEach(womenShoe => {
            dataProductByBrand.forEach((item, index) => {
              if (womenShoe === item.id) {
                const obj = {
                  id: item.id,
                  name: item.name,
                };
                data.push(item);
              }
            });
          });
          state.dataProductsByBrandAndWomen = data;
        }
        state.isLoading = false;
      })
      // .addCase(fetchCategoriesFirstTime.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      .addCase(fetchCategoriesFirstTime.fulfilled, (state, action) => {
        state.categorySelectedFirstTime = action.payload[0].id;
        state.categorySelected = action.payload[0].id;

        // state.isLoading = false;
      });
    // .addCase(fetchProductsByMenShoes.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(fetchProductsByMenShoes.fulfilled, (state, action) => {
    //   state.dataMenShoes = action.payload;
    // })
    // .addCase(fetchProductsByWomenShoes.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(fetchProductsByWomenShoes.fulfilled, (state, action) => {
    //   state.dataWomenShoes = action.payload;
    // })
    // .addCase(fetchProductsByFeature.pending, (state, action) => {
    //   state.isLoadingFeatured = true;
    // })
    // .addCase(fetchProductsByFeature.fulfilled, (state, action) => {
    //   state.dataFeaturedShoes = action.payload;
    //   state.isLoadingFeatured = false;
    // });
  },
});
export const {onSelectedCategory, onSelectedMenu} = homeSlice.actions;
export default homeSlice.reducer;
