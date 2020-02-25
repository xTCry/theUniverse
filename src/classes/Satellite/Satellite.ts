import { createLogger, Logger } from '../../tools/logger';
import { sleep } from '../../tools/Utils';
import config from '../../tools/Config';

export default abstract class Satellite {
    public readonly typeName: string = 'SATELLITE';
    public readonly name: string;
    protected logger: Logger;

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

    public async OnLife() {
        if (!config.SIMULATE[this.typeName].LIFE) return;

        for (let i = 0; i <= 100; i += 25) {
            this.logger.info(`Life... ${i}%`);
            await sleep(200);
        }
    }
}
