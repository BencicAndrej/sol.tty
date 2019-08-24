const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "statuscode",
        "type": "uint256"
      }
    ],
    "name": "Log",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "code",
        "type": "bytes"
      },
      {
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "eval",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export default class Evaluator {
  static async getInstance(address) {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new (await Web3.getInstance()).eth.Contract(abi, address);

    return this.instance;
  }
}

