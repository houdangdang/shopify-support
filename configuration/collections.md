# Collections
Setup Collections: product listing, manage filtering and sorting, badges, etc...


## Products filtering

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Advanced filtering using the Search & Discovery app is supported on all our themes released after February 2026. If you use an older version, you will be limited to tag filtering. If you use an old version and want to take advantage of advanced filtering, you must <a href="/shopify-support/theme-basics/updating-theme">update your theme first</a>.</p>

</div>


Filtering is the action of reducing the number of results based on some conditions. Here are some filters often found in e-commerce stores:

- Price filtering
- Color filtering
- Vendor filtering
- ...

### Managing filters


In Shopify, filters are not directly configured in the theme but in the free Shopify [Search & Discovery app](https://apps.shopify.com/search-and-discovery). This app should automatically be installed on any Shopify store. If this is not the case, you can install the app manually by [clicking here](https://apps.shopify.com/search-and-discovery).


Once the app is installed, filters can be added, removed, or re-ordered. Any filters you configure in the app are automatically reflected in the theme. [Learn more about how to manage filters](https://help.shopify.com/manual/online-store/search-and-discovery/filters).


### Creating color swatch filtering


Color swatches are automatically enabled on collection pages. You however must configure your color swatch globally. [Learn more about how to configure color swatches](/configuration/products.html#configuring-product-pages).

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Starting from September 25th, 2024, Shopify Search & Discovery allows you to create filters from category metafields and to leverage native color swatches in filters as well. To learn more about connecting category metafields, refer to <a href="https://help.shopify.com/en/manual/online-store/search-and-discovery/filters#category-metafield-filters">Shopify official documentation</a>.</p>

</div>


### Translating filters


If your store is available in multiple languages, filters can be translated in a compatible translation app, such as Shopify's [Translate & Adapt app](https://apps.shopify.com/translate-and-adapt). For more information, please reach the app developers directly.

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Tags can't be translated. If you are leveraging filtering by tags, you won't be able to localize them, and we recommend you migrate to the new filtering system of Shopify.</p>

</div>


### FAQ


#### Price filtering is not visible when I change currency


Shopify only supports filtering by price for the store's primary currency. This is a platform limitation, not a theme limitation. We recommend you to reach Shopify support to let them know about your use case, so that they can prioritize this in future developments.


#### **Filters are not visible even though enabled**


If you have properly configured your filters but they still do not show, please check the following possible reasons:

  - Your collection contains more than 5000 products: as of today, Shopify hides filters when a collection exceeds 5000 products. If you have a valid use case that requires that many products, please reach Shopify support to let them know about your use case. This will help them prioritize future developments.
  - You are using a filtering app: if you are using a filtering app such as *Boost AI Search & Filters *or similar, the filtering is no longer controlled by the theme but by the app. You will therefore need to reach the app developers to check with them how to configure filtering on their app. Our support cannot provide support for third-party filtering apps.
  - You are using an outdated theme: if your theme has been installed before August 2022, it is not compatible with advanced filtering.

#### Can I filter by tag?


On Online Store 2.0 themes, Shopify introduced a new filtering system that no longer relies on tags. Tags should be avoided for filtering purposes, as they come with significant limitations (such as needing to be translatable or grouped by category). If you want to filter by tag, you can manually [add tag filtering in Search & Discovery app](https://help.shopify.com/en/manual/online-store/search-and-discovery/filters#filter-types).


#### Can filters be translated?


Yes, all filters can be translated with a compatible translation app, such as Shopify's free Translate & Adapt app. The only exception is tags, which cannot be translated.


#### Can filters be sorted?


Yes, the Search & Discovery app allows you to re-order the filters. You can learn more about how sorting filter values in [Shopify Search & Discovery documentation](https://help.shopify.com/en/manual/online-store/search-and-discovery/filters#sorting-filter-values). For more assistance, reach Shopify support.



## Products sorting


Sorting allows customers to change the display order of products within a collection. Sorting is very different from filtering:

- Filtering *reduces *the number of products by only showing products matching one or more conditions.
- Sorting *does not reduce *the number of products but changes the display order (for instance, sorting by price or alphabetically).

### Enabling/disabling sorting


Sorting is enabled by default, but you can turn it on or off anytime.


1/ Open the theme editor.


2/ In the page selector, click on "Collections" then "Default collection":



<img src="/assets/images/configuring/collections/products-sorting-1.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Select the "Collection" section:



<img src="/assets/images/configuring/collections/products-sorting-2.png" alt="" style="max-height: 150px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ Turn on or off the "Show filters" setting:



<img src="/assets/images/configuring/collections/products-sorting-3.png" alt="" style="max-height: 280px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



### Changing the default sort order


By default, the collection's products are sorted by best-selling. This is the recommended approach, as it helps to show your most popular products higher on the page.


You can, however, override the default order on a per-collection basis.


1/ Open the "Collections" part in Shopify admin:



<img src="/assets/images/configuring/collections/products-sorting-4.png" alt="" style="max-height: 250px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ Click on the collection you want to change the order.


3/ Change the default order in the "Products" card:



<img src="/assets/images/configuring/collections/products-sorting-5.png" alt="" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



#### 

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 All products collection
 <p>Each Shopify store has an "all products" collection automatically generated for you. Because it won't appear in the admin, you won't be able to change the order. The workaround is to create your own "All" collection that replaces the default one. To do that, create a new collection in Shopify admin and name it <strong>All </strong>(just All, nothing more, nothing else!). Add an automatic condition that includes all your products (such as price superior to zero).</p>

</div>


### Removing sort options

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>This is only supported in Verve 1.0.0 and higher. If you use an older version, you must contact our support team directly.</p>

</div>


To remove some sort options, follow the steps below:


1/ In the theme list, click on the three dots "More options" and select "Edit default theme content":



<img src="/assets/images/configuring/collections/products-sorting-6.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ Type *sort *in the filter field. Shopify will show all the different collection sorting options:



<img src="/assets/images/configuring/collections/products-sorting-7.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ To remove a given option, replace the text with an empty whitespace. For instance, to remove the *Best selling *option:



<img src="/assets/images/configuring/collections/products-sorting-8.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ Save the sentences.


### Creating custom sort options


Shopify does not currently support creating custom sort options (such as sorting by rating). We recommend contacting Shopify support to inform them about your use case. This will help Shopify development team to prioritize future developments.


### Out-of-stock products


Currently, Shopify does not support moving out-of-stock products at the end of a collection automatically. We recommend you to reach out to Shopify support to suggest this idea.





## Collection image


A collection image represents your collection and is visible from various areas of your store, such as the collection page, the predictive search, or the collection list page.


### Uploading a collection image


To upload a collection image, **open Shopify admin** and **click on "Collections"**:



<img src="/assets/images/configuring/collections/collection-image-1.png" alt="" style="max-height: 300px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Select the collection for which you want to change the image, and upload an image in the "Image" box:



<img src="/assets/images/configuring/collections/collection-image-2.png" alt="" style="max-height: 380px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Shopify does not currently support uploading a different image for mobile and desktop. The same image is re-used and might be cropped depending on the available space.</p>

</div>



### Guidelines


#### 

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 Do
 <ul>
  <li>Use a landscape format (we recommended 2400 x 900px, in JPG format).</li>
  <li>Make the focal point (the most essential element of your image) around the middle of the image.</li>
 </ul>

</div>


#### 

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 Don't
 <ul>
  <li>Don't add text on top of a collection image, as this text won't be visible to search engines and might be cut based on the available screen space. Instead, use the collection description to add text.</li>
  <li>Choose an image representing the collection, and avoid images being too abstract, as this may confuse buyers.</li>
 </ul>

</div>




## Quick buy / quick view


Quick buy / quick view is a feature allowing your customers to add products to their cart directly from product listing (such as collection pages or featured collections sections):

- Products without variants are directly added to the cart.
- Products with variants open a modal allowing customers to choose their variants without leaving the page.
<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If you sell high price products, or products requiring complex explanations, we recommend you turn off the quick view feature to force customers to visit the product details. This will help your customers better understand your products before purchasing them, potentially reducing customer support.</p>

</div>


To enable or disable the quick buy feature, open the **"Default collection"** and click the **"Collection"** section, then select **"Show quick buy on"** and **"Show quick view on"** on the right. 



<img src="/assets/images/configuring/collections/quick-buy-quick-view-1.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">






## Product card image ratio


Product cards are displayed on product listings, such as collection pages, search pages, or featured collections sections.


By default, the theme will use your image aspect ratio to ensure images are not cut. This is the recommended approach if images are essential for your products.


However, there are cases where it is useful to force a different ratio for the product card's image on listings:

- If your product images have different ratios from product to product, then the product listing grid can look off.
- If your product images have a weird ratio that does not look good on a grid.

To do that, our themes offer a way to force a specific ratio. To change the ratio, open the theme editor, **click on the General settings icon**, then **select Product card category**:



<img src="/assets/images/configuring/collections/product-card-image-ratio-1.png" alt="" style="max-height: 400px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Then, change the "Image size" setting:



<img src="/assets/images/configuring/collections/product-card-image-ratio-2.png" alt="" style="max-height: 90px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Most of our themes support the following options:

- Natural (default): the ratio will respect your image ratio, ensuring the image is never cropped.
- Square, Short and Tall: the ratio will be resized to fit into a square (1:1), short (4:3) or tall (2:3) format.
- Fill card variations: images will also be cropped in addition to being resized to fit into a square, short, or tall format.
<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>This setting only affects product listings such as collection pages. On product pages, the natural ratio of your images will be used. If you want to also change the ratio of your images on product pages, you will need to resize your images to the desired format, and re-upload them to Shopify.</p>

</div>





## Controlling the "All products" collection


By default, Shopify creates an "all products" collection, which contains all the products in your store. This collection is not visible from the "Collections" part of the admin, which makes it impossible for merchants to control the title, image, or content.


Hopefully, there is a simple trick to control this page. To do that, open the Shopify admin > "Collections" and create a new collection.


You **must** name the collection "All" (exactly All, nothing more, nothing else). Then, create a condition and select a broad condition to include all products, such as 'Price > 0'. Here is how it should look:



<img src="/assets/images/configuring/collections/controlling-the-all-products-collection-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



After you have created the collection, you can rename it to something else (make sure NOT to rename the handle of the collection, though; it must remain "all").


---

