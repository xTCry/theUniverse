import Planet from './Planet';

export default class Earth_Planet extends Planet {
    name = 'Earth';

    public async Load() {
        // const items = Object.values(Items).map(e => new e());
        // this.AddItem(items);

        return true;
    }
}
