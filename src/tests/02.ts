export type CityType = {
    houses: HousesCityType[]
    governmentBuildings: GovernmentBuildingsCityType[]
}

type HousesCityType = {
    buildedAt: number
    repaired: boolean
    address: {
        number: number
        street: {
            title: string
        }
    }
}

type GovernmentBuildingsCityType = {
    type: string
    budget: number
    staffCount: number
    address: {
        street: {
            title: string
        }
    }
}


