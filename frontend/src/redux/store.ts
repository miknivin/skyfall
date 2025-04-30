import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { userApi } from "@/redux/api/userApi"; // import the API slice
import { authApi } from "./api/authApi";
import { resortApi } from "./api/resortApi";
import adminApi from "./api/adminApi";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      adminApi.middleware,
      authApi.middleware,
      resortApi.middleware
    ),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
