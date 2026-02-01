# 📤 Passo a Passo COMPLETO para GitHub

## ✅ Checklist Antes de Começar

- [ ] Git instalado? (`git --version` no terminal)
- [ ] Conta GitHub criada?
- [ ] Nome do repositório escolhido?

---

## 🚀 PASSO 1: Instalar Git

### Se não tiver Git instalado:

**Opção A - Download Manual:**
1. Acesse: https://git-scm.com/download/win
2. Baixe e instale
3. Durante instalação, marque "Add to PATH"

**Opção B - Via Winget:**
```powershell
winget install Git.Git
```

**Opção C - Via Chocolatey:**
```powershell
choco install git
```

**Verificar:**
```bash
git --version
```

---

## 🔧 PASSO 2: Configurar Git (Primeira Vez)

No terminal do Cursor (Ctrl + `):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

---

## 📦 PASSO 3: Inicializar Repositório

No terminal do Cursor, na pasta do projeto:

```bash
# Inicializar
git init

# Ver o que será enviado
git status

# Adicionar tudo
git add .

# Fazer commit
git commit -m "Initial commit: Scripts para acelerar cursos e-learning"
```

---

## 🌐 PASSO 4: Criar Repositório no GitHub

1. **Acesse:** https://github.com/new
2. **Nome do repositório:** 
   - Sugestão: `e-learning-course-accelerator`
   - Ou: `storyline-speedup`
   - Ou: `course-accelerator`
3. **Descrição:**
   ```
   Scripts JavaScript para otimizar experiência em cursos e-learning
   ```
4. **Visibilidade:**
   - ☑️ Public (qualquer um pode ver)
   - ☐ Private (só você vê)
5. **IMPORTANTE:** 
   - ❌ **NÃO marque** "Initialize with README"
   - ❌ **NÃO marque** "Add .gitignore"
   - ❌ **NÃO marque** "Choose a license"
6. **Clique em:** "Create repository"

---

## 🔗 PASSO 5: Obter URL do Repositório

Após criar, você verá uma página com instruções. A URL será:

```
https://github.com/SEU_USUARIO/NOME_DO_REPO.git
```

**Exemplo:**
```
https://github.com/raul123/e-learning-course-accelerator.git
```

**Copie essa URL!**

---

## 📤 PASSO 6: Conectar e Enviar

No terminal do Cursor, execute (SUBSTITUA a URL):

```bash
# Conectar ao GitHub
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git

# Renomear branch para main
git branch -M main

# Enviar para GitHub
git push -u origin main
```

---

## 🔐 PASSO 7: Autenticação

Na primeira vez, o GitHub vai pedir credenciais:

### Opção 1: Personal Access Token (Recomendado)

1. **Acesse:** https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. **Nome:** `Cursor Push`
4. **Expiração:** Escolha (ex: 90 dias)
5. **Permissões:** Marque `repo` (tudo em repo)
6. Clique em **"Generate token"**
7. **COPIE O TOKEN** (só aparece uma vez!)
8. Quando o Git pedir senha, **cole o token**

### Opção 2: GitHub CLI

```bash
# Instalar GitHub CLI
winget install GitHub.cli

# Autenticar
gh auth login

# Depois fazer push normalmente
git push -u origin main
```

---

## ✅ PASSO 8: Verificar

Após o push bem-sucedido, acesse no navegador:

```
https://github.com/SEU_USUARIO/NOME_DO_REPO
```

Você deve ver:
- ✅ README.md
- ✅ Pasta `scripts/` com os arquivos
- ✅ Pasta `docs/` com documentação
- ✅ LICENSE
- ✅ Todos os arquivos organizados

---

## 🎯 Comandos Completos (Copie e Cole)

```bash
# 1. Verificar Git
git --version

# 2. Configurar (só primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"

# 3. Inicializar
git init
git add .
git commit -m "Initial commit: Scripts para acelerar cursos e-learning"

# 4. Conectar (SUBSTITUA a URL)
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## 🐛 Problemas e Soluções

### "git não é reconhecido"
→ Instale o Git: https://git-scm.com/download/win

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/REPO.git
```

### "authentication failed"
→ Use Personal Access Token ao invés de senha

### "failed to push"
→ Verifique se o repositório foi criado no GitHub

---

## 💡 Dica: Usar o Script Automático

Execute no PowerShell:

```powershell
.\publicar.ps1
```

O script guia você passo a passo!

---

## 📞 Precisa de Ajuda?

1. Verifique se seguiu todos os passos
2. Veja os erros no terminal
3. Consulte `INSTALAR_E_PUBLICAR.md` para mais detalhes
