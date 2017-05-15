import { observable, action } from 'mobx';

class SettingStore {
  @observable componentName = 'App';
  @observable group = [
    {
      text: 'Life Cycle',
      content: [
          {name: 'componentWillMount', clicked: false},
          {name: 'componentDidMount', clicked: false},
          {name: 'componentWillReceiveProps', clicked: false},
          {name: 'shouldComponentUpdate', clicked: false},
          {name: 'componentWillUpdate', clicked: false},
          {name: 'componentDidUpdate', clicked: false},
          {name: 'componentWillUnmount', clicked: false}
      ]
    }
  ];

  @action setComponentName = (componentName) => {
    this.componentName = componentName;
  }

  @action toggleButton = (parentIndex, contentIndex) => {
    const item = this.group[parentIndex].content[contentIndex];
    item.clicked = !item.clicked;
  }
}

export default new SettingStore();
