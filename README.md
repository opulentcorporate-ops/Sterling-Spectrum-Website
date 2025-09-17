# Sterling Spectrum - Corporate Supplies Website

A modern, responsive website for Sterling Spectrum, a corporate supplies company. Built with React and featuring a professional blue and yellow color scheme.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multi-page Navigation**: Home, About, Services, and Contact pages
- **Contact Form**: Interactive contact form for customer inquiries
- **Service Showcase**: Comprehensive display of corporate supply services
- **Testimonials**: Customer testimonials and reviews
- **Call-to-Action**: Strategic placement of conversion elements

## Pages

- **Home**: Hero section, services overview, about section, testimonials, and CTA
- **About**: Company story, values, team members, and mission
- **Services**: Detailed service offerings with features and process
- **Contact**: Contact information, form, and business details

## Services Covered

- Office Supplies
- Furniture Solutions
- Technology Equipment
- Printing Services
- Facility Management
- Custom Solutions

## Technology Stack

- React 18
- React Router DOM
- CSS3 with CSS Grid and Flexbox
- Responsive Design Principles
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── Hero.js         # Hero section
│   ├── Services.js     # Services overview
│   ├── About.js        # About section
│   ├── Testimonials.js # Customer testimonials
│   └── CTA.js          # Call-to-action section
├── pages/              # Main page components
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── App.css             # Global styles
├── index.js            # App entry point
└── index.css           # Base styles and CSS variables
```

## Color Scheme

- **Primary Blue**: #1e40af
- **Secondary Blue**: #3b82f6
- **Primary Yellow**: #fbbf24
- **Secondary Yellow**: #f59e0b
- **Light Blue**: #dbeafe
- **Light Yellow**: #fef3c7

## Customization

The website is designed to be easily customizable:

1. **Colors**: Update CSS variables in `src/index.css`
2. **Content**: Modify text content in component files
3. **Logo**: Replace `public/SterlingSpectrum.png` with your logo
4. **Contact Info**: Update contact details in `src/components/Footer.js` and `src/pages/Contact.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Sterling Spectrum. All rights reserved.

## Contact

For questions or support, please contact Sterling Spectrum at info@sterlingspectrum.com
