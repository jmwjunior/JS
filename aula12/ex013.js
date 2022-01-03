var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

/*
Para o JS os dias da semana vem em numeros
0- Domingo
1- Segunda
2 - Terça
3- Quarta
4- Quinta
5- Sexta 
6 - Sabado
*/
switch(diaSem) {
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')    
        break
    case 3:
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5: 
        console.log('Sexta')
    case 6: 
        console.log('Sábado')
    default:
        console.log('[Erro] Dia inválido')
        break    
}