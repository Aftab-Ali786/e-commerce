import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from './root-Reduser'; // Ensure this path is correct

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isDev = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    });

    // Add logger only in development
    if (isDev) {
      return defaultMiddleware.concat(logger);
    }

    return defaultMiddleware;
  },
});

const persistor = persistStore(store);

export { store, persistor };