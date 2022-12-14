import { Sprite } from "./sprite";

export class Pokemon {

    constructor(
        public name: string,
        public types: any,
        public type1?: string,
        public type2?: string,
        public sprite1?: string,
        public sprite2?: string,
        public sprites?: any,
        public user_id?: number,
        public pokemonId?: number,
        public slot?: number,
        public stats?: any, //this will hold pokeapi stats. it gets changed to my DB format before post
        public hp?: string,
        public speed?: string,
        public attack?: string,
        public sAttack?: string,
        public defense?: string,
        public sDefense?: string
    ){}

}
