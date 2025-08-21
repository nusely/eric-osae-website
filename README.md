# Eric Osae-Twum Personal Website

A modern, interactive personal website for Eric Osae-Twum, an author and personal development coach.

## 🚀 Features

- **Interactive Design**: Modern UI with smooth animations using Framer Motion
- **Gift System**: Email-based gift delivery system with EmailJS integration
- **Book Showcase**: Featured book "Culture of Gratitude" with Amazon integration
- **Waitlist System**: Upcoming book "The Mess is the Map" with waitlist functionality
- **Testimonials**: Auto-sliding testimonials from readers
- **Quote Sliders**: Interactive quote navigation with click tracking
- **Contact Form**: Functional contact form with validation
- **Responsive Design**: Optimized for all device sizes

## 📁 Project Structure

```
src/
├── components/           # All React components
│   ├── index.js         # Component exports
│   ├── FloatingElements.js
│   ├── Header.js
│   ├── HeroSection.js
│   ├── GiftSection.js
│   ├── GiftForm.js
│   ├── Testimonials.js
│   ├── InsightsSection.js
│   ├── SkillBar.js
│   ├── ContactSection.js
│   ├── ContactForm.js
│   ├── Footer.js
│   ├── ScrollToTop.js
│   ├── BookPopup.js
│   └── WaitlistModal.js
├── App.js               # Main application component
├── App.css              # Component styles
├── index.js             # Application entry point
└── index.css            # Global styles
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library
- **EmailJS**: Email functionality for gift delivery
- **CSS3**: Custom styling with CSS variables and responsive design
- **GitHub Pages**: Hosting platform

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/EricFrontend.git
cd EricFrontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📧 EmailJS Setup

To enable the gift email functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{to_email}}`, `{{gift_link}}`, `{{book_title}}`, `{{author_name}}`
4. Update the following in `src/components/GiftForm.js`:
   - Replace `'your_user_id'` with your EmailJS User ID
   - Replace `'service_your_service_id'` with your Email Service ID
   - Replace `'template_your_template_id'` with your Email Template ID

## 🌐 Deployment to GitHub Pages

### Step 1: Update Homepage URL
In `package.json`, update the homepage field with your GitHub username:
```json
"homepage": "https://yourusername.github.io/EricFrontend"
```

### Step 2: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: Configure GitHub Pages
1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Click Save

Your website will be available at: `https://yourusername.github.io/EricFrontend`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-teal: #01445e;
  --primary-yellow: #d6941b;
  --accent-blue: #4a90e2;
  /* ... other variables */
}
```

### Content
- Update book links in `src/App.js`
- Modify testimonials in `src/components/Testimonials.js`
- Change quotes in `src/components/ContactSection.js`

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support or questions, contact Eric Osae-Twum at osaetwum@gmail.com
