import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IEducation } from "../../interfaces";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/ConnectToDB";

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
      const querySnapshot = await getDocs(collection(db, "education"));
      const data: IEducation[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data() } as IEducation);
      });

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
        (state, action: PayloadAction<IEducation[]>) => {
          state.loading = false;
          state.educationData = action.payload;
        }
      )
      .addCase(fetchEducationData.rejected, (state) => {
        state.loading = false;
        state.errMsg = true;
      });
  },
});

export default educationSlice.reducer;
