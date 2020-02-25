import Star from './Star';

export default class Sun_Star extends Star {
    name = 'Sun';

    size = 696340;
    luminosity = 1n;
    surrfaceTemperature = 5778;

    public async Load() {
        // const items = Object.values(Items).map(e => new e());
        // this.AddItem(items);

        return true;
    }
}
