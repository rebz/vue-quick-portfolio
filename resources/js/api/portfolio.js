const url = location.protocol+'//'+location.hostname+':1337'
let axios = require('axios')

const portfolio = axios.create({
    baseURL: url
})

export default portfolio
