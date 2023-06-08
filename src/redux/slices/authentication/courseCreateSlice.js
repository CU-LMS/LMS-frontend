import { useEffect } from "react";
import http from "../../../hoc/axiosClient";

export const courseCreate =
  (pageNo, pageSize) => async (disaptch) => {
    try {
      let data = {
        pageNo:0,
        pageSize:0, 

      };

      let courseConfig = {
        method: "post",
        url: "Discipline/GetSubjectDisciplineList",
        data,
      };

      let courseApiResponse = await http(courseConfig);
      console.log("courseApiResponse", courseApiResponse);

      localStorage.setItem("course-create");
    } catch (error) {
      console.log("error");
    }
  };
