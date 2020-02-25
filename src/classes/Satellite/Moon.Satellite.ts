import Satellite from './Satellite';

export default class Moon_Satellite extends Satellite {
    name = 'Moon';

    public async Load() {
        // const items = Object.values(Items).map(e => new e());
        // this.AddItem(items);

        return true;
    }
}
