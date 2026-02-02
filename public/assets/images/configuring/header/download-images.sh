#!/bin/bash

# Download all images from GirlElements Header articles
cd /Users/mac/Documents/shopify/shopify-support/assets/images/configuring/header

# Article IDs for Header category
articles=(709 710 784 781 711 712 713 714 715)

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
