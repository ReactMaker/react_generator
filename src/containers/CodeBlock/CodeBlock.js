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

  getImportBlock = () => {
    const importBlock = [`
        import React, { Component } from 'react';`];

    return `${importBlock}
    `;
  }

  getContent = () => {
    const { componentName, group } = this.props.settingStore;

    const lifecycle = group[0].content
      .filter(x => x.clicked)
      .map(obj => (`
          ${obj.name}() {
            console.log('${obj.name}');
          }
      `));

    return `
        class ${componentName} extends Component {
          state = {
            componentName: '${componentName}'
          }
          ${lifecycle.join('')}
          render() {
            const { componentName } = this.state;

            return (
              <div>
                <p>component: ${componentName}</p>
                <p>state has componentName: { componentName }</p>
              </div>
            );
          }
        }
    `;
  }

  getExportBlock = () => {
    const { componentName } = this.props.settingStore;

    return `
        export default ${componentName};
    `;
  }

  render() {
    return (
      <div>
        <pre key={new Date().getTime()}>
          <code className="language-javascript">
            {this.getImportBlock()}
            {this.getContent()}
            {this.getExportBlock()}
          </code>
        </pre>
      </div>
    );
  }
}
