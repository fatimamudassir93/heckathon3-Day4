import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's5ixvzbr',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-01',
  token: 'skNjxuBikHqsF8scTiQBm8jJMHKR1kFBk0nZSigPVjmwmhWF2enoHVrvvwFDM4GBRmD30EmhrJdt4AHb9WgMsujfwp6n8FNYmLP65ASd6SgWEsXZCzW8YlW71xEgEzqzb8UfoT4zdLdjaCWmZ2pih63XFQ77J01GOXS4Ywf14skQELCGmfrA',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());

    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    console.log(`Processing product: ${product.title}`);
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage,
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`✅ Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`❌ Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();
    console.log('Fetched Products:', products); // Debugging

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Start Import
importProducts(); 