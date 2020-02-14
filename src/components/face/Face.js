import React from 'react';
import PropTypes from 'prop-types';

const Face = ({ emoji }) => (
  <>
    <figure>
      <img src={emoji.img}/>
      <figcaption>{emoji.status}</figcaption>
    </figure>
  </>
);

Face.propTypes = {
  emoji: PropTypes.shape({
    img: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired
};

export default Face;
