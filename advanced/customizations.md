# Advanced Customizations

Take your theme further with advanced modifications.

## Custom CSS

Add custom styles without editing theme files:

1. Open theme editor
2. Go to **Theme settings** → **Custom CSS**
3. Add your styles:

```css
/* Example: Custom button color */
.button--primary {
  background-color: #your-color;
}

/* Example: Hide element */
.element-class {
  display: none;
}
```

## Custom JavaScript

For advanced functionality:

1. Go to **Edit code**
2. Find `theme.liquid` or create `custom.js`
3. Add your scripts

::: warning Caution
Custom code modifications are not covered by support and may break during updates.
:::

## Liquid Customization

Modify Liquid templates:

### Safe Modifications
- Adding metafield outputs
- Conditional visibility
- Content reordering

### Risky Modifications
- Structural changes
- Logic modifications
- Core file edits

## CSS Variables

Customize using theme CSS variables:

```css
:root {
  --color-primary: #6366f1;
  --font-heading: 'Your Font';
  --button-radius: 8px;
}
```

## Getting Help

For custom development work, consider hiring a [Shopify Expert](https://experts.shopify.com).
