"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarVeiculo = exports.listarVeiculos = exports.persistirVeiculo = void 0;
const Veiculo_1 = require("../model/Veiculo");
let bancoDadosVeiculo = [];
function persistirVeiculo(veiculo) {
    try {
        bancoDadosVeiculo.push(veiculo);
    }
    catch (error) {
        return `Erro ao persistir os dados\n ${error}`;
    }
}
exports.persistirVeiculo = persistirVeiculo;
function listarVeiculos() {
    return bancoDadosVeiculo;
}
exports.listarVeiculos = listarVeiculos;
function inicializarVeiculo() {
    const carro = new Veiculo_1.Veiculo('Carro', 'TOYOTA', 'Próprio', 'Gasolina', 'BRA5I19', 'Branco', 2, 200, 1335);
    const caminhao = new Veiculo_1.Veiculo('Caminhão', 'VOLVO', 'Próprio', 'Diesel', 'Bar8i33', 'Rosa', 3, 330, 30000);
    const moto = new Veiculo_1.Veiculo('moto', 'SUZUKI', 'particular', 'Gasolina', 'ByD3J92', 'Preto', 0, 150, 215);
    const onibus = new Veiculo_1.Veiculo('ônibus', 'Mercedez', 'Próprio', 'Diesel', 'NWE2P42', 'Branco', 4, 350, 80000);
    const carro1 = new Veiculo_1.Veiculo('carro', 'Citroen', 'De representação diplomática', 'Gasolina', 'ADC3E52', 'Verde', 2, 180, 1200);
    const caminhao1 = new Veiculo_1.Veiculo('Caminhão', 'Iveco', 'alugado', 'Elétrico', 'RED1T32', 'Vermelho', 4, 280, 12000);
    persistirVeiculo(carro);
    persistirVeiculo(caminhao);
    persistirVeiculo(moto);
    persistirVeiculo(onibus);
    persistirVeiculo(carro1);
    persistirVeiculo(caminhao1);
}
exports.inicializarVeiculo = inicializarVeiculo;
//# sourceMappingURL=bancoDeDados.js.map