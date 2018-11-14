import { inject, observer } from 'mobx-react';
import * as React from 'react';

class TestComponent extends React.Component<any> {
  public componentDidMount() {
    this.props.TestStore.updateData(3);
  }

  public render() {
    console.log(this.props.TestStore.getData);
    return <div>Test component</div>;
  }
}

export default inject('TestStore')(observer(TestComponent));
