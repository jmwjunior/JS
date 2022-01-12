let num = [5, 8, 2, 9, 3]

num.sort()
num.push(1)
console.log(num)
console.log(`A minha array tem ${num.length} posições`)
console.log(`O primeiro valor da array é ${num[0]}`)

let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 4 esta na posiçao ${pos}`)
}
