import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./context/AuthActions"

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const response = await axios.post('/admin/login', user, { withCredentials: true });
        dispatch(loginSuccess(response.data));
        console.log("success");
    } catch (error) {
        console.log("failure");
        dispatch(loginFailure(error));
    }
}