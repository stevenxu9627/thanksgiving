// tests for /api/dishes

// supertest is a module that allows us to test our express server
const request = require('supertest');
const { app } = require('./../server/app.js');
const { db, Dish, Person } = require('./../db/index.js');

beforeEach(async done => {
    // wipe the db before each test block
    await db.sync({ force: true });
    done();
});
afterAll(async done => {
    // close the db connection upon completion of all tests
    await db.close();
    done();
});
describe('/api/dishes routes', () => {
    // its up to you to create the test conditions for /api/dishes
    // add as many tests as you feel necessary to fully cover each routes functionality
    const person1 = { name: 'moe', isAttending: true };
    const person2 = { name: 'curly', isAttending: false };
    const person3 = { name: 'john', isAttending: true };
    const person4 = { name: 'tom', isAttending: true };

    const dish1 = { name: 'pizza', description: 'tasty pieces of flour' };
    const dish2 = { name: 'burger', description: 'two buns plus one steak' };
    const dish3 = { name: 'fruit', description: 'a bowl of fresh fruits' };
    describe('GET to /api/dishes', () => {
        it('should retrieve all dishes if no params are given', () => {
            return Promise.all([Dish.create(dish1), Dish.create(dish2)]).then(
                () => {
                    return request(app)
                        .get('/api/dishes')
                        .expect('Content-Type', /json/)
                        .expect(200)
                        .then(response => {
                            const dishes = response.body;
                            expect(dishes.length).toBe(2);
                            expect(dishes).toEqual(
                                expect.arrayContaining([
                                    expect.objectContaining(dish1),
                                    expect.objectContaining(dish2),
                                ])
                            );
                        })
                        .catch(err => {
                            fail(err);
                        });
                }
            )
        });
    });

    describe('GET to /api/dishes/:id', () => {
        it('does a test!', async () => {
            try {
                const [pizza, burger, fruit] = await Promise.all([
                    Dish.create(dish1),
                    Dish.create(dish2),
                    Dish.create(dish3),
                ])
            }
        });
    });

    describe('POST to /api/dishes/', () => {
        it('does a test!', () => {
            fail();
        });
    });

    describe('PUT to /api/dishes/:id', () => {
        it('does a test!', () => {
            fail();
        });
    });

    describe('DELETE to /api/dishes/:id', () => {
        it('does a test!', () => {
            fail();
        });
    });
});
