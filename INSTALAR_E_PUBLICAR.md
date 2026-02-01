# 🚀 Guia Completo: Instalar Git e Publicar no GitHub

## 📋 Passo 1: Instalar Git (se não tiver)

### Windows:

1. **Baixe o Git:**
   - Acesse: https://git-scm.com/download/win
   - Baixe e instale

2. **Ou use Chocolatey:**
   ```powershell
   choco install git
   ```

3. **Ou use Winget:**
   ```powershell
   winget install Git.Git
   ```

4. **Verificar instalação:**
   ```powershell
   git --version
   ```

## 📋 Passo 2: Configurar Git (primeira vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

## 📋 Passo 3: Inicializar Repositório

Abra o PowerShell ou Terminal na pasta do projeto e execute:

```bash
# Inicializar git
git init

# Ver o que será commitado
git status

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: Scripts para acelerar cursos e-learning"
```

## 📋 Passo 4: Criar Repositório no GitHub

### Opção A: Via Site (Recomendado)

1. Acesse: **https://github.com/new**
2. **Nome:** `e-learning-course-accelerator` (ou outro)
3. **Descrição:** `Scripts JavaScript para otimizar experiência em cursos e-learning`
4. Escolha **Public** ou **Private**
5. **NÃO marque** "Initialize with README"
6. Clique em **"Create repository"**

### Opção B: Via GitHub CLI (se tiver instalado)

```bash
gh repo create e-learning-course-accelerator --public --description "Scripts JavaScript para otimizar experiência em cursos e-learning"
```

## 📋 Passo 5: Conectar e Enviar

Após criar o repositório no GitHub, execute:

```bash
# Adicionar remote (substitua USERNAME e REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Renomear branch para main
git branch -M main

# Enviar para GitHub
git push -u origin main
```

## 📋 Passo 6: Autenticação

Na primeira vez, o GitHub pode pedir autenticação:

### Opção 1: Personal Access Token
1. GitHub > Settings > Developer settings > Personal access tokens
2. Generate new token (classic)
3. Marque `repo`
4. Use o token como senha

### Opção 2: GitHub CLI
```bash
gh auth login
```

## 🔗 Como Obter o Link do Repositório

Após criar no GitHub, você verá uma página com instruções. O link será:

```
https://github.com/SEU_USUARIO/NOME_DO_REPO.git
```

Ou acesse: `https://github.com/SEU_USUARIO/NOME_DO_REPO`

## ✅ Verificar se Funcionou

Após o push, acesse:
```
https://github.com/SEU_USUARIO/NOME_DO_REPO
```

Você deve ver todos os arquivos lá!

## 🐛 Problemas Comuns

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/REPO.git
```

### Erro: "failed to push"
```bash
# Verificar se está autenticado
git config --global credential.helper manager-core

# Tentar novamente
git push -u origin main
```

### Erro: "authentication failed"
- Use Personal Access Token ao invés de senha
- Ou configure SSH keys

## 📝 Próximos Passos Após Publicar

1. Adicionar Topics (tags) no GitHub
2. Adicionar descrição
3. Configurar README (já está pronto!)
4. Criar primeira release (opcional)
