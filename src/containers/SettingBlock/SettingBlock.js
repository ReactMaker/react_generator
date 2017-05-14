import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import TextField from 'material-ui/TextField';
import Feature from './components/Feature';

@inject('settingStore')
@observer
export default class SettingBlock extends Component {
  static propTypes = {
    settingStore: mobxPropTypes.object,
  }

  render() {
    const { componentName, group, setComponentName } = this.props.settingStore;

    return (
      <div>
        <TextField
          value={componentName}
          floatingLabelText="Component Name"
          onChange={e => setComponentName(e.target.value)}
          style={{margin: '0px 10px 20px 10px'}}
        />
        {group.map((obj, idx) => (
          <Feature
            key={`Feature_${idx}`}
            parentIndex={idx}
            text={obj.text}
            content={obj.content}
            // toggleButton={toggleButton}
          />
        ))}
      </div>
    );
  }
}
