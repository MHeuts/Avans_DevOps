const {expectionFailed} = require('http-errors');
const request = require('supertest');
const app = require('../../app.js');
const {db, client} = require('../../database.js');

describe('Get Users', () => {
    beforeEach(async () => {
        await db.collection('users').deleteMany({});
    });
    afterAll(async () => {
        await client.close();
    });

    it('should get all users in array', async () => {
        const expected={'foo': 'bar'};
        await db.collection('users').insertOne(expected);
        delete expected._id;
        
        const res = await request(app).get('/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveLength(1)
        expect(res.body[0]).toEqual(expect.objectContaining(expected));
    });
});
