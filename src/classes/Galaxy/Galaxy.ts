import { createLogger, Logger } from '../../tools/logger';
import { createAdder } from '../../tools/Utils';
import Star from '../Star/Star';
import Planet from '../Planet/Planet';

export default abstract class Galaxy {
    public readonly typeName: string = 'Galaxy';
    public readonly name: string;
    protected logger: Logger;

    public stars: Star[] = [];
    public planets: Planet[] = [];

    public abstract async Load(): Promise<boolean>;

    /**
     * Initialze Galaxy
     * Loading and initializing child stars and planets
     */
    public async Init() {
        this.logger = createLogger(`${this.typeName}.${this.name}`);
        
        await this.Load();
        this.logger.info('All galaxy stars and planets loaded');

        for (const star of this.stars) {
            await star.Init();
        }

        for (const planet of this.planets) {
            await planet.Init();
        }
        this.logger.info('All galaxy stars and planets Initialized');
    }

    /**
     * Destroy Galaxy
     */
    public async Destroy() {
        // TODO: Destroy all child stars and planets
    }

    public AddStars(stars: Star[]): Star[] {
        return createAdder(this.stars, stars);
    }

    public AddPlanets(planets: Planet[]): Planet[] {
        const added = [];
        for (const planet of planets) {
            if (!this.planets.includes(planet)) {
                this.planets.push(planet);
                added.push(planet);
            }
        }

        return added;
    }

    /**
     * Life procces in the galaxy
     */
    public async OnLife() {
        const lifeProcesses = [
            this.stars.map(e => e.OnLife()),
            this.planets.map(e => e.OnLife()),
        ];
        
        await Promise.all([].concat(...lifeProcesses));
    }
}
