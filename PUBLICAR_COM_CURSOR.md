# 🎯 Publicar no GitHub Usando o Cursor

## Método 1: Via Terminal Integrado do Cursor

### Passo 1: Abrir Terminal no Cursor

1. No Cursor, pressione **Ctrl + `** (backtick) ou **Ctrl + J**
2. Isso abre o terminal integrado na parte inferior

### Passo 2: Instalar Git (se necessário)

No terminal do Cursor, execute:

```powershell
# Verificar se Git está instalado
git --version

# Se não estiver, instale via winget:
winget install Git.Git

# Ou baixe em: https://git-scm.com/download/win
```

### Passo 3: Configurar Git (primeira vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### Passo 4: Inicializar e Fazer Commit

No terminal do Cursor, execute:

```bash
git init
git add .
git commit -m "Initial commit: Scripts para acelerar cursos e-learning"
```

### Passo 5: Criar Repositório no GitHub

1. Abra o navegador: **https://github.com/new**
2. Nome: `e-learning-course-accelerator`
3. Descrição: `Scripts JavaScript para otimizar experiência em cursos e-learning`
4. **NÃO marque** "Initialize with README"
5. Clique em **"Create repository"**

### Passo 6: Conectar e Enviar

No terminal do Cursor, execute (substitua USERNAME e REPO_NAME):

```bash
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Método 2: Usar o Script PowerShell

No terminal do Cursor:

```powershell
.\publicar.ps1
```

O script vai guiar você passo a passo!

## Método 3: Via Interface do Cursor (GitHub Integration)

Se o Cursor tiver integração com GitHub:

1. **Ctrl + Shift + P** (abre comandos)
2. Digite: `Git: Publish to GitHub`
3. Siga as instruções

## 🔗 Como Obter o Link do Repositório

Após criar no GitHub, você verá uma página com o link:

```
https://github.com/SEU_USUARIO/NOME_DO_REPO.git
```

**Exemplo:**
```
https://github.com/raul123/e-learning-course-accelerator.git
```

## ✅ Verificar se Funcionou

Após o push, acesse no navegador:
```
https://github.com/SEU_USUARIO/NOME_DO_REPO
```

Você deve ver todos os arquivos!

## 🐛 Se Der Erro de Autenticação

### Usar Personal Access Token:

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. Nome: `Cursor Push`
4. Marque: `repo`
5. Clique em **"Generate token"**
6. **COPIE O TOKEN** (só aparece uma vez!)
7. Use o token como **senha** quando o Git pedir

## 📋 Comandos Completos (Copie e Cole)

```bash
# Verificar Git
git --version

# Se não tiver, instale primeiro, depois:
git init
git add .
git commit -m "Initial commit: Scripts para acelerar cursos e-learning"

# Depois de criar repositório no GitHub:
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## 💡 Dica: Usar GitHub Desktop

Se preferir interface gráfica:

1. Baixe: https://desktop.github.com/
2. Abra o GitHub Desktop
3. File > Add Local Repository
4. Selecione a pasta do projeto
5. Publish repository
