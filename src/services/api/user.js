import axios from 'axios';
import { endPoints } from '.';

export const addUser = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axios.post(endPoints.users.createUser, body, config);
  return data;
};

export const recoveryPassword = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axios.post(endPoints.auth.recovery, body, config);
  return data;
};
