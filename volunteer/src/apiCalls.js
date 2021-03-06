import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/volunteers/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    window.alert("Invalid Credentials")
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
export const signUpCall = async (userCredential, dispatch) => {
  dispatch({ type: "SIGNUP_START" });
  try {
    const res = await axios.post("/volunteers/create", userCredential);
    console.log("successful", res.data);
    dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "SIGNUP_FAILURE", payload: err });
  }
};