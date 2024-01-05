import {GovernmentBuildingsCityType, HousesCityType} from './02';

export function getStreetsTitlesOfGovernmentBuildings(governmentBuildings: GovernmentBuildingsCityType[]) {
    return governmentBuildings.map(s => s.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: HousesCityType[]) {
    return houses.map(h => h.address.street.title)
}