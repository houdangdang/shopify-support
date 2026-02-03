# Pages
Setup custom pages: FAQ, contact page and landing pages, etc.



## Creating a landing page


Templates in Shopify are a fundamental concept to understand. It is, however, a common source of confusion for merchants. This section will guide you through the templates' basics and help you manage them more efficiently.


### What are templates?


A template controls the sections visible on a given page. There are templates for all page types in Shopify, such as:

- Home page
- Product
- Collection
- Blog
- Blog post
- Cart
- Customer account
- ...

Shopify automatically creates a so-called "default template" for each of those page types, which is used by all objects from a given type (for instance, each product will use the "default product template," while each collection will use the "default collection template").


This is why, when you add a section to a product template in the theme editor, this section will be visible to every product, as each product uses the default product template.


This behavior often catches by surprises merchants new to Shopify and is not always desirable, as you may want to create unique product pages or landing pages.


By using alternate templates, you can, for example:

- Create a **landing page for temporary events** like Black Friday or Valentine's Day.
- Create a **page about your brand's history**.
- Create **different product pages** whose sections and content are different for each product.
- Create **different collection pages **whose sections and content are different for each product.

### Creating new templates


To create a new template, **open the theme editor**, **click on the page selector **at the top, **select the page type **(for instance, click on "Products" to create a new product template or "Pages" to create a new page template), and **click "Create template":**



<img src="/assets/images/configuring/pages/creating-a-landing-page-1.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Enter a unique name that you can easily recognize.

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><em>Based on </em>option allows you to select from which template the new template is created. This can be useful if you have already created custom templates and want to create a new one based on it rather than the default template.</p>

</div>


After creating the template, the theme editor will redirect you to the template. The template's name is visible on the top left (Shopify will show a handleized name, which means that a hyphen replaces any space):



<img src="/assets/images/configuring/pages/creating-a-landing-page-2.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



You can, from here, add, remove or re-order new sections without impacting the default template.

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>It is not possible to create a new template for the home page. Each Shopify store can only have one home page. If you need to create landing pages, we recommend creating a new "Page" template instead.</p>

</div>


### Assigning templates to resources


After creating a template, you can configure its content in the theme editor by adding, removing, or re-ordering sections. However, it won't be visible to your customers yet. This is because templates must be explicitly assigned to a resource (such as a product, collection, or page) before being visible.


To assign a template, navigate to a resource in the Shopify admin (such as a product, page, or collection). On the bottom right, locate the "Online store" card, and **click "Default product"** to display all the existing templates for this resource. Finally, **select the template of your choice**, and **save**:



<img src="/assets/images/configuring/pages/creating-a-landing-page-3.png" alt="" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>If you do not see the template you have created, this might be because the theme is not published. Alternate templates are contextual to the <strong>published theme only</strong>, so you won't be able to assign a template until the theme is published.</p>
 <p>If you customize a draft theme, the template won't appear in the Shopify admin. This is a Shopify platform limitation.</p>

</div>


### Deleting or renaming a template


