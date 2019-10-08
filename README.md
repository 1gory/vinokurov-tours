# vinokurov-tours
* npm install
* npm run build
* /server/config.js.default -> /server/config.js

# pm2
NODE_ENV=production PORT=1111 pm2 start server/index.jsx --name vt --interpreter ./node_modules/.bin/babel-node

# nginx
```
server {
    listen 443 ssl;

    ssl_certificate     /etc/letsencrypt/live/vinokurov-tours.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vinokurov-tours.ru/privkey.pem;

    access_log /var/log/nginx/example.access.log;
    error_log /var/log/nginx/example.error.log;

    location / {
        proxy_pass http://188.225.34.57:1111;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 80;
    return 301 https://$server_name$request_uri;  # enforce https
    server_name vinokurov-tours.ru www.vinokurov-tours.ru;
}
```

