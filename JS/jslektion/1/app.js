const nyLista = [20,30,40,50,60,70]

/* const cyk = function(){
    for(let i=0; i < nyLista.length; i++)
    console.log(nyLista[i])
};

cyk() */

/* for (let i in nyLista[i]){
    const summa = nyLista[i]+nyLista[i] *.25;
    console.log(summa)
} */

/* nyLista.forEach(){
    console.log(nylista[i]);
} */

/* nyLista.map( (i) =>{
    console.log(i);
})
 */

 const objekt= {
     namen: "fredric",
     yrke: "student",
     id: 10
 }
 Object.keys(objekt).map(
     (i)=> {
         console.log(i)
     }
 )
 Object.values(objekt).map(
     (i) => {
         console.log(i)
     }
 )



