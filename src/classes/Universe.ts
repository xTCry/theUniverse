/**
 * Universe
 */
export default class Universe {
    private isInitialized: boolean = false;
    /**
     * Initialize the Universe and destroy it.
     */
    public async Initizlize() {
        if (!this.isInitialized) {
            this.StartBigBoom();
        }
    }

    /**
     * Big Boom
     */
    private async StartBigBoom() {
        // TODO: Big Boom
        this.isInitialized = true;
    }
}
