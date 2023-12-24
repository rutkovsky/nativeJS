import {addSkill, changeBudget, changeStudentLive, makeStudentActive, repairHouse, StudentType, toFireStaff, toHireStaff} from './03';
import {CityType} from './02';

let city: CityType;
let student: StudentType;


beforeEach(() => {
        student = {
            technologies: [
                {title: 'HTML', id: 1},
                {title: 'CSS', id: 2},
                {title: 'React', id: 3},
            ],
            isActive: false,
            address: {
                city: {
                    title: 'Minsk'
                }
            }
        }
    city = {
        houses: [
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street',
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: 'Hogwarts street',
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'Souths park str'
                    }
                }
            }
        ]
    }
    }
)

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('does student live in city', () => {
    expect(student.address.city.title).toBe('Minsk')
    const result1 = changeStudentLive(student, 'Moscow')
    const result2 = changeStudentLive(student, 'Minsk')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

test('Budget should be changed for HOSPITAL', () => {
    expect(city.governmentBuildings[0].budget).toBe(200000)
    changeBudget(city, 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    expect(city.governmentBuildings[1].budget).toBe(500000)
    changeBudget(city, -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repaired', () => {
    repairHouse(city)
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    toFireStaff(city, 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hire', () => {
    toHireStaff(city, 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})