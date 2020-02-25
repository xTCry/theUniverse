export const createAdder = <T>(storage: T[], items: T[]): T[] => {
    const added = [];
    for (const item of items) {
        if (!storage.includes(item)) {
            storage.push(item);
            added.push(item);
        }
    }

    return added;
};

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
