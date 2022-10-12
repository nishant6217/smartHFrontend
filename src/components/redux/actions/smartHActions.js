import axios from "axios";
import * as action from "../constants/smartHConstant";

const URL = "http://localhost:4000/api";

export const getGroupedData = () => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}/get-grouped-data`);
    dispatch({ type: action.GET_GROUPED_DATA, payload: data.data });
    
  } catch (err) {
    
  }
};

export const getTotalAndAvg = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}/get-avg-total-count`);
    dispatch({ type: action.GET_TOTAL_AVG_VALUE, payload: data.data });
  } catch (err) {
      }
};