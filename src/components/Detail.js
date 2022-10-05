import PropTypes from 'prop-types';

const Detail = (props) => {
  const { title, value } = props;

  return (
    <div className="detailCard">
      <h3 className="detailCardText">{title}</h3>
      <h3 className="detailCardText">{value}</h3>
    </div>
  );
};

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default Detail;
