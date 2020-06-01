export class Navitem {
    constructor(
        public id: number,
        public name: string,
        public parent: number,
        public published: boolean,
        public linked: boolean,
        public link: string,
        public sort: number
    ) { }
}