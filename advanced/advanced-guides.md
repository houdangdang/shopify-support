# Advanced guides
Guides for advanced features in themes and Shopify.

## Understanding Shopify/Google PageSpeed score

Performance is a complex yet important topic and is the source of merchants' worry and confusion. This guide will attempt to go through shared concerns and give actionable advice you can give to improve your store's performance.

### Measuring your store performance

There are a lot of tools to measure your store's performance, the most popular ones being PageSpeed / Lighthouse.

Shopify also shows a performance score calculated from Google Lighthouse's tool. We recommend you use the Shopify official tool to measure your store's performance, as this tool is adapted to e-commerce usage. We also encourage you to read [Shopify's official documentation about performance](https://help.shopify.com/en/manual/online-store/store-speed).

<img src="/assets/images/advanced/advanced-guides/store-performance.png" alt="Store Performance" style="max-height: 150px; width: auto; display: block; border: 1px solid #ccc; border-radius: 4px;">

### Is performance important?

Yes. Performance is important. Performance is a criterion that search engines use to rank your website. Additionally, a slow website is a common reason for buyers to leave a website, which can reduce conversion rates.

However, there is a common misconception from merchants, who put too much importance on the performance score without taking some context.

A tool like PageSpeed/Lighthouse is a generic tool measuring performance. Such tools do not differentiate between a simple blog and an e-commerce store. However, the needs for those websites are vastly different. While a blog might only need a simple page with content, an e-commerce store usually rely on high-resolution images, videos, analytics, and apps.

As a consequence, blindly considering a performance score is very misleading. If an app helps to increase your sales at the cost of a lower performance score, then this is an acceptable compromise.

A fast-loading store does not necessarily mean a successful store. A relatively slower-loading store does not mean you will have an unsuccessful store.

### How is the theme impacting performance?

All our themes are optimized for performance. We are following the industry's best practices, for instance, by minimizing the usage of JavaScript and CSS.

We are asking you to trust us that we are crafting the best possible code to minimize its performance impact. We have spent tens of hours just optimizing our themes. We are confident that there is little to no improvement that can be achieved at the theme level.

If you are facing slow performance, this comes from different things. You will find [actionable advice to improve your performance by clicking here](https://support.maestrooo.com/article/752-improving-your-online-stores-performance).

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> A theme alone will never be the limiting factor of your store's performance.
</div>


### But the free theme is faster!

Yes, it might be possible that Dawn, despite all our efforts to optimize our themes, can achieve slightly better performance than our other themes.

However, it is essential to compare apples to apples. Our themes have much more sections and advanced features than free themes. Complex features that our themes offers, such as videos in the slideshow, product variations, or image sets, come at a cost, performance-wise. As for apps, if the usage of those features helps you to sell more, then this should be considered an acceptable trade-off.

### What is a good performance score?

Every merchant aims for a 100-performance score. However, we want to be clear: achieving a score higher than 90 is unrealistic for an e-commerce store. Apps, analytics, and third-party systems will impact your store performance too much to achieve that kind of performance.

As a rule of thumb, here are the score ranges you can aim for:

- **Score superior to 70**: your store is already faster than 99% of the websites in the wild. You don't have anything to do, and increasing the score further will require significant efforts that won't be worthwhile.
- **Score between 45-70**: your store is fast enough not to be an issue. However, you can improve your score by removing apps or [following our performance best practices](https://prestige-theme.helpscoutdocs.com/article/449-performance-best-practices).
- **Score between 25-45**: your store is fast enough not to be a major issue, but customers on slow network might experience suboptimal performance.
- **Score below 25**: your store is facing a performance issue. It may be impacting both your SEO and your customer's experience.

### Performance app/developers who promise a 90+ score

You may have found so-called "performance apps", or developers on platforms such as Fiverr promising you a score superior to 90+ for a small fee.

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Warning:</strong> We highly discourage those approaches.
</div>

We have seen countless merchants contacting our support with issues such as apps suddenly not working and analytics not being reported correctly... Most of the time, the root cause of those problems was all developers "optimizing" the performance scores.

To achieve such high scores, those developers are tricking search engines by disabling essential features of your store or delaying some code. All of those approaches can have disastrous effects on your store.

### Understanding and optimizing Core Web Vitals

Core Web Vitals are metrics developed by Google that directly impact the performance score. Understanding core vitals metrics and how to optimize them is crucial.

###* CLS

CLS stands for Content-Layout Shift and is one of the most critical metrics. High CLS happens when many elements in your page move after the page has loaded. If the user clicks on a link in your page and the page content suddenly moves, this can cause frustration.

Hopefully, all our themes are engineered to remove any CLS, so you usually have nothing to do to optimize CLS. However, CLS might be impacted by elements outside the control of the theme, such as:

- Apps that dynamically inject content on the page.
- `<iframe>` being injected in your HTML.
- Usage of custom web font: you can use [a system font](https://shopify.dev/docs/themes/architecture/settings/fonts) instead to minimize CLS even more.

###* LCP

LCP stands for Largest-Contentful Paint and is an essential performance metric. The LCP represents the most crucial visual element when the page is loading. For instance, on a home page, this is typically the first image of the slideshow, while on a product page, it will be the first product image.

Our themes make intelligent decisions to optimize faster (such as disabling lazy loading) on what might be the LCP image. To optimize LCP, you can try the following approach:

- On the home page, favor the slideshow section or a text-based section as the first section.
- Optimize your images, especially the collection image, product images, and slideshow images.

Optimizing LCP further is not always possible, though. A large, high-quality image will still require some time to load. As always, for performance, a trade-off between performance score and user experience is needed.

###* FID and INP

FID stands for First-Input Delay and will be replaced in March 2024 by the metric INP, which stands for Interaction to Next Paint.

Those metrics measure how responsive the user interface is. They are the most complex metrics to optimize as they encompass many different things.

Our themes are all optimized by default for FID and INP. Our themes use optimized JavaScript code that limits the initial work the browser needs to render your page as much as possible.

Here are various actions you can do to optimize FID and INP:

- Remove apps that you no longer use or are not essential: some apps often load a lot of JavaScript code. Heavy JavaScript code is the main reason for bad FID and INP.
- Limit the number of sections per page, and limit heavier sections like slideshow to 1 per page.

### What can I do to improve my performance?

We have summarized many actionable advice you can follow to improve your advice. [Click here to see them](#improving-your-online-store-s-performance).



## Improving your online store's performance

Before reading this article, [read our article about performance scores](#understanding-shopify-google-pagespeed-score) to ensure that you fully understand the core concepts of performance.

This article will guide you on common approaches to improve your store performance. Keep in mind that performance is an everyday effort.

### Reducing the usage of apps

**Potential performance improvement: very high**

The most common cause of slow performance is apps. It is common for a single app to reduce the performance score by 10 or 20 points.

However, please note that not all apps are equal: some apps do not directly interact with the online store and have no performance impact. As a rule of thumb, before installing an app, we recommend you ask yourself if this app is essential for running your business. If it is not, do not install it.

We recommend contacting app developers to learn more about their performance policies.

### Removing app "dead code"

**Potential performance improvement: very high**

Some apps automatically install code for you on the theme to work. However, when you uninstall the app, you also revoke the access to your store to the app developer. Consequently, the app might leave dead code in the theme, slowing your store.

Whenever you uninstall an app, we highly recommend contacting the developer to ask them if code cleaning is necessary (please note that modern apps usually do not leave dead code).

### Optimizing images

**Potential performance improvement: very high**

While Shopify automatically optimizes your images, you must optimize your images by yourself before uploading them to Shopify. To compress your images, we recommend using a tool [such as TinyJPG](https://tinyjpg.com/).

You can also use an app such as [Crush](https://apps.shopify.com/crush-pics) to optimize your images when you upload them to Shopify transparently.

### Using the appropriate image format

**Potential performance improvement: high**

The most common format for images is JPG, PNG, and GIF. GIF images should be avoided at all costs, as they are heavy and slow to load. Consider using MP4 videos instead.

PNG should also be avoided if possible. PNG can be two to three times heavier than JPG images. You should only use PNG images for photos requiring transparency (which is impossible using JPG).

### Upgrade your theme

**Potential performance improvement: high**

We often release new versions of our themes which includes bug fixes, new features, and improved performance. If you are using an older version, we encourage you to upgrade your theme.

### Use sections responsively

**Potential performance improvement: medium**

It might be tempting to create heavy pages with a lot of sections. However, adding sections is not free performance-wise. We recommend you limit the number of individual sections per page to 12 for best performance.

### Limit the number of fonts

**Potential performance improvement: medium**

While our themes allow you to choose a different font for headings and body text, we recommend to keep the number of font limited. For maximum performance, use one of the "system font" when selecting a font. System font are already installed on every computers and do not require downloading extra fonts.

### Limit the number of videos

**Potential performance improvement: medium**

Videos can be fantastic for showcasing your products. While our themes optimize videos (for instance, videos are not loaded until they become visible to limit their performance impact), we still recommend you limit the number of videos to 4-6 per page.

We also strongly encourage you to use MP4 videos instead of YouTube or Vimeo videos, which are slower.

### Use analytics responsively

**Potential performance improvement: medium**

For best performance, you should never add an analytics system directly to your code. Instead, you should rely on Shopify's built-in integration to maximize performance. For instance, to integrate Google Analytics, [use the Shopify analytics setup](https://help.shopify.com/en/manual/reports-and-analytics/google-analytics/google-analytics-setup).

### Remove costly features

**Potential performance improvement: medium**

Some features that Shopify provide requires a lot of JavaScript to load and, therefore, slower performance. One feature is the "dynamic checkout button," which displays customers a one-click accelerated payment button (such as Apple Pay, Amazon Pay, or PayPal).

By turning off this feature, you can improve your store performance. [Learn more about how to manage dynamic payment buttons.](https://secure.helpscout.net/docs/6465c13967acd170a44c273f/article/6465c77417da4d6b8d6f011f/)

Turning off the dynamic payment buttons might reduce your conversion rates. As always with performance, each store's requirement is different, and performance is always a trade-off. Use A/B testing to figure out what works best for your store.


## Customizing the checkout

For security reasons, Shopify controls the checkout process (this also includes the order confirmation page and the thank you page). The theme does not have access to the checkout code.

For those reasons, the checkout code cannot be edited on Shopify. If you are facing any issues with the checkout, you [will need to reach Shopify support](https://help.shopify.com/support/support-type).

<div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Important:</strong> Shopify support agents are, for the most part, non-technical people. They might incorrectly redirect you to our support for checkout issues. However, because we don't have access to the checkout code, we won't be able to help you. Consequently, when reaching Shopify about a checkout issue, insist that you are referring to the checkout and that it is Shopify's responsibility to fix any checkout issues.
</div>

Here are common issues that might arise regarding the checkout:

### Customizing the checkout.liquid file

If you did some research on the internet, you might have found some old articles about a checkout.liquid file. This file used to be available to Shopify Plus partners to create a completely custom checkout experience. However, due to security concerns, this feature was deprecated in 2023 and will be fully removed by the end of2024. It is no longer possible to access this file.

### Customizing checkout appearance

Shopify allows you to customize the checkout appearance with settings. You can learn more about customizing the [checkout in Shopify's official documentation](https://help.shopify.com/en/manual/checkout-settings/checkout-style).

### Removing Express buttons

If you have enabled accelerated payment buttons such as PayPal, Apple Pay, or Amazon Pay, those will appear on the first page of your checkout.

Currently, there is no way to remove or hide those buttons. If you feel this is essential for your store, we recommend you reach Shopify support and suggest this improvement. This will help Shopify prioritize future developments.

### Adding new features to the checkout

While you cannot edit the code in the checkout, Shopify has introduced a "checkout extension" feature, allowing you to add blocks inside a checkout. This can be used for many use cases, such as capturing a delivery date in the checkout or showing upsell products.

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Note:</strong> Please note though that, as of today, checkout extensions are mostly limited to Shopify Plus merchants.
</div>

To use checkout extensions, you need to install a compatible app. For more information about checkout extensions and what you can achieve with them, [reach Shopify support](https://help.shopify.com/support/support-type).



## Showing an Instagram feed on your store

Showing an Instagram feed right into your store cannot be achieved directly using a theme. You need to use an app for that.

You will find a curated list of [Instagram feed apps in the Shopify app store](https://apps.shopify.com/search?q=instagram%20feed).



## Editing robots.txt

<div style="background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 16px 0; color: #1a1a1a;">
  <strong>Warning:</strong> Editing the robots.txt file is considered a very advanced and sensitive change. The default robots.txt provided by Shopify is already optimal for SEO, and there are very few reasons to change it. Even a minor mistake in the robots.txt file can make your whole store invisible to search engines. Never edit the robots.txt file unless you absolutely know what you are doing. Our support can't be held responsible for any problem caused by an incorrect robots.txt customization.
</div>

Search engines, such as Google, constantly crawl the internet in search of new data as a source for their search results. The robots.txt file tells search engine bots, known as crawlers, which pages to request to view from your online store. All Shopify stores have a default robots.txt file that's optimal for Search Engine Optimization (SEO).

You can however write your own robots.txt file. By default, Shopify does not create the robots.txt file. Due to its very sensitive nature, merchants who wish to edit the robots.txt file need to explicitly create it. You can find more information about how to create and manage the robots.txt file in [Shopify official documentation](https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt).
