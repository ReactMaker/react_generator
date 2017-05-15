import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';

import './Feature.less';

@inject('settingStore')
@observer
export default class Feature extends Component {
  static propTypes = {
    settingStore: mobxPropTypes.object,
    parentIndex: PropTypes.number,
    text: PropTypes.string,
    content: PropTypes.object,
    toggleButton: PropTypes.func,
  }

  render() {
    const { parentIndex, text, content } = this.props;
    const { toggleButton } = this.props.settingStore;

    return (
      <div className="feature_container">
        <p className="title">
          {text}
        </p>
        <div>
          {content.map((obj, contentIndex) => (
            <Chip
              key={`Chip_${contentIndex}`}
              className={obj.clicked ? 'btn clicked' : 'btn'}
              onTouchTap={() => toggleButton(parentIndex, contentIndex)}
            >
              {obj.name}
            </Chip>
          ))}
        </div>
      </div>
    );
  }
}
