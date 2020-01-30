import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS
} from "./userTypes";
import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    try {
      (async () => {
        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch(fetchUsersSuccess(users.data));
      })();
    } catch (error) {
      dispatch(fetchUsersRequest(error.message));
    }
  };
};
