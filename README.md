<div align="center">

# 🎭 YARMY
### Твоё фото оживает / Your photo comes alive

</div>

**YARMY** — AI-платформа, которая оживляет фотографии, превращая их в короткие реалистичные видео.  
Проект сочетает генеративный ИИ, современный веб-фреймворк и облачные сервисы для быстрой и масштабируемой работы.

---

## ⚙️ Технологический стек

| Слой | Технологии                                                          |
|------|---------------------------------------------------------------------|
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, TailwindCSS, DaisyUI |
| **Backend** | Next.js server actions, API routes, Prisma ORM                      |
| **База данных** | PostgreSQL                                                          |
| **Аутентификация** | NextAuth (Yandex, VK, Mail.ru, Google)                              |
| **Очереди** | Upstash QStash                                                      |
| **Облако / CDN** | Yandex Cloud S3 + CDN (custom domain + SSL)                         |
| **AI API** | fal.ai · Seedance · Kling                                           |
| **CI/CD** | Vercel (frontend), Jenkins / PM2 (backend)                          |
| **Мониторинг** | Sentry                                                              |

---

## 🧱 Архитектура

```
Client (Next.js, React)
↓
Server Actions / API Routes
↓
AI Render (fal.ai)
↓
PostgreSQL (Prisma)
↓
Yandex Cloud S3 → CDN

```