Shopify does not offer any way to delete a template from the theme editor. Deleting a template requires you to edit the code. You can [find more information on Shopify documentation](https://help.shopify.com/en/manual/online-store/themes/theme-structure/templates#managing-your-templates).

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Editing the code requires basic coding knowledge. Deleted code cannot be recovered. If you are not confident about coding, we highly encourage you to reach Shopify support or hire a developer to help you delete templates safely.</p>

</div>


### FAQ

- How to create a landing page, such as a Black Friday page? To create a landing page, we recommend you create a new page template (as per previous instructions), and assign this template to [a new web page](https://help.shopify.com/manual/online-store/themes/theme-structure/pages#add-new-webpage).
- How can I assign a template if my theme is not published yet? Templates can only be assigned to a product or page... when the theme is published. You can, however, create the template and add sections and content even if the theme is a draft one. Then, once you have published the theme, immediately assign the templates.
- Is there a limit on templates? Shopify allows you to create up to 1000 unique templates. However, to make maintenance more manageable, we recommend you limit the number of new templates you create.
- Does creating a template impact performance? Creating new templates has no impact on performance.




## List of collections page template


By default, Shopify only allows to have one page to display your store collections (you cannot create different "collections of collection", as you can do with product). However our themes come with a built-in solution through a dedicated page template.


Open the theme editor and, in the page selector at the top, click on "Pages":



<img src="/assets/images/configuring/pages/list-of-collections-page-template-1.png" alt="" style="max-height: 300px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Then click on "Create template" at the bottom:



<img src="/assets/images/configuring/pages/list-of-collections-page-template-2.png" alt="" style="max-height: 300px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



In the name, enter an arbitrary name for your template (like "Men collections", "Women collections"...), and in the "Based on" selector, choose "list-collections" or "collections" (the name depends on the theme you are using, but it should be one of those two):



<img src="/assets/images/configuring/pages/list-of-collections-page-template-3.png" alt="" style="max-height: 300px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



2


Make sure that the name matches your template name and, in the "Collection list" section, click on "Add collection" and select the collections you want to show:



<img src="/assets/images/configuring/pages/list-of-collections-page-template-4.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><strong>Shopify only allows you to add up to 16 blocks. This is a limitation of Shopify theme editor to preserve good performance for the system. If you need more collections you will need to split your collections into several pages.</strong></p>

</div>


3


Once you have configured your template, you will need to assign it to a page. To do that, open the "Pages" section of your Shopify admin:



<img src="/assets/images/configuring/pages/list-of-collections-page-template-5.png" alt="" style="max-height: 350px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



Create a new page and, in the "Templates" box on the bottom right, select the template you have just created:



<img src="/assets/images/configuring/pages/list-of-collections-page-template-6.png" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><strong>The alternate templates are contextual to the published theme. This means that if the theme is not your active one, you won't be able to connect the template to the page until you have published the theme.</strong></p>

</div>

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p><strong>If you want to create more than one page, simply repeat all the steps (by creating a new template, selecting the collections and assigning it to a page).</strong></p>

</div>





## Creating a FAQ page


The theme comes pre-created with an existing FAQ page template. This section will guide you through the different ways to show a FAQ on your store.


### Creating a dedicated FAQ page


To create a dedicated FAQ page, follow the steps below:


1/ Open the theme editor.


2/ In the page selector, **click on "Pages"** and **select *****faq *****template**:



<img src="/assets/images/configuring/pages/creating-a-faq-page-1.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



3/ Manage the content you want to show on your FAQ by adding, removing, or re-ordering blocks in the FAQ section that has been pre-added to the page:



<img src="/assets/images/configuring/pages/creating-a-faq-page-2.png" alt="" style="max-height: 400px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



4/ Assign this template to a new or existing web page to make it visible on your store. To do that, **navigate to the Pages section** in Shopify admin:



<img src="/assets/images/configuring/pages/creating-a-faq-page-3.png" alt="" style="max-height: 270px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



5/ Select the page you want to transform as a FAQ (or create a new page). In the "Online Store" box at the bottom right, select "faq" for the theme template:



<img src="/assets/images/configuring/pages/creating-a-faq-page-4.png" alt="" style="max-height: 220px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Alternate templates are contextual to the published theme. If you do not see the FAQ template in the list, you must wait until you publish the theme.</p>

</div>


### Creating more than one dedicated FAQ pages


You may want to have several FAQ pages whose content is different. If you assign multiple pages to the same FAQ template, the content will be shared.


To have a unique FAQ whose content is different, you will need to duplicate a template in the theme editor by making sure to select "faq" in the "Based on" setting:



<img src="/assets/images/configuring/pages/creating-a-faq-page-5.gif" alt="" style="max-height: 600px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



This will create a new FAQ template whose content can be edited without impacting the original FAQ template. From there, you will need to create a new web page, but assign it this time to the new "faq-2" template created earlier.


### Adding a FAQ section to an existing page


Another common use case is to show a FAQ section on an existing page, such as the home page, product page, or collection page.


To do that, navigate to the page you want to add the section, click on "Add section" button and select the section "FAQ". [Learn more about managing sections](/theme-basics/understanding-sections-and-blocks).





## Creating a contact page


The theme comes pre-created with an existing contact form page template. This section will guide you through the different ways to show a contact form on your store.


### Creating a dedicated contact page


To create a dedicated contact page, follow the steps below:


1/ Assign the "*contact*" template to a new or existing web page to make it visible on your store. To do that, **navigate to the Pages section** in Shopify admin:



<img src="/assets/images/configuring/pages/creating-a-contact-page-1.png" alt="" style="max-height: 300px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">



5/ Select the page you want to transform as a contact form (or create a new page). In the "Online Store" box at the bottom right, select "contact" for the theme template:



<img src="/assets/images/configuring/pages/creating-a-contact-page-2.png" alt="" style="max-height: 250px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">


<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">

 <p>Alternate templates are contextual to the published theme. If you do not see the contact page template in the list, you must wait until you publish the theme.</p>

</div>


### Adding a contact form to an existing page


Another common use case is to show a contact form on an existing page, such as the product page. This can be used to help your customers to reach you more easily.


To do that, navigate to the page you want to add the section, click on "Add section" button, and select the section "Contact form". [Learn more about managing sections](/theme-basics/understanding-sections-and-blocks).


### FAQ


#### To which email are the messages sent?


All emails are sent to the sender email address configured in your store. To change this email, open your Shopify store, navigate to "Settings" > "Notifications" and change the Sender email.


#### Is it possible to add image attachments?


Shopify contact form does not support attachments. You must use a third-party form system if you need a contact form where your customers can attach an image or a file. We recommend you reach Shopify support for some app recommendations.


#### I don't receive the emails sent from the contact form


Emails are not sent directly by the theme but by the Shopify system. If you do not receive the emails sent to the contact form, please check first that the sender's email address is correctly configured (especially checking for any typo mistakes).


If the sender email is correct but you still do not receive the emails, it can be a domain name configuration error, or an improper setting at Shopify level. In all cases, because emails are sent from Shopify servers, we do not have any way to investigate such issues. Only Shopify support and their technical team are able to debug contact form issues.



---
