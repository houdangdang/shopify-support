# Combining alternate templates with metafields

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  Before reading this section, we recommend you read our article about <a href="/shopify-support/theme-basics/alternate-templates">alternate templates</a> and <a href="/shopify-support/theme-basics/metafields">metafields</a>.
</div>

We have seen in previous articles that:

 - Alternate templates help you to create unique templates that have their sections.

 - Metafields allow you to save additional information per product and collection,... and display them on your store by connecting them to theme sections.

One common confusion for merchants is when to use templates over metafields or vice-versa. The answer is: use both! Those two approaches are the most powerful when they are combined.

To better illustrate this, let's say that your store sells two types of products: dresses and necklaces, with the following requirements:

 - Dresses products: each product should have the basic product information, followed by a rich text section displaying "care guide" instructions. Each care guide's instructions must be unique for each dress.

 - Necklaces products: each should also have the basic product information, but this time followed by a video section to show your customers how your necklaces are produced. Each video would be the same for each chain.

When thinking of the best options, the following rules are good starting points:

 - When sections are different, you should create a new template.

 - When sections are identical, but only the content changes, you should use metafields.

---

In our example, here is what would be the ideal organization:

 - Two templates: one "dress" and one "necklace" template. The *dress template *would comprise the product section and a rich text section, while the *necklace template *would comprise the product section and a video section. Each dress product would be assigned the dress template, while each necklace product would be assigned the necklace template.

 - Because, as per our requirements, the video is similar for each necklace product, the simplest for the video section would be to directly upload the video in the theme editor for the necklace template. This way, if you need to update the video in the future, doing it once in the template would automatically apply the new video for each necklace.

 - For our dresses, we have an additional requirement where the care guide must be different for each dress. To solve this problem, the best solution is to create a new product metafield of type "rich text" named "Care guide." Finally, you would connect this "Care Guide" metafield to the rich text section from the dress template. This would effectively allow us to have per-product content.

By combining alternate templates with metafields, we managed, in this example, to create only two templates while still allowing dynamic, per-product content.

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  Don't
 Because of the requirement of having different "Care Guide" content per product, one different approach would be to create one new template for each dress. The issue, though, is that you would need many templates. Managing a lot of templates can quickly become complex and pollute your admin.
</div>