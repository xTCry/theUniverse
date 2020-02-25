const config = {
    SIMULATE: {
        UNIVERSE: {
            LIFE: true,
            OTHER: false,
        },
        GALAXY: {
            OTHER: false,
            LIFE: true,
        },
        STAR: {
            OTHER: false,
            LIFE: true,
        },
        PLANET: {
            OTHER: false,
            LIFE: true,
        },
    },
    SIMULATE_DATA: {
        STAR: {
            count: 999,
            speed: 333,
        },
        PLANET: {
            count: 99,
            speed: 30,
        },
    },
    LOGGER: {
        UNIVERSE: ['log', 'info', 'warn'],
        GALAXY: ['log', 'info', 'warn'],
        STAR: ['log', 'info', 'warn'],
        PLANET: ['log', 'info', 'warn'],
    },
};

export default config;
