import dbConnect from '@/lib/db';
import Category from '../model/categorySchema';
import Product from '../model/productSchema';
import { mockCategories, mockProducts, mockBrands } from '@/lib/mock-data';
import Brand from '@/model/brandSchema';


const seedDB = async () => {
  await dbConnect();

  try {
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Brand.deleteMany({});

    const createdCategories = await Category.insertMany(mockCategories);
    const createdBrands = await Brand.insertMany(mockBrands);
    console.log('Categories created!');
    console.log('Brands created!');

    const productsWithCategories = mockProducts.map((product, index) => {
      return {
        ...product,
        category: createdCategories[index % createdCategories.length]._id,
        brand: createdBrands[index % createdBrands.length]._id
      };
    });

    const prods = await Product.insertMany(productsWithCategories);
    console.log('Products created!');

    // Group products by brand
    const brandProductMap = prods.reduce((acc, product) => {
      const brandId = product.brand.toString();
      if (!acc[brandId]) {
        acc[brandId] = [];
      }
      acc[brandId].push(product._id);
      return acc;
    }, {} as Record<string, any[]>);

    // Update each brand with its products
    for (const brandId in brandProductMap) {
      await Brand.findByIdAndUpdate(brandId, { products: brandProductMap[brandId] });
    }
    console.log('Brands updated with product associations.');

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
