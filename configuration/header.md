# Header
Learn more about sections in the header group: Header, Mega Menu, Announcement Bar...


## Mega-menu


All our themes support mega-menu. Mega menus allow you to create rich menus with multi-columns and optional images.



<img src="/assets/images/configuring/header/mega-menu.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



### Best practices

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><strong>Do</strong></p>
 <ul>
  <li>Use mega-menu to show a large number of links organized in multiple columns.</li>
  <li>Use mega-menu to show up to two promotional images.</li>
  <li>Split your navigation into multiple mega-menu to avoid menus being too complex.</li>
 </ul>

</div>

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><strong>Don't</strong></p>
 <ul>
  <li>For simpler navigation needs, use dropdown navigation without mega-menu. Mega-menus can create extra complexity for users.</li>
  <li>Avoid more than 4-5 columns of links per mega-menu. If you need more links, consider splitting the navigation into multiple mega-menu, or try to re-think your navigation structure. For instance, consider grouping several links.</li>
 </ul>

</div>


### Setting up mega-menus


Creating a mega-menu involves several steps. This guide will go through each one. We recommend you follow each step in the given order.


#### Step 1: setting up menu navigation


Before creating the mega-menu, you must create the menu's structure. Mega-menus work best with three-level menus (for instance, "Shop" > "Home" > "Home Decor").

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>The menu you create must contain the entire navigation structure, including the first-level links. Said otherwise, you must only have a single navigation menu (if you create one new menu for each mega-menu, this won't work).</p>

</div>



<img src="/assets/images/configuring/header/shop-mega-menu-setup.png" alt="" style="max-height: 800px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Here is an example of how the mega-menu created for the "Shop" link looks like and how each level are related to each other:



<img src="/assets/images/configuring/header/mega-menu-level.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



#### Step 2: creating the mega-menu


The second step involves creating a mega-menu:


1/ Open the theme editor, **click on the "Header" section**, and **click on "Add mega-menu" button**:



<img src="/assets/images/configuring/header/header-section.png" alt="" style="max-height: 100px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ The most important setting to fill is the "Menu item" setting. It **must match exactly **the name of the first-level links you want to create a mega-menu.



<img src="/assets/images/configuring/header/menu-item-named.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>A common mistake is entering a menu item that does not match any first-level links. If you do not see any mega-menu, double-check the menu item setting, and ensure it matches precisely a first level link.</p>

</div>


#### Step 3: configuring the mega-menu


After adding the mega-menu block to your header, you can customize it by adding images and configuring their position. This is entirely optional, and you can decide to show links only.


#### Step 4: using mega-menu for multi-languages stores


Mega-menus are compatible with multi-language stores but require an extra setup.


1/ Translate your menu in the translation app.


2/ Once you have translated the menu, **go back** to the theme editor, **select the mega-menu** you have created, **click on the three dots**, and **select "Localize"**:



<img src="/assets/images/configuring/header/mega-menu-multi-language.png" alt="" style="max-height: 300px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>You need to have the <a href="https://apps.shopify.com/translate-and-adapt">Shopify Translate & Adapt</a> free app installed on your store. If you are using a different translation app, reach the app's developer for instructions.</p>

</div>




## Customer account


Our themes are natively integrated into Shopify customer accounts. However, by default, customer accounts are disabled on Shopify. To learn more about enabling customer accounts on your store, [please refer to Shopify official documentation](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts#set-up-customer-accounts).

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Once enabled, the account link will appear in the header, either as a text or an icon, depending of the theme you are using and the settings you have selected. Please note that for size reasons on mobile, the customer account icon typically appears in the drawer menu. It is currently not possible to move the link outside the drawer menu. If you would like to change how customer accounts render on mobile, you can <a href="/shopify-support/theme-basics/hiring-shopify-expert">hire a developer</a>.</p>

</div>




## Predictive search


Predictive search shows suggested results as you type. It helps your customers refine their search without being redirected to a search results page, and quickly explore your store by seeing top results for suggested search terms, products, collections, and more.


Search is entirely managed by Shopify, and the theme does not have any control over which results are exposed.


To configure the behavior of the search, please refer to the [official Shopify documentation](https://help.shopify.com/en/manual/online-store/storefront-search/predictive-search).




## Announcement bar


An announcement bar allows you to efficiently announce short sentences, such as temporary promotions, free shipping guarantees, or temporary business holidays.


### Managing messages


To add or remove messages to the announcement bar, open the theme editor, and click on the "Announcement bar" section in the header group. Existing messages will be visible below the section:



<img src="/assets/images/configuring/header/announcement-bar.png" alt="" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



To add a new message, click on "Add message." To remove an existing message, select it, and click on the "Remove block" button to remove the message.


### Hiding the section


Sometimes (to prepare a new sale, for instance), hiding the section completely while keeping the messages can be desirable. To do that, open the theme editor and click on the small eye icon next to the section to hide it completely. To make it visible again, click again on the small eye icon.



<img src="/assets/images/configuring/header/announcement-bar-hide.png" alt="" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



### Section guidelines

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><strong>Do</strong></p>
 <ul>
  <li>Use short texts (make sure you try your store on mobile, where it is narrower).</li>
  <li>Turn off the sticky option if possible (especially if you have a tall header that is also sticky, it can drastically reduce the readability of your store for users on small screens).</li>
 </ul>

</div>

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><strong>Don't</strong></p>
 <ul>
  <li>An announcement bar can be easy to miss due to its small size. Therefore, avoid using the announcement bar for critical information. Instead, use a bigger section in the page.</li>
 </ul>

</div>





## Newsletter popup


GirlElements themes natively integrate with Shopify customer list to allow you to gather email addresses for marketing purposes. To configure the newsletter popup:


1/ **Open the theme editor**, and **click** on the "Newsletter popup" section:



<img src="/assets/images/configuring/header/file-c5jiq6X8ft.png" alt="" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ Change settings such as wording, delay, or apparition logic.


### Hiding the newsletter popup


To hide the newsletter popup, click on the small eye icon next to the section:



<img src="/assets/images/configuring/header/file-jWGUUg7QhH.png" alt="" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



### FAQ

- Does it integrate with third-party systems like Klaviyo or MailChimp? The theme is agnostic to any third-party marketing system. Instead, it simply creates a customer in Shopify customers list with a standardized tag. The customer list can then be synchronized automatically to third-party systems by using a compatible app. If you are using Klaviyo, [use the official Klaviyo app](https://apps.shopify.com/klaviyo-email-marketing). If you are using MailChimp, [use the official MailChimp app](https://apps.shopify.com/mailchimp). If you use a different marketing system, please contact their support directly to check if they natively integrate with Shopify.
- I don't receive any email when I subscribe; why? Shopify is not an email marketing system, which means it does not have features to send welcome emails or create marketing campaigns automatically. It simply helps to collect emails into a unified customer list. You need to use a marketing system such as Klaviyo or MailChimp to send automated emails. If your needs are essential, you can also use the [Shopify Email app](https://apps.shopify.com/shopify-email) developed and maintained by Shopify.
- Can I collect extra fields? Our theme only allows you to gather an email address. You need to hire a developer if you wish to pick extra fields (such as names or personal information). However, studies show that the more information you request, the lower the subscription rate (or filled with fake information that won't bring any value). Therefore, we recommend you only collect emails for higher subscription rates.
- Can I add images or videos inside the popup? Our themes do not support this. Maestroo has designed the newsletter popup to look minimalistic and reduce distraction. If you want more control over your newsletter popup's appearance, you can use a dedicated app like [PixelPop](https://apps.shopify.com/popups-promos-banners-pixelpop).




## Privacy banner / cookie banner


Privacy banner allows buyers to configure their privacy preferences regarding local regulations, such as GDPR in Europe or CCPA in California.


There are two ways to make your store compliant:

- **Recommended**: you can use the native Shopify privacy popup.
- **Deprecated**: You can use the theme's built-in privacy popup.

Historically, Shopify did not offer native features, so the theme popup was the recommended approach. However, **we now strongly encourage merchants to turn off the theme's banner and use Shopify's native popup instead**. The theme's built-in popup is deprecated and will be removed in future releases of our themes.

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Contrary to the theme's privacy banner, the Shopify native one integrates with many more privacy settings and is updated when local regulations change. This ensures that you stay compliant even when regulations evolve without having to update your theme.</p>

</div>


### Enabling the Shopify native popup

- Before using the native Shopify privacy banner, disable the theme's one. To do that, open the **Theme Editor**, and click on the eye icon next to the Privacy banner section.


<img src="/assets/images/configuring/header/file-oESMEomsjq.png" alt="" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


- Then, [follow Shopify instructions](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings#add-a-cookie-banner) to enable privacy popup in your privacy settings.
<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>You must keep only one popup active at a time. If you use the native Shopify privacy banner (as recommended), you <strong>must</strong> ensure the theme's banner is turned off. Failing to do so will cause incorrect privacy settings to be saved or cause the banner to show multiple times.</p>

</div>


### FAQ


#### Privacy banner will show over and over even when accepted/declined


If you use the theme's built-in banner, turn it off and use the Shopify native privacy banner instead. Ensure that you have only one banner enabled at a time.


If the problem persists, reach out to Shopify support, as Shopify controls the privacy banner logic.


#### What is the difference between the theme banner and Shopify native one?


While the theme banner uses the Shopify privacy API under the hood, it does not have access to all the data offered by the Shopify native banner. It also won't be updated automatically as soon as local regulations evolve. For those reasons, merchants are strongly encouraged to turn off the theme privacy banner and use the Shopify one instead.


#### Privacy banner won't show even when enabled


The privacy banner will only show if the buyer lives in an area subject to local regulations. For instance, a customer living in a country that is not affected by such regulations won't see the banner, even though it is enabled. If you are using a VPN, you might also not see the banner, as this will trick geographical detection.


Similarly, Shopify will remember the user preferences. If a user has accepted or denied privacy settings, the banner won't be shown again.


#### Privacy banner won't show despite matching all conditions


If you believe the privacy banner has been correctly set but still don't see it when you believe you should, you must reach out to Shopify support directly. Whether the banner will show is controlled directly by Shopify system, and the theme does not have access to the logic controlling this.





## Header logo


All our themes support displaying your logo in the header. GirlElements themes support two different logos that we recommend you upload:

- Standard logo
- Transparent logo

The transparent logo is used when the header is configured to be transparent. Typically, you will need to have a logo in two different colors to ensure it always remains visible.


1/ To upload a logo, open the theme editor and click on the "Header" section:



<img src="/assets/images/configuring/header/file-z1s3DPHwPC.png" alt="" style="max-height: 130px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2/ By default, the standard logo will reuse your brand logo, but you can change it by clicking on the "Select" button:



<img src="/assets/images/configuring/header/default-logo.png" alt="" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ To upload a transparent logo, still in the header section, scroll down until the *Transparent header *category to upload your transparent logo



#### 

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 Best practices
 <ul>
  <li>The standard and transparent logo must have the same dimensions.</li>
  <li>The logo's dimensions must be twice the visual size to ensure good quality on a high-resolution screen. For instance, if you select "200px" as the image width, the logo image you upload should be 400px wide.</li>
  <li>For best results, use a horizontal logo. We do not recommend square, vertical, or round images, as they will make your header look big.</li>
 </ul>

</div>


---