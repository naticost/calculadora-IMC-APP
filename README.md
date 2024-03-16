### Calculadora de IMC - React Native

Esta é uma simples aplicação de calculadora de Índice de Massa Corporal (IMC) desenvolvida em React Native. Ela permite que os usuários insiram seu nome, altura e peso, e calcula automaticamente o IMC com base nesses valores. Além disso, fornece uma classificação do estado do peso com base no IMC calculado.

#### Funcionalidades

- Inserir nome, altura e peso.
- Calcular o IMC automaticamente.
- Exibir a classificação do estado do peso com base no IMC.

#### Como usar

1. **Nome:** Insira seu nome.
2. **Altura:** Insira sua altura em metros.
3. **Peso:** Insira seu peso em quilogramas.
4. Clique no botão "Calcular" para obter o resultado do IMC e sua classificação de peso.

#### Classificações de Peso

- **Abaixo de 18.5:** Abaixo do peso.
- **18.5 a 24.9:** Peso normal.
- **25 a 29.9:** Sobrepeso.
- **30 a 34.9:** Obesidade grau 1.
- **35 a 39.9:** Obesidade grau 2.
- **Acima de 40:** Obesidade grau 3.

#### Como Executar

1. Certifique-se de ter o ambiente de desenvolvimento React Native configurado em sua máquina.
2. Clone este repositório: `git clone https://github.com/naticost/calculadora-IMC-APP.git`
3. Navegue até o diretório do projeto: `cd calculadora-IMC-APP`
4. Instale as dependências: `npm install` ou `yarn install`
5. Execute o aplicativo em seu emulador ou dispositivo físico: `npm start` ou `yarn start`

#### Tecnologias Utilizadas

- React Native
- JavaScript
- JSX

#### Scripts Disponíveis

- `android`: Executa o aplicativo no emulador Android.
- `ios`: Executa o aplicativo no emulador iOS.
- `lint`: Executa o ESLint para verificar a conformidade do código.
- `start`: Inicia o servidor de desenvolvimento do React Native.
- `test`: Executa os testes do aplicativo.

#### Dependências

```json
{
  "react": "18.2.0",
  "react-native": "0.72.2"
}

