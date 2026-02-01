# 🚀 Acelerador de Cursos E-Learning

Scripts JavaScript para acelerar vídeos, áudios e desbloquear navegação em cursos e-learning baseados em Storyline 360.

## 📋 Sobre

Este projeto contém scripts para otimizar a experiência em plataformas de e-learning, permitindo:
- Acelerar reprodução de vídeos e áudios
- Desbloquear botões de navegação durante narrações
- Avançar slides automaticamente (opcional)

## ⚠️ Aviso Legal

**Este projeto é apenas para fins educacionais e de pesquisa.**

- Use apenas em cursos próprios ou com autorização explícita
- Não use em certificações obrigatórias ou cursos de compliance crítico
- Respeite as políticas de uso da plataforma
- O autor não se responsabiliza pelo uso indevido

## 🎯 Funcionalidades

### Scripts Disponíveis

1. **`desbloquear_botoes.js`** ⭐ Recomendado
   - Apenas desbloqueia botões
   - Você controla quando avançar
   - Mais seguro e discreto

2. **`acelerar_curso.js`**
   - Acelera vídeos/áudios para 16x
   - Desbloqueia botões
   - Avanço automático opcional

3. **`acelerar_curso_STEALTH.js`**
   - Versão com menor detecção
   - Velocidade moderada (4x)
   - Simula interações do usuário

## 🚀 Como Usar

### Pré-requisitos

- Navegador Google Chrome (ou Chromium)
- Acesso ao Console do Desenvolvedor (F12)
- Curso carregado em iframe

### Instruções Básicas

1. **Abra o curso** no navegador
2. **Pressione F12** para abrir DevTools
3. **Vá na aba "Sources"** (ou "Elementos")
4. **Encontre o iframe** do conteúdo na lista à esquerda
5. **Clique no iframe** para selecionar
6. **Vá na aba "Console"** DENTRO desse contexto
7. **Cole o script** desejado
8. **Pressione Enter**

### Script Recomendado (Apenas Desbloquear)

```javascript
(function() {
    function desbloquear() {
        document.querySelectorAll('button, a, [role="button"]').forEach(btn => {
            btn.removeAttribute('disabled');
            btn.disabled = false;
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        });
    }
    
    desbloquear();
    
    let debounceTimer = null;
    new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(desbloquear, 100);
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'disabled'] });
    
    setInterval(desbloquear, 1000);
})();
```

## 📁 Estrutura do Projeto

```
.
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
│
├── scripts/
│   ├── desbloquear_botoes.js         # ⭐ Apenas desbloqueia botões
│   ├── acelerar_curso.js              # Aceleração completa
│   ├── acelerar_curso_STEALTH.js      # Versão stealth
│   ├── acelerar_NARRADOR.js           # Focado em narração
│   └── acelerar_NARRADOR_SIMPLES.js   # Versão simplificada
│
├── docs/
│   ├── INSTALACAO.md
│   ├── SEGURANCA.md
│   └── TROUBLESHOOTING.md
│
└── exemplos/
    └── uso_basico.js
```

## 🔧 Funcionalidades Técnicas

### Desbloqueio de Botões
- Remove atributo `disabled`
- Força `pointer-events: auto`
- Monitora novos elementos dinamicamente

### Aceleração de Mídia
- Define `playbackRate` para velocidade máxima
- Pula para o final automaticamente
- Intercepta eventos de reprodução

### Avanço Automático
- Detecta botões de navegação por texto/aria-label
- Clica automaticamente em intervalos
- Suporta múltiplos idiomas

## 🛡️ Segurança e Detecção

### Níveis de Risco

- **Baixo**: Apenas desbloquear botões (recomendado)
- **Médio**: Aceleração moderada (2-4x)
- **Alto**: Aceleração máxima (16x) + avanço automático

### Como Reduzir Detecção

1. Use apenas desbloqueio de botões
2. Avance manualmente quando quiser
3. Use velocidade moderada se acelerar
4. Adicione delays entre ações
5. Simule interações do usuário

Veja `docs/SEGURANCA.md` para mais detalhes.

## 🐛 Troubleshooting

### Problema: Script não funciona

**Solução:**
- Certifique-se de estar no console do **iframe**, não na página principal
- Verifique se há erros no console
- Recarregue a página e tente novamente

### Problema: Botões ainda bloqueados

**Solução:**
- Execute: `document.querySelectorAll('[disabled]').forEach(b => b.removeAttribute('disabled'))`
- Verifique se há classes CSS bloqueando

### Problema: Vídeos não aceleram

**Solução:**
- Verifique se encontrou vídeos: `document.querySelectorAll('video').length`
- Tente acelerar manualmente primeiro
- Pode estar em outro iframe

Veja `docs/TROUBLESHOOTING.md` para mais soluções.

## 📝 Notas Técnicas

- Funciona com Storyline 360
- Requer conteúdo em iframe
- Compatível com SCORM
- Testado no Chrome/Chromium

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre como contribuir.

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Comunidade de desenvolvedores JavaScript
- Documentação do MDN Web Docs
- Contribuidores do projeto

## 📞 Suporte

Para questões e suporte:
- Abra uma [Issue](../../issues) no GitHub
- Consulte a documentação em `docs/`
- Verifique `docs/TROUBLESHOOTING.md`

---

**⚠️ Lembre-se**: Use com responsabilidade e apenas em cursos próprios ou com autorização.
