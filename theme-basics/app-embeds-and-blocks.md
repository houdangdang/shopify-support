# Understanding app embeds / app blocks

App embed and app blocks are available on every Online Store 2.0 theme, allowing apps to easily add features to your theme without editing the code. App blocks have the following benefits:
- Easy to use: you can easily add an app to your page right into the theme editor you are familiar with without editing the code.
- Better safety: because app blocks do not require code editing, they usually reduce bugs and incompatibility between themes and apps.
- Improve uninstall: Shopify automatically removes the associated app blocks when you uninstall an app. This removes the "dead code" issue, which can slow down your store over time.

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> Due to all those benefits, we only recommend using apps that integrate with app blocks. If you are unsure, please reach the app developers of the app you intend to use to ask them.
</div>

## Adding app block

To add an app block, you must first install a compatible app.

Once installed, open the theme editor, navigate to a compatible template, and click **"Add section."** App blocks will appear in the **"Apps"** category:

You can find more details about app blocks in the [official Shopify documentation](https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/apps).

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> If you do not see the app block, it might be because it is not installed correctly. As each app is different, we recommend you directly contact the app developers for specific instructions.
</div>

## Enabling app embeds

App embeds allow apps to add an extra feature to your store, available on every page. For instance, a "chat app" appearing at the bottom right of your store might be using an embed block. Each embed block has different requirements; we recommend you reach the app developers directly for instructions or read the [official Shopify documentation](https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/apps).

## Use apps responsibly

Apps are the most common cause of slow stores. The more apps you add, the more scripts and data must be loaded by Shopify. While some apps are nicely coded, many are not always optimized for performance.

Merchants often ask us which apps or how many are optimal. Our answer is simple: as little as possible. Of course, apps are not always avoidable and can be of great help to solve a given problem with a cost-effective solution, but the rule of thumb is the fewer apps, the better.

## Supports for app

Keep in mind that, as [per our support policy](https://support.maestrooo.com/article/683-support-policy), we do not provide any assistance for apps. Apps are entirely supported by their respective app developers. If you are facing any issue or have any questions about an app, please reach the app developers directly.

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Warning:</strong> If you are facing any issue or have any questions about an app, please reach the app developers directly. Our support team cannot troubleshoot third-party apps.
</div>

### Performance Impact

Each app you install can affect your store's performance:

- **Additional JavaScript:** Most apps add scripts that must load
- **Extra HTTP requests:** Each app may make API calls
- **CSS overhead:** App styling can conflict with your theme
- **Database queries:** Some apps query your store data frequently

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> Before installing an app, check reviews for performance complaints. Test your store speed before and after installation using Google PageSpeed Insights.
</div>
