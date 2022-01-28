import { createSlice } from "@reduxjs/toolkit";

const initialSateValue = {
    modal: false,
    title: "",
    items: []
};

export const awardSlice = createSlice({
    name: "award",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        openAward: (state, action) => {
            state.value = action.payload;
        },
        closeAward: (state, action) => {
            state.value = initialSateValue;
        },
    },
});

export const { openAward, closeAward } = awardSlice.actions;

export default awardSlice.reducer;
