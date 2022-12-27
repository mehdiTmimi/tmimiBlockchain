const Block = require("./models/Block");
const BlockChain = require("./models/BlockChain");

let tmimiBlockchain = new BlockChain()
tmimiBlockchain.addBlock(new Block(1,"27/12/2022",{info:'the sea is blue'}))
tmimiBlockchain.addBlock(new Block(2,"27/12/2022",{info:'the sky is blue'}))
console.log('---------------------------------------')
console.log('is our bloackchain valid ? ' +tmimiBlockchain.isChainValid())
console.log(JSON.stringify(tmimiBlockchain,null,4))

console.log('---------------------------------------')
tmimiBlockchain.chain[1].data={info:'the sea is red'}
console.log('is our bloackchain valid ? ' +tmimiBlockchain.isChainValid())
