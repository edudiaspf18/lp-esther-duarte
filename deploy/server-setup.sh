#!/usr/bin/env bash
# Provisiona o VPS Ubuntu (rodar UMA vez, como usuário com sudo). Uso: bash deploy/server-setup.sh <git-repo-url>
set -euo pipefail
REPO_URL="${1:?informe a URL do repositório (ssh)}"
APP_DIR=/var/www/landing-esther

sudo apt-get update
sudo apt-get install -y nginx certbot python3-certbot-nginx git curl ufw
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2

sudo ufw allow OpenSSH && sudo ufw allow 'Nginx Full' && sudo ufw --force enable

# Deploy key (somente leitura) para clonar o repositório privado.
# Antes: scp ~/.ssh/lp_esther_pull usuario@IP:~/.ssh/lp_esther_pull
if [ -f "$HOME/.ssh/lp_esther_pull" ]; then
  chmod 600 "$HOME/.ssh/lp_esther_pull"
  grep -q lp_esther_pull "$HOME/.ssh/config" 2>/dev/null || printf 'Host github.com\n  IdentityFile ~/.ssh/lp_esther_pull\n  IdentitiesOnly yes\n' >> "$HOME/.ssh/config"
  ssh-keyscan -t ed25519 github.com >> "$HOME/.ssh/known_hosts" 2>/dev/null
fi

sudo mkdir -p "$APP_DIR" && sudo chown "$USER":"$USER" "$APP_DIR"
git clone "$REPO_URL" "$APP_DIR"
cd "$APP_DIR"
[ -f .env ] || cp .env.example .env   # ajuste NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID
npm ci && npm run build

pm2 start deploy/ecosystem.config.cjs
pm2 save
pm2 startup systemd -u "$USER" --hp "$HOME"   # execute o comando sudo que ele imprimir

sudo cp deploy/nginx.conf /etc/nginx/sites-available/landing-esther
sudo ln -sf /etc/nginx/sites-available/landing-esther /etc/nginx/sites-enabled/landing-esther
sudo nginx -t && sudo systemctl reload nginx
echo "Agora aponte o DNS (A) para este servidor e rode: sudo certbot --nginx -d estherduartenutri.com.br -d www.estherduartenutri.com.br"
