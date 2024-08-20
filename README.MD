# 🚀 Commia

**Commia** é uma CLI que facilita a criação de mensagens de commit usando inteligência artificial. Ela gera automaticamente mensagens de commit com base nas alterações feitas no repositório, utilizando o modelo LLaMA 3.1 por padrão.

## ⚙️ Instalação

### Pré-requisitos

1. **Ollama**: Para usar a Commia, você precisa ter o Ollama instalado em sua máquina. O Ollama é uma API que permite a comunicação com uma IA localmente. Para instalar o Ollama, siga as instruções no site oficial: [Ollama - Official Site](https://ollama.com/).

2. **Modelos de IA**: Após instalar o Ollama, você precisa fazer o download do modelo de IA que deseja utilizar. Por padrão, a Commia utiliza o modelo **LLaMA 3.1**, que pode ser baixado com o comando:
    ```bash
    ollama pull llama3.1
    ```
    Se quiser utilizar um modelo diferente, certifique-se de fazer o download do modelo desejado usando o comando `ollama pull <nome-do-modelo>` antes de utilizá-lo com a Commia.

### 📦 Instalando a Commia

Depois de configurar o Ollama e o modelo de IA desejado, você pode instalar a CLI Commia de forma global usando npm:

```bash
npm install commia --global
```

Você também pode usar outros gerenciadores de pacote como yarn ou pnpm.

## 🚀 Uso

1. No diretório do seu projeto que já possui um repositório Git iniciado, adicione todas as alterações ao stage com o comando:
    ```bash
    git add .
    ```

2. Agora, gere uma mensagem de commit usando o comando:
    ```bash
    commia ia
    ```
    A Commia irá gerar a mensagem de commit, realizar o commit automaticamente, e você poderá dar push para o repositório remoto.

### ⚙️ Opções

- `--lang <lang>`: Define o idioma da mensagem de commit (padrão: "en-US").
- `--model <model>`: Define o modelo de IA a ser usado para gerar o texto. Por padrão, a Commia utiliza o modelo **LLaMA 3.1**. No entanto, você pode utilizar qualquer IA suportada pelo Ollama, alterando essa flag para o modelo desejado. **Lembre-se de fazer o pull do modelo escolhido usando o Ollama antes de utilizá-lo.**
- `-h, --help`: Exibe a ajuda para o comando.

### 🔍 Exemplo de Uso

Para gerar uma mensagem de commit utilizando o modelo LLaMA 3.1:

```bash
commia ia --lang pt-BR --model llama3.1
```

Ou, para utilizar um outro modelo suportado pelo Ollama:

1. Primeiro, faça o download do modelo desejado:
    ```bash
    ollama pull <nome-do-modelo>
    ```

2. Depois, utilize a Commia especificando o modelo:
    ```bash
    commia ia --model <nome-do-modelo>
    ```

Se a flag `--model` não for passada, o modelo **LLaMA 3.1** será usado por padrão.

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você tiver ideias para novos recursos, correções de bugs ou melhorias gerais, fique à vontade para abrir uma issue ou enviar um pull request.

### Como Contribuir

1. **Fork** o repositório.
2. Crie uma nova branch para a sua feature ou correção:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça suas alterações e commit:
    ```bash
    git commit -m "Descrição das mudanças"
    ```
4. Envie suas alterações para o seu fork:
    ```bash
    git push origin minha-feature
    ```
5. Abra um pull request no repositório original.

### 🐞 Reportando Problemas

Se encontrar algum problema, por favor, abra uma issue detalhando o problema e como reproduzi-lo.

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).