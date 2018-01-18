import {createStore} from "redux";
 
const initialState = {name:'Two Wheeler Name', price:100000};

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case 'UPDATE_NAME':
            state = {
                ...state,
                name:action.payload,
            }
            break;
		case 'ADD_PRICE':
            state = {
                ...state,
                price: Number(state.price) + Number(action.payload),
            }
			break;
        case 'PRICE_DISCOUNT':
            state = {
                ...state,
                price: Number(state.price) - Number(action.payload),
            }
            break;
        case 'QUERY_INITIAL_STATE':
             break;
	}
	return state;
};


const store = createStore(reducer);

store.subscribe(() => {
	console.log("Store state - ", store.getState());
});


store.dispatch({
	type: "QUERY_INITIAL_STATE"
});

store.dispatch({
	type: "UPDATE_NAME",
	payload:"Splendor"
});

store.dispatch({
	type: "UPDATE_NAME",
	payload:"Splendor+"
});

store.dispatch({
	type: "ADD_PRICE",
	payload:100
});


store.dispatch({
	type: "ADD_PRICE",
	payload:200
});

store.dispatch({
	type: "PRICE_DISCOUNT",
	payload:5000
});
