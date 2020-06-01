import { Navitem } from "./navitem.model";

export class Navbar {
    constructor(
        public id: number,
        public name: string,
        public navitems: Navitem[]
    ) { }
}