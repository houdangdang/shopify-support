# Using Apps
Learn more about apps, how they interact with themes and how to solve common issues.


## Using apps responsibly

Apps allow you to add new features to your store that are impossible otherwise. Apps, while powerful, are often the root cause of performance issues or incompatibilities.

In the Shopify ecosystem, apps are always installed on top of themes. If you are facing an issue with an app or after installing an app, you must reach the app developers directly. **Our support does not cover any app problems.**

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> Here are some best practices when it comes to apps:
</div>

- Limit the number of apps you are using. We recommend not using more than ten apps in a single store.
- Before installing an app, ask yourself if the app is solving an actual problem you are facing. Don't install an app because you think it might be helpful. Instead, install an app to solve a problem or answer a use case often requested by your customers.
- Avoid apps that ask permission to access your theme code. Apps that directly edit the code are often the source of problems. If you are unsure about it, reach the app developers to ask them about their policy.
- Check if things can't be achieved with the theme directly. Modern themes offer many features and sections, allowing you to solve many problems without apps. Leveraging theme features will help to improve performance and reduce bugs.


## Integrating Klaviyo widgets

Klaviyo is a popular app on Shopify that helps you do email and SMS marketing.

Integrating Klaviyo into a theme often requires adding some code. As for any apps, app developers are required, as official app partners, to provide this installation assistance.

If you are facing any issues with Klaviyo, reach their support directly through this email address: support@klaviyo.com

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Important:</strong> Our support does not assist in installing Klaviyo code or fixing issues introduced by Klaviyo.
</div>

## Shopify Inbox - avoiding icon covering content

[Shopify Inbox](https://www.shopify.com/inbox) is an app developed by Shopify allowing you to manage customer conversations easily, directly from your Shopify store. Such apps can help to create trust with your customers.

However, Shopify Inbox app developers made the weird decision to think that their widget should appear on top of everything, including essential buttons like the checkout button.

We have notified their developers about this shortcoming of their app. However, you can quickly work around this to ensure that the Shopify Inbox app does not cover important content.

1. Open the theme editor for the theme exhibiting the issue.
2. Click on Theme Settings, then click on Custom CSS:
3. In the Custom CSS box, copy-paste the code below:

```css
#ShopifyChat { z-index: 2 !important; }
```

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> If the Custom CSS box already contains some code, add this extra code at the end.
</div>

## Adding a back in stock app

A back-in-stock app lets you notify your customers whenever a product they are interested in is back in stock. This is a great way to reduce buyers' frustration and increase sales.

However, a theme cannot provide a back-in-stock functionality due to what a theme can access in your store. To add such a feature, you will need to use an app.

There are several apps in the app store, but we can recommend the app called [Back In Stock.](https://apps.shopify.com/back-in-stock) If this app does not match your use case, we recommend you contact Shopify support for more recommendations.
