import React, { useEffect, useState } from 'react';
import "./navbar.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [active, setActive] = useState('Resume')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('Resume');
        else if (currentURL.endsWith('/projects'))
            setActive('Projects')
    

    }, [active])

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>

            <div className="navbar__items">
                
                {active !== 'Resume' ? <Link to ="./Resume"><div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div></Link>
                    : null
                }

                {active !== 'Projects' && <Link to="./Project"><div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div></Link>}
            </div>

        </div>
    );
};

export default Navbar;