### Moti - Biblioteca para animações React Native

Instalação

```
npx expo install moti
```

Biblioteca depentente:

```
npx expo install react-native-reanimated
```

Adicione react-native-reanimated/plugin plugin no seu babel.config.js.

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

Insira o import do react-native-reanimated no arquivo App.js para que o aplicativo possa usar a biblioteca.
