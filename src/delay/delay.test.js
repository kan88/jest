const delay = require('./delay')

describe('проверка асинхронной функции', () => {
    test('корректное значение', async () => {
        const sum = await delay(() => 5 + 5, 1000)
        expect(sum).toBe(10)
    })
})