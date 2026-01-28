# Color Swatches

Display color options as visual swatches instead of text dropdowns.

## How It Works

Color swatches show a visual representation of each color variant:
- Solid colors
- Pattern images
- Material textures

## Enable Color Swatches

1. Open theme editor
2. Go to **Theme settings** → **Products**
3. Find **Color swatches**
4. Enable the feature

## Configure Colors

### Method 1: Automatic

The theme automatically matches common color names:
- Red, Blue, Green, Black, White
- Navy, Coral, Beige, etc.

### Method 2: Custom Colors

For custom colors, add a metafield:

1. Create a metafield `product.color_hex`
2. Add hex values: `#FF5733`

### Method 3: Image Swatches

For patterns and textures:

1. Name images after the variant: `navy-stripe.png`
2. Upload to **Content** → **Files**
3. Theme automatically matches by name

## Swatch Styles

| Style | Description |
|-------|-------------|
| Circle | Round swatches |
| Square | Square swatches |
| Rounded | Rounded corners |

## Size Options

- Small (20px)
- Medium (30px)
- Large (40px)

::: tip Consistency
Use consistent color naming across all products for swatches to display correctly.
:::
