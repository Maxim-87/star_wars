import {Api, planetsData, residentType} from "../api/api";
import {ThunkType} from "./store";

type InitialStateType = {
    planets: planetsData
    residents: Array<residentType>
}

const defaultState: InitialStateType = {
    planets: {
        count: 0,
        next: '',
        previous: null,
        results: []
    },
    residents: []
}


export const planetsReducer = (state: InitialStateType = defaultState, action: PlanetsActionsType) => {
     switch (action.type) {
        case 'SET_PLANETS':
            return {
                ...state,
                planets: action.payload
            }
        case 'SET_RESIDENT': {
            return {
                ...state,
                residents: [...state.residents, action.payload]
            }
        }
        default:
            return state
    }
}

export const setPlanetsAC = (planets: planetsData) => ({
    type: 'SET_PLANETS',
    payload: planets
})

export const setResidentAC = (resident: residentType) => ({
    type: 'SET_RESIDENT',
    payload: resident
})


// @ts-ignore
export const getResident = (id: string): ThunkType => async dispatch => {
    try {
        const res = await Api.getResidentApi(id)
        dispatch(setResidentAC(res.data))
        console.log(res.data)
    }
    catch (e) {
        console.log('error getResident')
    }
}

export const getPlanets = (): ThunkType => async dispatch => {
    try {
        const res = await Api.getPlanetsApi()
        dispatch(setPlanetsAC(res.data))
        console.log(res.data)
    } catch (e) {
        console.log('error getPlanets')
    }
}

export enum PLANETS_ACTIONS {
    SET_PLANETS = 'SET_PLANETS',
    SET_RESIDENT = 'SET_RESIDENT',
}

export type PlanetsActionType = ReturnType<typeof setPlanetsAC>;
export type ResidentActionType = ReturnType<typeof setResidentAC>;

export type PlanetsActionsType = PlanetsActionType | ResidentActionType