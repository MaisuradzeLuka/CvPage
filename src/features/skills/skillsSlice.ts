import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISkill } from "../../interfaces";
import fetchData from "../../utils/fetchData";

interface IInitialState {
  skillsData: ISkill[];
  initialValues: { skill: string; range: string };
  showSkills: boolean;
}

const initialState: IInitialState = {
  skillsData: JSON.parse(localStorage.getItem("skills") || "[]") as ISkill[],
  initialValues: {
    skill: "",
    range: "",
  },
  showSkills: false,
};

export const fetchSkillsData = createAsyncThunk("get/skills", async () => {
  try {
    const data = fetchData("/api/skills");
    return data;
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
});

export const postSkillsData = createAsyncThunk(
  "post/skills",
  async (initialPost: ISkill) => {
    try {
      const data = fetchData("/api/skills", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(initialPost),
      });
      return data;
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    }
  }
);

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    changeShowSkill: (state) => {
      state.showSkills = !state.showSkills;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        fetchSkillsData.fulfilled,
        (state, action: PayloadAction<{ skills: ISkill[] }>) => {
          state.skillsData = action.payload.skills;
        }
      )
      .addCase(
        postSkillsData.fulfilled,
        (state, action: PayloadAction<{ skillData: ISkill[] }>) => {
          state.skillsData = action.payload.skillData;
        }
      );
  },
});

export const { changeShowSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
