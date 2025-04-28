import { combineReducers } from "redux";

import bookingReducer from "./slices/bookingSlice";
import cartReducer from "./slices/cart-slice";
import wishlistReducer from "./slices/wishlist-slice";
import compareReducer from "./slices/compare-slice";
import { userApi } from "./api/userApi";
import { authApi } from "./api/authApi";
import adminApi from "./api/adminApi";
import { userSlice } from "./features/authSlice";
import { resortApi } from "./api/resortApi";

const rootReducer = combineReducers({
  booking: bookingReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  user: userSlice.reducer,
  compare: compareReducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
  [resortApi.reducerPath]: resortApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
