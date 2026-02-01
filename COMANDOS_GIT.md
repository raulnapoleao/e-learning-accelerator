# 📤 Comandos para Publicar no GitHub

## 1. Inicializar Repositório

```bash
git init
git add .
git commit -m "Initial commit: Scripts para acelerar cursos e-learning"
```

## 2. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome: `e-learning-course-accelerator` (ou outro)
3. Descrição: "Scripts JavaScript para otimizar experiência em cursos e-learning"
4. Escolha Public ou Private
5. **NÃO** marque "Initialize with README"
6. Clique em "Create repository"

## 3. Conectar e Fazer Push

```bash
# Adicionar remote (substitua USERNAME e REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Renomear branch para main
git branch -M main

# Fazer push
git push -u origin main
```

## 4. Verificar Arquivos que Serão Enviados

```bash
# Ver o que será commitado
git status

# Ver arquivos que serão enviados
git ls-files
```

## 5. Se Precisar Remover Arquivos Sensíveis

```bash
# Remover arquivo do git (mas manter local)
git rm --cached arquivo.md

# Commit a remoção
git commit -m "Remove arquivo sensível"
```

## 6. Atualizar Repositório

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

## 📋 Checklist Antes do Push

- [ ] Verificar `.gitignore` está correto
- [ ] Remover referências a empresas específicas
- [ ] Remover URLs específicas
- [ ] Verificar se não há dados sensíveis
- [ ] README completo
- [ ] LICENSE adicionada

## 🔍 Verificar o que Será Enviado

```bash
# Ver todos os arquivos que serão commitados
git ls-files

# Ver diferenças
git diff --cached
```
