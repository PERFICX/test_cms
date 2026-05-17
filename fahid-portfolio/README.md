# Prof. Brahim Fahid — Academic Portfolio Website

Professional academic portfolio with Decap CMS dashboard.  
**Zero hosting cost** — GitHub Pages + Netlify.

---

## 📁 File Structure

```
fahid-portfolio/
├── index.html              ← Main portfolio (single page)
├── netlify.toml            ← Netlify build + security config
├── admin/
│   ├── index.html          ← CMS admin entry point
│   └── config.yml          ← CMS configuration (brain)
├── assets/
│   ├── uploads/            ← Media uploaded via CMS
│   └── photo.jpg           ← Professor's portrait (add manually)
├── _data/                  ← CMS-managed JSON data files
│   ├── general.json
│   ├── biography.json
│   ├── social.json
│   └── research.json
├── _publications/          ← One .md file per publication
├── _teaching/              ← One .md file per course
├── _supervision/           ← One .md file per thesis
└── _events/                ← One .md file per event/activity
```

---

## 🚀 Deployment Steps (10 minutes)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fahid-portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Connect your GitHub account and select the `fahid-portfolio` repository
3. Build settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`
4. Click **Deploy site**
5. (Optional) Set a custom domain: `brahimfahid.netlify.app` or your own domain

### Step 3 — Enable Netlify Identity

1. In Netlify dashboard → **Identity** tab → **Enable Identity**
2. Under **Registration preferences** → set to **Invite only** (prevents public signups)
3. Under **Services** → **Git Gateway** → **Enable Git Gateway**

### Step 4 — Invite the Admin User

1. In **Identity** tab → **Invite users**
2. Enter the professor's email address
3. He will receive an invitation email to set his password

### Step 5 — Access the Dashboard

The professor can now log in at:
```
https://YOUR-SITE.netlify.app/admin/
```

---

## ✏️ Adding the Professor's Photo

1. Place the photo file in `assets/` named `photo.jpg`
2. In `index.html`, find both `#hero-photo` and `#about-photo` sections
3. Uncomment the `<img>` tag and remove the placeholder icon

OR upload via CMS: Settings → General Info → Profile Photo

---

## 🖊️ CMS Collections Overview

| Collection | What it manages |
|---|---|
| **Site Settings → General** | Name, title, institution, hero stats, photo |
| **Site Settings → Biography** | Bio paragraphs, education timeline |
| **Site Settings → Social** | Email, ORCID, LinkedIn, Scholar, ResearchGate, Scopus |
| **Site Settings → Research** | Research interests, lab info, activities |
| **Publications** | Full publication list (add/edit/delete) |
| **Teaching** | Course modules by level |
| **Supervision** | PhD/Master thesis supervision records |
| **Events & Activities** | Conferences, talks, committees |

---

## 🔧 Customization Notes

### Colors (in `index.html` `:root`)
```css
--ink:        #0e1a2b;   /* Dark navy — primary dark */
--gold:       #b8942a;   /* Gold accent */
--gold-light: #d4af5a;   /* Light gold */
--cream:      #f7f4ef;   /* Background cream */
```

### Replacing Placeholder Data
Search for `{{placeholder}}` patterns in `index.html`:
- `{{phd_university}}` — PhD university name
- `{{phd_year}}` — PhD graduation year
- `{{habilitation_year}}` — HDR year
- `{{google_scholar_url}}` — Google Scholar profile URL
- `{{researchgate_url}}` — ResearchGate profile URL
- `{{scopus_id}}` — Scopus author ID

---

## 🔒 Security

- Admin dashboard is `noindex` (search engines won't index it)
- Netlify Identity: invite-only registration
- Security headers configured in `netlify.toml`
- HTTPS enforced automatically by Netlify

---

## 📞 Support

Built with: HTML5 · Bootstrap 5 · Decap CMS · Netlify Identity  
Hosting cost: **$0/month** (Netlify free tier)
