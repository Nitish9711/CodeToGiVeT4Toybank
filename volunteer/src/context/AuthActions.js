export const LoginStart = () => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
export const SignUpStart = () => ({
    type: "SIGNUP_START",
  });
  
  export const SignUpSuccess = (user) => ({
    type: "SIGNUP_SUCCESS",
    payload: user,
  });
  
  export const SignUpFailure = () => ({
    type: "SIGNUP_FAILURE",
  });