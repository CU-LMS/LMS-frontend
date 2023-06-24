import {
  handleApiError,
  handleLoding,
  handleSubjectData,
} from "./subjectsSlice";
import http from "../../../hoc/axiosClient";
export const readSubjectsData = () => async (dispatch) => {
  try {
    let data = {
      pageNo: 0,
      pageSize: 0,
    };

    let courseConfig = {
      method: "post",
      url: "Discipline/GetSubjectDisciplineList",
      data,
    };

    let courseApiResponse = await http(courseConfig);
    const subjectData = courseApiResponse?.data?.data?.subjectAreaModel;
    const subjectOptionsData = [];
    subjectData.map((ele) => {
      subjectOptionsData.push({
        subjectId: ele.subjectId,
        subjectName: ele.subjectName,
      });
    });

    dispatch(handleSubjectData(subjectOptionsData));
  } catch (error) {
    dispatch(handleApiError(error));
  }
};
