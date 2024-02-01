type Hero = {
  nome: string,
  vulgo: string,
  telefone: number 
}

function ligarPara(heroi: Hero){
  console.log("ligando para :" + heroi.telefone)
}

ligarPara({
  nome:"fabio",
  vulgo: "progamador nato",
  telefone: 12223232,
})