const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());


// only deploy a contract when we have access to external account

beforeEach(()=>{
    // Get a list of Unlock accounts from ganache
    web3.eth.getAccounts().then(fetchAccounts=>{
        console.log(fetchAccounts)
    })


    // Use one of those account to deploy contract


});


describe("Inbox", ()=>{
    it("deploy a contract", ()=>{

    });
})
