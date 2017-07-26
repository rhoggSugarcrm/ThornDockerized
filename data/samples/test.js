const chakram = require('chakram');
const expect = chakram.expect;
const {Agent, Fixtures} = require('@sugarcrm/thorn');

describe('Contacts', function() {
    before(function*() {
        let account = {
            module: 'Accounts',
            attributes: {
                name: 'John Smith Corp',
                assigned_user_id: '1'
            }
        };

        this.account = yield Fixtures.create([account]);        
    });

    after(function*() {
        yield Fixtures.cleanup();
    });

    it('should create John Smith', function*() {
        // create John Smith
        var first_name = 'John';
        var last_name = 'Smith';    
 
        let response = yield Agent.as(Agent.ADMIN).post('Contacts', {
            first_name: first_name,
            last_name: last_name,
            account_id: this.account.Accounts['0'].id
        });

        // confirm the response
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.not.be.empty;

        // store contact id for retrieval
        let record_id = response.body.id;
        expect(record_id).to.not.be.empty;

        // validate passed fields
        expect(response.body.first_name).to.be.equal(first_name);
        expect(response.body.last_name).to.be.equal(last_name);
        expect(response.body.account_id).to.be.equal(this.account.Accounts['0'].id);

        // check if we can retrieve the saved record
        response = yield Agent.as(Agent.ADMIN).get('Contacts/' + record_id, {});

        // confirm the response
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.not.be.empty;

        // validate passed fields
        expect(response.body.id).to.not.be.empty;
        expect(response.body.first_name).to.be.equal(first_name);
        expect(response.body.last_name).to.be.equal(last_name);
        expect(response.body.account_id).to.be.equal(this.account.Accounts['0'].id);

        // remove the record
        response = yield Agent.as(Agent.ADMIN).delete('Contacts/' + record_id, {});

        // confirm the response
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response).to.not.be.empty;

        // validate id
        expect(response.body.id).to.not.be.empty;
        expect(response.body.id).to.be.equal(record_id);
    });
});
