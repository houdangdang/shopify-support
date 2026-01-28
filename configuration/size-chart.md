# Size Chart

Add size charts to help customers choose the right size.

## Creating a Size Chart

### Method 1: Metaobject (Recommended)

1. Go to **Content** → **Metaobjects**
2. Create definition: `Size Chart`
3. Add fields:
   - Title (text)
   - Content (rich text)
   - Image (file)
4. Create entries for each chart

### Method 2: Page

1. Create a new page
2. Add your size chart content
3. Link from product page

## Displaying Size Chart

### Theme Settings

1. Open theme editor
2. Go to product page
3. Add **Size chart** block
4. Configure:
   - Trigger text: "Size Guide"
   - Display: Modal or Drawer
   - Connect to metaobject

### Example Size Chart

| Size | Chest (in) | Waist (in) | Length (in) |
|------|------------|------------|-------------|
| S | 36-38 | 28-30 | 28 |
| M | 39-41 | 31-33 | 29 |
| L | 42-44 | 34-36 | 30 |
| XL | 45-47 | 37-39 | 31 |

## Per-Product Charts

Assign different charts to products:

1. Create product metafield
2. Link to size chart metaobject
3. Theme displays linked chart

::: tip Best Practice
Include measurement instructions and conversion between units (inches/cm).
:::
