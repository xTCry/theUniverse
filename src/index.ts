import Universe from './classes/Universe';

/**
 * Starting Point Of The Whole World
 */
const theUniverse = new Universe();
theUniverse
    .Initizlize()
    .then()
    .catch(e => console.error(e));
