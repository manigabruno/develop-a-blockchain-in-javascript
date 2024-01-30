
// creation d'un block
class Block {
    constructor(prevHash, txs, nonce) {
        this.prevHash = prevHash; /* hash du bloc précédent */
        this.txs = txs; /* tableau de transaction */
        this.nonce = nonce; /* Nonmbre arbitraire ou aléatoire qui sert garantir la confidentialité des communications   */
        this.time = Date.now(); /* recupération de la date*/

    }
    // Définition du hash du bloc précédent
    getHash() {
        return this.prevHash + this.getMerkleHash() + this.nonce + this.time + '';
    }
    // definition du merkle Tree qui est l'identifiant des transactions du block
    getMerkleHash() {
        return this.txs.toString()

    }
}
class Blockchain {
    constructor(genesisBlock) {
        this.blocks = new Array()
        this.blocks[genesisBlock.getHash()] = genesisBlock;
    }
    mineBlock() {
        // preuve de travail
        let nonce = Math.floor(Math.random() * 1000) +1;
        let block = new Block(this.getLastBlock(), ['1', '2'], nonce);
        this.blocks[block.getHash()] = block;
    }
    getLastBlock () {
        return ''
    }
}