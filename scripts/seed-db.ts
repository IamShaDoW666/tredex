import dbConnect from '@/lib/db';
import Category from '../model/categorySchema';
import Product from '../model/productSchema';

const categories = [
  { name: 'Running', description: 'Shoes for running' },
  { name: 'Lifestyle', description: 'Everyday shoes' },
  { name: 'Basketball', description: 'Shoes for playing basketball' },
  { name: 'Skateboarding', description: 'Shoes for skateboarding' },
];

const products = [
  {
    name: 'Nike Air Max 90',
    images: ["https://www.tracerindia.com/cdn/shop/files/1_3a3a95a0-218a-47cf-9d02-f6c1134b88bc.jpg?v=1696502581"],
    price: 120,
    productType: 'Sneaker',
    available: true,
    description: 'The Nike Air Max 90 remains true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.',
  },
  {
    name: 'Adidas Ultraboost',
    images: ["https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"],
    price: 180,
    productType: 'Sneaker',
    available: true,
    description: 'The Adidas Ultraboost are the most comfortable shoes for running or just for walking.',
  },
  {
    name: 'Puma Suede Classic',
    images: ["https://www.tracerindia.com/cdn/shop/files/1_3a3a95a0-218a-47cf-9d02-f6c1134b88bc.jpg?v=1696502581"],
    price: 65,
    productType: 'Sneaker',
    available: true,
    description: 'The Puma Suede Classic is a classic sneaker that has been around for over 50 years.',
  },
  {
    name: 'Vans Old Skool',
    images: ["https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"],
    price: 60,
    productType: 'Sneaker',
    available: true,
    description: 'The Vans Old Skool is a classic skate shoe that has been around for over 40 years.',
  },
  {
    name: 'Nike Air Force 1',
    images: ["https://www.tracerindia.com/cdn/shop/files/1_3a3a95a0-218a-47cf-9d02-f6c1134b88bc.jpg?v=1696502581"],
    price: 100,
    productType: 'Sneaker',
    available: true,
    description: 'The Nike Air Force 1 is a classic basketball shoe that has become a streetwear staple.',
  },
  {
    name: 'Adidas Samba',
    images: ["https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"],
    price: 80,
    productType: 'Sneaker',
    available: true,
    description: 'The Adidas Samba is a timeless indoor soccer shoe that has transcended its athletic roots.',
  },
  {
    name: 'New Balance 550',
    images: ["https://www.tracerindia.com/cdn/shop/files/1_3a3a95a0-218a-47cf-9d02-f6c1134b88bc.jpg?v=1696502581"],
    price: 110,
    productType: 'Sneaker',
    available: true,
    description: 'The New Balance 550 is a retro basketball sneaker that has made a huge comeback.',
  },
  {
    name: 'Converse Chuck 70',
    images: ["https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"],
    price: 85,
    productType: 'Sneaker',
    available: true,
    description: 'The Converse Chuck 70 is a premium version of the classic Chuck Taylor All Star.',
  },
];

const seedDB = async () => {
  await dbConnect();

  try {
    await Category.deleteMany({});
    await Product.deleteMany({});

    const createdCategories = await Category.insertMany(categories);
    console.log('Categories created!');

    const productsWithCategories = products.map((product, index) => {
      return {
        ...product,
        category: createdCategories[index % createdCategories.length]._id,
      };
    });

    await Product.insertMany(productsWithCategories);
    console.log('Products created!');

    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
};

seedDB().then(() => {
  console.log('Seeding complete')
}).catch((err) => {
  console.error(err)
})
