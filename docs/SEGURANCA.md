# 🔒 Segurança e Detecção

## ⚠️ Avisos Importantes

Este script pode ser detectado por sistemas de monitoramento. Use com responsabilidade.

## Como o Sistema Pode Detectar

### 1. Monitoramento de Velocidade
- Verificação de `playbackRate` acima de 1
- Comparação de tempo de conclusão vs duração

### 2. Análise de Padrões
- Tempo muito rápido de conclusão
- Falta de interação do usuário
- Clicks muito precisos e rápidos

### 3. Rastreamento SCORM
- Timestamps detalhados
- Progresso anormal entre slides

## Níveis de Risco

### 🟢 Baixo Risco
- Apenas desbloquear botões
- Avanço manual pelo usuário
- Cursos internos sem monitoramento

### 🟡 Médio Risco
- Aceleração moderada (2-4x)
- Cursos com certificação
- Sistemas com analytics básico

### 🔴 Alto Risco
- Aceleração máxima (16x)
- Avanço totalmente automático
- Cursos de compliance crítico

## Recomendações

1. **Use apenas desbloqueio** quando possível
2. **Avance manualmente** para parecer natural
3. **Use velocidade moderada** se acelerar
4. **Não use em certificações críticas**
5. **Entenda as consequências** antes de usar

## Reduzindo Detecção

- Adicione delays aleatórios
- Simule interações do usuário
- Use velocidade gradual
- Respeite tempo mínimo por slide

Veja `acelerar_curso_STEALTH.js` para versão com menos detecção.
