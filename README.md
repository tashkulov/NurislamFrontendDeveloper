# Nurislam Tashkulov - Portfolio Website

A pixel-art styled portfolio website showcasing my experience, skills, and projects as a Frontend Developer.

## Features

- **Pixel-Art Design**: Retro-inspired minimalist design with pixel borders and animations
- **Responsive Layout**: Fully responsive across all devices
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS
- **Smooth Animations**: Custom animations and transitions for engaging UX
- **Sections**:
  - Hero with typing animation
  - About with achievements
  - Experience timeline
  - Skills showcase
  - Contact information

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + SCSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Fonts**: Press Start 2P (pixel font) + JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nurislam-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update social media links
   - Modify the typing animation text
   - Change contact email

2. **Experience** (`src/components/Experience.tsx`):
   - Update work experience details
   - Modify achievements and tech stack

3. **Skills** (`src/components/Skills.tsx`):
   - Add/remove technical skills
   - Update language proficiency
   - Modify education details

4. **Contact** (`src/components/Contact.tsx`):
   - Update contact information
   - Change social media links

### Color Scheme

Edit `src/index.css` to customize the color palette:
- `--primary`: Main accent color
- `--accent`: Secondary accent color
- `--destructive`: Alert/highlight color
- `--background`: Background color
- `--card`: Card background color

## Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: nurislamtashkulov168@gmail.com
- Phone: +996 554 179 179
- Location: Bishkek, Kyrgyzstan

---

Made with ❤ by Nurislam Tashkulov
