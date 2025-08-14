import API from "./api";

// Backend routes used: /api/auth/register, /api/auth/login

export const register = async ({ name, email, password, role = "student" }) => {
  const { data } = await API.post("/auth/register", { name, email, password, role });
  return data; // {_id, name, email, role, token}
};

export const login = async ({ email, password }) => {
  const { data } = await API.post("/auth/login", { email, password });
  return data; // {_id, name, email, role, token}
};
