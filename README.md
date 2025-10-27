# Sammy Builder and Designer Portfolio

A modern, responsive portfolio website for Sammy, a Civil Engineer, showcasing services, projects, and contact information.

## Features

- Responsive design that works on all devices
- Interactive project gallery with filtering capabilities
- Smooth animations and transitions
- Contact form for inquiries
- WhatsApp integration for easy communication
- Optimized images for fast loading
- Modern UI with Tailwind CSS

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion for animations

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key (copy `.env.example` to `.env.local` and add your API key)
3. Run the app:
   `npm run dev`

## Image Optimization

This project includes an image optimization script that automatically compresses and resizes large images to improve loading performance:

- Run `npm run optimize` to optimize images manually
- The optimization runs automatically during the build process
- Check optimization results with `npm run check-sizes`

## Deployment

Build the production version:
`npm run build`

Preview the built app:
`npm run preview`