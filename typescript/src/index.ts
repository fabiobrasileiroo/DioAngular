type Hero = {
  name: string;
  vulgo: string;
}


function printaObjeto(pessoa: Hero) {
  console.log(pessoa)
}
printaObjeto({name: 'fabio', vulgo: 'cagao'})