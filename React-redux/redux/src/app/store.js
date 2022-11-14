import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        cakeReducer,
        icecreamReducer,
        userReducer
    }
})

export default store;

const unsubscribe = store.subscribe(() => {
    console.log('Updated Store ', store.getState());
})

unsubscribe();