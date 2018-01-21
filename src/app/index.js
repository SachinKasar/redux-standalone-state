import {createStore} from "redux";
 
const initialState = {name:'Two Wheeler Name', price:100000};

const reducer = (state=initialState, action) => {
	var newState;
    
    switch (action.type) {
		case 'UPDATE_NAME':
            newState = {
                ...state,
                name:action.value,
            }
            break;
		case 'ADD_PRICE':
            newState = {
                ...state,
                price: Number(state.price) + Number(action.value),
            }
			break;
        case 'PRICE_DISCOUNT':
            newState = {
                ...state,
                price: Number(state.price) - Number(action.value),
            }
            break;
        case 'QUERY_INITIAL_STATE':
             newState = {
                ...state,
             }
            break;
	}
	return newState;
};


const store = createStore(reducer);

store.subscribe(() => {
	console.log("State in store  - ", store.getState());
});


store.dispatch({
	type: "QUERY_INITIAL_STATE"
});

store.dispatch({
	type: "UPDATE_NAME",
	value:"Splendor"
});

store.dispatch({
	type: "UPDATE_NAME",
	value:"Splendor+"
});

store.dispatch({
	type: "ADD_PRICE",
	value:100
});


store.dispatch({
	type: "ADD_PRICE",
	value:200
});

store.dispatch({
	type: "PRICE_DISCOUNT",
	value:5000
});
