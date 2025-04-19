import { Solidity, Solidity2, Soliity3, TokenMetadata } from "../pages";

export const pages = [
    {name:'Solidity Sintaxis Part 1', route:'/solidity', component:Solidity, level:1},
    {name:'Solidity Sintaxis Part 2', route:'/solidity2', component:Solidity2, level:2},
    {name:'Solidity Sintaxis Part 3', route:'/solidity3', component:Soliity3, level:2},
    {name:'Crear token-spl 2022 con metadata y minteo,transferencia', route:'/token-spl-2022-metadata', component:TokenMetadata, level:1},
];