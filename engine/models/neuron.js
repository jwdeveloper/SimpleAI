class Neuron {
    constructor() {
        this.value = 1;
        this.name = "";
        this.fromSynapses = []
        this.toSynapses = []
    }


    fromValue() {
        let result = 0;
        for (var i = 0; i < this.fromSynapses.length; i++) {
            let synapses = this.fromSynapses[i]
            result += (synapses.weight * synapses.fromNeuron.value)
        }
        return result;
    }

    toValue() {

    }

}
