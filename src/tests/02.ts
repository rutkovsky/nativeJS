export type CityType = {
    houses: HousesCityType[]
    governmentBuildings: GovernmentBuildingsCityType[]
}

type HousesCityType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: {
        number: number
        street: {
            title: string
        }
    }
}

export type GovernmentBuildingsCityType = {
    id?: number
    type: string
    budget: number
    staffCount: number
    address: {
        street: {
            title: string
        }
    }
}


