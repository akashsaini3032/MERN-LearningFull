// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./cartSlice";
// const store= configureStore({
//     reducer:{
//          mycart:myReducer
//     }
// })

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./cartSlice";
import userReducer from "./pages/userSlice"; // ✅ Make sure path is correct

const store = configureStore({
  reducer: {
    mycart: myReducer,
    user: userReducer, // 🔐 added for authentication
  },
});

export default store;
