const square = require('./square')

describe('Возведение в степень', () => {
    // либо так либо объединить как ниже
    // test('Проверка числа', () => {
    //     expect(square(2)).toBe(4)
    // })
    // test('Больше 0', () => {
    //     expect(square(2)).toBeGreaterThan(1)
    // })
    // test('Проверка числа', () => {
    //     expect(square(2)).toBeLessThan(4000)
    // })
    // test('Проверка числа', () => {
    //     expect(square(2)).not.toBeUndefined()
    // })
    // let mock;
    // beforeEach(() => {
    //     каждый раз перед каждый тестом
    // })
    // beforeAll(() => {
    //     один раз перед всеми тестами
    // })
    // test('Проверка на корректность', () => {
    //     expect(square(2)).toBe(4)
    //     expect(square(2)).toBeGreaterThan(1)
    //     expect(square(2)).toBeLessThan(4000)
    //     expect(square(2)).not.toBeUndefined()
    // })

    // afterAll(() => {
    //     один раз после всеми тестами
    // })

    test('Проверка количества вызовов', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)    
    })

    test('Проверка количества вызовов', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)    
    })

    afterEach(() => {

        //очищает моки иначе бы количество вызова функции во втором тесте было бы ошибочным
        jest.clearAllMocks()
    })
})