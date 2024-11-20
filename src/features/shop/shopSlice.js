import { createSlice } from "@reduxjs/toolkit";
/* No es necesario colocar las llaves, debido a que exportamos el archivo entero --> en "categories" */
import categories from '../../data/categories.json'

export const shopSlice = createSlice({
     name:'shop',
     initialState:{
        value:{
            categories:categories
        }
     },
     reducers:{

     }
})

export default shopSlice.reducer