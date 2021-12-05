import PropTypes from 'prop-types';

const MoviesPageQueryItem = ({ poster, baseUrl, title }) => {
  return (
    <div>
      <div>
        <img src={poster ? `${baseUrl}${poster}` : poster} alt={title} />
      </div>

      <h3 className="MoviesPageQuery-title">{title}</h3>
    </div>
  );
};

MoviesPageQueryItem.defaultProps = {

  title: 'Nothing Found',
};

MoviesPageQueryItem.propTypes = {
  poster: PropTypes.string,
  baseUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviesPageQueryItem;
