# Remove the "Powered by Shopify" link

By default, Shopify will automatically add a "Powered by Shopify" link in the footer. We recommend you to keep the link, as customers can immediately know that your store is using Shopify, and increase the trust in your store.

However, if you would prefer to remove any branding, you can follow those steps:
  

Open the theme editor, click on "Theme settings" icon on the left and open the "Custom CSS" panel:

  

<img src="/assets/images/theme-basics/remove-the-powered-by-shopify-link-1.png" alt="image" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

 

 - In the custom CSS box, copy-paste the code below:

```
/* Hide PC copyright information */
.footer .hidden-pocket,
/* Hide mobile copyright information */
.footer .footer__aside-item--copyright {
    display: none !important;
}
```

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  If the box already contains some code, add this code at the end.
</div>

 - Click on Save.