const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const fs = require('fs');
chai.should();
chai.use(chaiHttp);
console.log("test");
const testJson = fs.readFileSync('/home/admin1/IdeaProjects/qualityManagement/Test/Mocha.json', 'utf-8');
console.log(testJson);
const readJson = JSON.parse(testJson);
console.log(readJson.LENGTH[0]);
describe('Length unit conversion', () => {
    it('with proper enteries should return status code 200', (done) => {
        chai.request(server)
            .get('/convert')
            .send(readJson.LENGTH[0])
            .end((req, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })
    it('with wrong convertTo enteries should return status code 420 ', (done) => {
        chai.request(server)
            .get('/convert')
            .send(readJson.LENGTH[1])
            .end((req, res) => {
                res.should.have.status(420);
                res.body.should.be.a('object');
                done();
            })
    })
    it('with wrong measurement type should return status code 420 ', (done) => {
        chai.request(server)
            .get('/convert')
            .send(readJson.LENGTH[2])
            .end((req, res) => {
                res.should.have.status(420);
                res.body.should.be.a('object');
                done();
            })
    })
})
describe('Temperature unit conversion ', () => {
    it('with all proper enteries to converto celcius from farheniet should return status code 200', (done) => {
        chai.request(server)
            .get('/convert')
            .send(readJson.TEMPERATURE[0])
            .end((req, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })
    it('with all proper enteries and to converto farheniet from celcius should return status code 200', (done) => {
        chai.request(server)
            .get('/convert')
            .send(readJson.TEMPERATURE[1])
            .end((req, res) => {
                res.should.have.status(420);
                res.body.should.be.a('object');
                done();
            })
    })
    it('with one wrong enteries should return status code 420', (done) => {
        chai.request(server)
            .get('/convert')
            .send(readJson.TEMPERATURE[1])
            .end((req, res) => {
                res.should.have.status(420);
                res.body.should.be.a('object');
                done();
            })
    })

})