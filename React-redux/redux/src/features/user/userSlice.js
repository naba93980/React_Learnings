import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsersActions = createAsyncThunk('fetchuser', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        const users = response.data;
        return users;
    })
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsersActions.pending, (state, action) => {
            state.loading = true
        })
            .addCase(fetchUsersActions.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = '';
            })
            .addCase(fetchUsersActions.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message
            });
    }
})

export default userSlice.reducer;

