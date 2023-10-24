import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const reponse = await axios.get("http://localhost:3005/users");
  // TODO DEV ONLY
  await pause(1000);

  return reponse.data;
});

//TODO DEV ONLY to remmove before production
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
