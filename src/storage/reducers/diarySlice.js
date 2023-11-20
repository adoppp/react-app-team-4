import { createSlice } from '@reduxjs/toolkit';
import { getDiaryInfo } from '../operations/diaryThunk';

const formatDateToDDMMYYYY = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); 
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
};

const initialState = {
  data: null,
  selectedDate: formatDateToDDMMYYYY(new Date()),
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
  updateSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDiaryInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});


export const { updateSelectedDate } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;
