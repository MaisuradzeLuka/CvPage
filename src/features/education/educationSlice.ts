import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IEducation } from "../../interfaces";
import fetchData from "../../utils/fetchData";

interface IInitialState {
  loading: boolean;
  errMsg: boolean;
  educationData: IEducation[];
}

const initialState: IInitialState = {
  loading: false,
  errMsg: false,
  educationData: [],
};

export const fetchEducationData = createAsyncThunk(
  "get/education",
  async () => {
    try {
      const data = fetchData("/api/educations");
      return data;
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    }
  }
);

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducationData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchEducationData.fulfilled,
        (state, action: PayloadAction<{ educations: IEducation[] }>) => {
          state.loading = false;
          state.educationData = action.payload.educations;
        }
      )
      .addCase(fetchEducationData.rejected, (state) => {
        state.loading = false;
        state.errMsg = true;
      });
  },
});

export default educationSlice.reducer;
