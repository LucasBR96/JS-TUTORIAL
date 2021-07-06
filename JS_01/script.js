// ***************************************************
// Tipos primitivos em javascript
// - number 
// - string
// - boolean
// - undefined
// ***************************************************

// --- numericos -------------------
var i;
i = 10;
var j = 15;
var k = i + j;

console.log( i , j , k );
console.log( typeof i );

// --- booleanos -------------------
var a = true;
var b = false;
var c = a + b; // <- casting para numerico aqui
console.log( a , b , a + b );

// --- strings ---------------------
var n = "Pato ";
var m = "do campo";
console.log( n + m ); 

// ***************************************************
// Operadores aritiméticos
// 
// + <- soma
// - <- subtracão
// * <- multiplicação
// / <- divisão  
// % <- resto
// ++ <- incremento
// -- <- decremento
// ***************************************************

let x = 11;
let y = 6;

let z = x + y;
console.log( z );

let resto = x%y;
console.log( resto );

console.log( ++z ); // <- incrementa antes de imprimir na tela
console.log( z++ ); // <- incrementa após imprimir na tela
console.log( z );


// Op booleanas --------------------------------------
// Objetos & Funções --------------------------------

let empregado = { nome: "Pedro" , idade:18 };
console.log( "1. " , empregado );
console.log( "2. " , typeof empregado );
console.log( "3. " , typeof empregado.nome) ;
console.log( "4. " , typeof empregado.idade );

campo = "nome"; 
console.log( "5. " ,empregado[ campo ] );

campo = "idade"; 
console.log( "6. " ,empregado[ campo ] );

function dados( emp ){
	s1 = emp.nome;
	s2 = String( emp.idade );

	console.log( s1 + " tem " + s2 + " anos." );
}
dados( empregado );
console.log( typeof dados );
