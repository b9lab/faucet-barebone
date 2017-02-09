var faucetCompiled = {
    "<stdin>:Faucet": {
        code: "0x60606040525b60008054600160a060020a03191633600160a060020a0316179055670de0b6b3a76400006001555b5b6101c48061003d6000396000f300606060405236156100515763ffffffff60e060020a60003504166312065fe0811461005a578063148f2e5e1461007c5780633ba15036146100a457806390b08a52146100c8578063b603cd80146100ea575b6100585b5b565b005b341561006257fe5b61006a6100fc565b60408051918252519081900360200190f35b610090600160a060020a036004351661010b565b604080519115158252519081900360200190f35b34156100ac57fe5b61009061013b565b604080519115158252519081900360200190f35b34156100d057fe5b61006a610169565b60408051918252519081900360200190f35b34156100f257fe5b610058610170565b005b600160a060020a033016315b90565b600154604051600091600160a060020a0384169181156108fc02919084818181858888f19450505050505b919050565b600154604051600091600160a060020a0333169181156108fc02919084818181858888f19450505050505b90565b6001545b90565b60005433600160a060020a039081169116141561005557600054600160a060020a0316ff5b5b5600a165627a7a72305820dee335bf9dc1ba53ff034471580bfad533e100aa01778c3f86a4ea9802cf88d20029",
        info: {
            abiDefinition: [{
                constant: false,
                inputs: [],
                name: "getBalance",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: false,
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
                payable: true,
                type: "function"
            }, {
                constant: false,
                inputs: [],
                name: "getWei",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: false,
                type: "function"
            }, {
                constant: false,
                inputs: [],
                name: "getSendAmount",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: false,
                type: "function"
            }, {
                constant: false,
                inputs: [],
                name: "killMe",
                outputs: [],
                payable: false,
                type: "function"
            }, {
                inputs: [],
                payable: true,
                type: "constructor"
            }, {
                payable: true,
                type: "fallback"
            }],
            compilerOptions: "--combined-json bin,abi,userdoc,devdoc --add-std --optimize",
            compilerVersion: "0.4.9",
            developerDoc: {
            methods: {}
            },
            language: "Solidity",
            languageVersion: "0.4.9",
            source: "pragma solidity ^0.4.5; contract Faucet { address owner; uint256 sendAmount; function Faucet() payable { owner = msg.sender; sendAmount = 1000000000000000000; } function getBalance() returns (uint) { return address(this).balance; } function getWei() returns (bool) { return msg.sender.send(sendAmount); } function sendWei(address toWhom) payable returns (bool) { return toWhom.send(sendAmount); } function getSendAmount() returns (uint256) { return sendAmount; } function killMe() { if (msg.sender == owner) { suicide(owner); } } function () payable {} } ",
            userDoc: {
                methods: {}
            }
        }
    }
};
