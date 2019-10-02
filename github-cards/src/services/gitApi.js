import axios from "axios";

export const baseUrl = "https://api.github.com/users";

export const getUserIds = user => {
  const result = axios.get(`${baseUrl}/${user}`).then(({ data }) => {
    return data;
  });

  return result;
};

export const getFollowerIds = user => {
  const result = axios.get(`${baseUrl}/${user}/followers`).then(data => {
    console.log(data);
    console.log(typeof data);
    return data;
  });

  return result;
};
