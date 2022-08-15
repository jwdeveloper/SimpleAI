

class Layer {
    constructor(neuronsCount, activationFunction) {
        this.neurons = [];
        this.name = "";
        this.bias = 1;
        this.activationFunction = activationFunction;
        for (let i = 0; i < neuronsCount; i++) {
            this.neurons.push(new Neuron())
        }
    }

 
    forward() {
        for (var i = 0; i < this.neurons.length; i++)
         {
            let neuron = this.neurons[i]
            let value= neuron.fromValue() + this.bias;
            neuron.value = this.activationFunction(value);
         }
    }

    backward(errors)
    {
         let outputError = []
       
         if(errors.length != this.neurons.length)
         {
            console.log('errors',errors,this.neurons,this.name)
            console.log('inavlaid number of errors')
            return
         }

        for (var i = 0; i < this.neurons.length; i++)
        {
            let neuron = this.neurons[i]
            let error = errors[i];
            let adjustment = error*this.activationFunction(neuron.value,true);
            let synapses = neuron.fromSynapses;

            outputError = []
            for(var j =0;j<synapses.length;j++)
            {
                synapses[j].weight += adjustment
                outputError.push(adjustment)
            }
           
        }
        return outputError;
    }


    setSynapses(nextLayer) {
        let nextNeurons = nextLayer.neurons
        var neurons = this.neurons;
        for (var i = 0; i < neurons.length; i++) {
            for (var j = 0; j < nextNeurons.length; j++) {
                let synapse = new Synapse(neurons[i], nextNeurons[j])
                synapse.name = i + "-" + j;

                neurons[i].toSynapses.push(synapse)
                nextNeurons[j].fromSynapses.push(synapse)
            }
        }

    }


    setValues(data) {
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].value = data[i]
        }
    }

    getValues() {
        var result = []
        for(let neuron of this.neurons)
        {
            result.push(neuron.value)
        }
        return result;
    }


    size() {
        return this.neurons.length;
    }


    setName(name) {
        this.name = name;
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].name = name + " " + i
        }
    }

    description() {

        let values = []
        for (var neuron of this.neurons) {
            values.push(neuron.value)
        }

        let data = {
            neurons: this.neurons,
            values: values,
            activation_function: this.activationFunction.name
        };
        return data
    }
}


