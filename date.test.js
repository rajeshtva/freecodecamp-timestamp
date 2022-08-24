const request = require('supertest')
const app = require('./app')


describe('this parses dates', () => {
    test('yyyy-mm-dd', async () => {
        const response = await request(app).get('/api/2022-12-04')
        expect(response.statusCode).toBe(200);
        console.log(response.body)
    })

    test('parses unixtimestamp to proper date string', async () => {
        const response = await request(app).get('/api/1451001600000')
        expect(response.statusCode).toBe(200);

        console.log(response.body);
    })
})
