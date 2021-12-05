import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { Button } from '@material-ui/core';

const Navigation = () => {
  return (
  
    <div className="Header">
      <ul className="NavList">
        <li>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            <Button
              style={{
                borderRadius: 35,
               backgroundColor: " rgb(182, 56, 56)",
                padding: "1px 36px",
                fontSize: "18px"
              }}
              variant='contained'
            >
              Home
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            <Button
            style={{
                borderRadius: 35,
                backgroundColor: " rgb(182, 56, 56)",
                padding: "1px 36px",
                fontSize: "18px"
              }}
              variant='contained'>
              Movies
            </Button>
          </NavLink>
        </li>
      </ul>
      </div>
      // </ThemeProvider>
  );
};

export default Navigation;
