import React, {useEffect, useLayoutEffect, useState} from 'react';
import {planetData, residentType} from "../../api/api";
import s from '../Planets/Planets.module.scss';
import {useSelector, useDispatch} from "react-redux";
import {RootStateType} from "../../reducers/store";
import {getResident} from "../../reducers/planetsReducer";

type ResidentsType = {
    planet: planetData
}

type GenderType = 'all' | 'male' | 'female' | 'n/a'

export const Residents = ({planet}: ResidentsType) => {

    const [gender, setGender] = useState<GenderType>('all')
    // @ts-ignore
    let residents = useSelector<RootStateType, Array<residentType>>(state => state.planets.residents)
    console.log(residents)

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        if (planet) {
            planet.residents.map((resident) => {
                const id = planet.residents.map((res: any) => res.slice(29, res.length - 1))
                console.log(id)
                for (let i = 0; i < id.length; i++) {
                    console.log(id[i])
                    // @ts-ignore
                    dispatch(getResident(id[i]))
                }
            })
        }
    }, [])



    const allGender = () => setGender('all')
    const maleGender = () => setGender('male')
    const femaleGender = () => setGender('female')
    const naGender = () => setGender('n/a')

    if(gender === 'male') {
       residents = residents.filter(res => res.gender === 'male')
    }
    if(gender === 'female') {
        residents = residents.filter(res => res.gender === 'female')
    }
    if(gender === 'n/a') {
        residents = residents.filter(res => res.gender === 'n/a')
    }

    return (
        <div className={s.planetsBlock}>
            <div>
                <button onClick={allGender}> All</button>
                <button onClick={maleGender}> male</button>
                <button onClick={femaleGender}> female</button>
                <button onClick={naGender}> n/a</button>
            </div>
            <div>
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


        </div>
    );
};

