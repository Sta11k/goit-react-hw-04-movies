import { Component } from 'react';
import API from '../../services/moviesApi';
import PropTypes from 'prop-types';
import './Cast.scss';


export default class Cast extends Component {
  state = {
    cast: null,

    base_url: 'https://image.tmdb.org/t/p/w500',
  };

  async componentDidMount() {
    const movieId = this.props.id;

    const response = await API.getMovieCast(movieId);

    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast, base_url } = this.state;

    return (
      <div className="Cast-container">
        <ul className="CastList">
          {cast &&
            cast.map(({ id, name, character, profile_path }) => (
              <li className="CastList-item" key={id}>
                <img
                  src={
                    profile_path ? `${base_url}${profile_path}` : profile_path
                  }
                  alt={name}
                />

                <div className="Cast-text-container">
                  <p className="Cast-name">{name}</p>
                  <span className="Cast-text">Character: {character}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

Cast.defaultProps = {

  name: 'Unknown',
  character: 'Unknown',
};

Cast.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};
