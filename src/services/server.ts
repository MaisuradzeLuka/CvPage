import { createServer } from "miragejs";
import educationData from "../data/timeLine.json";
import { ISkill } from "../interfaces";

export default createServer({
  routes() {
    this.namespace = "api";

    this.get(
      "/educations",
      () => {
        return {
          educations: [...educationData],
        };
      },
      { timing: 3000 }
    );

    this.get("/skills", () => {
      return {
        skills: JSON.parse(localStorage.getItem("skills") || "[]") as ISkill[],
      };
    });

    this.post("/skills", (_schema, request) => {
      const requestData = JSON.parse(request.requestBody);
      const skillsData = JSON.parse(
        localStorage.getItem("skills") || "[]"
      ) as ISkill[];
      const modifiedData = [...skillsData, { ...requestData }];
      localStorage.setItem("skills", JSON.stringify(modifiedData));
      return { skillData: [...modifiedData] };
    });
  },
});
