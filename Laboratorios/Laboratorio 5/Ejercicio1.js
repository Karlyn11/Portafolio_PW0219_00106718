function arrayDatos(array){
    var mifuncion=0
    let sum=0;
    let promedio =0;
    for(let i=0; i<array.length;i++){
      switch(typeof array[i]){
          case 'function':
          mifuncion++;
      }
    }
    console.log(mifuncion);
     }