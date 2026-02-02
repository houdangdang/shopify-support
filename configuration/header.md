# Header

Learn more about sections in the header group: Header, Mega Menu, Announcement Bar...

## Mega-menu

All our themes support mega-menu. Mega menus allow you to create rich menus with multi-columns and optional images.

### Best practices

Before setting up mega-menus, here are some best practices to follow:

- **Keep it simple:** Mega-menus can quickly become overwhelming if they contain too many items. Try to keep the number of columns to a maximum of 4-5.
- **Use images sparingly:** While images can make your mega-menu more visually appealing, too many images can make it look cluttered. Use images only for your most important categories.
- **Test on mobile:** Mega-menus are automatically converted to a simpler mobile menu on mobile devices. Make sure to test your mega-menu on mobile to ensure it looks good.

### Setting up mega-menus

Setting up mega-menus requires four steps:

1. **Setting up menu navigation**
2. **Creating the mega-menu**
3. **Configuring the mega-menu**
4. **Using mega-menu for multi-languages stores** (optional)

#### Step 1: setting up menu navigation

The first step is to create a navigation menu in Shopify admin. To do that:

1. Open your Shopify admin
2. Navigate to **Online Store > Navigation**
3. Click on the menu you want to edit (usually "Main menu")
4. Add menu items as needed

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> You can create nested menu items by dragging and dropping menu items under other menu items. However, for mega-menus, you only need to create top-level menu items. The mega-menu will handle the nested items.
</div>

#### Step 2: creating the mega-menu

Once you have created your navigation menu, you need to create a mega-menu:

1. Open the theme editor
2. Navigate to the **Header** section
3. Click on **"Add block"** and select **"Mega menu"**
4. In the **"Menu item"** setting, select the menu item you want to turn into a mega-menu

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Important:</strong> You can only create one mega-menu per top-level menu item. If you want to create multiple mega-menus, you need to create multiple mega-menu blocks.
</div>

#### Step 3: configuring the mega-menu

Once you have created a mega-menu block, you can configure it:

**Adding columns:**

1. Click on the mega-menu block
2. Click on **"Add column"**
3. Configure the column:
   - **Heading:** The title of the column
   - **Links:** The links to display in the column
   - **Image:** An optional image to display at the top of the column

You can add up to 5 columns per mega-menu.

**Configuring links:**

For each column, you can add links in two ways:

- **Manual links:** You can manually add links by clicking on "Add link" and entering the link URL and title
- **Automatic links:** You can automatically pull links from a menu by selecting a menu in the "Menu" setting

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> Using automatic links is recommended if you have a lot of links, as it makes it easier to maintain your mega-menu.
</div>

#### Step 4: using mega-menu for multi-languages stores

If your store is available in multiple languages, you need to translate your mega-menu for each language.

**Translating menu items:**

