import React from 'react';
import PropTypes from 'prop-types';
import styles from './Face.css';

const Face = ({ emoji }) => (
  <>
    <p className={styles.Face}>
      <figure>
        <img src={emoji.img}/>
        <figcaption>{emoji.status}</figcaption>
      </figure>
    </p>
  </>
);

Face.propTypes = {
  emoji: PropTypes.shape({
    img: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })
};

export default Face;
