const request = require('supertest')
const app = require('./app')


describe('this parses dates', () => {
    test('yyyy-mm-dd', async () => {
        const response = await request(app).get('/api/2022-12-04')
        expect(response.statusCode).toBe(200);
        const unixDate = new Date(response.body.unix);
        const utcDate = Date.parse(response.body.utc);

        console.log(unixDate, utcDate);

    })

    test('parses unixtimestamp to proper date string', async () => {
        const response = await request(app).get('/api/1451001600000')
        expect(response.statusCode).toBe(200);

        console.log(response.body);
    })
})
