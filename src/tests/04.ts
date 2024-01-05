import {CityType, GovernmentBuildingsCityType} from './02';

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(s => s.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: GovernmentBuildingsCityType[], staffCount: number) {
    return buildings.filter(b => b.staffCount > staffCount)
}