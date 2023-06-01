import axios from "axios";

const loginUser = async (userEmail, userPassword) => {
  try {
    const response = await axios.post("api/login", { userEmail, userPassword });
    console.log("UserData :-", response.data);
  } catch (error) {
    console.log(error);
  }
};

export default loginUser;
