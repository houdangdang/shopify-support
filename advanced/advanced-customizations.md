# Hide inventory bar (Verve)

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Warning:</strong> We recommend people with no technical knowledge reach a <a href="https://experts.shopify.com/">Shopify Expert</a>. If you wish to alter the code of your theme but do not have technical knowledge, we highly discourage you from editing it yourself.
</div>

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Important:</strong> We do not provide any assistance or support for these customizations.
</div>

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> This customization assumes you are using the most recent theme version. Before making any customizations make a duplicate of your current theme.
</div>

To hide the inventory bar on Verve you can use a short CSS snippet.

1. Navigate to your Product Page in the Theme Editor.
2. In your product section, click to open the Custom CSS block.
3. Add this to your Custom CSS block:

<img src="/assets/images/advanced/advanced-customizations/hide-inventory-bar.png" alt="Custom CSS Block" style="max-height: 600px; width: auto; display: block; margin: 16px 0;">

```css
.inventory-bar { display: none; }
```
