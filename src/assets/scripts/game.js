const game = {
    coresTotal: [],
    corEscolhida: '',
    points: 0,

    gerarCor: function() {

        let cor = 'rgb('
        for (var i = 0; i < 3; i++ ) {
            
                cor += Math.floor(Math.random() * 256);
                if(i < 2) {
                    cor += ', '
                }
        }
        cor += ')'
        this.coresTotal.push(cor);
        return cor;
    },

    escolherCor: function() {
        return this.corEscolhida = this.coresTotal[Math.floor(Math.random() * 5)];
    },

    compararCores: function(cor) {
        let corCerta = this.corEscolhida

        if(cor === corCerta){
            this.points++
            return true
        } else {
            console.log('errado')
            return false
        }

    },

    atribuirValores: function(bola) {
        bola.style.backgroundColor = this.gerarCor();
    },

    zerar: function(condition) {

        if (condition){
            this.coresTotal = [];
            this.corEscolhida = '';
            this.points = 0;
        } else {
            this.coresTotal = [];
            this.corEscolhida = '';
        }
        
    }
}


