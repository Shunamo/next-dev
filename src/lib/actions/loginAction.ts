import { LoginFormData } from '../types';

export const loginRequest = async (values: LoginFormData) => {
  const response = await fetch('http://3.36.66.71:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      loginId: values.userId,
      password: values.password,
    }),
  });

  return response;
};
