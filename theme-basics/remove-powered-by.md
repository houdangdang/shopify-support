# Remove the "Powered by Shopify" link

By default, Shopify will automatically add a "Powered by Shopify" link in the footer. We recommend you to keep the link, as customers can immediately know that your store is using Shopify, and increase the trust in your store.

However, if you would prefer to remove any branding, you can follow those steps:

1. Open the theme editor, click on "Theme settings" icon on the left and open the "Custom CSS" panel:

2. In the custom CSS box, copy-paste the code below:

```
a[rel="nofollow"][href*="shopify.com"] { display: none; }
```

If the box already contains some code, add this code at the end.

3. Click on Save.
