import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

@inject('settingStore')
@observer
export default class CodeBlock extends Component {
  static propTypes = {
    settingStore: mobxPropTypes.object,
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  getContent = () => {
    const { componentName } = this.props.settingStore;

    return `
        class ${componentName} extends Component {
            constructor(props) {
                super(props);
            }

            render() {
                return (
                    <div>
                        This is ${componentName}
                    </div>
                )
            }
        }
    `;
  }

  render() {
    return (
      <div>
        <pre key={new Date().getTime()}>
          <code className="language-javascript">
            {this.getContent()}
          </code>
        </pre>
      </div>
    );
  }
}
