# Shakil Barua Portfolio

Premium futuristic personal portfolio for **Shakil Barua**, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, React Icons and Lenis smooth scrolling.

## Folder Structure

```text
Updated portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── ui/
│   │   ├── GlassCard.tsx
│   │   ├── MagneticButton.tsx
│   │   └── SectionTitle.tsx
│   ├── Navbar.tsx
│   └── Providers.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
└── public/
    ├── Shakil-Barua-CV.pdf
    └── shakil-portrait.png
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

If it feels slow, make sure another dev server is not already running on port `3000`. On Windows PowerShell:

```powershell
Get-NetTCPConnection -LocalPort 3000 -State Listen
```

Then stop the matching Node process if needed:

```powershell
Stop-Process -Id <OwningProcess> -Force
```

## Production Build

```bash
npm run build
npm run start
```

## Deploy To Vercel

1. Push this folder to a GitHub repository.
2. Go to Vercel and choose **Add New Project**.
3. Import the repository.
4. Keep the defaults:
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click **Deploy**.

No environment variables are required for this portfolio.
