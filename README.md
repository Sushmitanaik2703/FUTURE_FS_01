# Sushmita Naik — Portfolio

A single-page, SEO-friendly portfolio built with React + Vite. Includes an
interactive resume timeline, project showcase, and a working contact form
that sends email notifications with no backend server required.

## Stack

- **Frontend:** React 18, Vite, plain CSS (no framework)
- **Contact form:** [EmailJS](https://www.emailjs.com/) — sends email directly
  from the browser on the free tier (~200 emails/month), so no Node.js
  backend is needed to satisfy the "email notifications" requirement. If you
  later want a real backend, see *Optional: Node.js backend* below.
- **SEO:** semantic HTML, meta/Open Graph/Twitter tags, JSON-LD structured
  data, `robots.txt`, `sitemap.xml`

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Edit content in `src/data/portfolioData.js`
— everything on the page (name, projects, skills, timeline) is pulled from
that one file, so you rarely need to touch the components themselves.

## 2. Fill in the blanks

Search the project for `TODO` and replace:

- `src/data/portfolioData.js` — your real email, GitHub, LinkedIn URLs, and
  project live/repo links
- `public/resume.pdf` — drop your actual resume PDF here (referenced by the
  "Download resume" buttons)
- `index.html` — swap `sushmitanaik.dev` for your real deployed domain once
  you have one, and add a `public/og-image.png` (1200×630) for social share
  previews

## 3. Set up email notifications (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. **Email Services** → add a service (connect your Gmail/Outlook) → copy
   the **Service ID**
3. **Email Templates** → create a template using variables `{{from_name}}`,
   `{{from_email}}`, `{{message}}` → copy the **Template ID**
4. **Account → General** → copy your **Public Key**
5. Open `src/components/Contact.jsx` and paste the three values into:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```

That's it — form submissions will land in your inbox. The form also has a
honeypot field for basic spam protection.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 5. Deploy (pick one — both are free and static-friendly)

**Netlify**
1. [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an
   existing project" → connect your GitHub repo
2. Build command: `npm run build`, publish directory: `dist`
3. Deploy — you'll get a live `*.netlify.app` URL immediately (custom domain
   optional, under Site settings → Domain management)

**Vercel**
1. [vercel.com/new](https://vercel.com/new) → import your GitHub repo
2. Framework preset: Vite (auto-detected). Deploy.

Either way, once live, update the URLs in `index.html` and `public/sitemap.xml`
to your real domain and re-deploy so the SEO tags are accurate.

## Optional: Node.js backend

The brief lists a backend as optional, and EmailJS covers the email
requirement without one. If you'd still like a small Express backend later
(e.g. to log contact-form submissions to a database, or add rate limiting),
a natural extension is:

```
server/
  index.js        // Express app
  routes/contact.js  // POST /api/contact -> nodemailer + optional DB write
```

using `nodemailer` for email and SQLite/PostgreSQL for storage — happy to
scaffold this if you want it for the "backend" and "database" line items on
a rubric.

## Project structure

```
├── index.html              # SEO meta tags, structured data
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.svg
│   └── resume.pdf          # ← add your resume here
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css           # design tokens + all styling
│   ├── data/
│   │   └── portfolioData.js  # ← edit content here
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Resume.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```
