import {Api, planetsData, residentType} from "../api/api";
import {ThunkType} from "./store";
import {Dispatch} from "redux";

type InitialStateType = {
    planets: planetsData
    residents: Array<residentType>
    isLoading: boolean
}

const defaultState: InitialStateType = {
    planets: {
        count: 0,
        next: '',
        previous: null,
        results: []
    },
    residents: [],
    isLoading: false
}


export const planetsReducer = (state: InitialStateType = defaultState, action: PlanetsActionsType): InitialStateType => {
     switch (action.type) {
        case 'SET_PLANETS':
            return {
                ...state,
                planets: action.payload
            }
        case 'SET_RESIDENT': {
            return {
                ...state,
                residents:  action.payload
            }
        }
         case "IS_LOADING": {
             return {
                 ...state,
                 isLoading: action.payload
             }
         }
         default:
            return state
    }
}

export const setPlanetsAC = (planets: planetsData) => ({
    type: 'SET_PLANETS',
    payload: planets
} as const)

export const setResidentsAC = (residents: Array<residentType>) => ({
    type: 'SET_RESIDENT',
    payload: residents
} as const)

export const isLoadingAC = (isLoading: boolean) => ({
    type: 'IS_LOADING',
    payload: isLoading
} as const)


export const getResident = (id: Array<string>) => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC(true))
        const results = []
        for (let i = 0; i < id.length; i++) {

            const res = await Api.getResidentApi(id[i])
            results.push(res.data)
        }
        dispatch(setResidentsAC(results))
        console.log(results)
    }
    catch (e) {
        console.log('error getResident')
    }
    finally {
        dispatch(isLoadingAC(false))
    }
}

export const getPlanets = (): ThunkType => async dispatch => {
    try {
        dispatch(isLoadingAC(true))
        const res = await Api.getPlanetsApi()
        dispatch(setPlanetsAC(res.data))
        console.log(res.data)
    } catch (e) {
        console.log('error getPlanets')
    }
    finally {
        dispatch(isLoadingAC(false))

    }
}

export enum PLANETS_ACTIONS {
    SET_PLANETS = 'SET_PLANETS',
    SET_RESIDENT = 'SET_RESIDENT',
}

export type PlanetsActionType = ReturnType<typeof setPlanetsAC>;
export type ResidentsActionType = ReturnType<typeof setResidentsAC>;
export type isLoadingActionType = ReturnType<typeof isLoadingAC>;

export type PlanetsActionsType = PlanetsActionType | ResidentsActionType | isLoadingActionType