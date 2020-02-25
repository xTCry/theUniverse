import Galaxy from './Galaxy';

export default class Galaxy_MilkyWay extends Galaxy {
    name = 'Milky Way';

    public async Load() {
        return true;
    }
}
