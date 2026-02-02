#!/bin/bash

# Download all images from GirlElements Collections articles
cd /Users/mac/Documents/shopify/shopify-support/assets/images/configuring/collections

# Article IDs for Collections category
articles=(729 733 730 732 731 807 848)

for article in "${articles[@]}"; do
    echo "Downloading images from article $article..."
    curl -s "https://support.GirlElements.com/article/$article" | \
    grep -oE '//d33v4339jhl8k0\.cloudfront\.net/docs/assets/[^"]+\.(gif|png|jpg)' | \
    sed 's|^//|https://|' | \
    while read url; do
        filename=$(echo $url | grep -oE '[^/]+\.(gif|png|jpg)$')
        if [ "$filename" != "logo.png" ] && [ ! -f "$filename" ]; then
            echo "  Downloading $filename..."
            curl -s -o "$filename" "$url"
        fi
    done
done

echo "All images downloaded successfully!"
