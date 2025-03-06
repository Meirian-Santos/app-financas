# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30" /> App Finanças com React Native

![Print Screen App](print_screens/print.jpg)

Este projeto foi criado seguindo o video **[Criando app finanças passo á passo com React Native](https://youtu.be/REulDg3JzzQ)**.

Seu principal objetivo é desenvolver um aplicativo React Native com Expo, usando o Expo Go para visualização em tempo real, além das bibliotecas de animações Moti e React Native Reanimated.

## 🔧 Pré-requisitos

-   [Node.js](https://nodejs.org/)
-   [Expo CLI](https://docs.expo.dev/get-started/installation/)
-   O aplicativo Expo Go instalado no celular, que pode ser adquirido na Play Store.

## 🚀 Iniciar o projeto

1. Abra o seu prompt, navegue até a pasta onde pretende criar o seu aplicativo e execute o comando abaixo:

    ```bash
    npx create-expo-app financa-react-native-app
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd financa-react-native-app
    ```

3. Instale as dependências para a criação das animações:

    ```bash
    npx expo install moti
    npx expo install react-native-reanimated
    ```

    _Comentários:_

    _Foi adicionado react-native-reanimated/plugin plugin no babel.config.js._

    ```json
    module.exports = {
      presets: [
        ... // don't add it here :)
      ],
      plugins: [
        ...
        'react-native-reanimated/plugin',
      ],
    };
    ```

    _Também foi inserido o import do react-native-reanimated no arquivo App.js para que o aplicativo possa usar a biblioteca._

4. Inicie o servidor Expo:

    ```bash
    npx expo start
    ```

5. Abra o aplicativo Expo Go em seu dispositivo móvel e escaneie o QR Code.
