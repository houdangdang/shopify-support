# Verve Theme

## Displaying a custom badge / label on collections

This support guide is specific to Verve v1 and earlier.

Our themes will default display the following labels on collection and product pages: "on-sale" and "sold out".

You may want to display additional custom badges per product basis. For instance, you may want to add some promotional badges such as "Best Price", "New" or "Collab". This can be easily achieved in our themes by using the "custom badge" feature.

<img src="/assets/images/theme-guides/product-view-tag.png" alt="Product View Tag" style="max-height: 250px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

1. Open the product in Shopify admin for which you'd like to add a custom label.


2. On the bottom right, you should find the "Tags" box:

<img src="/assets/images/theme-guides/proudct-find-tag.png" alt="Product Find Tag" style="max-height: 150px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

3. Add a tag using this format __label:Your Label


For instance, if you want to add the "Sale" label for a given product, just add this label: __label:Sale

<img src="/assets/images/theme-guides/product-input-tag.png" alt="Product Input Tag" style="max-height: 116px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Important:</strong> Tag must start with TWO consecutive underscores. If you add only one, it won't work. Please note as well that the theme will automatically remove all the tags that starts by two underscore and will not display them in the list of tags for filtering.
</div>

On Verve and Focal themes only, you can add up to two custom labels. To add a second label, simply use **__label2:LABEL** in addition.


## Show a stock countdown bar (Verve)

Stock countdown can be an effective manner to display the limited availability of your product and create scarcity to increase the perceived value of your products. However, as most of this data is fake, we would recommend you to use this feature only on a limited feature of products.

To add such a countdown, follow those following steps:

1. Make sure that your variant inventory is tracked (this means that you have explicitly set an inventory quantity). You can learn more on doing by referring to Shopify official documentation: https://help.shopify.com/manual/products/inventory#set-up-inventory-tracking

2. Open the theme editor, and in the page selector (or for the featured product section if you want to add it on the home page) select **"Products - Default product"**.

3. Click on the **"Product - Variant selector"** block to display the product related settings.

4. Turn on the **"Show inventory quantity"** setting.

<img src="/assets/images/theme-guides/show-inventory-quantity.gif" alt="Show Inventory Quantity" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

