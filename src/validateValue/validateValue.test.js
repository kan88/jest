const validateValue = require('./validateValue')

// если один тест, то можно так

// test('Валидация значения', () => {
//     expect(validateValue(50)).toBe(true)
// })

// если несколько тестов, то необходимо обернуть в describe

describe('Серия тестов по валидации значения', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    
    test('Меньше корректного значения', () => {
        expect(validateValue(-49)).toBe(false)
    })

    test('Больше корректного значения', () => {
        expect(validateValue(101)).toBe(false)
    })

    test('Пограничное значение снизу', () => {
        expect(validateValue(0)).toBe(true)
    })

    test('Пограничное значение сверху', () => {
        expect(validateValue(0)).toBe(true)
    })
})