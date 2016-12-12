pragma solidity ^0.4.4;

contract Faucet {
    address owner;
    uint256 sendAmount;
    
    function Faucet() payable {
        owner = msg.sender;
        sendAmount = 1000000000000000000;
    }

    function getBalance() returns (uint) {
         return address(this).balance;
    }

    function getWei() returns (bool) {
        return msg.sender.send(sendAmount);
    }

    function sendWei(address toWhom) payable returns (bool) {
        return toWhom.send(sendAmount);
    }

    function getSendAmount() returns (uint256) {
        return sendAmount;
    }

    function killMe() {
        if (msg.sender == owner) {
            suicide(owner);
        }
    }

    function () payable {}
}
