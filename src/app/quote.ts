export class Quote {

    upvote:number;
    downvote:number;

    constructor(
        public author:string,
        public publisher:string,
        public content:string,
        public datePosted:Date
        ) {
        this.upvote = 0;
        this.downvote = 0;
    }
}
