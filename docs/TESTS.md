# Testes

Para rodar testes, estou utilizando o pacote Jest, dentre outros para necessidades específicas (como o mockingoose para 'mockar' operações com o mongoose, por exemplo).

### Pacotes

Pacotes instalados no projeto:

```json
"@babel/preset-typescript",
"@types/jest",
"@types/mockingoose",
"@types/node",
"jest",
"mockingoose",
"ts-jest",
"tsc",
"typescript",
```

Rodei o comando `yarn ts-jest config:init` para criar o arquivo `jest.config.js`

```js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
};
```

O `ts-jest` foi necessário para o uso de typescript nos arquivos de teste para o jest reconhecer e funcionar tudo corretamente.

---

### Referências:

https://mongoosejs.com/docs/typescript.html

https://dev.to/darkmavis1980/how-to-test-mongoose-models-with-jest-and-mockingoose-2k10

https://www.npmjs.com/package/mockingoose

https://sharklabs.com.br/testes-unitarios-com-nodejs-jest-typescript/
