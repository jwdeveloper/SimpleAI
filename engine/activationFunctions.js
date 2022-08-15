function sigmoid(x, derative = false) {
    if (derative) {
        return x * (1.0 - x);
    }

    return 1 / (1 + Math.pow(Math.E, -x))
}

function tanh(x) {
    return Math.tanh(x)
}

function relu(x) {
    return Math.max(0, x)
}

function leakyRelu(x) {
    return Math.max(0.1 * x, x)
}

function elu(x) {

    if (x >= 0) {
        return x;
    }

    let a = 1;
    return a * (Math.pow(Math.E, x) - 1)
}