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
    }, {
      text: 'React Router',
      content: [
          {name: 'Link', clicked: false}
      ]
    }, {
      text: 'Redux',
      content: [
          {name: 'connect', clicked: false}
      ]
    }
  ];

  @action setComponentName = (componentName) => {
    this.componentName = componentName;
  }
}

export default new SettingStore();
