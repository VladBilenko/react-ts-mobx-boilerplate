import { action, computed, decorate, observable } from 'mobx';

class TestStore {
  public data: number = 2;

  public get getData() {
    return this.data;
  }

  public updateData(newData: number) {
    this.data = newData;
  }
}

decorate(TestStore, {
  data: observable,
  getData: computed,
  updateData: action,
});

export default new TestStore();
