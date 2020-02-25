import { createLogger, Logger } from '../../tools/logger';
import { sleep } from '../../tools/Utils';
import config from '../../tools/Config';

export default abstract class Star {
    public readonly typeName: string = 'STAR';
    public readonly name: string;
    protected logger: Logger;

    /**
     * Unit: Km
     */
    public radius: BigInt;
    /**
     * Unit: L⊙ - Luminosity
     */
    public luminosity: BigInt;
    /**
     * Unit: Kelvin
     */
    public surrfaceTemperature: number;

    public abstract async Load(): Promise<boolean>;

    public async Init() {
        this.logger = createLogger(`${this.typeName}.${this.name}`);

        const isLoaded = await this.Load();
        if (isLoaded) {
            this.logger.info('Loaded');
        }

        // for (const item of this.items) {
        //     await item.Init();
        // }
    }
}
