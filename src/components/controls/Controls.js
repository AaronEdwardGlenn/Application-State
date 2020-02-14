import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ dispatch }) => (
  <section className={styles.Controls}>
    {dispatch.map(obj => (
      <button key={obj.text} onClick={obj.function}>
        {obj.text} {!!obj.count && `- ${obj.count}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  dispatch: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    count: PropTypes.number,
    function: PropTypes.func.isRequired,
  })).isRequired,

};

export default Controls;
