import { configureStore } from "@reduxjs/toolkit";
import Counter from "./Counter";


const myStore=configureStore({
    reducer:{data:Counter}

})


export default myStore;