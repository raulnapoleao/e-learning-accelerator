(function() {
    const videosProcessados = new WeakSet();
    const botoesClicados = new WeakSet();
    const velocidade = 4;
    const delayMinimo = 3000;
    let ultimaInteracao = Date.now();
    
    function simularInteracao() {
        if (Date.now() - ultimaInteracao > 10000) {
            document.dispatchEvent(new MouseEvent('mousemove', {
                clientX: Math.random() * window.innerWidth,
                clientY: Math.random() * window.innerHeight,
                bubbles: true
            }));
            ultimaInteracao = Date.now();
        }
    }
    
    function acelerar() {
        document.querySelectorAll('audio, video').forEach(media => {
            if (videosProcessados.has(media)) return;
            videosProcessados.add(media);
            
            let velocidadeAtual = 1;
            const acelerarGradual = setInterval(() => {
                velocidadeAtual = Math.min(velocidadeAtual + 0.5, velocidade);
                media.playbackRate = velocidadeAtual;
                if (velocidadeAtual >= velocidade) {
                    clearInterval(acelerarGradual);
                }
            }, 300);
            
            media.play().catch(() => {});
            
            setTimeout(() => {
                if (media.duration > 0) {
                    media.currentTime = Math.max(0, media.duration - 1);
                }
            }, delayMinimo);
            
            media.addEventListener('timeupdate', function() {
                if (media.duration - media.currentTime < 1) {
                    media.currentTime = media.duration - 0.01;
                }
            }, { passive: true });
            
            media.addEventListener('loadedmetadata', function() {
                setTimeout(() => {
                    if (media.duration > 0) {
                        media.currentTime = Math.max(0, media.duration - 1);
                    }
                }, delayMinimo);
            }, { once: true });
        });
    }
    
    function desbloquear() {
        document.querySelectorAll('button, a, [role="button"]').forEach(btn => {
            btn.removeAttribute('disabled');
            btn.disabled = false;
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        });
    }
    
    function avancar() {
        const palavras = ['próximo', 'next', 'avançar', 'avancar', 'continuar', 'continue', 'skip', 'pular'];
        document.querySelectorAll('button, a, [role="button"], [onclick]').forEach(btn => {
            if (botoesClicados.has(btn)) return;
            const txt = (btn.textContent || '').toLowerCase();
            const aria = (btn.getAttribute('aria-label') || '').toLowerCase();
            const title = (btn.getAttribute('title') || '').toLowerCase();
            const className = (btn.className || '').toLowerCase();
            const temPalavra = palavras.some(p => txt.includes(p) || aria.includes(p) || title.includes(p) || className.includes(p));
            const rect = btn.getBoundingClientRect();
            const estaNaDireita = rect.right > window.innerWidth * 0.7;
            
            if ((temPalavra || estaNaDireita) && btn.offsetParent !== null && !btn.disabled) {
                botoesClicados.add(btn);
                btn.removeAttribute('disabled');
                btn.disabled = false;
                
                setTimeout(() => {
                    simularInteracao();
                    btn.click();
                    botoesClicados.delete(btn);
                }, Math.random() * 500 + 200);
            }
        });
    }
    
    acelerar();
    desbloquear();
    
    setTimeout(() => {
        avancar();
    }, delayMinimo);
    
    setInterval(() => {
        acelerar();
        desbloquear();
        simularInteracao();
    }, 1000);
    
    setInterval(() => {
        avancar();
    }, Math.random() * 1000 + 2000);
    
    let debounceTimer = null;
    new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            acelerar();
            desbloquear();
        }, 500);
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'disabled', 'src'] });
    
    setInterval(acelerar, 2000);
})();
