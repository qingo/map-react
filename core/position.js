export default class Position{
    constructor(lat, lon){
        this.x = (31.5859851 - lat) / 0.623728;
        this.y = (lon  - 120.623410) / 0.62375;
    }
}