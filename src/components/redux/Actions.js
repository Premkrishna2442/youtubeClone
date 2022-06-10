import { success, request, failure } from "./actionTypes";
import axios from "axios";
import youtube from "../youtube";
export const userRequest = () => {
  return {
    type: request,
  };
};

export const userSuccess = (users) => {
  return {
    type: success,
    payload: users,
  };
};

export const userFailure = (error) => {
  return {
    type: failure,
    payload: error,
  };
};

const fetchEvents = (term,pages) => {
  return (dispatch) => {
    dispatch(userRequest)
    youtube.get("/search", {
        params: {
          q: term,
          maxResults: 2,
        },
      }).then((res)=>{
          dispatch(userSuccess(res))
      }) .catch((error) => {
        const err = error.message;
        dispatch(userFailure(err));
      });
  };
};

export const fetchVideos = () =>{
  return(dispatch) =>{
    dispatch(userRequest)
       youtube.get("/videos",{
          params:{
              "chart": "mostPopular",
              "maxResults":"1",
              "part":"snippet"
          }
      }).then((res)=>{
          dispatch(userSuccess(res))
          console.log('ocnoen')
      }).catch((err)=>{
          console.log(err)
          dispatch(userFailure(err));
      })
  }
}

export default fetchEvents;
