# Managing alternate templates

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

---

By using alternate templates, you can, for example:

 - Create a landing page for temporary events like Black Friday or Valentine's Day.

 - Create a page about your brand's history.

 - Create different product pages whose sections and content are different for each product.

 - Create different collection pages whose sections and content are different for each product.

### Creating new templates

To create a new template, open the theme editor, click on the page selector at the top, select the page type (for instance, click on "Products" to create a new product template or "Pages" to create a new page template), and click "Create template":

<img src="/assets/images/theme-basics/managing-alternate-templates-1.gif" alt="image" style="max-height: 800px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

Enter a unique name that you can easily recognize.

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  *Based on *option allows you to select from which template the new template is created. This can be useful if you have already created custom templates and want to create a new one based on it rather than the default template.
</div>

After creating the template, the theme editor will redirect you to the template. The template's name is visible on the top left (Shopify will show a handleized name, which means that a hyphen replaces any space):

<img src="/assets/images/theme-basics/managing-alternate-templates-2.png" alt="image" style="max-height: 500px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

You can, from here, add, remove or re-order new sections without impacting the default template.

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  It is not possible to create a new template for the home page. Each Shopify store can only have one home page. If you need to create landing pages, we recommend creating a new "Page" template instead.
</div>

### Assigning templates to resources

After creating a template, you can configure its content in the theme editor by adding, removing, or re-ordering sections. However, it won't be visible to your customers yet. This is because templates must be explicitly assigned to a resource (such as a product, collection, or page) before being visible.

To assign a template, navigate to a resource in the Shopify admin (such as a product, page, or collection). On the bottom right, locate the "Online store" card, and click "Default product" to display all the existing templates for this resource. Finally, select the template of your choice, and save:

<img src="/assets/images/theme-basics/managing-alternate-templates-3.png" alt="image" style="max-height: 200px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  If you do not see the template you have created, this might be because the theme is not published. Alternate templates are contextual to the published theme only, so you won't be able to assign a template until the theme is published.
 If you customize a draft theme, the template won't appear in the Shopify admin. This is a Shopify platform limitation.
</div>

### Deleting or renaming a template

Shopify does not offer any way to delete a template from the theme editor. Deleting a template requires you to edit the code. You can [find more information about deleting templates on Shopify documentation](https://help.shopify.com/en/manual/online-store/themes/theme-structure/templates#delete-a-template).

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  Editing the code requires basic coding knowledge. Deleted code cannot be recovered. If you are not confident about coding, we highly encourage you to reach Shopify support or hire a developer to help you delete templates safely.
</div>

### FAQ

 - How to create a landing page, such as a Black Friday page? To create a landing page, we recommend you create a new page template (as per previous instructions), and assign this template to [a new web page](https://help.shopify.com/manual/online-store/themes/theme-structure/pages#add-new-webpage).

 - How can I assign a template if my theme is not published yet? Templates can only be assigned to a product or page... when the theme is published. You can, however, create the template and add sections and content even if the theme is a draft one. Then, once you have published the theme, immediately assign the templates.

 - Is there a limit on templates? Shopify allows you to create up to 1000 unique templates. However, to make maintenance more manageable, we recommend you limit the number of new templates you create.

 - Does creating a template impact performance? Creating new templates has no impact on performance.