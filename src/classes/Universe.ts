import { createLogger, Logger } from '../tools/logger';
import { createAdder, sleep } from '../tools/Utils';
import Galaxy, { Galaxies } from './Galaxy';

/**
 * Universe
 */
export default class Universe {
    private isInitialized: boolean = false;
    private logger: Logger = createLogger('Universe');

    public galaxies: Galaxy[] = [];

    /**
     * Initialize the Universe and destroy it.
     */
    public async Initizlize() {
        if (!this.isInitialized) {
            this.StartBigBoom();
        }

        this.logger.info('Init');
        await this.Load();
        await this.Init();
        this.logger.info('Initialized');

        await sleep(1e3);

        this.logger.info('The destruction of the universe has begun');
        await this.Destroy();
        this.logger.info('The universe is destroyed.');
    }

    /**
     * Big Boom
     */
    private async StartBigBoom() {
        // TODO: Big Boom
        this.isInitialized = true;
    }

    /**
     * Load Galaxies
     */
    private async Load() {
        const galaxies: Galaxy[] = Object.values(Galaxies).map(e => new e());
        this.AddGalaxies(galaxies);
        this.logger.info('All Galaxies loaded');
    }

    /**
     * Initizlize Galaxies
     */
    private async Init() {
        for (const galaxy of this.galaxies) {
            await galaxy.Init();
        }
        this.logger.info('All Galaxies Initialized');
    }

    /**
     * Add Galaxies
     * @param galaxies Added galaxies
     */
    private AddGalaxies(galaxies: Galaxy[]): Galaxy[] {
        return createAdder(this.galaxies, galaxies);
    }

    /**
     * Destroy all the Universe
     */
    public async Destroy() {
        for (const galaxy of this.galaxies) {
            await galaxy.Destroy();
        }
    }
}
