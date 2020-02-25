import Planet from './Planet';

export default class Mars_Planet extends Planet {
    name = 'Mars';

    public async Load() {
        // const items = Object.values(Items).map(e => new e());
        // this.AddItem(items);

        return true;
    }
}
