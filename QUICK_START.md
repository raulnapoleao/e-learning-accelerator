# ⚡ Quick Start - Publicar no GitHub

## 🎯 Opção Mais Rápida

### 1. Instalar Git (se não tiver)

**Windows:**
- Baixe: https://git-scm.com/download/win
- Ou: `winget install Git.Git`

### 2. Abrir Terminal no Cursor

- Pressione **Ctrl + `** (backtick)

### 3. Executar Comandos

```bash
git init
git add .
git commit -m "Initial commit: Scripts para acelerar cursos e-learning"
```

### 4. Criar Repositório no GitHub

- Acesse: **https://github.com/new**
- Nome: `e-learning-course-accelerator`
- **NÃO marque** "Initialize with README"
- Clique em **"Create repository"**

### 5. Conectar e Enviar

```bash
# Substitua USERNAME e REPO_NAME
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 6. Autenticar (se pedir)

- Use seu **Personal Access Token** como senha
- Criar token: https://github.com/settings/tokens

## ✅ Pronto!

Acesse: `https://github.com/USERNAME/REPO_NAME`
