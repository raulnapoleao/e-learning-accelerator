# 🐛 Solução de Problemas

## Problemas Comuns

### Script não funciona

**Sintomas:** Nada acontece após executar o script

**Soluções:**
1. Verifique se está no console do **iframe**, não da página principal
2. Recarregue a página e tente novamente
3. Verifique erros no console (F12 > Console)
4. Tente executar comandos manuais primeiro

### Botões ainda bloqueados

**Sintomas:** Botões continuam desabilitados

**Soluções:**
```javascript
// Execute manualmente:
document.querySelectorAll('[disabled]').forEach(b => {
    b.removeAttribute('disabled');
    b.disabled = false;
});
```

### Vídeos não aceleram

**Sintomas:** Velocidade não muda

**Soluções:**
1. Verifique se há vídeos: `document.querySelectorAll('video').length`
2. Tente acelerar manualmente:
```javascript
document.querySelector('video').playbackRate = 16;
```
3. Pode estar em outro iframe - verifique todos

### Mensagens repetitivas no console

**Sintomas:** Console cheio de mensagens

**Solução:** Use a versão silenciosa ou recarregue a página

### Erro "Illegal invocation"

**Sintomas:** Erro ao usar setTimeout/setInterval

**Solução:** Recarregue a página (F5) e execute o script novamente

## Comandos de Diagnóstico

```javascript
// Verificar vídeos
document.querySelectorAll('video').forEach((v, i) => {
    console.log(`Vídeo ${i+1}:`, {
        velocidade: v.playbackRate,
        tempo: `${v.currentTime}/${v.duration}`
    });
});

// Verificar botões bloqueados
console.log('Botões bloqueados:', document.querySelectorAll('[disabled]').length);

// Verificar iframes
document.querySelectorAll('iframe').forEach((f, i) => {
    console.log(`Iframe ${i+1}:`, f.src);
});
```

## Ainda com Problemas?

1. Verifique a versão do navegador
2. Tente em modo anônimo
3. Desative extensões do navegador
4. Verifique se há erros no console
5. Abra uma issue no GitHub com detalhes
