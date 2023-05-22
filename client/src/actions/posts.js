import * as api from "../api";

// Action Creators: Functions that return actions
export const getPosts = () => async (dispatch) => {
  try {
    // Get the data from the api
    const { data } = await api.fetchPosts();

    // Create & Dispatch action
    const action = {
      type: "FETCH_ALL",
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
