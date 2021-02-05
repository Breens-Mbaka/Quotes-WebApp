export class Quote {
    showDescription: boolean;
    votes: number;
    constructor(
    public content:string,
    public publisher:string,
    public author:string,
    public datePublished:Date
    ) {
        this.showDescription = false;
        this.votes = 0;
    }
}
