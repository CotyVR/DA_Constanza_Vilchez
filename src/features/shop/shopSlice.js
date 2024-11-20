import { createSlice } from "@reduxjs/toolkit";
/* No es necesario colocar las llaves, debido a que exportamos el archivo entero --> en "categories" */
import categories from '../../data/categories.json'
import products from '../../data/products.json'

export const shopSlice = createSlice({
     name:'shop',
     initialState:{
        value:{
            categories:categories,
            products:products,
            categorySelected: "",
            productsFiltered : []
        }
     },
     reducers:{
        setCategory: (state,action) =>{
            state.value.productsFilteredByCategory = products.filter(product => product.category.toLowerCase()===action.payload.toLowerCase())
            state.categorySelected = action.payload
        }
     }
})

export const {setCategory} = shopSlice.actions

export default shopSlice.reducer