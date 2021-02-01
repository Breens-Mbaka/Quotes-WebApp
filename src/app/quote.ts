export class Quote {
    showDescription: boolean
    constructor(
    public content:string,
    public publisher:string,
    public author:string,
    ) {
        this.showDescription = false;
    }
}
