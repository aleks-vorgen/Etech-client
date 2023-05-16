/* import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  serialize: false,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store; */



/*import { configureStore, combineReducers, } from '@reduxjs/toolkit';
import searchReducer from '../search';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchProductSlice from '../searchProductSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    productSearchBar: searchReducer,
    searchProduct: searchProductSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store; */