# Remove the "Powered by Shopify" Link

Hide the Shopify branding from your store footer.

## Using Custom CSS

The simplest method:

1. Open the theme editor
2. Click **Theme settings** (gear icon)
3. Open **Custom CSS**

![Custom CSS Panel](/assets/images/theme-basics/custom-css-panel.png)

4. Add this code:

```css
a[rel="nofollow"][href*="shopify.com"] { 
  display: none; 
}
```

5. Click **Save**

## Using Theme Settings

Some themes have a built-in option:

1. Open **Theme settings**
2. Go to **Footer**
3. Look for "Show Powered by Shopify"
4. Toggle it off
5. Save

## Alternative: Edit Footer Content

In some themes, you can remove it through checkout settings:

1. Go to **Settings** → **Checkout**
2. Find the **Powered by** section
3. Remove or customize the text

::: tip Recommendation
While you can remove the link, keeping it can actually increase customer trust, as shoppers recognize Shopify as a secure platform.
:::

## Troubleshooting

If the link still appears:

| Issue | Solution |
|-------|----------|
| CSS not working | Clear browser cache |
| Multiple links | Check for hardcoded text in footer |
| App-added link | Check installed apps |
