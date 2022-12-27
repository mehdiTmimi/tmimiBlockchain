const Block = require("./Block")

class BlockChain{
    constructor(){
        this.chain=[this.createGenesisBlock()]
    }
    createGenesisBlock(){
        return new Block(0,"27/12/2022","Genesis Block","0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }
    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash
        newBlock.hash=newBlock.calculateHash();
        this.chain.push(newBlock)
    }
    isChainValid(){
        for(let i=1;i<this.chain.length;i++)
        {
           let currentBlock=this.chain[i]
           let previousBlock=this.chain[i-1]

            if(currentBlock.hash!==currentBlock.calculateHash())
                return false
            if(currentBlock.previousHash!==previousBlock.hash)
                return false
        }
        return true;
    }
}
module.exports=BlockChain