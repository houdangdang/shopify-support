# Products
Setup features specific to products: color swatches, inventory, size chart, etc...



## Configuring product pages


Product pages are one of the most important pages in your store. This is where customers can learn more about your products and eventually add them to their cart.


To help you create rich product pages, our themes offer nearly 30 blocks to add to your product sections (in addition to over 30 unique sections). We highly encourage you to explore all the features the theme offers.


To configure product pages, open the theme editor. In the page selector, select "Products" then "Default product":



<img src="/assets/images/configuring/products/configuring-product-pages-1.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Any changes applied to the Default product template will apply to every product in your store. To create per-product settings, you must use alternate templates. <a href="//support.maestrooo.com/article/693-alternate-templates">Learn more</a>.</p>

</div>


To configure product page content, click on the "Add block" button in the "Product page" section:



<img src="/assets/images/configuring/products/configuring-product-pages-2.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



You can also remove or re-order existing blocks. [Learn more about managing blocks](https://prestige-theme.helpscoutdocs.com/article/474-understanding-sections-and-blocks).


---



## Product ratings / reviews


### Installing a compatible reviews app


To show reviews on your store, you need to install a compatible review app. Compatible review apps can be found in the [Shopify app store](https://apps.shopify.com/categories/store-design-social-proof-product-reviews). The most popular review apps are JudgeMe and Loox.

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Shopify used to provide a free reviews app called Shopify Reviews. This app has however been sunsetted in January 2024, it is no longer available and has stopped working.</p>

</div>


### Showing rating on listing pages


You can show ratings right on product listings (collection, home pages...). Our themes natively integrates with the standard rating metafield offered by Shopify. Please note that not all apps integrates with this. As of today, JudgeMe or Okendo apps are working with this feature. Other popular reviews apps such as Loox or Yotpo are using their own, proprietary system. If you are using one of those apps and would like to show rating on product listings, please reach the app developer.



<img src="/assets/images/configuring/products/product-ratings-reviews-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



To enable rating on listing pages, follow the steps shown below:


### Showing reviews on product pages


To show reviews on your product page, open the theme editor and navigate to the product page. In the "Product page" section, click on "Add block" and select "Rating". Re-order the block to your desired position.



<img src="/assets/images/configuring/products/product-ratings-reviews-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>The theme can only show the ratings (the stars icon). To show the actual reviews, you must reach the support of the reviews app you are using for instructions.</p>

</div>


### FAQ


#### Can we hide product ratings for products without ratings?


It is possible to hide the rating on the listing page if the product contains no reviews by turning off the "Show if no reviews" setting.


---



## Configuring color swatches


Color swatches are a powerful feature allowing you to show color options with colored images rather than text. With color swatches, customers can easily visualize your variations and make a buying decision faster.



<img src="/assets/images/configuring/products/configuring-color-swatches-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



## Native color swatches


If you are using **Prestige v9 or higher**, **Impact v5 or higher**, **Focal v11 or higher**, **Warehouse v5 or higher,** then your theme can take advantage of native color swatches. Native color swatches allow you to manage your swatch directly from Shopify admin, without the need of any complex setup or code.


Native color swatches leverage Shopify categories to work.


For more information on setting up native color swatches, please check the [Shopify documentation](https://help.shopify.com/en/manual/custom-data/metafields/category-metafields/using-category-metafields).


## Vintage color swatches


If you are using an older theme, or cannot upgrade to product categories, you can use the vintage method to setup color swatches.


To be appropriately configured, color swatches require you to follow three steps:

- [Configuring the color mapping](#Configuring-the-color-mapping-kY38O).
- [Configuring the color option names](#Configuring-the-option-names-uiaMQ).
- [Showing the swatches on product or collection pages](#Enabling-the-swatches-Lw-dZ).
- [(Optional) Translating color mapping (if your store is available in multiple languages)](#Optional-Translating-color-mapping-d7X_V).

This guide will cover each step.


### Configuring the color mapping


When the theme encounters a color name, such as *Blue*, *Navy, *or *Buffalo Brown*, it won't be able to show a color from this name automatically. The theme cannot make an assumption for you on how to render a given color, so you need to help the theme figure out how to show a given color.

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Some very simple color names, when written in English (such as <em>Blue, Red, Yellow </em>or <em>Green</em>), are automatically replaced by a color. However, you can also replace those automatically generated color with your own.</p>

</div>


This is done through the color mapping. Color mapping will map a color name (such as *Navy*) to a hexadecimal code or color name. To open the color swatch mapping, **open the theme editor**, then **click on "Color swatch" **part:



<img src="/assets/images/configuring/products/configuring-color-swatches-2.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><strong>Pro-tip</strong>: you can also configure swatches to appear rounded instead of squared from the color swatch settings.</p>

</div>


When configuring the color mapping, you must enter one mapping per line. Each line must be the color name (as written in your product options), followed by the semi-colon character (:), and the hexadecimal code or file name.


#### Using a hexadecimal code


The most straightforward approach is to use a hexadecimal code. This allows you to create a large number of colors quickly.


If you are unfamiliar with hexadecimal code, you can generate them using an online tool such as [Color Picker](https://htmlcolorcodes.com/color-picker/). The hexadecimal code will appear at the top:



<img src="/assets/images/configuring/products/configuring-color-swatches-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



For instance, here is an example mapping that allows displaying the color [#ff0000](#ff0000) for the color named *Red*, and the color [#6b483e](#6b483e) for the color named *Buffalo brown*.



<img src="/assets/images/configuring/products/configuring-color-swatches-4.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>When setting your mapping using hexadecimal code, make sure that you follow the rules:</p>
 <ul>
  <li>The color name must match the color option name in your Shopify admin.</li>
  <li>Hexadecimal code <strong>must start </strong>with the hash (#) character.</li>
  <li>Each rule must be on its line.</li>
 </ul>

</div>


#### Using an image file


Sometimes, using a hexadecimal code may not be enough. For instance, you could have dual colors such as *Red-Blue, *or patterned colors like *Zebra*.


For answering such use cases, the theme allows you to map a color name to an image file you create yourself.


1/ The first step is to create an image file representing the color to show. If you are not familiar with creating images, you can hire a graphic designer to make those images for you. **We recommend images whose size is 100 x 100px in JPG format**.


2/ After creating your image, **open the Shopify admin **and **select the "Files" section:**



<img src="/assets/images/configuring/products/configuring-color-swatches-5.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Upload the image (it can take a few seconds, depending on the size of your image).


4/ Once uploaded, click on the image and note the last part of the URL (it should be the image name followed by the extension). In the screen below, it is **zebra.jpg**



<img src="/assets/images/configuring/products/configuring-color-swatches-6.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If you uploaded an image whose name already exists, Shopify might generate a long name with random numbers and letters. You will need to copy the full handle with its extension.</p>

</div>


5/ Finally, write your mapping to map the option name to the color name. In this example, the mapping would be:



<img src="/assets/images/configuring/products/configuring-color-swatches-7.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



#### Mixing both approaches


You can, of course, mix both approaches by using hexadecimal code whenever possible and using files only when necessary.


### Configuring the option names


The theme will only show color swatches if the product option name is called *Color *or *Colour *(for stores in English).

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If your store is not English, the theme will look for a name in your preferred language. For instance, a store in French will show color swatches if the option name is <em>Couleur</em>, while a store in Japanese will look for an option named カラー.</p>

</div>


However, you may want to show color swatches for different options, such as *Material *or* Finish. *The theme cannot automatically guess your intent, so you must instruct the theme which option name must be considered as a color.


To do that, follow the steps below:


1/ In the theme list in Shopify admin, click on the "Edit default theme content" button:



<img src="/assets/images/configuring/products/configuring-color-swatches-8.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ Filter the sentences with *Color *to show the sentence to edit:



<img src="/assets/images/configuring/products/configuring-color-swatches-9.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ The *Color* sentence holds which option name must be considered a color swatch. You can enter a list of comma-separated option names. For instance, the setting as shown below will show any option named *Color, Colour, Material *or *Finish *as a color swatch:



<img src="/assets/images/configuring/products/configuring-color-swatches-10.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



### Showing the swatches


Once you have configured color mapping, the last step is to enable the color swatches on product or collection pages.


#### Product pages


1/ **Open the theme editor**, and **navigate to the Product section**:



<img src="/assets/images/configuring/products/configuring-color-swatches-11.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ In the product page template, select the *Variant picker* block:



<img src="/assets/images/configuring/products/configuring-color-swatches-12.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Select *Color swatch *for the *Color selector type *setting:



<img src="/assets/images/configuring/products/configuring-color-swatches-13.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



#### Collection pages


To show color swatches on product listings (such as collection pages), **open the theme editor**, **open the Theme Settings**, **select the "Product card" section**, and **select "Swatch" for the *****Color display mode*** setting:



<img src="/assets/images/configuring/products/configuring-color-swatches-14.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Enabling color swatches on product cards will display swatches on every product listing, including collection pages and the featured collection section.</p>

</div>


### (Optional) Translating color mapping


If your store is available in multiple languages, you must translate the mapping into each languages. For instance, a color named *Red *in English may be named *Rouge *in French. However, the color mapping only controls your store's primary language. This section will also guide you on configuring color swatches for other languages.

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Those instructions assume you are using the free <a href="https://apps.shopify.com/translate-and-adapt">Translate & Adapt app</a> from Shopify. If you are using a different translation app, please reach the app developers.</p>

</div>


1/ Ensure the mapping has been properly defined for your primary language.


2/ Open the *Translate & Adapt *app. In the app, ensure that the language you want to translate is selected.


3/ Click on the *Edit *button for the *Theme settings *category:



<img src="/assets/images/configuring/products/configuring-color-swatches-15.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ On the left sidebar, select *Color Swatch*:



<img src="/assets/images/configuring/products/configuring-color-swatches-16.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



5/ The original mapping will appear on the left, while the translated one will appear on the right (the first time, it will be empty, meaning it has not been translated yet):



<img src="/assets/images/configuring/products/configuring-color-swatches-17.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



6/ Translate the mapping, by ensuring that you properly adjust the color name with the translated product option values. For instance, if your product option *Red *is translated as レッド in Japanese, here is how the mapping would look like:



<img src="/assets/images/configuring/products/configuring-color-swatches-18.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Most of the time, only the left part before the semi-colon must be translated. The right part (either the hexadecimal code or the file name) won't change.</p>

</div>


### FAQ

- Can we set up different color swatches for the same color name? Having different colors for the same color name (for instance, a different color based on the product) is not possible. You can have only one rule per color. If you need to have different swatches for the same color name, you need to [hire a developer](https://prestige-theme.helpscoutdocs.com/article/466-hiring-a-shopify-expert-for-customization).
- Can swatches be translated? Yes, color swatches can be translated if you are using multiple languages. Refer to the section [*Translating color mapping*](#Optional-Translating-color-mapping-d7X_V) on this page for more information.
- Do color swatches reduce performance? The theme tries to optimize color swatches as much as possible. However, if you have products with a lot (20+) color options, we recommend turning off swatches on collection pages.
- Can I show variant images instead of swatches? Instead of showing color swatches, you can instead show variant images for colors. [Learn more about this feature](//support.maestrooo.com/article/767-variant-image-for-color-options).

---



## Variant image for color options


Our themes allow you to display variant images for color options:



<img src="/assets/images/configuring/products/variant-image-for-color-options-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



To be able to use this feature, you need to:

- Ensure your option name is *Color *(or the equivalent word if your store is in a different language). If you wish to use a different word (such as *Material *or *Finish*), [follow those steps](https://prestige-theme.helpscoutdocs.com/article/417-configuring-color-swatches#Configuring-the-option-names-uiaMQ).
- Ensure that all the product's variants have an associated variant image. This feature won't work if at least one variant does not have an associated image. [Learn more about adding images to variants](https://help.shopify.com/en/manual/products/product-media/add-images-variants#add-images-to-existing-variants).

Once you are fulfilling those two conditions:


1/ Open the theme editor.


2/ In the page selector, click on "Product" > "Default template":



<img src="/assets/images/configuring/products/variant-image-for-color-options-2.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Click on the "Product page" section:



<img src="/assets/images/configuring/products/variant-image-for-color-options-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ Select the "Variant picker" block:



<img src="/assets/images/configuring/products/variant-image-for-color-options-4.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



5/ Then, for the "Show variant image for options" setting, enter a list of comma-separated option names for which the theme should display the option by using the variant image:



<img src="/assets/images/configuring/products/variant-image-for-color-options-5.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



---



## Custom badges

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>These instructions only work for <strong>Stretch, Impact,</strong> <strong>Prestige version 7</strong> and up, <strong>Warehouse version 6</strong> and up, <strong>Focal version 12 </strong>and up. If you use an older theme version we recommend updating. For <strong>Focal</strong> and earlier versions of <strong>Warehouse</strong> <a href="//support.maestrooo.com/article/801-displaying-a-custom-badge-label-on-collections">see our guide here</a>.</p>

</div>


### Configuring the badges


With metafields, you can display custom badges on collections or product pages such as *New*, *Coming Soon, *or *BFCM*. Those custom badges can be displayed in addition to built-in ones like "On sale" or "Sold out."


1/ To add custom badges, open the metafields section in Shopify admin or [click this link](https://www.shopify.com/admin/metafields).


2/ Click on "Products" to add a new product metafield definition:



<img src="/assets/images/configuring/products/custom-badges-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Click on "Add definition." For the "Name," enter "Badges". For the metafield type, select "Single-line text" and select "List of values" (which allows you to enter more than one custom badge per product). When creating a metafield, you can optionally restrict the choices. This can be useful to ensure that your team can only select badges whose text has been approved by the store owner.


Once configured, it should look like that:



<img src="/assets/images/configuring/products/custom-badges-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ Click on "Save" to create the definition.


5/ Once the metafield definition has been created, open the product you want to add a custom label to in Shopify admin panel. Scroll down to the bottom until the "Metafields" section, and add custom metafields to show:



<img src="/assets/images/configuring/products/custom-badges-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



### Displaying the badges


To show the actual badges on your product pages, you need to add the "Badges" block to your product template.


To do that, open the theme editor and navigate to the product page:



<img src="/assets/images/configuring/products/custom-badges-4.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Then, in the Product page section, click on "Add block" and select the "Badges" block. Re-order the block to your desired position:



<img src="/assets/images/configuring/products/custom-badges-5.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



---



## Tabs and accordions


While product description helps convey the primary information about products to your customers, it is often needed to display extra information on the product page, such as shipping information, product ingredients, or any other secondary information.


To achieve this, our theme offers an accordion/tabs system:

<img src="/assets/images/configuring/products/tabs-and-accordions-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">
Screenshot from Prestige theme.
<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Please note: every theme has a different tab/accordion layout. The tab design in Prestige, Impact, Focal and Warehouse are each unique to the theme.</p>

</div>


We can separate extra content into two categories:

- Information that is the same for every product (for instance, shipping information).
- Information that is unique to each product (for instance, ingredients).

Maestrooo themes allow you to do both, although the instructions differ. This article details both approaches; please refer to the correct instruction.


### Adding the same content for every product


This approach is the simplest of the two. With this, you can automatically add visible content for all your products.


To do that, open the theme editor, navigate to the product page, click "Add block" and select "Collapsible text." You can then enter the text directly into the theme editor.


The video below will guide you through each step:


You can also pull content from an existing page instead of manually writing it in the theme editor. To do that, select a page in the collapsible content:



<img src="/assets/images/configuring/products/tabs-and-accordions-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



### Adding unique content for each product


While the previous approach works well for simple use case, it is not suitable if you want to show content that is different for each products (such as ingredients). To do that, we will need to use metafields.


1/ In your Shopify admin, **click on Settings **and select **Custom data **to create a new metafield:



<img src="/assets/images/configuring/products/tabs-and-accordions-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ **Click on "Products"** (as we want to create a product metafield):



<img src="/assets/images/configuring/products/tabs-and-accordions-4.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ At the top, **click on Add definition**. For the name, write something meaningful such as *Ingredients tab.* Select the *Rich text *metafield type:



<img src="/assets/images/configuring/products/tabs-and-accordions-5.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>The rich text metafield is limited to simple text formatting (headings, blockquote and bullet list). If you want to embed richer content, such as images or tables, you must create a Page reference metafield instead, and connect this metafield to the Page setting.</p>

</div>


Once everything is set up, your metafield should look like this (of course, adjust the name to your needs):



<img src="/assets/images/configuring/products/tabs-and-accordions-6.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ **Click on Save** to create the metafield.


5/ Once you have created the metafield, we must connect it to the theme editor. To do that, **open the theme editor**, and navigate to the **product section**:



<img src="/assets/images/configuring/products/tabs-and-accordions-7.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



6/ In the sidebar, for the product template, click on "Add block" and select "Collapsible text":



<img src="/assets/images/configuring/products/tabs-and-accordions-8.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



7/ Click on the small database icon next to the "Content" setting:



<img src="/assets/images/configuring/products/tabs-and-accordions-9.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



8/ Connect the metafield that you created in step 3. Once added, it will appear inside the content:



<img src="/assets/images/configuring/products/tabs-and-accordions-10.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



9/ **Save your changes**.


10/ At this stage, nothing will appear on your product page, which is normal. We have just connected the metafield but have not yet configured any content. To do that, **open the Shopify admin** and **navigate to a product** you want to set up a tab for. **Scroll down until you see the Metafields box**:



<img src="/assets/images/configuring/products/tabs-and-accordions-11.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>You might see other metafields in the list if you have created other metafields in the past.</p>

</div>


11/ Click on the metafield, and add your content:



<img src="/assets/images/configuring/products/tabs-and-accordions-12.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



12/ Save the product, and repeat the other products' process.


---



## Variant images set

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>This feature is currently only available in our themes Stretch, Impact, Warehouse, Focal v8 (or higher) and Prestige v7 (or higher).</p>

</div>


Shopify only allows you to attach one image per variant out of the box. However, in some circumstances, you may want to connect different images per variant and automatically hide those that do not belong to the selected variant.


For instance, if you have a T-Shirt available in two colors (Black and White), you may want to show five images for the black variant and five for the white variant.


Until Shopify can add a native solution to this problem, our themes come with a solution that relies on the Alt tag. Please note that this solution is manual and might not be usable if you have a huge product inventory.


### Configuring alt tags


To use this feature, follow the steps below:


1/ Identify the product option that controls the change of the image set. Most of the time, it will be the *Color *option, but it can be any other option (such as *Scent *or *Material*).


To simplify this tutorial (of course, you will need to adjust it to your products), we will assume we have an option named *Color *with Black and Silver values. Our goal is to display different sets of images when the Black or Silver option is selected.



<img src="/assets/images/configuring/products/variant-images-set-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ Once you have identified the option name, we need to edit the Alt tag of each image, click on an image in the "Media" list:



<img src="/assets/images/configuring/products/variant-images-set-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Then, click on the *Add alt text*:



<img src="/assets/images/configuring/products/variant-images-set-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ In the Alt text, enter the hash character (#), followed by the option name, an underscore, and the option's value. For instance, to show this image only when the black option is selected, we need to enter the alt tag #color_black, as shown below (make sure to click on "Save alt text"):



<img src="/assets/images/configuring/products/variant-images-set-4.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If the option is made of several words (for instance, <em>Deep blue</em>), enter the option value as it. For instance, <em>#color_deep blue</em></p>
 <p>If you also separate the option value by an underscore, it won't work.</p>

</div>


The screencast below summarizes the different steps:


5/ Repeat the process for each image.

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Keep in mind, the ALT tag is used for Accessibility and SEO purposes. However, as you are using this feature, you are effectively using the ALT tag for another purpose.</p>
 <ul>
  <li>If you want to control your alt tag independently, you will need to use a variant image set app, or separate your products into individual products. If you want to separate your products you can then use our feature for <a href="https://prestige-theme.helpscoutdocs.com/article/426-product-variations-linked-products">Product Variations</a> to group similar products.</li>
 </ul>

</div>


### FAQ

- How to show an image for every variant? If there is one or multiple images that you do want to show for every variant, simply do not set any Alt tag with the # character.
- Is it possible to show an image set based on multiple options? No. You can only have an image set for one option only.
- Is it working with multi-languages? Because this approach relies on Alt tags, which are currently not translatable, this feature won't work if you use multi-languages. If you have such problems, we recommend you rely on an app [such as this one](https://apps.shopify.com/variant-image-automator) (we do not provide support for apps, please reach the app developers if you are facing any issues). You can also use the "[product variation](https://prestige-theme.helpscoutdocs.com/article/426-product-variations-linked-products)" feature instead, which allows you to link different products.

---



## Product variations / linked products

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>This feature is only available on Stretch, Impact and Prestige v7 and higher.</p>

</div>


In Shopify, you can [use variants](https://help.shopify.com/en/manual/products/variants) to create different options for a given product. While variants are very powerful, they can be too limited if you want to create vastly different pages for each variant.


For instance, you may want to create completely different sections, color schema, or content based on the variant but still be able to link those variations to the related products. You can see an example of this feature in our demo by [clicking here](https://impact-theme-home.myshopify.com/products/hay-pc-portable-lamp-olive-green). As you can see, if you select a variation, you are redirected to a different product page.


Prestige offers a built-in solution to this problem by allowing you to use metafields to link different products.

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>While this feature allows you to emulate variations on a given product page, internally, each product will still be an individual product. Each variation will appear as an individual product on the collection and search pages. Showing swatches in collection pages won't be possible, either.</p>

</div>


To use set up this feature, please follow the instructions below:


1/ Create one product for each variation in your Shopify admin. For instance, if you want to create one product page per color, create one product for every color variation.


2/ You will now need to create two product metafields: one that will hold the actual value for the option (for instance, "Red," "Blue,"...), and one metafield that will hold the list of products to show.


To do that, [open the Metafields](https://www.shopify.com/admin/metafields) in your Shopify admin and click on "Products":



<img src="/assets/images/configuring/products/product-variations-linked-products-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ At the top, **click on Add definition**.



<img src="/assets/images/configuring/products/product-variations-linked-products-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



For the name, write something *Variation value*. Select the *Single-line-text *metafield type, and make sure that "One value" is checked. It should look like this:



<img src="/assets/images/configuring/products/product-variations-linked-products-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ Click "Add definition" again to create a second metafield. This time, name it *Variation products*, select "Product reference" as metafield type, and select "List of products". It should look like this:



<img src="/assets/images/configuring/products/product-variations-linked-products-4.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



5/ Now that metafields are created, we must connect them to the theme editor. The screencast below will guide you through the steps. Make sure to follow them strictly:


Let's focus on this part of the video, as you might have to adjust it to your needs:



<img src="/assets/images/configuring/products/product-variations-linked-products-5.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



The *Option name *setting controls what the theme will show when the product variations are displayed on your product page. For instance, the Color entered in the screenshot before will be displayed as the option name:



<img src="/assets/images/configuring/products/product-variations-linked-products-6.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



If you create variation based on a different option name (*Size*, *Material*...) you must adapt it to your needs.


The option value metafield setting **must be **"custom.variation_value" as shown in the video unless you named the metafield differently at step 3.


Finally, the Products setting is mapped to the product list reference metafield we have created in step 3.


6/ We have now set up all the features. What is left is filling in the information for all our products to create the link between them. To do that, in your Shopify admin, open the first product you want to link and scroll down to the "Metafields" section:

<img src="/assets/images/configuring/products/product-variations-linked-products-7.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


For "Variation value," enter the option value for the variation (for instance, if you want to create variations based on the color, then the variation value should hold the actual color value for this product, such as "Red," "Blue," "Green"...).


Then, for the "Variation products" metafields, select all the product variations that should appear in this product (make sure to include the product itself as well).


Finally, repeat the same process for every variation product by adjusting the variation value for each product (the "Variation products" metafields, on the other hand, should contain the same list of products for every product within a group).


### FAQ


#### Do product variations work with native color swatches?


Product variations / linked products don't work with native color swatches. Native color swatches are connected to actual variants, while product variations feature is faking combined listing by using metafields.


If you are using colors for product variations, the only way to configure color swatches is by using the config-based approach for color swatches. To configure color swatch config, open the theme editor, navigate to general settings, click on "Color swatches" category, and fill in the configuration.


---



## Combined listing app

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>The combined listing app is currently limited to Shopify Plus customers. If you would like to use this feature on a non-Plus plan, we recommend you reach out to Shopify support to let them know you are interested in this feature being expanded to non-Plus merchants. You can also use the <a href="//support.maestrooo.com/article/722-product-variations-linked-products">product variations feature</a> as an alternative.</p>

</div>


Combined listing is a powerful app that allows showcasing your products that come in multiple colors, materials, or lengths, all from the same product listing. It is the native Shopify solution for the [product variations feature](//support.maestrooo.com/article/722-product-variations-linked-products) that we offer in our themes, but without many of the drawbacks.


### Requirements


Before using combined listing app, you need to use a compatible theme version:

- Stretch: from Version 1
- Prestige: from version 10
- Impact: from version 6
- Focal: from version 12
- Warehouse: from version 6

### FAQ


#### What is the difference between combined listing app and the product variations feature that come with your themes?


Combined listing offers a native solution to having different product pages by colors, materials, or length, but showing them in the same product pages. Combined listing is much easier to set up and will surface in all channels, such as Facebook, Instagram, or Google Merchant listing. Performance-wise it is also faster, especially for large listings. Shopify Plus merchants are highly encouraged to use the combined listing app instead of the product variations feature.


#### Can I use combined listing on a non-Plus Shopify plan?


Unfortunately, Shopify currently restricts this app to Plus merchants.


---



## Size chart

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>This feature is not supported in Warehouse</p>

</div>


A size chart is a feature that allows you to show your buyers extra information about your product's dimensions and sizes to help them to choose the appropriate variant:



<img src="/assets/images/configuring/products/size-chart-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



A size chart is essential for clothing but can also be used for other use cases, such as furniture dimensions.


Our themes support setting a global size chart for each product and a different size chart per product for ultimate flexibility. Size charts are tied to the product selectors.


To display a size chart on your store, follow the steps:

- [Ensure you are fulfilling the requirements](#Conditions-rK4mD).
- [Create a page for the size chart.](#Creating-a-page-holding-the-size-chart-vJxfY)
- [Showing the same size chart for every product](#Showing-the-same-size-chart-for-every-products-LWi5e) or [showing a different size chart for each product](#Showing-a-different-size-chart-for-each-product-bzdeg).

### Conditions


You must have a variant option called Size to use a size chart. Products without variants can't currently use size charts this way (see the FAQ for some alternatives). The option name must be called precisely *Size* (for instance, if it is named Sizes, it won't work).

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Themes are automatically localized in various languages. If your store is in French, you must name your option <em>Taille</em> or サイズ if your store is in Japanese. You can learn more about how to change the <a href="#Changing-the-trigger-word-iA6pM">trigger keyword here</a>.</p>

</div>


### Creating a page holding the size chart


The first step is to create a page containing the information about your size chart:


1/ **Open Shopify admin**, and **click on "Pages"** in the "Online Store" section:



<img src="/assets/images/configuring/products/size-chart-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ **Create a new page **and** fill it with your information:**



<img src="/assets/images/configuring/products/size-chart-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>You can enter any title or content, but we recommend you use a meaningful name, such as <em>Size chart</em>, <em>Dress sizes...</em> This will make maintenance easier for you in the future.</p>

</div>

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Make sure that the page's visibility is set to visible. Hidden pages can't be connected in the theme editor.</p>

</div>


3/ Repeat the process if your use case involves multiple size charts by creating one different page for each unique size chart.


### Showing the same size chart for every product


If your use case is simple and you want to display the same size chart for each product, follow the steps below. If you instead need to display a different size chart for each product, [jump to this section](#Showing-a-different-size-chart-for-each-product-bzdeg).


1/ **Open the theme editor**, and navigate to the **product section**:



<img src="/assets/images/configuring/products/size-chart-4.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ In the sidebar, for the product template, click on "Variant picker":



<img src="/assets/images/configuring/products/size-chart-5.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If you do not see the variant picker, you might have removed it by mistake. If this is the case, click on "Add block" and select "Variant picker".</p>

</div>


3/ Select the size chart page you have created in the step before, in the *Size chart *setting:



<img src="/assets/images/configuring/products/size-chart-6.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ Save.


### Showing a different size chart for each product


Showing a different size chart for each product is a bit more complex and requires using metafields. If your use case is simpler and you just want the same size chart for every product, [follow those instructions instead](#Showing-the-same-size-chart-for-every-products-LWi5e).


1/ In your Shopify admin, **click on Settings **and select **Custom data **to create a new metafield:



<img src="/assets/images/configuring/products/size-chart-7.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ **Click on "Products"** (as we want to create a product metafield):



<img src="/assets/images/configuring/products/size-chart-8.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ At the top, **click on Add definition**. For the name, write something meaningful such as *Size chart*. Select the *Page reference *metafield type, and make sure that "One page" is checked:



<img src="/assets/images/configuring/products/size-chart-9.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Once everything is set up, your metafield should look like this:



<img src="/assets/images/configuring/products/size-chart-10.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ **Click on Save** to create the metafield.


5/ Once you have created the metafield, we must connect it to the theme editor. To do that, **open the theme editor**, and navigate to the **product section**:



<img src="/assets/images/configuring/products/size-chart-11.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



6/ In the sidebar, for the product template, click on "Variant picker":



<img src="/assets/images/configuring/products/size-chart-12.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If you do not see the variant picker, you might have removed it by mistake. If this is the case, click on "Add block" and select "Variant picker."</p>

</div>


7/ **Click the small database icon** next to the "Size chart" setting.



<img src="/assets/images/configuring/products/size-chart-13.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



8/ In the list, select the metafield we created earlier to connect it:



<img src="/assets/images/configuring/products/size-chart-14.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If you do not see the metafield in the list, ensure you have correctly created a <em>page reference </em>metafield (refer to step 3).</p>

</div>


9/ **Save your changes**.


10/ At this stage, nothing will appear on your product page, which is normal. We have just connected the metafield but have not yet configured any size chart for our products. To do that, **open the Shopify admin** and **navigate to a product** you want to set up a size chart for. **Scroll down until you see the Metafields box**:



<img src="/assets/images/configuring/products/size-chart-15.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



11/ **Click on the Size chart** metafield, and **select the page** you want to show for this product:



<img src="/assets/images/configuring/products/size-chart-16.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



12/ Save the product, and repeat the other products' process. With this approach, you can select a unique size chart for each product (or a group of products, as the same page can be assigned to more than one product).


You can use the bulk editor to assign the same page to multiple products in bulk. [Learn more about bulk editing](https://help.shopify.com/en/manual/custom-data/metafields/bulk-edit-metafields).


### Changing the trigger word


When the theme displays each product selector, it must know which one should be considered as a size option. By default, the theme uses sane defaults and considers the option name *Size *to be a size option.


However, your option might be called *Dimensions* or *Bottom size* for marketing reasons. You can add extra trigger words to indicate the theme and consider those options as size so that the size chart can also be displayed.


To do that, follow the steps below:


1/ In the theme list in Shopify admin, click on the "Edit default theme content" button:



<img src="/assets/images/configuring/products/size-chart-17.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ Filter the sentences with *Size *to show the sentence to edit:



<img src="/assets/images/configuring/products/size-chart-18.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>When filtering, you might see several matches for "Size." The one you need to edit contains "Label" in the category (please refer to the screenshot on step 2, and ensure you are editing this text and not a different one). If you edit the incorrect text, it won't work.</p>

</div>


3/ The *Size *label sentence holds which option name must be considered a color swatch. You can enter a list of comma-separated option names. For instance, by entering *Size,Dimension*s then the size chart will be displayed for any option called either Size or Dimensions:


### FAQ

- Can I set up a size chart if my product does not have variants? As of today, the size chart feature displays next to the variant selector. If your product does not have any variant (for instance, for a unique-size product), you can add a "content" block instead on your product page and connect the content to the page.
- Can I have one size chart per product? Yes, this is possible by using metafields. Please refer to this document for more information.
- Can I have one size chart for each main category of products? If you have a lot of products, manually specifying a size chart metafield can be time-consuming. Let's say you have two categories of products: skirts and shirts. Skirts and shirts must have different size charts, but all skirts have the same size chart, and all shirts have the same size. You have two options to solve this issue: 
  - Option 1: you can use bulk editing to assign the same metafield to multiple products. [Learn more about bulk editing](https://help.shopify.com/en/manual/custom-data/metafields/bulk-edit-metafields).
  - Option 2: create two product templates: one for skirts and one for shirts. Then, statically assign the skirt size chart to the skirt template and the shirt size chart to the shirt template. [Learn more about templates.](https://prestige-theme.helpscoutdocs.com/article/464-understanding-and-managing-alternate-templates)

---



## Inventory / urgency bar

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Currently, the progress bar is only available on the Prestige theme.</p>

</div>


Maestrooo themes allows you to display the inventory you have for a given variant. This feature can increase conversion by creating a feeling of urgency for buyers. However, displaying your stock can sometimes be harmful as it allows your competitors to know how many units you have in inventory. Ultimately, we recommend you do A/B testing and measure what works best for your business.


### Showing/hiding inventory


To show inventory in your store, open the theme editor, navigate to the product page section, and add the *Inventory *block.


### Showing progress bar


You can optionally turn on/off the *Show inventory bar *to display a progress bar and the inventory itself:



<img src="/assets/images/configuring/products/inventory-urgency-bar-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



To do that, after adding the inventory block, turn on the *Show progress bar *setting, and set a progress bar max value:



<img src="/assets/images/configuring/products/inventory-urgency-bar-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



The progress bar max value indicates the inventory value needed to fill the bar. For instance, if you set a progress bar of 50, a variant with an actual inventory of 25 will fill half the bar, while an inventory of 50 (or more) will fill the bar.


### Showing message in red when inventory is low


By default, the theme will always show the inventory in green (for instance, "3 units in stock"). To create a more significant sense of urgency, you can show the message in red with a different message when the inventory falls below a specific threshold. To do that, after adding the block, select a non-zero value for this setting:



<img src="/assets/images/configuring/products/inventory-urgency-bar-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Configured like this means that the message will be displayed in red if the inventory is two or less. If above 2, the standard message will display.


---



## On-sale products and sale badges


Our themes allow you to show a sale badge on your product and collection pages. Unless you have explicitly disabled it, our themes will show automatically the sale badge as soon as your products are on sale.


Setting sale prices is not done at the theme level but directly on Shopify admin. To learn more about how to set a sale price, please refer to [Shopify documentation](https://help.shopify.com/en/manual/products/details/product-pricing/sale-pricing).

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>When setting up sale prices, a lot of merchants make the mistake of setting a comparison at a price that is lower than the sale price. The theme won't show any sale badge. When setting up sale price, make sure that the compare at price is <strong>higher </strong>than the sale price.</p>
 
 <p>When a product has varied prices, the theme displays a generic "On sale" badge instead of an specific discount/percentage value, in order to not confuse customers. For example, if one variant has a discount of $45, and another variant has a discount of $17, displaying either value in the badge on the collection page would be misleading, as there are different discounts within the same product.</p>

</div>


#### European Union and sale prices

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Before showing compare-at prices in European Union countries, ensure you comply with local regulations by contacting Shopify support or a lawyer. We cannot be held responsible for any legal issues you may encounter by showing compare-at-prices.</p>

</div>


If your store is based in a country outside the European Union and you create a market to sell your products in a European Union country, Shopify will, by default, hide any compare-at-price that you set up.


This protects you from unknowingly violating the EU Price Indication Directive. European Union laws have very strict rules regarding how prices are shown to customers. If you would like to show compare-at-price nonetheless, you will need to make sure that your prices comply with European Union laws and either:

- Disable the "Hide compare-at prices for EEA customers" setting in your Shopify Market preferences.
- Define market-specific compare-at-prices for the market that has European countries.

You can find more information in Shopify's official documentation by [clicking here](https://changelog.shopify.com/posts/derived-compare-at-prices-are-now-hidden-in-europe-for-compliance-with-the-european-price-indication-directive). If you need further assistance on this, please reach Shopify support directly.


---



## Video autoplay


Most video sections and product pages allow auto-play for videos. However, a few important things to notice could prevent auto-play, especially on mobile devices.


#### Low-power mode


The first reason videos are not playing on mobile is related to low-power mode. Low-power mode is a special setting available in most mobile devices that allow to preserve battery life by reducing animation and blocking video auto-play.


This is done at the phone level, and the theme cannot force autoplay when a mobile is in low-power mode. If your video does not autoplay, ensure that you are not in low-power mode.


#### Limited data


Videos are heavy and can consume a lot of data on mobile devices. This can be a problem when users are in roaming (using their data in a foreign country), as roaming data can be extremely expensive. To avoid that, some mobile browsers can block video autoplay to protect users from expensive bills.


#### Videos with sound


Due to a lot of abuse in the past, browsers decided a few years ago to block autoplay for videos with sound to improve user experience. For this reason, when enabling autoplay, the theme automatically mutes the videos. However, depending on your privacy and browser settings, this might not be enough, especially on mobile. If so, try removing the sound directly from the video and re-upload it to Shopify.


#### Featured Media


Videos placed in the Featured or Main product media position cannot autoplay. This is a design limitation to ensure the primary product media loads quickly and doesn't interfere with the shopping experience. If you need video autoplay functionality, place the video in a secondary media position or use a dedicated video section on your product page.


#### Product videos


On desktop, some of our themes allow us to show product media as a grid rather than a carousel. When configured like this, autoplay will be turned off automatically. This is to avoid having several media playing simultaneously on the media grid, which can confuse buyers.


If you wish to use autoplay for product media on desktop, use a carousel layout for your product media.


---



## Dynamic payment buttons


The dynamic payment button is an optional feature that is displayed on the product page (as well as the featured product section) to allow buyers to purchase a product with one click, using an accelerated payment method (such as Apple Pay, Google Pay, or Shop Pay).


### Understanding the dynamic button


While this button is enabled by default, not all stores benefit from it, and it might make sense to turn it off. Especially keep in mind the following when using the dynamic checkout button:

- When clicking on this button, the current content of the cart is ignored, and only this specific product can be purchased. Therefore, this button benefits merchants that sell one product per order most. If you often sell more than one product per order, then it might be better to turn it off to reduce buyer confusion.
- The dynamic button does not currently work with subscriptions. If you offer subscriptions for most of your products, you should disable it to avoid a performance hit.

### Controlling displayed payment method


When using this button, Shopify will automatically display the fastest payment button based on the user's preference and your enabled payment methods.


For instance, a buyer using an iPhone with Apple Pay configured will see a "Pay with Apple Pay" button, while an Android user might see a "Pay with Google" or "Pay with Amazon" button.

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>It is not possible to control the payment method being displayed. Shopify automatically chooses it based on the buyer's preference, and the theme cannot force a different payment method. If you think this is important, we recommend contacting Shopify support, explaining your use case, and suggesting they add this to the core platform.</p>

</div>


### Changing the wording/appearance of the button


It is not currently possible to change either the wording or the appearance of the dynamic checkout button. The colors and icons of branded buttons, such as ShopPay, PayPal, Google or Apple Pay cannot be changed due to licensing reasons with those payment providers.


We recommend you contact Shopify support and suggest this improvement if you feel it is vital for your business.


### Performance implication


Due to its complex nature, the dynamic checkout button needs to load many scripts, which can impact your store's performance. Those scripts are automatically loaded by Shopify when the button is enabled, and it is, therefore, outside our theme's control.


If performance is your priority, consider disabling this feature in your store. Remember that this feature can also increase conversion rates, so accepting a minor performance hit might be worth it. As always, we recommend that you A/B test it and choose the best option for your audience.


### Enabling/disabling button


1/ Open the theme editor.


2/ In the page selector, click on "Product" > "Default template":



<img src="/assets/images/configuring/products/dynamic-payment-buttons-1.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Click on the "Product page" section:



<img src="/assets/images/configuring/products/dynamic-payment-buttons-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ Select the "Buy buttons" block:



<img src="/assets/images/configuring/products/dynamic-payment-buttons-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



5/ Turn on or off the "Show dynamic checkout button" setting:



<img src="/assets/images/configuring/products/dynamic-payment-buttons-4.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If the button is not visible despite enabling it, it might be because of an app you use. Especially with this button not being compatible with subscriptions, subscription app will automatically hide the button. Other apps like pre-order, discount, or gift apps might hide the button.</p>

</div>


---



## Related and complementary products


With the free Shopify Search & Discovery app, you can easily select related and complementary products and display them on your online store (this is also known as cross-selling or cross-sell products).


While both are product recommendations, they differ in their intent:

- Complementary products are products that are often bought together. For instance, if you are selling skis, a complementary product could be a pair of gloves or ski boots. A customer buying one might purchase the other.
- On the other hand, related products are similar to the ones the customer sees. For instance, on a ski product page, related products will show *another ski*. While the customer might be interested in the other ski, they probably won't purchase both.

### Creating product recommendations


Both complementary and related products must be set up in the free Shopify Search & Discovery app. You can find more information about it by [clicking here](https://help.shopify.com/en/manual/online-store/search-and-discovery/product-recommendations#create-product-recommendations).


Note that Shopify offers automatic recommendations for related products powered by AI. Complementary products, however, must be manually set up.


### Showing up complementary products


Complementary products display inside the main product page section.


Before showing them on your theme, you must manually select the complementary products in the Shopify Search & Discovery app. You can find more information about how to configure complementary products in [Shopify documentation](https://help.shopify.com/en/manual/online-store/search-and-discovery/product-recommendations#create-product-recommendations).


Once you have selected the complementary products, you must add the complementary products block to your theme to show the products.


To do that, open the theme editor, navigate to the product page, click "Add block" and select "Complementary products." The screencast below will guide you through the steps:


### Showing up related products


Related products display below the main product page section as a standalone section. To add the related products section, open the theme editor, navigate to the product page, click "Add section" and select "Related products". The screencast below will guide you through the steps:

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>The related products section is added by default, so you probably won't have to follow those steps unless you have removed it.</p>

</div>


### FAQ

- Products do not appear: if some products you have selected do not, ensure [they are eligible](https://help.shopify.com/en/manual/online-store/search-and-discovery/product-recommendations#product-recommendation-requirements). Especially, free or sold-out products won't appear as recommendations (this is a Shopify limitation that can't be lifted on our end).
- Can we automatically select complementary products? As of today, only related products can be automatically selected. If you would like to have automatic complementary products, we recommend you to contact Shopify support to suggest them this improvement.

---



## Pre-order template


Our themes come with a built-in pre-order template that can be assigned to products. Before using it, it is essential to understand the limitations of this template:

- Shopify does not have a native pre-order feature. Consequently, the only thing the theme does is change the wording from *Add to Cart *to *Pre-order* on product pages. The whole purchasing flow remains unchanged (for instance, the checkout and email notifications will remain the same as for a traditional order).
- For this template to work, you must ensure the product can be purchased (it must not be sold out).
- The template is assigned at the product level, so you cannot show the pre-order button for some specific variants.

Therefore, the built-in pre-order feature in the theme is only suited for simple use cases. If you have more requirements regarding the pre-order feature, you will need to use an app (we recommend you reach Shopify support for some app recommendations).


### Assigning the pre-order templates


To assign a template, navigate to a resource in the Shopify admin (such as a product, page, or collection). On the bottom right, locate the "Online store" card, and **click "Default product"** to display this resource's existing templates. Finally, **select the template of your choice**, and **save**:



<img src="/assets/images/configuring/products/pre-order-template-1.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If you do not see the template you have created, this might be because the theme is not published. Alternate templates are contextual to the <strong>published theme only</strong>, so you won't be able to assign a template until the theme is published.</p>
 <p>If you customize a draft theme, the template won't appear in the Shopify admin. This is a Shopify platform limitation.</p>

</div>


---



## Sold out badge


The theme automatically shows a "Sold out" badge on the collection and product pages when products become sold out. This badge can help customers visually identify unavailable products and navigate to available products instead.


### Changing the wording


1/ To use a different word than the default "Sold out" text, open the theme list, and click on "Edit theme default" content:



<img src="/assets/images/configuring/products/sold-out-badge-1.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ Click on "Product" tab to show product-related wording:



<img src="/assets/images/configuring/products/sold-out-badge-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Scroll to find the "Sold out badge" wording, and adjust the wording to your needs:



<img src="/assets/images/configuring/products/sold-out-badge-3.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



### Hiding sold-out badges on collection pages


1/ To hide sold-out badges on collection pages, open the theme editor, click on "Theme settings" > "Product card," and turn off the "Show sold-out badge."



<img src="/assets/images/configuring/products/sold-out-badge-4.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Hiding sold-out badges through settings is only possible on Impact and Prestige version 7 and higher. If you are using an older version, reach our support directly.</p>

</div>


---



## Gift card products


Gift cards are a special type of product. Once customers buy one, they receive a code that can be redeemed at checkout.


Gift cards are not managed by the theme but directly in the Shopify admin. To learn more about configuring gift card products, please refer to [Shopify gift card documentation](https://help.shopify.com/en/manual/products/gift-card-products/issue-gift-card).


If you have any questions about how gift cards work in Shopify system, please reach Shopify support directly.
