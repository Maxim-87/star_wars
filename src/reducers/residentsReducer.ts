import {residentsData, residentType, Api} from "../api/api";
//
//
// type InitialStateType = {
//     residents: residentsData
// }
//
// const defaultState: InitialStateType = {
//     residents: {
//         count: 0,
//         next: '',
//         previous: null,
//         results: []
//     }
// }
//
//
// export const residentsReducer = (state: InitialStateType = defaultState, action: ResidentsActionsType) => {
//     switch (action.type) {
//         case 'GET_RESIDENTS':
//             return {
//                 ...state,
//                 residents: action.payload
//             }
//         default:
//             return state
//     }
// }
//
// export const getResidentsAC = (residents: residentsData) => (
//     {type: 'GET_RESIDENTS', payload: residents}
// )
//
// // @ts-ignore
// export const getResidents = (): ThunkType => async dispatch => {
//     try {
//         const res = await Api.getResidentsApi()
//         dispatch(getResidentsAC(res.data))
//         console.log(res)
//     }
//     catch (e) {
//         console.log('Error')
//     }
// }
//
// export type ResidentsActionsType = ReturnType<typeof getResidentsAC>;
