export class Content {
    constructor(
        public id: number,
        public name: string,
        public contentText: string,
        public createdAt: Date,
        public updatedAt: Date,
        public published: boolean
    ) { }
}