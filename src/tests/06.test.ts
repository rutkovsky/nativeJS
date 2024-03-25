type PropsType = {
    name: string
    age: number
    lessons: { title: string }[]
    address: {
        street: {
            title: string
        }
    }
}

let props: PropsType

beforeEach(() => {
    props = {
        name: 'Dima',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Mohovaya'
            }
        }
    }
})

test('should be corrected', () => {

    const {name, age, lessons} = props

    expect(age).toBe(32)
    expect(name).toBe('Dima')
    expect(lessons.length).toBe(2)
})