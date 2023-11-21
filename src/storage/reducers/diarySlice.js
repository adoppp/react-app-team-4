import { createSlice } from '@reduxjs/toolkit';
import { getDiaryInfo, getUser } from '../operations/diaryThunk';

export const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};


const initialState = {
  data: null,
  selectedDate: formatDate(new Date()),
  user: {
        dailyCalories: 0,
        dailyExerciseTime: 0
    }
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
    builder
     .addCase(getDiaryInfo.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user.dailyCalories = action.payload.dailyCalories;
        state.user.dailyExerciseTime = action.payload.dailyExerciseTime;
      });
  },
});


export const { updateSelectedDate } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;
