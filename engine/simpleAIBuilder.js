



function createAI()
{
    return new SimpleAIBuilder();
}


class SimpleAIBuilder
{

    constructor()
    {
        this.model = 
        {
            input : null,
            hiddenlayers : [],
            output : null,
            defaultFunction : sigmoid
        }
    }

    input(neurons,  activationFuntion = sigmoid)
    {
        this.model.input = new Layer(neurons, activationFuntion);
        return this;
    }

    layer(neurons, activationFuntion = sigmoid)
    {
       this.model.hiddenlayers.push(new Layer(neurons, activationFuntion));
       return this;
    }

    output(neurons, activationFuntion = sigmoid)
    {
        this.model.output = new Layer(neurons, activationFuntion);
        return this;
    }

    build()
    {

        if(this.model.input == null)
        {
            throw 'input layer is required';
        }
        if( this.model.output == null)
        {
            throw 'output layer is required';
        }
        return new SimpleAI(this.model);
    }
}


