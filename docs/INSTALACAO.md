# 📦 Guia de Instalação

## Requisitos

- Navegador Google Chrome ou Chromium
- Acesso ao Console do Desenvolvedor
- Curso carregado em plataforma e-learning

## Instalação Manual

### Método 1: Console do Navegador (Recomendado)

1. Abra o curso no navegador
2. Pressione `F12` para abrir DevTools
3. Vá na aba **"Sources"** (ou "Elementos")
4. Na lista à esquerda, encontre o **iframe** do conteúdo
5. Clique no iframe para selecionar
6. Vá na aba **"Console"** dentro desse contexto
7. Cole o script desejado
8. Pressione Enter

### Método 2: Bookmarklet

1. Crie um novo bookmark no Chrome
2. Edite o bookmark
3. Cole o código do script como URL (precedido de `javascript:`)
4. Clique no bookmark quando estiver no curso

### Método 3: Extensão do Chrome

1. Crie uma extensão simples
2. Adicione o script como content script
3. Configure para injetar no iframe

## Verificação

Após aplicar o script, verifique:

```javascript
// Verificar se botões estão desbloqueados
document.querySelectorAll('[disabled]').length

// Verificar velocidade de vídeos
document.querySelectorAll('video').forEach(v => console.log(v.playbackRate))
```

## Desinstalação

Para remover o script:

1. Recarregue a página (F5)
2. Ou execute no console:
```javascript
location.reload();
```
