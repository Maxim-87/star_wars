import React, {useEffect, useState} from 'react';
import {planetData, planetsData} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducers/store";
import {useNavigate} from "react-router-dom";
import {getPlanets} from "../../reducers/planetsReducer";
import s from './Planets.module.scss'
import {Planet} from "../Planet/Planet";
import { Link } from 'react-router-dom';

// type PlanetsType = {
//     changePlanet: (id: string) => void
//     planets: planetsData
// }

export const Planets = () => {
const history = useNavigate()

    const dispatch = useDispatch()
    const [active, setActive] = useState(false)

    // @ts-ignore
    const planets = useSelector<RootStateType, planetsData>(state => state.planets.planets)

    useEffect(() => {
        // @ts-ignore
        dispatch(getPlanets())

    }, [])

    const changeActive = () => {
        // dispatch(getResidents())
        setActive(true)
    }

    return (
        <div className={s.planetsBlock}>
            {planets.results.map((planet: planetData) => {
                return <><Link
                    to={`/planet?id=${planet.name}`} onClick={changeActive}><h1>{planet.name}</h1></Link>
                <Planet id={planet.name} key={planet.name} active={active}/> </>
            })}
        </div>
    );
}

