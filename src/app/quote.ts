export class Quote {
    showDescription: boolean;
    upvote: number;
    downvote: number;
    constructor(
    public content:string,
    public publisher:string,
    public author:string,
    ) {
        this.showDescription = false;
        this.upvote = 0;
        this.downvote = 0;
    }
}
