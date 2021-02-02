export class Quote {
    showDescription: boolean;
    constructor(
    public content:string,
    public publisher:string,
    public author:string,
    public datePublished:Date
    ) {
        this.showDescription = false;
    }
}
