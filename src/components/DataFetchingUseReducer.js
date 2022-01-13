import axios from "axios";
import React, { useEffect, useReducer } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";

export default function DataFetchingUseReducer() {
  const initialState = {
    loading: true,
    error: "",
    post: {},
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: action.error_server,
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          post: {},
          error: action.error_server,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
          error_server: res.status,
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", error_server: err.toString() });
      });
  }, []);
  return (
    <div>
      {window.addEventListener("beforeunload", function (e) {
        var confirmationMessage =
          "It looks like you have been editing something. " +
          "If you leave before saving, your changes will be lost.";

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return {confirmationMessage} ; //Gecko + Webkit, Safari, Chrome etc.
      })}
      {state.loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        state.post.title
      )}
      {state.error ? state.error : null}
    </div>
  );
}
