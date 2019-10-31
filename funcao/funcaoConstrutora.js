function Carro(velocidadeMaxima = 200, aceleracao = 5){
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + aceleracao <= velocidadeMaxima){
            velocidadeAtual += aceleracao
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        console.log(velocidadeAtual)
    }
}

const palio = new Carro()
palio.acelerar()
palio.getVelocidadeAtual()

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.getVelocidadeAtual()