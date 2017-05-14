import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

const styles = {
  container: {
    marginBottom: '30px'
  },
  title: {
    margin: '10px'
  },
  button: {
    display: 'inline-block',
    margin: '5px'
  },
  clicked: {
    backgroundColor: 'rgb(0, 188, 212)'
  }
};

export default class Feature extends Component {
  static propTypes = {
    parentIndex: PropTypes.number,
    text: PropTypes.string,
    content: PropTypes.object,
    toggleButton: PropTypes.func,
  }

  render() {
    const { parentIndex, text, content, toggleButton } = this.props;

    return (
      <div style={styles.container}>
        <p style={styles.title}>
          {text}
        </p>
        <div>
          {content.map((obj, index) => (
            <Chip
              key={`Chip_${index}`}
              style={obj.clicked ? {...styles.button, ...styles.clicked} : styles.button}
              onTouchTap={() => toggleButton({parentIndex, index})}
            >
              {obj.name}
            </Chip>
          ))}
        </div>
      </div>
    );
  }
}
