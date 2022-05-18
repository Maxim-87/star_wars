import React from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../../../reducers/store";
import {Loader} from "../../Loader/Loader";

export const Planet = () => {

    const isLoading = useSelector<RootStateType, boolean>(state => state.planets.isLoading)

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            <ul>
                <li> climate </li>
                <li> created </li>
                <li> diameter </li>
                <li> edited </li>
                <li> gravity </li>
                <li> orbital_period </li>
                <li> population </li>
                <li> rotation_period </li>
                <li> surface_water </li>
                <li> terrain </li>
            </ul>
        </div>
    );
};






