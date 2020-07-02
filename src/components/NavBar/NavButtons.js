import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NavButtons = () => {
  const [btnGlobalValue, setBtnGlobalValue] = useState(true);
  const [btnCountryValue, setBtnCountryValue] = useState(false);
  return (
    <React.Fragment>
      <Link to='/' className='navlink'>
        <Button
          color='inherit'
          className={`navBtn ${btnGlobalValue ? 'activeBtn' : ''} `}
          onClick={() => {
            setBtnGlobalValue(true);
            setBtnCountryValue(false);
          }}
        >
          Global
        </Button>
      </Link>

      <Link to='/country' className='navlink'>
        <Button
          color='inherit'
          className={`navBtn ${btnCountryValue ? 'activeBtn' : ''} `}
          onClick={() => {
            setBtnGlobalValue(false);
            setBtnCountryValue(true);
          }}
        >
          Country
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default NavButtons;
