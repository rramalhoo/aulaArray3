function ex1(){
    const nomesA = ["Alex", "Maria", "Eduardo", "Isaebella" ];
    const nomesB = ["Mariana", "Cida", "Marcos", "João", "Rafael"]
    const nomesC = nomesA.concat(nomesB);
    alert(nomesC);
}


function ex2(){
    const nomes = ["Alex", "Maria", "Eduardo", "Isaebella", 
        "Mariana", "Cida", "Marcos", "João", "Rafael"
    ]
    const nomesB = nomes.slice(nomes.lenght / 2);
    alert(nomesB)
}


function ex3(){
    const valores = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];
    const copiaValores = valores.reverse();
    alert(copiaValores)

}