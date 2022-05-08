import React, {useEffect} from 'react';
import './App.css';
import { Main } from './components/Main/Main';


function App() {
    useEffect(() => {
        console.log('useFeff in app')
    }, [])

    return (
        <div>
            <div>
                <Main/>
            </div>
        </div>
    );
}

export default App;
