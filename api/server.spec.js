const request = require('supertest')

const server = require('./server.js')

describe('server.js', () => {
   describe('GET /', () => {
      it('should return 200 OK', () => {
         return request(server) // --> the 'return' here makes this asynchronous
            .get('/')
            .expect(200)
      })
      
      it('should return JSON', () => {
         return request(server)
            .get('/')
            .then(res => {
               expect(res.type).toMatch(/json/i)
            })
      })
      
      it('should respond with { api: "up" }', () => {
         return request(server)
            .get('/')
            .then(res => {
               expect(res.body.api).toBe('up')
            })
      })
   })
})