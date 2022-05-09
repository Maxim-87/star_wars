import React, {useEffect, useState} from 'react';
import {planetsData, residentType} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducers/store";
import {useSearchParams} from 'react-router-dom';
import ss from './PlanetPage.module.scss';
import s from '../Planets/Planets.module.scss'
import {Residents} from '../Residents/Residents';
import {getPlanets} from "../../reducers/planetsReducer";

type PlanetType = {
    id?: string
}

type GenderType = 'all' | 'male' | 'female' | 'n/a'


export const PlanetPage = ({id}: PlanetType) => {
    console.log('planetPage')

    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()

    const currentId = id ? id : searchParams.get('id')
    const planets = useSelector<RootStateType, planetsData>(state => state.planets.planets)
    const planetSelected = planets.results.find(planet => planet.name === currentId) || planets.results[0]
    const [gender, setGender] = useState<GenderType>('all')
    let residents = useSelector<RootStateType, Array<residentType>>(state => state.planets.residents)


    useEffect(() => {
        if (!planets.results.length) {
            // @ts-ignore
            dispatch(getPlanets())
        }
    }, [planets])


    function activeClass(value: GenderType) {
        return gender === value ? `${ss.active} ${ss.button}` : ss.button;
    }

    const allGender = () => setGender('all')
    const maleGender = () => setGender('male')
    const femaleGender = () => setGender('female')
    const naGender = () => setGender('n/a')

    if (gender === 'male') {
        residents = residents.filter(res => res.gender === 'male')
    }
    if (gender === 'female') {
        residents = residents.filter(res => res.gender === 'female')
    }
    if (gender === 'n/a') {
        residents = residents.filter(res => res.gender === 'n/a')
    }

    if (!planetSelected) {
        return null
    }


    return (
        <div className={s.planetsBlock}>
            <><h1>{planetSelected.name}</h1></>
            <ul>
                <li> rotation_period: <b>{planetSelected.rotation_period}</b>
                </li>
                <li> orbital_period: <b>{planetSelected.orbital_period}</b>
                </li>
                <li> diameter: <b>{planetSelected.diameter}</b></li>
                <li> climate:<b>{planetSelected.climate}</b></li>
                <li> gravity:<b>{planetSelected.gravity}</b></li>
                <li> terrain:<b>{planetSelected.terrain}</b></li>
                <li> surface_water:<b>{planetSelected.surface_water}</b>
                </li>
                <li> population:<b>{planetSelected.population}</b></li>
            </ul>
            <div><h2>Residents:</h2></div>
            <ul className={ss.buttonsList}>
                <li className={ss.buttonItem}><button className={activeClass('all')} onClick={allGender} > All</button></li>
                <li className={ss.buttonItem}><button className={activeClass('male')} onClick={maleGender}> male</button></li>
                <li className={ss.buttonItem}><button className={activeClass('female')} onClick={femaleGender}> female</button></li>
                <li className={ss.buttonItem}><button className={activeClass('n/a')} onClick={naGender}> n/a</button></li>
            </ul>
            <Residents planet={planetSelected}
                       residents={residents}/>

        </div>
    );
};






