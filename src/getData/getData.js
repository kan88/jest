const axios = require('axios');
const arrToString = require('../arrToString/arrToString')

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const usersIds = response.data.map(item => item.id)
        return arrToString(usersIds)
    } catch (error) {
        console.error(error)
    }

}

module.exports = getData