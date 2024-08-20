Aqui está um exemplo de um README.md para a sua CLI "Commia":

```markdown
# Commia

**Commia** é uma CLI que facilita a criação de mensagens de commit usando inteligência artificial. Ela gera automaticamente mensagens de commit com base nas alterações feitas no repositório, utilizando o modelo LLaMA 3.1.

## Instalação

### Pré-requisitos

1. **Ollama**: Para usar a Commia, você precisa ter o Ollama instalado em sua máquina. O Ollama é uma API que permite a comunicação com uma IA localmente. Para instalar o Ollama, siga as instruções no site oficial: [Ollama - Official Site](https://ollama.com/).

2. **LLaMA 3.1**: Após instalar o Ollama, instale o modelo de IA LLaMA 3.1 em sua máquina com o comando:
    ```bash
    ollama pull llama3.1
    ```

### Instalando a Commia

Depois de configurar o Ollama e o LLaMA 3.1, você pode instalar a CLI Commia de forma global usando npm:

```bash
npm install commia --global
```

Você também pode usar outros gerenciadores de pacote como yarn ou pnpm.

## Uso

1. No diretório do seu projeto que já possui um repositório Git iniciado, adicione todas as alterações ao stage com o comando:
    ```bash
    git add .
    ```

2. Agora, gere uma mensagem de commit usando o comando:
    ```bash
    commia ia
    ```
    A Commia irá gerar a mensagem de commit, realizar o commit automaticamente e você poderá dar push para o repositório remoto.

### Opções

- `--lang <lang>`: Define o idioma da mensagem de commit (padrão: "en-US").
- `--model <model>`: Define o modelo de IA a ser usado para gerar o texto (padrão: "gemma2").
- `-h, --help`: Exibe a ajuda para o comando.

### Exemplo de Uso

```bash
commia ia --lang pt-BR --model llama3.1
```

## Contribuições

Sinta-se à vontade para contribuir com melhorias e novos recursos para a Commia. Abra uma issue ou envie um pull request no repositório.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
```

Esse README inclui instruções básicas de instalação, uso, e como contribuir, além de informações sobre a licença do projeto. Se precisar de ajustes ou acréscimos, é só avisar!