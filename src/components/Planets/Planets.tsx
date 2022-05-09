import React, {useEffect} from 'react';
import {planetData, planetsData} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducers/store";
import {getPlanets} from "../../reducers/planetsReducer";
import s from './Planets.module.scss'
import {Planet} from "../Planet/Planet";
import {Link} from 'react-router-dom';
import {Loader} from "../Loader/Loader";


export const Planets = () => {

    const dispatch = useDispatch()
    const planets = useSelector<RootStateType, planetsData>(state => state.planets.planets)
    const isLoading = useSelector<RootStateType, boolean>(state => state.planets.isLoading)




    useEffect(() => {
        dispatch(getPlanets())
    }, [])

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className={s.planetsBlock}>
            {planets.results.map((planet: planetData) => {
                return <><Link
                    to={`/planet?id=${planet.name}`}>
                    <h1 className={s.title}>{planet.name}</h1></Link>
                    <Planet key={planet.name}/> </>
            })}
        </div>
    );
}

