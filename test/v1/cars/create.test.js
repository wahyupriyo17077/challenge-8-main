const request = require('supertest');
const app = require('../../../app');

describe('GET /v1/cars', () => {
  let token;

  beforeAll((done) => {
    request(app)
      .post('/v1/auth/login')
      .send({
        email: 'adji@binar.com',
        password: 'rahasia',
      })
      .expect(201)
      .end((err, res) => {
        if(err) throw err;
        token = res.body.accessToken;
        done();
      });
  });
  
  it("should response with 201 as status code", async () => {
    const name = "BMW i4";
    const price = 100000;
    const size = "Sedan";
    const image = "https://www.bmw.co.id/content/dam/bmw/common/all-models/i-series/i4/navigation/bmw-i4-mini-landingpage-modelfinder.png";

    return request(app)
      .post("/v1/cars")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`)
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            createdAt: expect.any(String),
            id: expect.any(Number),
            image: expect.any(String),
            isCurrentlyRented: expect.any(Boolean),
            name: expect.any(String),
            price: expect.any(Number),
            size: expect.any(String),
            updatedAt: expect.any(String),
          })
        );
      });
  });

  it("should response with 422 as status code", async () => {
    const name = [];
    const price = null;
    const size = 2;
    const image = "";
    
    return request(app)
      .post("/v1/cars")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`)
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.statusCode).toBe(422);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: expect.any(String),
              message: expect.any(String),
            }
          })
        );
      });
  });
});