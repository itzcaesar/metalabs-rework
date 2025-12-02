# Metalabs Website Redesign

A modern, fully responsive website redesign for **Metalabs** - the Multimedia Engineering Research Laboratory at Telkom University.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Authentication:** NextAuth v5
- **Database:** PostgreSQL + Drizzle ORM
- **UI Framework:** TailwindCSS v4 + shadcn/ui
- **File Storage:** Supabase
- **Internationalization:** next-intl
- **Theme Management:** next-themes
- **Testing:** Vitest + Playwright

## ✨ Features

- 🌓 **Light/Dark Mode Toggle** - Seamless theme switching
- 🌍 **Bilingual Support** - Indonesian & English
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant components
- 🎨 **Modern UI/UX** - Clean, professional design
- 🔒 **Authentication Ready** - NextAuth v5 integration
- 🗄️ **Database Integration** - PostgreSQL with Drizzle ORM
- 📦 **File Storage** - Supabase for media assets
- ✅ **Testing** - Unit tests (Vitest) + E2E tests (Playwright)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, set up your environment variables by creating a `.env` file (see `.env.example`).

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
