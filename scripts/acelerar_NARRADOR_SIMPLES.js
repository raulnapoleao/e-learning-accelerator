// Script SIMPLES para acelerar NARRADOR e desbloquear slides
// Cole no console do iframe

(function() {
    console.log('🎤 Acelerando narrador...');
    
    // 1. Acelera TODOS os áudios e vídeos
    function acelerar() {
        // Procura áudios E vídeos
        document.querySelectorAll('audio, video').forEach(media => {
            media.playbackRate = 16;
            media.play().catch(() => {});
            
            // Pula para o final imediatamente
            if (media.duration > 0) {
                media.currentTime = media.duration - 0.01;
            }
            
            // Listener que mantém no final
            media.addEventListener('timeupdate', function() {
                if (media.duration - media.currentTime < 0.5) {
                    media.currentTime = media.duration - 0.01;
                }
            });
        });
    }
    
    // 2. Desbloqueia TODOS os botões
    function desbloquear() {
        document.querySelectorAll('button, a, [role="button"]').forEach(btn => {
            btn.removeAttribute('disabled');
            btn.disabled = false;
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        });
    }
    
    // 3. Clica em botões de avançar
    function avancar() {
        const palavras = ['próximo', 'next', 'avançar', 'continuar', 'skip'];
        
        document.querySelectorAll('button, a, [role="button"]').forEach(btn => {
            const txt = (btn.textContent || '').toLowerCase();
            const aria = (btn.getAttribute('aria-label') || '').toLowerCase();
            
            if (palavras.some(p => txt.includes(p) || aria.includes(p)) &&
                btn.offsetParent !== null) {
                btn.removeAttribute('disabled');
                btn.disabled = false;
                btn.click();
            }
        });
    }
    
    // Executa tudo
    acelerar();
    desbloquear();
    avancar();
    
    // Repete a cada 200ms (muito rápido)
    setInterval(() => {
        acelerar();
        desbloquear();
        avancar();
    }, 200);
    
    // Monitora novos elementos
    new MutationObserver(() => {
        acelerar();
        desbloquear();
    }).observe(document.body, { childList: true, subtree: true });
    
    console.log('✅ Narrador acelerado! Slides devem avançar automaticamente');
})();
