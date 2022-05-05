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
        // case 'SET_RESEDENT': {
        //     return{
        //         ...state,
        //         residents: [...state,action.resident]
        //     }
        // }
        default:
            return state
    }
}

export const setPlanetsAC = (planets: planetsData) => ({
    type: 'SET_PLANETS',
    payload: planets
})

export const setResidentsAc = (id: planetsData) => ({
    type: 'SET_PLANETS',
    id
})

// setResidentsAc
// @ts-ignore
export const getPlanets = (): ThunkType => async dispatch => {

    try {
        const res = await Api.getPlanetsApi()
        dispatch(setPlanetsAC(res.data))
        console.log(res.data)
    } catch (e) {
        console.log('Error')
    }
}

export enum PLANETS_ACTIONS {
    SET_PLANETS = 'SET_PLANETS',
}

export type PlanetsActionsType = ReturnType<typeof setPlanetsAC>;
