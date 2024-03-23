const baseURL =
  "https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/details";
export const getParentsDataAPI = async (phoneNum) => {
  return await fetch(`${baseURL}/parent/${phoneNum}`).catch((error) => {});
};
export const getChildrenDataAPI = async (id) => {
  return await fetch(`${baseURL}/children/${id}`).catch((error) => {});
};
