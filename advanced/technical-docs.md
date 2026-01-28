# Technical Documentation

Technical reference for developers.

## Theme Architecture

```
theme/
├── assets/           # CSS, JS, images
├── config/           # Settings schema
├── layout/           # Base layouts
├── locales/          # Translation files
├── sections/         # Modular sections
├── snippets/         # Reusable components
└── templates/        # Page templates
```

## JSON Templates

Our themes use JSON templates:

```json
{
  "sections": {
    "main": {
      "type": "main-product",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## CSS Architecture

- CSS custom properties for theming
- BEM naming convention
- Mobile-first responsive design

## JavaScript

- Vanilla JavaScript (no jQuery)
- Custom elements for components
- Event-driven architecture

## Performance

Optimizations included:
- Lazy loading images
- Critical CSS inlining
- Deferred JavaScript
- Efficient Liquid loops

## Accessibility

- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Focus management
