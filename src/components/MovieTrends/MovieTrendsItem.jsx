import PropTypes from 'prop-types';


const MovieTrendsItem = ({ title, poster, baseUrl }) => {
  return (
    <>
      <h3 className="HomeList-title">{title}</h3>
      <img src={poster ? `${baseUrl}${poster}` : poster} alt={title} />
    </>
  );
};

MovieTrendsItem.defaultProps = {
  title: 'Nothing Found',

};

MovieTrendsItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
};

export default MovieTrendsItem;
