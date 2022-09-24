import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';


const AboutPage = () => {


    
    const navegar = useNavigate();
    const location = useLocation();

    const navega = (path) => {
        navegar(path);

    }

    const patras = () => {
        navegar(-1);
    }

    return (
        <div>
            <h1>Cosicas cosicas cosicas</h1>
            <div>
                <button onClick={patras}>Patras</button><button onClick={ () => navega('/') }>casa</button>
            </div>
        </div>
    );
}

export default AboutPage;