Menu items are automatically translated if you use the [Translate & Adapt app](https://apps.shopify.com/translate-and-adapt) from Shopify.

**Translating mega-menu content:**

To translate mega-menu content (such as column headings):

1. Open the Translate & Adapt app
2. Select the language you want to translate
3. Click on **"Theme"**
4. Find the mega-menu block you want to translate
5. Translate the content

## Navigation

The navigation menu is the main menu displayed in your header. It allows customers to navigate through your store.

### Creating a navigation menu

To create a navigation menu:

1. Open your Shopify admin
2. Navigate to **Online Store > Navigation**
3. Click on the menu you want to edit (usually "Main menu")
4. Add menu items by clicking on **"Add menu item"**
5. For each menu item, enter:
   - **Name:** The text to display
   - **Link:** The URL to link to
6. Save your changes

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> You can create nested menu items by dragging and dropping menu items under other menu items. Most themes support up to 2 levels of nesting.
</div>

### Configuring navigation in the theme

Once you have created your navigation menu in Shopify admin, you need to configure it in the theme:

1. Open the theme editor
2. Navigate to the **Header** section
3. In the **"Menu"** setting, select the menu you created

### Navigation best practices

- **Keep it simple:** Try to keep your main navigation to 5-7 items maximum
- **Use clear labels:** Use clear and descriptive labels for your menu items
- **Group related items:** Use nested menus or mega-menus to group related items
- **Test on mobile:** Make sure your navigation works well on mobile devices

## Customer account

The customer account section allows customers to access their account, view orders, and manage their information.

### Enabling customer accounts

To enable customer accounts:

1. Open your Shopify admin
2. Navigate to **Settings > Customer accounts**
3. Select **"Accounts are optional"** or **"Accounts are required"**
4. Save your changes

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> If you select "Accounts are optional," customers can check out as guests or create an account. If you select "Accounts are required," customers must create an account to check out.
</div>

### Configuring customer account in the theme

Once you have enabled customer accounts, you can configure how they appear in your theme:

1. Open the theme editor
2. Navigate to the **Header** section
3. Configure the **"Show account link"** setting

### Customer account pages

When customer accounts are enabled, the following pages are automatically created:

- **Login page:** `/account/login`
- **Register page:** `/account/register`
- **Account page:** `/account`
- **Order page:** `/account/orders/[order-id]`
- **Addresses page:** `/account/addresses`

These pages can be customized using the theme editor.

### Classic vs. New customer accounts

Shopify offers two types of customer accounts:

| Type | Description | Availability |
|------|-------------|--------------|
| **Classic accounts** | Traditional account pages with limited customization | All plans |
| **New customer accounts** | Modern account pages with full customization | Shopify Plus only |

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Important:</strong> Our themes support both classic and new customer accounts. However, new customer accounts offer more customization options and are recommended if you're on Shopify Plus.
</div>

## Predictive search

Predictive search (also called "live search" or "instant search") shows search results as customers type in the search bar, making it easier for them to find what they're looking for.

### Enabling predictive search

Predictive search is enabled by default in all our themes. To configure it:

1. Open the theme editor
2. Navigate to the **Header** section
3. Configure the **"Search type"** setting:
   - **Predictive search:** Shows results as customers type
   - **Full page search:** Redirects to a full search page

### Configuring search results

You can configure what appears in predictive search results:

**Product results:**
- Show/hide product images
- Show/hide product prices
- Show/hide product vendor
- Number of products to show

**Collection results:**
- Show/hide collections
- Number of collections to show

**Page results:**
- Show/hide pages
- Number of pages to show

**Article results:**
- Show/hide blog articles
- Number of articles to show

### Search performance

Predictive search is powered by Shopify's search API, which is very fast. However, if you have a very large catalog (10,000+ products), you may want to limit the number of results shown to improve performance.

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> We recommend showing 4-6 products, 2-3 collections, and 2-3 pages in predictive search results for optimal performance.
</div>

### Search customization

You can customize the search experience further:

- **Search placeholder:** Customize the placeholder text in the search bar
- **Search button text:** Customize the text on the search button
- **No results message:** Customize the message shown when no results are found

## Announcement bar

The announcement bar is a banner that appears at the top of your site, above the header. It's perfect for displaying important messages, promotions, or announcements.

### Adding an announcement bar

To add an announcement bar:

1. Open the theme editor
2. Navigate to the **Header** section
3. Click on **"Add block"** and select **"Announcement bar"**
4. Configure the announcement:
   - **Text:** The message to display
   - **Link:** An optional link (the entire bar becomes clickable)
   - **Background color:** The background color of the bar
   - **Text color:** The text color

### Multiple announcements

You can add multiple announcement bars that rotate automatically:

1. Add multiple **"Announcement bar"** blocks
2. Configure the **"Auto-rotate"** setting
3. Set the **"Rotation speed"** (in seconds)

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> When multiple announcements are added, customers can manually navigate between them using arrow buttons.
</div>

### Announcement bar best practices

- **Keep it short:** Announcement bars should be concise and to the point
- **Use action-oriented language:** Use verbs like "Shop," "Save," or "Get"
- **Make it clickable:** Add a link to drive traffic to a specific page
- **Update regularly:** Keep your announcements fresh and relevant
- **Test on mobile:** Make sure your announcement bar looks good on mobile devices

### Hiding the announcement bar

Customers can dismiss the announcement bar by clicking the close button (if enabled). The announcement bar will remain hidden for that customer until:

- They clear their browser cookies
- You change the announcement text
- 30 days have passed

## Newsletter popup

The newsletter popup is a modal that appears on your site to encourage visitors to subscribe to your newsletter.

### Enabling the newsletter popup

To enable the newsletter popup:

1. Open the theme editor
2. Navigate to **Theme settings > Popup**
3. Enable the **"Show popup"** setting
4. Configure the popup:
   - **Title:** The popup title
   - **Content:** The popup message
   - **Image:** An optional image to display
   - **Delay:** How long to wait before showing the popup (in seconds)
   - **Frequency:** How often to show the popup

### Popup frequency options

| Option | Description |
|--------|-------------|
| **Every visit** | Show the popup on every visit |
| **Once per session** | Show the popup once per browser session |
| **Once per day** | Show the popup once per day |
| **Once per week** | Show the popup once per week |
| **Once only** | Show the popup only once (until cookies are cleared) |

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> We recommend using "Once per week" or "Once only" to avoid annoying your visitors.
</div>

### Newsletter integration

The newsletter popup integrates with Shopify's built-in customer list. When someone subscribes:

1. They're added to your customer list
2. They're marked as accepting marketing
3. You can send them marketing emails from Shopify admin

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Important:</strong> Make sure you comply with email marketing laws (like GDPR and CAN-SPAM) when collecting email addresses. Always include an unsubscribe link in your emails.
</div>

### Popup best practices

- **Offer value:** Give visitors a reason to subscribe (like a discount code)
- **Keep it simple:** Don't ask for too much information
- **Use compelling copy:** Explain the benefits of subscribing
- **Add an image:** Images make popups more visually appealing
- **Test timing:** Experiment with different delays to find what works best
- **Respect dismissals:** Don't show the popup too frequently

## Privacy banner / cookie banner

The privacy banner (also called a cookie banner) is a notice that appears at the bottom of your site to inform visitors about your use of cookies and comply with privacy regulations like GDPR.

### Enabling the privacy banner

To enable the privacy banner:

1. Open the theme editor
2. Navigate to **Theme settings > Privacy banner**
3. Enable the **"Show privacy banner"** setting
4. Configure the banner:
   - **Message:** The privacy notice text
   - **Accept button text:** The text on the accept button
   - **Policy link:** Link to your privacy policy page
   - **Position:** Top or bottom of the page

### Privacy regulations

Different regions have different privacy requirements:

| Region | Regulation | Requirements |
|--------|-----------|--------------|
| **European Union** | GDPR | Must obtain consent before using non-essential cookies |
| **California** | CCPA | Must provide notice and opt-out option |
| **Canada** | PIPEDA | Must obtain consent for collecting personal information |

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Warning:</strong> Privacy laws are complex and vary by region. We recommend consulting with a lawyer to ensure your privacy banner complies with all applicable laws. This theme feature is provided as a tool, but you are responsible for legal compliance.
</div>

### Creating a privacy policy

To create a privacy policy:

1. Open your Shopify admin
2. Navigate to **Settings > Legal**
3. Click on **"Privacy policy"**
4. Add your privacy policy content
5. Save your changes

Shopify provides a template privacy policy that you can customize to fit your needs.

### Banner customization

You can customize the privacy banner:

- **Background color:** The background color of the banner
- **Text color:** The text color
- **Button style:** The style of the accept button
- **Position:** Show at the top or bottom of the page
- **Animation:** Slide in or fade in

## Header logo

The header logo is your brand's visual identity in the header. It's one of the first things customers see when they visit your store.

### Adding a logo

To add a logo to your header:

1. Open the theme editor
2. Navigate to the **Header** section
3. In the **"Logo"** setting, click **"Select image"**
4. Upload your logo image
5. Save your changes

### Logo requirements

For best results, your logo should meet these requirements:

| Requirement | Recommendation |
|-------------|----------------|
| **Format** | PNG with transparent background (or SVG) |
| **Size** | 200-400px wide |
| **Aspect ratio** | Horizontal logos work best |
| **File size** | Under 100KB for optimal performance |

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> Use a PNG file with a transparent background so your logo looks good on any background color.
</div>

### Logo sizing

You can control the size of your logo:

1. In the **Header** section
2. Adjust the **"Logo width"** setting
3. The height will automatically adjust to maintain the aspect ratio

**Recommended sizes:**

- **Desktop:** 150-200px wide
- **Mobile:** 100-150px wide

### Alternative logo for transparent header

If you use a transparent header, you may want to use a different logo that looks better on light backgrounds:

1. In the **Header** section
2. Enable **"Transparent header"**
3. Upload a different logo in the **"Transparent header logo"** setting

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> The transparent header logo is only shown when the transparent header is active (usually on the home page).
</div>

### Text logo

If you don't have a logo image, you can use text instead:

1. In the **Header** section
2. Leave the **"Logo"** setting empty
3. Your store name will automatically appear as text

You can customize the text logo:

- **Font:** Choose from available fonts
- **Size:** Adjust the text size
- **Color:** Change the text color

## Transparent header

The transparent header is a design feature that makes your header transparent, allowing it to overlay on top of your hero image or slideshow.

### Enabling transparent header

To enable the transparent header:

1. Open the theme editor
2. Navigate to the **Header** section
3. Enable the **"Transparent header"** setting

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Important:</strong> The transparent header only works on pages that have a full-width section at the top (like a slideshow or image banner). It won't appear on other pages.
</div>

### Configuring transparent header

When the transparent header is enabled, you can configure:

**Colors:**
- **Text color:** The color of text and icons in the transparent header
- **Background color on scroll:** The background color when the user scrolls down

**Logo:**
- **Transparent header logo:** An optional alternative logo to use with the transparent header

**Behavior:**
- **Show on home page only:** Only show the transparent header on the home page
- **Show on all pages:** Show the transparent header on all pages with a full-width top section

### Design best practices

When using a transparent header:

- **Use high-contrast images:** Make sure your hero image has enough contrast for the header text to be readable
- **Test with different images:** Test your transparent header with different hero images to ensure it always looks good
- **Provide an alternative logo:** If your regular logo doesn't work well on light backgrounds, upload an alternative logo
- **Consider text color:** White text works best on dark images, while dark text works best on light images

### Transparent header on specific pages

By default, the transparent header appears on all pages with a full-width top section. To control which pages show the transparent header:

1. Open the theme editor
2. Navigate to the page you want to customize
3. In the first section (usually a slideshow or image banner), enable or disable the **"Use transparent header"** setting

<div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Tip:</strong> The transparent header works best with full-width hero images or slideshows. It may not look good with other types of sections.
</div>

### Troubleshooting

**The transparent header isn't showing:**
- Make sure you have a full-width section at the top of the page
- Check that the **"Use transparent header"** setting is enabled in that section
- Verify that the **"Transparent header"** setting is enabled in the Header section

**The text is hard to read:**
- Adjust the **"Text color"** setting in the Header section
- Use a darker or lighter hero image
- Add a text overlay to your hero image to improve contrast
- Upload an alternative logo that works better on your hero image background
