import React, {useState} from 'react';
import {planetsData, residentsData} from "../../api/api";
import {useSelector} from "react-redux";
import {RootStateType} from "../../reducers/store";
import {useSearchParams} from 'react-router-dom';
import s from '../Planets/Planets.module.scss';
import { Residents } from '../Residents/Residents';

type GenderType = 'all' | 'male' | 'female' | 'n/a'

type PlanetType = {
    id?: string
    active?: boolean
}

export const Planet = ({id, active}: PlanetType) => {

    let [searchParams, setSearchParams] = useSearchParams();

    const currentId = id ? id : searchParams.get('id')
    const planets = useSelector<RootStateType, planetsData>(state => state.planets.planets)
    const residents = useSelector<RootStateType,residentsData>(state => state.residents.residents)
    const [gender, setGender] = useState<GenderType>('all')


    const allGender = () => {
        console.log('all')
        setGender('all')}
    const maleGender = () => {
        console.log('male')
        setGender('male')
    }
    const femaleGender = () => setGender('female')
    const naGender = () => setGender('n/a')



    if(gender === 'male') {
       residents.results = residents.results.filter(res => res.gender === 'male')
    }
    if(gender === 'female') {
        residents.results = residents.results.filter(res => res.gender === 'female')
    }
    if(gender === 'n/a') {
        residents.results = residents.results.filter(res => res.gender === 'n/a')
    }


    const planetSelected = planets.results.find(planet => planet.name === currentId)
    if (planetSelected) {
        return (
            <div className={s.planetsBlock}>
                {(active === false) ? <div>
                        <ul>
                            <li> climate</li>
                            <li>created</li>
                            <li>diameter</li>
                            <li>edited</li>
                            <li> gravity</li>
                            <li> orbital_period</li>
                            <li> population</li>
                            <li> rotation_period</li>
                            <li> surface_water</li>
                            <li> terrain</li>
                        </ul>
                    </div> :

                    <div className={s.planetsBlock}>
                        <><h1>{planetSelected.name}</h1></>
                        <ul>
                            <li> rotation_period: <b>{planetSelected.rotation_period}</b>
                            </li>
                            <li> orbital_period: <b>{planetSelected.orbital_period}</b>
                            </li>
                            <li>diameter: <b>{planetSelected.diameter}</b></li>
                            <li> climate:<b>{planetSelected.climate}</b></li>
                            <li> gravity:<b>{planetSelected.gravity}</b></li>
                            <li> terrain:<b>{planetSelected.terrain}</b></li>
                            <li> surface_water:<b>{planetSelected.surface_water}</b>
                            </li>
                            <li> population:<b>{planetSelected.population}</b></li>
                        </ul>
                        <div><h3>Residents:</h3></div>
                        <ul>
                            <Residents residents={residents.results}/>
                        </ul>
                        <div>
                            <button onClick={allGender}> All </button>
                            <button onClick={maleGender}> male </button>
                            <button onClick={femaleGender}> female </button>
                            <button onClick={naGender}> n/a </button>
                        </div>

                    </div>
                }
            </div>
        );
    } else return <div> some error oucurred</div>

};






