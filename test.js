



const ai = createAI()
.input(3)
.layer(10)
.output(1)
.build();   

data = 
[
    { input : [0,0,0], output :[0]},
    { input : [0,0,1], output :[0]},
    { input : [0,1,1], output :[0]},
    { input : [1,0,1], output :[1]},
    { input : [1,1,1], output :[1]},
]

for(let row of data)
{
        ai.feed(row.input, row.output)
}


let result = ai.run([1,0,0])
console.log("Result",result)
ai.description()