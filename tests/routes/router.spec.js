const router = require('../../app/routes/router')
const request = require('supertest')
const express = require('express')
const packageJSON = require('../../package')

const app = express()

app.use('/', router)

describe('GET /health', () => {
    it('must respond with json', (done) => {
        request(app)
            .get('/health')
            .expect('Content-Type', /json/)
            .expect(
                200,
                {
                    appName: 'himama',
                    version: packageJSON.version,
                    status: 'Running'
                },
                done
            )
    })
})