// PM2: pm2 start deploy/ecosystem.config.cjs && pm2 save
module.exports = {
  apps: [
    {
      name: "landing-esther",
      script: "npm",
      args: "start",
      cwd: "/var/www/landing-esther",
      env: { NODE_ENV: "production", PORT: "3000" },
      max_memory_restart: "400M",
      autorestart: true,
    },
  ],
};
