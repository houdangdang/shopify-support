# Using metafields and metaobjects

Metafields and metaobjects are powerful Shopify features allowing you to extend the platform with your custom data. Metafields and metaobjects can be displayed on your online store without custom coding.

However, metafields and metaobjects can feel complex to use at first.

### Metafields

Metafields let you save additional, specialized information for products, collections, pages... that isn't directly captured in the Shopify admin. Here are some examples of what metafields could be used for:

 - List of ingredients

 - Launch date

 - Volume capacity

 - Explanatory video

 - Internal tracking information

With metafields, you can effectively extend the core platform and tailor it to your needs.

Once created, metafields can easily be re-used across different parts of the Shopify platform, including the theme editor.

For instance, you might want to show your customers "Care guide" instructions, whose content differs per product, and show this information on your online store. Shopify admin panel does not allow capturing this information out of the box, so you would typically solve this with those steps:

 - Create a metafield "Care guide" on Shopify admin.

 - Fill in the care guide instructions for each product.

 - Connect the "Care Guide" metafield to a compatible section in the theme to show this information.

To learn more about managing metafields, [refer to the official Shopify documentation](https://help.shopify.com/en/manual/custom-data/metafields). If you need assistance to set up metafields, we recommend you [reach Shopify support](https://help.shopify.com/support/support-type).

#### Displaying metafields on your store

After creating metafields, you can connect them in the theme editor on sections or blocks. To connect a metafield, open the theme editor and click on the database icon next to a setting name:

<img src="/assets/images/theme-basics/using-metafields-and-metaobjects-1.png" alt="image" style="max-height: 800px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

The editor will show you all the metafields connected to a given field.

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  Not all metafields can be connected to every setting. There must be a matching between the metafield type and setting. For instance, an "image" metafield will only connect to an image set, not a text setting.
 Similarly, some metafields cannot be connected, such as the metafield representing a PDF file. If you need to connect such metafields, we recommend that you reach out to Shopify support and explain your use case. This will help Shopify prioritize future developments based on customers' requests.
</div>

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  Variant metafields cannot be connected via the theme editor. Variant metafields <a href="/shopify-support/theme-basics/hiring-shopify-expert">require you to hire a developer</a>.
</div>

### Metaobjects

Metaobjects are a group of metafields, allowing you to manage a large number of related metafields easier.

Metaobject is a powerful yet complex feature, and most merchants do not need them initially. We, therefore, do not recommend you spend too much time understanding metaobjects at first. Metaobjects usage typically appears by itself when your store grows.

To learn more about managing metaobjects, [refer to the official Shopify documentation](https://help.shopify.com/en/manual/custom-data/metaobjects). If you need assistance to set up metafields, we recommend you reach [Shopify support](https://help.shopify.com/support/support-type).