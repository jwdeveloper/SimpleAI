class Synapse {
    constructor(fromNeuron, toNeuron, weight = 1) {
        this.name = ""
        this.weight = weight
        this.fromNeuron = fromNeuron
        this.toNeuron = toNeuron
    }
}
