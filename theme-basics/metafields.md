# Using Metafields and Metaobjects

Extend your theme with custom data using Shopify's metafields and metaobjects.

## What are Metafields?

Metafields allow you to add custom data to:
- Products
- Collections
- Customers
- Orders
- Pages

## Creating Metafields

### In Shopify Admin

1. Go to **Settings** → **Custom data**
2. Select the resource type (Products, Collections, etc.)
3. Click **Add definition**
4. Configure:
   - Name
   - Namespace and key
   - Content type
   - Validation rules

### Common Use Cases

| Metafield | Use Case |
|-----------|----------|
| Product specs | Technical specifications table |
| Care instructions | Washing/care labels |
| Video URL | Product videos |
| Custom badge | Special labels |
| Delivery time | Estimated shipping |

## Using Metafields in Theme

Reference metafields in Liquid:

```liquid
{{ product.metafields.custom.care_instructions }}
```

Or use dynamic sources in the theme editor:
1. Select a text/image input
2. Click **Connect dynamic source**
3. Choose your metafield

## Metaobjects

Metaobjects are custom content types for:
- Size charts
- Ingredient lists
- Team members
- Store locations

### Creating Metaobjects

1. Go to **Content** → **Metaobjects**
2. Click **Add definition**
3. Define fields for your content type
4. Create entries

::: info Theme Integration
Our themes support metafields and metaobjects through dynamic sources in the theme editor.
:::
