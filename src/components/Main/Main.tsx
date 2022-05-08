import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Planets} from "../Planets/Planets";

import {ROUTES} from '../../router/routes';
import {PlanetPage} from "../Planet/PlanetPage";


export const Main = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Planets/>}/>
                <Route path={ROUTES.PLANET} element={<PlanetPage/>}/>
            </Routes>
        </div>
    );
};

