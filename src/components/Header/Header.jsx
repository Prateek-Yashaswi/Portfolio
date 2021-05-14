import React from 'react';
import '../Header/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div id='home'>
            <div className="header">
                <div className='avatar'></div>
                <p><span className="header-text">Prateek Yashaswi</span></p>
                <h4><span>Web And App Developer</span></h4>
        </div>
        </div>
    );
}

export default Header;

