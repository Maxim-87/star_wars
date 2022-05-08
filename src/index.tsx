import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "./reducers/store";


const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
);


reportWebVitals();