var faucetCompiled = {
  Faucet: {
    code: "0x606060405260008054600160a060020a03191633179055670de0b6b3a764000060015560f28061002f6000396000f3606060405260e060020a600035046312065fe081146042578063148f2e5e1460535780633ba1503614608257806390b08a521460af578063b603cd801460b8575b005b60de30600160a060020a0316315b90565b60de600435600154600090600160a060020a038316908290606082818181858883f15060019695505050505050565b60de60015460009033600160a060020a0316908290606082818181858883f1935050505050600190506050565b60de6001546050565b604060005433600160a060020a039081169116141560f057600054600160a060020a0316ff5b60408051918252519081900360200190f35b56",
    info: {
      abiDefinition: [{
            constant: false,
            inputs: [],
            name: "getBalance",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            type: "function"
        }, {
            constant: false,
            inputs: [{
                name: "toWhom",
                type: "address"
            }],
            name: "sendWei",
            outputs: [{
                name: "",
                type: "bool"
            }],
            type: "function"
        }, {
            constant: false,
            inputs: [],
            name: "getWei",
            outputs: [{
                name: "",
                type: "bool"
            }],
            type: "function"
        }, {
            constant: false,
            inputs: [],
            name: "getSendAmount",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            type: "function"
        }, {
            constant: false,
            inputs: [],
            name: "killMe",
            outputs: [],
            type: "function"
        }, {
            inputs: [],
            type: "constructor"
        }],
      compilerOptions: "--bin --abi --userdoc --devdoc --add-std --optimize -o /tmp/solc442252841",
      compilerVersion: "0.3.2",
      developerDoc: {
        methods: {}
      },
      language: "Solidity",
      languageVersion: "0.3.2",
      source: "contract Faucet { address owner; uint256 sendAmount; function Faucet() { owner = msg.sender; sendAmount = 1000000000000000000; } function getBalance() returns (uint) { return address(this).balance; } function getWei() returns (bool) { msg.sender.send(sendAmount); return true; } function sendWei(address toWhom) returns (bool) { toWhom.send(sendAmount); return true; } function getSendAmount() returns (uint256) { return sendAmount; } function killMe() { if (msg.sender == owner) { suicide(owner); } } }",
      userDoc: {
        methods: {}
      }
    }
  }
}
