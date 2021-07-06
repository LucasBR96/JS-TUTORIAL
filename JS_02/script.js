// **********************************************************************************
// Diferentes tipos de loops suportados por javascript                              *
//                                                                                  *
// 1. for - efetua o loop sobre um bloco de código um certo número de vezes         *
// 2. for/in - efetua um loop sobre as propriedades de um objeto                    *
// 3. for/of - efetua um loop sobre os valores de um objeto iterable                *
// 4. while - efetua um loop sobre um bloco de código enquanto uma condição é       *
//            verdadeira                                                            *
// 5. do/while - idem acima, porém é executado pelo menos uma vez                   *
//                                                                                  *
// **********************************************************************************

// 1. Soma dos números de 1 a 5

let soma = 0;
for ( let i = 0; i <= 5; i++ )
	soma += i;
console.log("Soma = ", soma );

// 2. Para percorrer as propriedades de um objeto

const empregado = { Nome: "Lucas", idade: 24, salario: 4500.0 };
for( let campo in empregado )
	console.log( campo, empregado[ campo ], typeof empregado[ campo ] );

// 3. Como percorrer um objeto iterável, como por exemplo, os objetos de uma lista

let lst = [ 1 , 2, 3, 4, 5 ];
for( let x of lst )
	console.log( x, x**2 );

// Comandos continue e break

// comandos while

let x = 5;
while( x < 50 ){
	x = x + 5;
	console.log( x );
}


