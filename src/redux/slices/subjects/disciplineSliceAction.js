import http from "../../../hoc/axiosClient";
import {
  handleApiError,  
  handleLoding,
  handleDiscData,
} from "./disciplinedropSlice";
export const readDiscData = () => async (dispatch) => {
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
    
    const discData = courseApiResponse?.data?.data?.disciplineModel;

    const disciplineOptionsData = [];
    discData.map((ele) => {
      disciplineOptionsData.push({
        disciplineId: ele.disciplineId,
        disciplineName: ele.disciplineName,
      });
    });

    dispatch(handleDiscData(disciplineOptionsData));
  } catch (error) {
    dispatch(handleApiError(error));
  }
};
