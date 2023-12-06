import { Veiculo } from "../model/Veiculo";

let bancoDadosVeiculo: Veiculo[] = [];

export function persistirVeiculo(veiculo: Veiculo) {
    try {
        bancoDadosVeiculo.push(veiculo);
    } catch (error) {
        return `Erro ao persistir os dados\n ${error}`;
    }
}

export function listarVeiculos() {
    return bancoDadosVeiculo;
}

export function inicializarVeiculo() {
    const carro = new Veiculo('Carro', 'TOYOTA', 'Próprio', 'Gasolina', 'BRA5I19', 'Branco', 2, 200, 1335);
    const caminhao = new Veiculo('Caminhão', 'VOLVO', 'Próprio', 'Diesel', 'Bar8i33', 'Rosa', 3, 330, 30000);
    const moto = new Veiculo('moto', 'SUZUKI', 'particular', 'Gasolina', 'ByD3J92', 'Preto', 0, 150, 215);
    const onibus = new Veiculo('ônibus', 'Mercedez', 'Próprio', 'Diesel', 'NWE2P42', 'Branco', 4, 350, 80000);
    const carro1 = new Veiculo('carro', 'Citroen','De representação diplomática', 'Gasolina', 'ADC3E52', 'Verde', 2, 180, 1200);
    const caminhao1 =  new Veiculo('Caminhão', 'Iveco', 'alugado', 'Elétrico', 'RED1T32', 'Vermelho', 4, 280, 12000);
    persistirVeiculo(carro);
    persistirVeiculo(caminhao);
    persistirVeiculo(moto);
    persistirVeiculo(onibus);
    persistirVeiculo(carro1);
    persistirVeiculo(caminhao1);
}
