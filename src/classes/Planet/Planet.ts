import { createLogger, Logger } from '../../tools/logger';
import { sleep } from '../../tools/Utils';
import config from '../../tools/Config';
import Satellite from '../Satellite/Satellite';

export default abstract class Planet {
    public readonly typeName: string = 'PLANET';
    public readonly name: string;
    protected logger: Logger;
    
    public satellites: Satellite[] = [];

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
