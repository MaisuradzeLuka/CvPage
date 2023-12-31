import { useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import * as Yup from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  changeSkillsData,
  deleteSkills,
  postSkillsData,
} from "../features/skills/skillsSlice";
import { toast } from "react-toastify";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/ConnectToDB";
import { ISkill } from "../interfaces";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IInitialValues {
  skill: string;
  range: string;
}

const Skills = ({ showSkills }: { showSkills: boolean }) => {
  const dispatch = useAppDispatch();
  const { skillsData, initialValues } = useAppSelector((state) => state.skills);

  const validateSchema = Yup.object({
    skill: Yup.string().required("Skill is required field"),
    range: Yup.number()
      .typeError('Skill range must be of a "number" type')
      .min(10, "Skill range must be at least 10")
      .max(100, "Skill range must be at most 100")
      .required("Range is required field"),
  });

  const onSubmit = async (
    values: IInitialValues,
    { resetForm }: FormikHelpers<IInitialValues>
  ) => {
    if (!skillsData.find((skill) => skill.skill === values.skill)) {
      const newSkill = { ...values, id: values.skill };
      dispatch(postSkillsData({ ...newSkill }));
      toast.success("Skill has been added", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        delay: 100,
      });
    } else {
      toast.info("Skill already exists in the list", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }

    resetForm();
  };

  const handleDelete = async (id: string) => {
    dispatch(deleteSkills(id));
  };

  useEffect(() => {
    onSnapshot(collection(db, "skills"), (snapshots) => {
      const data: ISkill[] = [];

      snapshots.forEach((snapshot) => {
        data.push({ ...snapshot.data(), id: snapshot.id } as ISkill);
      });

      dispatch(changeSkillsData(data));
    });
  }, [dispatch]);

  return (
    <div className="skills">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        {(props) => {
          return (
            <>
              {showSkills && (
                <Form className="skills__form">
                  <Input
                    label="Skill name:"
                    type="text"
                    name="skill"
                    placeholder="Enter skill name"
                  />
                  <Input
                    label="Skill range:"
                    type="text"
                    name="range"
                    placeholder="Enter skill range"
                  />
                  <Button
                    type="submit"
                    disabled={!props.isValid || !props.dirty}
                  >
                    Add skill
                  </Button>
                </Form>
              )}
              <div className="skills__body">
                {skillsData.map((skill) => {
                  return (
                    <div
                      key={skill.id}
                      className="skills__body__skill"
                      style={{ width: `${+skill.range}%` }}
                    >
                      {skill.skill}
                      <button onClick={() => handleDelete(skill.id)}>
                        <FontAwesomeIcon icon={faTrash} size="lg" />
                      </button>
                    </div>
                  );
                })}
                <div className="skills__body__skillsLvl" />
                <div className="skills__body__skillsLvlName">
                  <span>Beginner</span>
                  <span>Proficient</span>
                  <span>Expert</span>
                  <span>Master</span>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Skills;
