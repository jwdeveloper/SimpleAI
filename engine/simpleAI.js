

class SimpleAI {

    constructor(model) {
        this.input = model.input;
        this.hiddenlayers = model.hiddenlayers;
        this.output = model.output;

        this.layers = []
        this.layers.push(this.input)
        for (var layer of this.hiddenlayers) {
            this.layers.push(layer);
        }
        this.layers.push(this.output)
        this.setSynapses(this.layers)
        this.setLayersNames(this.layers)
    }

    feed(inputData, outputData) {
        if (!this.validateOutput(outputData)) {
            throw 'invalid output data';
        }
        let output = this.run(inputData)
        let error = []
        for (var i = 0; i < output.length; i++) {

            let errorValue = Math.abs(outputData[i] - output[i]);
            error.push(errorValue)
        }
      
    
        for (var i = this.layers.length - 1; i > 0; i--) {
            error = this.layers[i].backward(error)
        }
        return error;
    }

    run(inputData) {
        if (!this.validateInput(inputData)) {
            throw 'invalid input data';
        }
        this.input.setValues(inputData);
        for (var i = 1; i < this.layers.length; i++) {
            this.layers[i].forward()
        }
        return this.output.getValues();
    }



    setSynapses(layers) {
        let layer = this.input;
        for (var i = 1; i < layers.length; i++) {
            layer.setSynapses(layers[i])
            layer = layers[i]
        }
    }

    setLayersNames() {
        this.input.setName("Input")

        let i = 1;
        for (var layer of this.hiddenlayers) {
            layer.setName("Layer_" + i)
            i++;
        }
        this.output.setName("Output")
    }

    description() {
        for (let layer of this.layers) {
            console.log(layer.name, layer.description())
        }
    }



    validateInput(inputData) {
        if (inputData == null) {
            console.log("NUll data")
            return false;
        }
        if (inputData.length == null) {
            console.log("Not array")
            return false;
        }
        if (inputData.length != this.input.size()) {
            console.log("To small")
            return false;
        }
        return true;
    }

    validateOutput(outputData) {
        if (outputData == null) {
            return false;
        }
        if (outputData.length == null) {
            return false;
        }
        if (outputData.length != this.output.size()) {
            return false;
        }
        return true;
    }

}


