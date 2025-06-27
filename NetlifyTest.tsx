# Configurações de build
[build]
  # Pasta de publicação (verifique se está correta para seu projeto Vite/React)
  publish = "dist"
  # Comando para build
  command = "npm run build"

# Regra de redirecionamento para Single-Page Applications (SPA)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
