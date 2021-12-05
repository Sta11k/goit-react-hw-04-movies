import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { Button } from '@material-ui/core';

const Navigation = () => {
  return (
    // <ThemeProvider theme={theme}>
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
                backgroundColor: "#21b6ae",
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
                backgroundColor: "#21b6ae",
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
