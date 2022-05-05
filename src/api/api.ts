import {instance} from "./instance";

export const Api = {
    async getPlanetsApi() {
        return instance.get('/planets')
    },
    async getResidentsApi() {
        return instance.get('/people')
    }
}


export type planetsData = {
    count: number,
    next: string,
    previous: null,
    results: planetData[]
}

export type planetData = {
    name: string,
    rotation_period: string,
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
    residents: [],
    films: []
    created: string
    edited: string
    url: string
}


export type residentsData = {
    count: number,
    next: string,
    previous: null,
    results: residentType[]
}

export type residentType = {
    name: string,
    height: string,
    mass: string,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string,
    "homeworld": string,
    "films": filmsType,
    "species": [],
    "vehicles": vehiclesType,
    "starships": starshipsType,
    "created": string,
    "edited": string,
    "url": string
}

export type filmsType = {
    films: Array<string>
}

export type vehiclesType = {
    vehicles: Array<string>
}

export type starshipsType = {
    starships: Array<string>
}


