import React, {useLayoutEffect} from 'react';
import {planetData, residentType} from "../../api/api";
import s from '../Planets/Planets.module.scss';
import {useDispatch} from "react-redux";
import {getResident} from "../../reducers/planetsReducer";

type ResidentsType = {
    planet: planetData
    residents: Array<residentType>
}



export const Residents = ({planet, residents}: ResidentsType) => {

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        if (planet) {
            const residentsId = planet.residents.map((res: any) => res.slice(29, res.length - 1))
            dispatch(getResident(residentsId))
        }

    }, [])


    return (
        <>
            <div className={s.planetsBlock}>
                {residents.map((res: residentType) => <React.Fragment key={res.name}>
                    <h3>{res.name}</h3>
                    <ul>
                        <li>height:<b>{res.height}</b></li>
                        <li>mass:<b>{res.mass}</b></li>
                        <li>hair_color:<b>{res.hair_color}</b></li>
                        <li>eye_color:<b>{res.eye_color}</b></li>
                        <li>birth_year:<b>{res.birth_year}</b></li>
                        <li>gender:<b>{res.gender}</b></li>
                        <li>created:<b>{res.created}</b></li>
                        <li>edited:<b>{res.edited}</b></li>
                    </ul>
                </React.Fragment>)}
            </div>
        </>
    );
};

