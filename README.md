# Лендинг Cloud Castle

## Обзор
**Cloud Castle** – это современный, интерактивный и полностью адаптивный лендинг, разработанный в качестве тестового задания для компании **Cloud Castle**. Проект выполнен с точным соответствием макету из Figma, обеспечивая пиксель-перфектную реализацию с привлекательными анимациями и интуитивно понятным интерфейсом.

**Автор**: Артём Курочкин

**[Ссылка на макет в Figma](https://www.figma.com/design/1HiRTNxZoupQZpoeBSPyKh)**

## Описание
Этот проект представляет собой **Progressive Web App (PWA)**, созданный для демонстрации высококачественного адаптивного лендинга с акцентом на пользовательский опыт. Основные особенности:

- **Адаптивный дизайн**: Полная адаптация под мобильные, планшетные и десктопные устройства с использованием функций `vw()` для точного масштабирования.
- **Интерактивные элементы**: Плавные анимации, бургер-меню, аккордеон, флип-карточки и другие динамические компоненты интерфейса.
- **Пиксель-перфектная реализация**: Точное воспроизведение макета Figma с вниманием к деталям.
- **Оптимизация производительности**: Серверный рендеринг (SSR) с использованием Next.js для быстрой загрузки и SEO-оптимизации.
- **Поддержка PWA**: Возможность установки на устройства с поддержкой оффлайн-режима через `next-pwa`.

Проект ориентирован на чистый код, модульную архитектуру и современные практики веб-разработки для обеспечения масштабируемости и удобства поддержки.

## Технологический стек
- **Next.js** (App Router, SSR) – Фреймворк для создания производительных React-приложений.
- **React 19.1.0** – Библиотека для создания интерактивных пользовательских интерфейсов.
- **next-pwa 5.6.0** – Поддержка функционала Progressive Web App.
- **SCSS-модули + BEM** – Модульная и структурированная стилизация для удобной поддержки CSS.
- **Функции CSS vw()** – Обеспечение адаптивного дизайна с масштабированием на основе размеров вьюпорта.
- **React Hooks** – Управление состоянием и побочными эффектами для анимаций и интерактивности.
- **Figma** – Пиксель-перфектная реализация дизайна.
- **Docker** – Контейнеризация для единообразного развертывания в разных окружениях.
- **Node.js** – Среда выполнения для разработки и продакшена.
- **Nginx** – Веб-сервер для обработки запросов и настройки HTTPS с редиректами.

## Инструкции по развёртыванию
Ниже представлены два подхода к развертыванию проекта: **быстрый запуск** с использованием готового образа из Docker Hub и **ручной запуск** с установкой зависимостей через Node.js. Также описана настройка Nginx для продакшен-среды.

### Предварительные требования
- Для **быстрого запуска**: Установлены **Docker** и **Docker Compose**.
- Для **ручного запуска**: Установлены **Node.js** (рекомендуемая версия 18.x или выше), **npm** и **Git**.
- Для продакшен-среды: Установлен **Nginx** и получены SSL-сертификаты (например, через Certbot) для домена `cloudcastle.это-хобби.рф`.

### Быстрый запуск (Docker Hub)
1. **Установка Docker и Docker Compose** (для систем на базе Ubuntu):
   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose -y
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   ```
   Выйдите из системы и войдите снова, чтобы изменения группы вступили в силу.

2. **Загрузка образа из Docker Hub**:
   ```bash
   docker pull temka778/cloudcastle
   ```

3. **Создание файла `docker-compose.yml`**:
   Создайте файл `docker-compose.yml` в любой директории с следующим содержимым:
   ```yaml
   services:
     app:
       image: temka778/cloudcastle
       ports:
         - "3000:3000"
       environment:
         - NODE_ENV=production
   ```

4. **Запуск контейнера**:
   ```bash
   docker-compose up -d
   ```

5. **Доступ к приложению**:
   - Приложение будет доступно по адресу `http://localhost:3000`.
   - Перейдите к разделу **Настройка Nginx** для продакшен-развертывания с HTTPS.

### Ручной запуск (Node.js)
1. **Установка Node.js** (для систем на базе Ubuntu):
   ```bash
   sudo apt update
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

2. **Клонирование репозитория**:
   ```bash
   git clone git@github.com:temka778/CloudCastle.git
   cd CloudCastle/
   ```

3. **Установка зависимостей**:
   ```bash
   npm install
   ```

4. **Сборка проекта**:
   ```bash
   npm run build
   ```

5. **Запуск приложения**:
   ```bash
   npm start
   ```

6. **Доступ к приложению**:
   - Приложение будет доступно по адресу `http://localhost:3000`.
   - Перейдите к разделу **Настройка Nginx** для продакшен-развертывания с HTTPS.

### Настройка Nginx
Для продакшен-развертывания с использованием HTTPS и редиректов с `http://cloudcastle.это-хобби.рф`, `http://www.cloudcastle.это-хобби.рф`, `https://www.cloudcastle.это-хобби.рф` на `https://cloudcastle.это-хобби.рф`, выполните следующие шаги:

1. **Установка Certbot для получения SSL-сертификатов**:
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```

2. **Получение SSL-сертификатов**:
   ```bash
   sudo certbot --nginx -d cloudcastle.это-хобби.рф -d www.cloudcastle.это-хобби.рф
   ```
   Следуйте инструкциям Certbot для автоматической настройки сертификатов.

3. **Создание конфигурационного файла Nginx**:
   Создайте файл `/etc/nginx/sites-available/cloudcastle.это-хобби.рф` и добавьте следующий код:
   ```nginx
   server {
       if ($host = www.cloudcastle.xn----btba2a0abz0a2e.xn--p1ai) {
           return 301 https://$host$request_uri;
       } # managed by Certbot

       if ($host = cloudcastle.xn----btba2a0abz0a2e.xn--p1ai) {
           return 301 https://$host$request_uri;
       } # managed by Certbot

       listen 80;
       server_name cloudcastle.xn----btba2a0abz0a2e.xn--p1ai www.cloudcastle.xn----btba2a0abz0a2e.xn--p1ai;

       return 301 https://cloudcastle.xn----btba2a0abz0a2e.xn--p1ai$request_uri;
   }

   server {
       listen 443 ssl;
       server_name www.cloudcastle.xn----btba2a0abz0a2e.xn--p1ai;
       ssl_certificate /etc/letsencrypt/live/www.cloudcastle.xn----btba2a0abz0a2e.xn--p1ai/fullchain.pem; # managed by Certbot
       ssl_certificate_key /etc/letsencrypt/live/www.cloudcastle.xn----btba2a0abz0a2e.xn--p1ai/privkey.pem; # managed by Certbot
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       return 301 https://cloudcastle.xn----btba2a0abz0a2e.xn--p1ai$request_uri;
   }

   server {
       listen 443 ssl;
       server_name cloudcastle.xn----btba2a0abz0a2e.xn--p1ai;
       ssl_certificate /etc/letsencrypt/live/cloudcastle.xn----btba2a0abz0a2e.xn--p1ai/fullchain.pem; # managed by Certbot
       ssl_certificate_key /etc/letsencrypt/live/cloudcastle.xn----btba2a0abz0a2e.xn--p1ai/privkey.pem; # managed by Certbot
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Активация конфигурации**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/cloudcastle.это-хобби.рф /etc/nginx/sites-enabled/
   ```

5. **Проверка конфигурации Nginx**:
   ```bash
   sudo nginx -t
   ```

6. **Перезапуск Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```

7. **Доступ к приложению**:
   - Приложение будет доступно по адресу `https://cloudcastle.это-хобби.рф`.
   - Все запросы с `http://cloudcastle.это-хобби.рф`, `http://www.cloudcastle.это-хобби.рф` и `https://www.cloudcastle.это-хобби.рф` будут перенаправлены на `https://cloudcastle.это-хобби.рф`.

### Примечания
- Готовый образ доступен на [Docker Hub](https://hub.docker.com/repository/docker/temka778/cloudcastle/general) для быстрого развёртывания.
- Для ручного запуска убедитесь, что версия Node.js совместима с зависимостями проекта (рекомендуется 18.x).
- Для продакшен-среды задайте переменные окружения (например, `NODE_ENV=production`) в `docker-compose.yml` или `.env`.
- Регулярно обновляйте SSL-сертификаты с помощью `sudo certbot renew`.

## Проекты
- **Основной проект**: [nnk-service.ru](https://nnk-service.ru)
- **Хобби-проекты**:
  - [тест.это-хобби.рф](https://тест.это-хобби.рф)
  - [это-хобби.рф](https://это-хобби.рф)

## Контактная информация
- **Телефон**: +7 (927) 103-25-44
- **Telegram**: [t.me/AVK_1993](https://t.me/AVK_1993)
- **Email**: [a1965v@bk.ru](mailto:a1965v@bk.ru)

## Об авторе
Артём Курочкин – увлечённый веб-разработчик, специализирующийся на создании визуально привлекательных, производительных и удобных для пользователя приложений. Этот проект демонстрирует экспертизу в современных веб-технологиях, адаптивном дизайне, контейнеризированном развертывании и настройке веб-сервера.

---

Спасибо за внимание к моей работе!