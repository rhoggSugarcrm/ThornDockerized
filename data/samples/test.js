const chakram = require('chakram');
const expect = chakram.expect;
const {Agent, Fixtures} = require('@sugarcrm/thorn');

describe('Contacts', function() {
    before(function*() {
    });

    after(function*() {
    });

    it('should create John Smith', function*() {
        // create John Smith
        let response = yield Agent.as(Agent.ADMIN).post('Contacts', {
            first_name: 'John',
            last_name: 'Smith'
        });

        // confirm the response
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.not.be.empty;

        // store contact id for retrieval
        let record_id = response.body.id;
        expect(record_id).to.not.be.empty;

        // validate passed fields
        expect(response.body.first_name).to.be.equal('John');
        expect(response.body.last_name).to.be.equal('Smith');

        // check if we can retrieve the saved record
        response = yield Agent.as(Agent.ADMIN).get('Contacts/' + record_id, {});

        // confirm the response
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.not.be.empty;

        // validate passed fields
        expect(response.body.id).to.not.be.empty;
        expect(response.body.first_name).to.be.equal('John');
        expect(response.body.last_name).to.be.equal('Smith');
    });
});
