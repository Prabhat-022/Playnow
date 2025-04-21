import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";
console.log(axiosInstance);

const userFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
    loading: false,
    error: null,
    user: userFromStorage
}
//register users
export const registerUser = createAsyncThunk("user/register", async (payload) => {
    try {
        const response = await axiosInstance.post("/register", payload);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        if (response.data.success) {
            toast.success(response.data.message)
        }


        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
        return isRejectedWithValue(error.response.data);
    }
});

//login users
export const loginUser = createAsyncThunk("user/login", async (payload) => {
    try {
        const response = await axiosInstance.post("/login", payload);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        if (response.data.success) {
            toast.success(response.data.message)
        }

        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
        return isRejectedWithValue(error.response.data);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = null
            localStorage.removeItem("userInfo")
        }
    },
    extraReducers: (builder) => {
        // registerUser
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })

        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        //loginUser
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
});



export const { logout } = userSlice.actions;
export default userSlice.reducer;