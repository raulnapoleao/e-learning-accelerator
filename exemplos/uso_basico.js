// Exemplo de uso básico
// Cole no console do iframe

// Exemplo 1: Apenas desbloquear botões
(function() {
    function desbloquear() {
        document.querySelectorAll('button, a, [role="button"]').forEach(btn => {
            btn.removeAttribute('disabled');
            btn.disabled = false;
        });
    }
    desbloquear();
    setInterval(desbloquear, 1000);
})();

// Exemplo 2: Acelerar vídeo manualmente
const video = document.querySelector('video');
if (video) {
    video.playbackRate = 4; // 4x velocidade
    video.currentTime = video.duration - 0.01; // Pula para o final
}

// Exemplo 3: Desbloquear e avançar uma vez
document.querySelectorAll('[disabled]').forEach(btn => {
    btn.removeAttribute('disabled');
    btn.disabled = false;
});
const proximoBtn = Array.from(document.querySelectorAll('button')).find(b => 
    b.textContent.toLowerCase().includes('próximo')
);
if (proximoBtn) proximoBtn.click();
