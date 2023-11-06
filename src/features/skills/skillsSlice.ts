import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISkill } from "../../interfaces";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/ConnectToDB";
import { toast } from "react-toastify";

interface IInitialState {
  skillsData: ISkill[];
  initialValues: { skill: string; range: string };
  showSkills: boolean;
}

const initialState: IInitialState = {
  skillsData: [],
  initialValues: {
    skill: "",
    range: "",
  },
  showSkills: false,
};

export const postSkillsData = createAsyncThunk(
  "post/skills",
  async (initialPost: ISkill) => {
    try {
      await addDoc(collection(db, "skills"), {
        ...initialPost,
      });
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    }
  }
);

export const deleteSkills = createAsyncThunk(
  "delete/skills",
  async (id: string) => {
    try {
      const docRef = doc(db, "skills", id);
      deleteDoc(docRef);
      toast.success("Skill deleted succesfully", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        delay: 100,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
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
    changeSkillsData: (state, action) => {
      state.skillsData = action.payload;
    },
  },
});

export const { changeShowSkill, changeSkillsData } = skillsSlice.actions;
export default skillsSlice.reducer;
