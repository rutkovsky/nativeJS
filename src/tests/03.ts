export type StudentType = {
    technologies: TechnologiesStudentType[]
    isActive: boolean
    address: { city: { title: string } }
}

type TechnologiesStudentType = {
    title: string
    id: number
}

import {CityType} from './02';

export function addSkill(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true
}

export function changeStudentLive(student: StudentType, city: string) {
    return student.address.city.title === city
}

export function changeBudget(city: CityType, money: number) {
    city.governmentBuildings[0].budget+=money
    city.governmentBuildings[1].budget+=money
}

export function repairHouse(city: CityType) {
    city.houses[1].repaired = true
}

export function toFireStaff(city: CityType, fireStaff: number) {
    city.governmentBuildings[0].staffCount-=fireStaff
}

export function toHireStaff(city: CityType, hireStaff: number) {
    city.governmentBuildings[0].staffCount+=hireStaff
}