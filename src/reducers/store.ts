import { applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {PlanetsActionsType, planetsReducer} from "./planetsReducer";
import {residentsReducer} from "./residentsReducer";

const rootReducer = combineReducers({
    planets: planetsReducer,
    residents: residentsReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type RootActionsType = PlanetsActionsType

export type ThunkType = ThunkAction<void, RootStateType, unknown, RootActionsType>;

// @ts-ignore
window.store = store;