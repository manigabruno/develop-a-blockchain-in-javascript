
// creation d'un block
class Block {
    constructor(prevHash, txs, nonce) {
        this.prevHash = prevHash;
        this.txs = txs;
        this.nonce = nonce;
        this.time = Date.now();

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