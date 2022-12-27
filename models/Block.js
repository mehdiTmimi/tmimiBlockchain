const { SHA256 } = require("crypto-js")

class Block{
    constructor(index, timestamp,data, previousHash='')
    {
        this.index=index
        this.timestamp=timestamp
        this.data=data
        this.nonce=0;
        this.previousHash=previousHash
        this.hash=this.calculateHash()

    }
    calculateHash(){
       return  SHA256(this.index+this.timestamp+this.previousHash+JSON.stringify(this.data)+this.nonce).toString()
    }
    mineBlock(difficulty){
        console.log('mining with difficulty = ' + difficulty)
        let zeros= new Array(difficulty+1).join('0')
        while(zeros!=this.hash.substring(0,difficulty))
        {
         this.nonce++;
         this.hash=this.calculateHash()
        }
        console.log("block mined, hash: "+ this.hash)
    }
}
module.exports=Block;