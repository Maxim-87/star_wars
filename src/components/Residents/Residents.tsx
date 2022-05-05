import React, {useEffect, useLayoutEffect} from 'react';
import {residentType} from "../../api/api";
import s from '../Planets/Planets.module.scss';
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

type ResidentsType = {
    residents: Array<residentType>
}

export const Residents = ({residents}: ResidentsType) => {
// const {residents} = useSelector()
// const residents = useSelector<RottState, PlanteType>(state => state.planets.find(el => ))
//     const dispatch = useDispatch()
//     const {id} = useParams()

//   useLayoutEffect(() => {
//   const planet = planets.find(el => el.id === id)
//     if (palnet) {
//         planet.resedents.map((el) => {
//             const id = el.
//             dispatch(getResident(id))
//         })
//     }
// }, [])




    return (
        <div className={s.planetsBlock}>
            {}
            {residents.map((res: residentType) => <>
                <h3>{res.name}</h3>
                <li>height:<b>{res.height}</b></li>
                <li>mass:<b>{res.mass}</b></li>
                <li>hair_color:<b>{res.hair_color}</b></li>
                <li>eye_color:<b>{res.eye_color}</b></li>
                <li>birth_year:<b>{res.birth_year}</b></li>
                <li>gender:<b>{res.gender}</b></li>
                <li>created:<b>{res.created}</b></li>
                <li>edited:<b>{res.edited}</b></li>
            </>)}
        </div>
    );
};

