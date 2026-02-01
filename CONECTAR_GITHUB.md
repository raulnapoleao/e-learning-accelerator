# 🚀 Conectar ao GitHub - Últimos Passos

## ✅ Status Atual

- ✅ Git instalado e configurado
- ✅ Repositório inicializado
- ✅ Commit inicial feito (27 arquivos)

## 📤 Próximos Passos

### 1. Criar Repositório no GitHub

1. Acesse: **https://github.com/new**
2. **Nome do repositório:** 
   - Sugestão: `e-learning-course-accelerator`
   - Ou escolha outro nome
3. **Descrição:**
   ```
   Scripts JavaScript para otimizar experiência em cursos e-learning
   ```
4. **Visibilidade:**
   - ☑️ Public (recomendado)
   - ☐ Private (só você vê)
5. **IMPORTANTE:** 
   - ❌ **NÃO marque** "Initialize with README"
   - ❌ **NÃO marque** "Add .gitignore"
   - ❌ **NÃO marque** "Choose a license"
6. Clique em **"Create repository"**

### 2. Copiar URL do Repositório

Após criar, você verá uma página com instruções. A URL será algo como:

```
https://github.com/SEU_USUARIO/NOME_DO_REPO.git
```

**Exemplo:**
```
https://github.com/raul123/e-learning-course-accelerator.git
```

**COPIE ESSA URL!**

### 3. Conectar e Enviar

No terminal do Cursor (Ctrl + `), execute:

```bash
# Atualizar PATH (se necessário)
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Conectar ao GitHub (SUBSTITUA a URL)
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git

# Renomear branch para main
git branch -M main

# Enviar para GitHub
git push -u origin main
```

### 4. Autenticação

Na primeira vez, o GitHub vai pedir credenciais:

**Username:** Seu usuário do GitHub

**Password:** Use um **Personal Access Token** (não sua senha!)

#### Como criar o token:

1. Acesse: **https://github.com/settings/tokens**
2. Clique em **"Generate new token (classic)"**
3. **Nome:** `Cursor Push`
4. **Expiração:** Escolha (ex: 90 dias)
5. **Permissões:** Marque `repo` (tudo em repo)
6. Clique em **"Generate token"**
7. **COPIE O TOKEN** (só aparece uma vez!)
8. Quando o Git pedir senha, **cole o token**

### 5. Verificar

Após o push bem-sucedido, acesse no navegador:

```
https://github.com/SEU_USUARIO/NOME_DO_REPO
```

Você deve ver todos os arquivos! ✅

---

## 🎯 Comandos Completos (Copie e Cole)

```bash
# Atualizar PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Conectar (SUBSTITUA a URL)
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## 🐛 Problemas?

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

## ✅ Pronto!

Após o push, seu projeto estará no GitHub e você poderá compartilhar o link!
