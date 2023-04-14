function contagem(n){
    for (var num = 0 ; num <= n ; num++) {
        console.log(`Contando do número ${num} até o número ${n}`)
    }
    if (n > 10){
        return  "Que número grande!"
    } else {
        return  "Número pequeno, consegue contar mais que isso?"
    }
}

console.log(contagem(6))