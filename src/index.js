calcularNivel();
// Função para calcular o saldo de partidas ranqueadas e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de partidas ranqueadas
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível do jogador com base no saldo de vitórias
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Retorna o resultado
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
const resultado = calcularNivel(91, 20);
console.log(resultado); // Saída: O Herói tem um saldo de 50 está no nível de Ouro
