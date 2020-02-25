import Galaxy from './Galaxy';
import Star, { Stars } from '../Star';
import Planet, { Planets } from '../Planet';

export default class Galaxy_MilkyWay extends Galaxy {
    name = 'Milky Way';

    public async Load() {
        const planets: Planet[] = Object.values(Planets).map(e => new e());
        const stars: Star[] = Object.values(Stars).map(e => new e());

        this.AddStars(stars);
        this.AddPlanets(planets);

        return true;
    }
}
