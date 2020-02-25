import { createLogger, Logger } from '../../tools/logger';
import { createAdder } from '../../tools/Utils';

export default abstract class Galaxy {
    public readonly typeName: string = 'Galaxy';
    public readonly name: string;
    protected logger: Logger;

    public abstract async Load(): Promise<boolean>;

    /**
     * Initialze Galaxy
     */
    public async Init() {
        this.logger = createLogger(`${this.typeName}.${this.name}`);
        
        await this.Load();
    }

    /**
     * Destroy Galaxy
     */
    public async Destroy() {
        // TODO: Destroy all child stars and planets
    }
