import * as actionTypes from "../constants/smartHConstant";

export const getGroupedData = (state = { data: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_GROUPED_DATA:
            const items = action.payload;
            return { data: items };
        default:
            return state;
    }
};
export const getTotalAndAvg = (state = { data: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_TOTAL_AVG_VALUE:
            const itemsSecond = action.payload;
            return { data: itemsSecond };
        default:
            return state;
    }
};
