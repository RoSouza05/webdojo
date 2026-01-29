# 📘 Documentação – Testes Automatizados Webdojo (Cypress)

## 📌 Visão Geral
Este projeto contém testes automatizados para a aplicação **Webdojo**, utilizando o framework **Cypress** para validação funcional da aplicação web.

A aplicação Webdojo e os testes automatizados estão no **mesmo repositório**, sendo necessário iniciar a aplicação localmente antes da execução dos testes.

---

## 🧰 Tecnologias Utilizadas
- **Node.js / NPM**
- **Cypress**
- **JavaScript**
- **Serve** (para subir a aplicação localmente)

---

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   └── (arquivos de testes end-to-end)
│
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── dl.pdf
│
├── support/
│   ├── actions/
│   │   └── consultancy.Actions.js
│   ├── commands.js
│   ├── e2e.js
│   └── utils.js
```

### 🔹 e2e/
Contém os testes end-to-end da aplicação, organizados por funcionalidade (ex: login, formulários, fluxos principais).

### 🔹 fixtures/
Armazena massas de dados utilizadas nos testes:
- **cep.json**: dados de CEP para validações de endereço
- **consultancy.json**: dados para testes de formulários de consultoria
- **dl.pdf**: arquivo utilizado para testes de upload

### 🔹 support/
Contém arquivos de suporte e reaproveitamento de código:

- **actions/**: abstração de ações da aplicação (Page Actions)
- **commands.js**: comandos customizados do Cypress
- **e2e.js**: configurações globais executadas antes dos testes
- **utils.js**: funções utilitárias reutilizáveis

---

## ▶️ Executando a Aplicação Webdojo

Antes de rodar os testes, é obrigatório subir a aplicação localmente.

```bash
npm run dev
```

A aplicação será iniciada localmente na porta **3000**.

---

## 🧪 Executando os Testes Automatizados

### 🔹 Executar todos os testes (headless)
```bash
npm run test
```

Viewport: **1440x900**

---

### 🔹 Executar testes com interface gráfica
```bash
npm run test:ui
```

---

### 🔹 Executar apenas os testes de login (Desktop)
```bash
npm run test:login
```

---

### 🔹 Executar testes de login (Mobile)
```bash
npm run test:login:mobile
```

Viewport: **414x896**

---

## 🧩 Boas Práticas Aplicadas
- Separação de responsabilidades (Actions, Utils e Specs)
- Reutilização de comandos customizados
- Uso de fixtures para dados de teste
- Estrutura preparada para escalabilidade

---

## 📄 Observações Importantes
- A aplicação Webdojo deve estar rodando antes dos testes
- Execute `npm install` antes de iniciar

---

## ✨ Próximos Passos
- Adicionar relatórios de execução
- Integrar com CI/CD
- Expandir cobertura de testes

---

📌 Documentação do projeto de testes automatizados da aplicação Webdojo.
