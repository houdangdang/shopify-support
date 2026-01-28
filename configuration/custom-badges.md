# Custom Badges

Add custom badges to highlight products.

## Built-in Badges

Automatic badges for:
- **Sale** - Products with compare-at price
- **Sold out** - Out of stock products
- **New** - Recently added products

## Custom Badges

Create custom badges using metafields:

### Setup

1. Go to **Settings** → **Custom data** → **Products**
2. Add definition:
   - Name: `Custom Badge`
   - Key: `custom.badge`
   - Type: Single line text

### Apply to Products

1. Open a product
2. Find the metafield section
3. Enter badge text: "Bestseller", "Limited", etc.

## Badge Styling

Configure in **Theme settings** → **Products**:

| Setting | Options |
|---------|---------|
| Badge position | Top left, Top right |
| Badge color | Custom color picker |
| Text color | Light or dark |
| Border radius | Square, Rounded, Pill |

## Multiple Badges

Show multiple badges per product:

```
Sale + Custom Badge
Sold out + New
```

Configure stacking in theme settings.

## Badge Priority

If a product has multiple badges, display order:
1. Sold out (highest priority)
2. Sale
3. New
4. Custom badges
