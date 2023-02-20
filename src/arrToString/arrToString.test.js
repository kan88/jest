const arrToString = require("./arrTostring")

describe('Фильтр массива на числа и преобразование в строки', () => {
    test('Тестирование чисел и строк', () => { 
        expect(arrToString([1, 2])).toEqual(['1', '2'])
    })

    test('Тестирование чисел и объектов', () => { 
        expect(arrToString([1, [2]])).toEqual(['1'])
    })

    test('Пустой массив', () => { 
        expect(arrToString([])).toEqual([])
    })
})