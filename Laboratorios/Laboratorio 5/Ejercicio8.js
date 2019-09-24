function binario{
    let decimal =255;

    let decimalEnBinario =decimal.toString(2);
    console.log("El numero decimal %s en binario %es", decimal,decimalEnBinario);

    let decimalEnOctal =decimal.toString(8);
    console.log("El numero decimal %s en octal es %s", decimal,decimalEnOctal);

    let decimalEnHexagesimal =decimal.toString(16);
    console.log("El numero decimal %s en hexadecimal es %s", decimal,decimalEnHexagesimal);
}