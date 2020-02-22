import { inject, observer } from 'mobx-react';
import * as React from 'react';

class ComponentExample extends React.Component<any> {
  public render() {
    return <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>;
  }
}

export default inject('TestStore')(observer(ComponentExample));
