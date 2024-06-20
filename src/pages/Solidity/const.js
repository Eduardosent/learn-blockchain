export const code = {
sol:
`//SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

//contract like class
contract MyContract{

    //data types
    string nameContract;
    int canBeNegative = -18000;
    uint16 numberWithoutSign =65535;
    bool isLogged = true;
    enum Casa {Little,Big}//Little is 0, Big is 1 enum is used to give options
    //array
    uint[] numbers = [4,3];
    uint[5] arrayWithFixedLength;
    //struct like object
    struct User {
        address wallet;
        string name;
    }
    //constructor for build contract
    constructor(string memory name){
        nameContract = name;
    }

    //function view public returns isLogged state variable
    function valueIsLogged ()view public returns (bool){
        return isLogged;
    }
    //function change value of isLogged
    function changeIsLogged () public {
        isLogged=!isLogged;
    }
    //function view public returns name contract state variable
    function contractName() view public returns (string memory){
        return nameContract;
    }
    //function pure returns the parameter you enter like yourname
    function yourName(string calldata name)pure public returns (string calldata){
        return name;
    }
}`,
var:
`contract Variables{
    //State Variables
    string public name = "any name";
    address public initialAddress = address(0);
    uint number = 1;

    function variables()public view{
        //Local Variables
        uint nlocal = 2;
        bool bolean = true;

        //Global Variables
        uint timestamp = block.timestamp;
        address sender = msg.sender;
    }
}`,
const:"uint public constant FIVE = 5;",
inmu:
`contract Immutable {

    address public immutable MY_ADDRESS;
    constructor(address _address) {
        MY_ADDRESS = _address;
    }
}`,
mapping:
`mapping(string=>uint) public competitor;
//mapping has to be created before to asign one value and being initialized
//access to competitor['age'] is 0, uint default value is 0
function changeMyMapping(uint _age,uint _medals)public{
    //access to the value with [key]
    competitor['age']=_age;
    competitor['medals']=_medals;
}`,
controlstructs:
`contract ControlStructures {

    string public results;
    uint public num=0;

    function conditionals()public {
        //if//else if//else
        int a = 0;
        if(a<0){
            results = "a is less than 0, ";
        }else if (a==0) {
            results = "a is equeal than 0, ";
        } else {
            results = "a is more than 0, ";
        }
        //ternary
        int b = 2;
        (b==1)? results=string.concat(results,"b equal to 1") : results=string.concat(results,"b equal to 2");

    }

    function loops()public {
        //For cicle
        for(uint i = 0;i>10;i++){
            num++;
        }//exist continue and break to continue or stop loop if(true){continue;}

        //While cicle
        uint ev = 0;
        while(ev<11){
            num++;
        }
    }
}`,
etherandwei:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract EtherUnits {
    uint256 public oneWei = 1 wei;
    // 1 wei is equal to 1
    bool public isOneWei = (oneWei == 1);

    uint256 public oneGwei = 1 gwei;
    // 1 gwei is equal to 10^9 wei
    bool public isOneGwei = (oneGwei == 1e9);

    uint256 public oneEther = 1 ether;
    // 1 ether is equal to 10^18 wei
    bool public isOneEther = (oneEther == 1e18);
}`,
arraym:
`//////////////////0/1/2/3/4 
uint[] numbers = [1,2,3,4,5];
numbers.length; //length of the array
numbers.push(6); //increase array length to 1
numbers.pop(); //decrease array length to 1
//delete or change value in a index position
delete numbers[index];
numbers[index] = newValue;`,
hrequire:
`function transfer(address recipient, uint amount) public {
    require(amount > 0, "Amount must be greater than 0");
    balances[msg.sender] -= amount;
    balances[recipient] += amount;
}`,
hassert:
`function withdraw(uint amount) public {
    assert(balances[msg.sender] >= amount);
    balances[msg.sender] -= amount;
    payable(msg.sender).transfer(amount);
}`,
hrevert:
`function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount, "Insufficient balance");
    balances[msg.sender] -= amount;
    if (!msg.sender.send(amount)) {
        revert("Failed to send funds");
    }
}`,
dataloc:
`contract DataLocations{
    //storage
    string stor = "storage";

    //calldata like parameter
    function any(string calldata parameter)public pure returns(string memory){
        //memory exist menwhile execute the function
        string memory memo = "memory";
        return string.concat(memo, parameter);

        //also exist transient storage that are cleaned after the transaction 
        //for example msg.sender
    }
}`,
multireturns:
`    function namedParams(uint _number,bool _boolean)public pure returns (uint,bool){
    return (_number,_boolean);
}
function toNamedValues()public pure returns( uint x,bool y,bool z){
    //only for use the named parameters 
    namedParams({_number:1, _boolean:true});
    //asign values to the named returners
    return(x=2,y=true,z=false);
}`,
viewandpure:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ViewAndPure {
    uint256 public x = 1;

    // Promise not to modify the state.
    function addToX(uint256 y) public view returns (uint256) {
        return x + y;
    }

    // Promise not to modify or read from the state.
    function add(uint256 i, uint256 j) public pure returns (uint256) {
        return i + j;
    }
}`,
funmodifier:
`contract ModifierFunc{

    uint public ten = 10;//cant be less than 2

    //function modifier
    modifier limit2(){
        require(ten >2,"Ten cant be less than 2");
        _;//underscore is special character only for modifier functions
    }
    //modifier execute after or before the function can avoid something happen
    function rest1toten()public limit2{
        //function work corrently mean ten was greater than 2
        ten-=1;
    }
}`,
event:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Event {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        emit Log(msg.sender, "Hello World!");
        emit Log(msg.sender, "Hello EVM!");
        emit AnotherLog();
    }
}
`,
inheritance:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/* Graph of inheritance
    A
   / \
  B   C
 / \ /
F  D,E

*/

contract A {
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

// Contracts inherit other contracts by using the keyword 'is'.
contract B is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}

// Contracts can inherit from multiple parent contracts.
// When a function is called that is defined multiple times in
// different contracts, parent contracts are searched from
// right to left, and in depth-first manner.

contract D is B, C {
    // D.foo() returns "C"
    // since C is the right most parent contract with function foo()
    function foo() public pure override(B, C) returns (string memory) {
        return super.foo();
    }
}

contract E is C, B {
    // E.foo() returns "B"
    // since B is the right most parent contract with function foo()
    function foo() public pure override(C, B) returns (string memory) {
        return super.foo();
    }
}

// Inheritance must be ordered from “most base-like” to “most derived”.
// Swapping the order of A and B will throw a compilation error.
contract F is A, B {
    function foo() public pure override(A, B) returns (string memory) {
        return super.foo();
    }
}
`
}