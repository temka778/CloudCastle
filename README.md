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
Следуйте этим шагам для клонирования, сборки и запуска проекта с использованием Docker и настройки Nginx для продакшен-среды.

### Предварительные требования
- Убедитесь, что **Docker**, **Docker Compose** и **Nginx** установлены на вашей системе.
- Установлен Git-клиент для клонирования репозитория.
- Получены SSL-сертификаты (например, через Certbot) для домена `cloudcastle.это-хобби.рф`.

### Пошаговое развертывание
1. **Обновление системных пакетов** (для систем на базе Ubuntu):
   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose nginx -y
   ```

2. **Активация службы Docker**:
   ```bash
   sudo systemctl enable docker
   ```

3. **Добавление пользователя в группу Docker** (для запуска Docker без sudo):
   ```bash
   sudo usermod -aG docker $USER
   ```
   Выйдите из системы и войдите снова, чтобы изменения вступили в силу.

4. **Клонирование репозитория**:
   ```bash
   git clone git@github.com:temka778/CloudCastle.git
   ```

5. **Переход в директорию проекта**:
   ```bash
   cd CloudCastle/
   ```

6. **Сборка и запуск с помощью Docker Compose**:
   ```bash
   docker-compose up --build
   ```

7. **Доступ к приложению**:
   - Приложение будет доступно по адресу `http://localhost:3000` (или порту, указанному в `docker-compose.yml`).
   - Убедитесь, что файлы `Dockerfile` и `docker-compose.yml` в корне проекта настроены корректно.

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
- Проект включает предварительно настроенные файлы `Dockerfile` и `docker-compose.yml` для удобного развертывания.
- Для продакшен-среды убедитесь, что переменные окружения (например, `NODE_ENV`) корректно заданы в `docker-compose.yml`.
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