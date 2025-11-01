# AI Portfolio Generator 🚀

A modern, fully customizable portfolio website built with Next.js, React, and Tailwind CSS. Perfect for developers, designers, and creatives!

## ✨ Features

- 🎨 **Fully Customizable** - Easy configuration via `userData.js`
- 📱 **Responsive Design** - Looks great on all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌙 **Dark Theme** - Modern dark mode design
- 📧 **Contact Form** - Built-in contact functionality
- 🎯 **SEO Optimized** - Meta tags and Open Graph support
- 🚀 **Easy Deployment** - Deploy to Vercel, Netlify, or anywhere

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Language:** JavaScript/TypeScript

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/raakeshb/ai-portfolio-generator.git
cd ai-portfolio-generator
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Customize your data

Edit `config/userData.js` with your personal information:

```javascript
export const userData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
};
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### User Data Configuration

All personal data is stored in `config/userData.js`. Update the following sections:

#### Basic Information
```javascript
name: "John Doe",
title: "Full Stack Developer",
tagline: "Building amazing web experiences",
email: "john@example.com",
phone: "+1 234 567 8900",
location: "San Francisco, CA",
```

#### Social Links
```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  // Add more as needed
}
```

#### About Section
```javascript
about: {
  description: "Your bio here...",
  image: "/images/profile.jpg", // Add your image to public/images/
  resume: "/resume.pdf" // Add your resume to public/
}
```

#### Skills
```javascript
skills: [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  // Add more skills
]
```

#### Projects
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    image: "/images/project1.jpg",
    tags: ["React", "Node.js"],
    github: "https://github.com/...",
    demo: "https://..."
  }
]
```

#### Experience
```javascript
experience: [
  {
    company: "Company Name",
    position: "Job Title",
    duration: "Jan 2020 - Present",
    description: "What you did...",
    technologies: ["React", "Node.js"]
  }
]
```

### Adding Images

1. Place images in the `public/images/` folder
2. Reference them in `userData.js` as `/images/filename.jpg`

### Styling

- Global styles: `styles/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline with Tailwind classes

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! ✨

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy! ✨

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify
- And more!

## 📦 Project Structure

```
ai-portfolio-generator/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills section
│   ├── Projects.js        # Projects section
│   ├── Experience.js      # Experience section
│   ├── Contact.js         # Contact section
│   └── Navbar.js          # Navigation bar
├── config/
│   └── userData.js        # Your personal data
├── public/
│   ├── images/            # Your images
│   └── resume.pdf         # Your resume
├── styles/
│   └── globals.css        # Global CSS
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies
```

## 🎨 Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#3b82f6',    // Blue
  secondary: '#8b5cf6',  // Purple
  accent: '#f59e0b',     // Amber
  // Customize as needed
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

If you have any questions or need help, please open an issue on GitHub.

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ using Next.js and Tailwind CSS