pragma solidity ^0.4.17;

contract Faucet {
    address public owner;
    uint256 sendAmount;
    
    function Faucet() public payable {
        owner = msg.sender;
        sendAmount = 1 ether;
    }

    function getBalance() public view returns (uint) {
         return this.balance;
    }

    function getWei() public {
        msg.sender.transfer(sendAmount);
    }

    function sendWei(address toWhom) public {
        toWhom.transfer(sendAmount);
    }

    function getSendAmount() public view returns (uint256) {
        return sendAmount;
    }

    function killMe() public returns (bool) {
        require(msg.sender == owner);
        selfdestruct(owner);
        return true;
    }
    
    function() public payable {}
}
