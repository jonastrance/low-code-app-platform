# 🚀 Low-Code App Platform

A modern, cloud-ready low-code application platform with drag-and-drop interface and pre-built components. Built with React, TypeScript, and react-dnd.

## 🌟 Features

### Core Capabilities
- **Drag-and-Drop Interface**: Intuitive visual builder with real-time component placement
- **Pre-Built Component Library**: 6+ professionally designed components ready to use
  - Button (4 variants, 3 sizes)
  - Input (text, password, email, number)
  - Card (with elevation levels)
  - Container (flexible layouts)
  - Text (customizable typography)
  - Form (with submit handling)
- **Property Editor**: Live editing of component properties with instant visual feedback
- **Preview Mode**: Toggle between edit and preview modes to test your design
- **Export/Import**: Save and load designs as JSON files for collaboration
- **Responsive Layout**: Professional 3-panel layout (Components | Canvas | Properties)

### Market Opportunity
- **Market Size**: $28.75B (2024) growing to $264B by 2032
- **Deployment Model**: Cloud SaaS ready
- **Target Users**: Citizen developers, business users, rapid prototypers

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder is ready to be deployed to any static hosting service
```

## 📖 How to Use

1. **Add Components**: Drag components from the left panel onto the canvas
2. **Select & Edit**: Click any component to select it and edit properties in the right panel
3. **Customize**: Modify text, colors, sizes, and other properties using the property editor
4. **Preview**: Click the "Preview" button to see your design without editing controls
5. **Export**: Save your design as JSON for later use or sharing
6. **Import**: Load previously saved designs to continue editing

### Example Designs

The `examples/` folder contains ready-to-use design templates:
- **sample-landing-page.json**: A complete landing page with text, cards, input, and button
- **contact-form.json**: A contact form with multiple input fields

To use an example, click "Import" and select one of these files.

## 🏗️ Architecture

```
src/
├── components/
│   ├── Canvas/              # Main canvas for dropping components
│   ├── ComponentLibrary/    # Draggable component palette
│   ├── PropertyEditor/      # Property editing panel
│   └── PrebuiltComponents/  # Actual component implementations
├── types/                   # TypeScript type definitions
└── utils/                   # Utility functions
```

## 🎨 Component Library

### Button
- **Variants**: Primary, Secondary, Success, Danger
- **Sizes**: Small, Medium, Large
- **Customizable**: Text, style, and size

### Input
- **Types**: Text, Password, Email, Number
- **Features**: Labels, placeholders, validation-ready

### Card
- **Elevation**: None, Low, Medium, High
- **Content**: Title and body text
- **Styling**: Shadow depths and borders

### Container
- **Layout**: Row or Column direction
- **Spacing**: Adjustable gap and padding
- **Nesting**: Supports child components

### Text
- **Sizes**: Small, Medium, Large, X-Large
- **Weight**: Normal, Bold
- **Color**: Full color picker

### Form
- **Structure**: Title and submit button
- **Handling**: Built-in form submission
- **Extensible**: Can contain input components

## 🚀 Deployment (Cloud SaaS Model)

### Deploy to Cloud Platforms

#### Netlify
```bash
# Build and deploy
npm run build
# Deploy the build folder to Netlify
```

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### AWS S3 + CloudFront
```bash
# Build
npm run build

# Upload to S3 bucket configured for static website hosting
aws s3 sync build/ s3://your-bucket-name
```

### Environment Variables
No environment variables required for basic deployment. The platform runs entirely in the browser.

## 🛠️ Technology Stack

- **React 19**: Latest React with improved performance
- **TypeScript**: Type-safe development
- **react-dnd**: Drag and drop functionality
- **HTML5 Backend**: Native browser drag and drop
- **CSS3**: Modern styling with flexbox and grid

## 📈 Roadmap

- [ ] Additional components (Image, Video, Table, Chart)
- [ ] Component templates and layouts
- [ ] Collaborative editing
- [ ] Code generation (React, Vue, HTML)
- [ ] Database integration
- [ ] API connector
- [ ] User authentication system
- [ ] Multi-page applications
- [ ] Responsive breakpoints editor
- [ ] Theme customization
- [ ] Component marketplace

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🌐 Market Context

The low-code/no-code market is experiencing explosive growth:
- **2024 Market**: $28.75 billion
- **2032 Projection**: $264 billion
- **CAGR**: ~35% annual growth
- **Adoption**: Growing across enterprises, SMBs, and individual developers

This platform positions itself to capture market share by providing:
- Modern, intuitive interface
- Cloud-native architecture
- Extensible component system
- Export flexibility
- Zero vendor lock-in

---

Built with ❤️ for the low-code revolution
