import React, { Component } from 'react';
import SettingBlock from '../SettingBlock';
import CodeBlock from '../CodeBlock';

import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="setting_area">
          <SettingBlock />
        </div>
        <div className="code_area">
          <CodeBlock />
        </div>
      </div>
    );
  }
}
