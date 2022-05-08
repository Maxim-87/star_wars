import React from 'react';
import s from './Loader.module.scss';


export const Loader = () => {
    return (
        <div className={s.loader}>
            <h3 className={s.title}> Loading... </h3>
        </div>
    );
};

