# Script PowerShell para publicar no GitHub
# Execute: .\publicar.ps1

Write-Host "🚀 Publicando projeto no GitHub..." -ForegroundColor Green
Write-Host ""

# Verificar se Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git não encontrado!" -ForegroundColor Red
    Write-Host "💡 Instale o Git em: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Verificar se já é um repositório git
if (Test-Path .git) {
    Write-Host "✅ Repositório Git já inicializado" -ForegroundColor Green
} else {
    Write-Host "📦 Inicializando repositório Git..." -ForegroundColor Yellow
    git init
}

# Verificar status
Write-Host ""
Write-Host "📋 Status dos arquivos:" -ForegroundColor Cyan
git status --short

# Perguntar se deseja continuar
Write-Host ""
$continuar = Read-Host "Deseja adicionar todos os arquivos e fazer commit? (S/n)"
if ($continuar -eq "n" -or $continuar -eq "N") {
    Write-Host "Operação cancelada." -ForegroundColor Yellow
    exit 0
}

# Adicionar arquivos
Write-Host ""
Write-Host "➕ Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Fazer commit
Write-Host "💾 Fazendo commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Scripts para acelerar cursos e-learning"

Write-Host ""
Write-Host "✅ Commit realizado com sucesso!" -ForegroundColor Green
Write-Host ""

# Perguntar sobre remote
Write-Host "📤 Próximo passo: Conectar ao GitHub" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Acesse: https://github.com/new" -ForegroundColor Yellow
Write-Host "2. Crie um novo repositório" -ForegroundColor Yellow
Write-Host "3. NÃO marque 'Initialize with README'" -ForegroundColor Yellow
Write-Host "4. Copie a URL do repositório" -ForegroundColor Yellow
Write-Host ""

$urlRepo = Read-Host "Cole a URL do repositório (ex: https://github.com/USERNAME/REPO.git) ou pressione Enter para pular"

if ($urlRepo) {
    Write-Host ""
    Write-Host "🔗 Conectando ao repositório remoto..." -ForegroundColor Yellow
    
    # Remover remote se já existir
    git remote remove origin 2>$null
    
    # Adicionar novo remote
    git remote add origin $urlRepo
    
    # Renomear branch
    git branch -M main
    
    Write-Host ""
    Write-Host "📤 Enviando para GitHub..." -ForegroundColor Yellow
    Write-Host "💡 Você pode precisar autenticar (use Personal Access Token)" -ForegroundColor Cyan
    
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Projeto publicado com sucesso!" -ForegroundColor Green
        Write-Host "🌐 Acesse: $($urlRepo -replace '\.git$', '')" -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "⚠️ Erro ao fazer push. Verifique:" -ForegroundColor Yellow
        Write-Host "   - URL do repositório está correta" -ForegroundColor Yellow
        Write-Host "   - Você está autenticado no GitHub" -ForegroundColor Yellow
        Write-Host "   - Repositório foi criado no GitHub" -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "📝 Para conectar manualmente, execute:" -ForegroundColor Cyan
    Write-Host "   git remote add origin https://github.com/USERNAME/REPO.git" -ForegroundColor Yellow
    Write-Host "   git branch -M main" -ForegroundColor Yellow
    Write-Host "   git push -u origin main" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✨ Pronto!" -ForegroundColor Green
