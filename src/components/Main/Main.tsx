import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Planets} from "../Planets/Planets";
import { Planet } from '../Planet/Planet';
import { ROUTES } from '../../router/routes';


export const Main = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Planets/>}/>
                <Route path={ROUTES.PLANET} element={<Planet/>}/>
            </Routes>
        </div>
    );
};

