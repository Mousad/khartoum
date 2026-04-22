export interface Brand {
  id: string;
  name: string;
  logo: string;
  cover: string;
  description: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brandId: string;
  category: string;
  description: string;
}


export const brands: Brand[] = [
  {
    id: 'minijoy',
    name: 'TRENDS',
    logo: 'https://i.pinimg.com/736x/41/2c/1e/412c1ed6be110577d885bfb216be1aec.jpg',
    cover: 'https://i.pinimg.com/736x/f1/bd/b3/f1bdb3c736d6d87a2c31bc48738c617e.jpg',
    description: 'Premium kids clothing with vibrant designs and comfortable fabrics for everyday adventures.',
    category: 'clothing',
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/"
  },

  {
    id: 'playfulthreads',
    name: 'Dr.ROAA',
    logo: 'https://dr-roaa-product.com/wp-content/uploads/2026/01/cropped-dr-roaa-logo-125x87.png',
    cover: 'https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6213-scaled.jpg',
    description: 'Casual wear that brings fun and comfort together for active kids.',
    category: 'clothi',
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/"
  },

  {
    id: 'tinysteps',
    name: 'LAIKOU',
    logo: 'https://i.pinimg.com/736x/43/ce/9b/43ce9bc4748a49738144db6957ee1fd8.jpg',
    cover: 'https://i.pinimg.com/736x/f1/a9/a2/f1a9a2ad7fb9968003f3d132bb423a0b.jpg',
    description: 'Gentle and stylish baby shoes designed for first steps and growing feet.',
    category: 'clothing',
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/"
  },

  {
    id: 'brightbuds',
    name: 'WOMAN',
    logo: 'https://i.pinimg.com/736x/7e/62/60/7e626021a1847551009259853463781c.jpg',
    cover: 'https://i.pinimg.com/736x/6c/f4/67/6cf467101e59dd3f6607b6288ecad6af.jpg',
    description: 'Colorful accessories to brighten up any outfit with style.',
    category: 'accessories',
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/"
  },

  {
    id: 'littlewonders',
    name: 'Handbag',
    logo: 'https://i.pinimg.com/736x/9f/c9/fe/9fc9fe91ca8753ca875c5aeb324e435e.jpg',
    cover: 'https://i.pinimg.com/webp/1200x/e7/e0/55/e7e055870af1e7ce5cdc8b1463f6c526.webp',
    description: 'Imaginative products that spark creativity and endless style.',
    category: 'accessories',
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/"
  },

  {
    id: 'happysprout',
    name: 'GLOW',
    logo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD7My-4VZBgtU4KGUSiRwHxs8nsyEPJyX_Y8rENTE-CTVKN8pf',
    cover: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD7My-4VZBgtU4KGUSiRwHxs8nsyEPJyX_Y8rENTE-CTVKN8pf',
    description: 'Beauty and skincare essentials for glowing natural care.',
    category: 'beauty',
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/"
  },
];

export const products: Product[] = [
  // MiniJoy Products (8)
  {
    id: 'mj1',
    name: 'Classic Denim ',
    price: 45.99,
    image: 'https://i.pinimg.com/736x/fd/a0/91/fda091f1a1cfa5029dc3272674cdd585.jpg',
    brandId: 'minijoy',
    category: 'clothing',
    description: 'Stylish denim jacket perfect for any occasion. Made with soft, durable fabric.',
  },
  {
    id: 'mj2',
    name: 'Rainbow Stripe ',
    price: 22.99,
    image: 'https://i.pinimg.com/1200x/f4/aa/3c/f4aa3c71c1c1021f8d160f55c18cb730.jpg',
    brandId: 'minijoy',
    category: 'clothing',
    description: 'Bright and cheerful striped t-shirt for everyday wear.',
  },
  {
    id: 'mj3',
    name: 'Smart Casual Vest ',
    price: 38.99,
    image: 'https://i.pinimg.com/736x/0b/84/ff/0b84ffde2d9db72ee41f2b631a69834f.jpg',
    brandId: 'minijoy',
    category: 'clothing',
    description: 'Elegant vest and tie combination for special occasions.',
  },
  {
    id: 'mj4',
    name: 'Formal Vest ',
    price: 42.99,
    image: 'https://i.pinimg.com/736x/5d/57/33/5d57339397c2c30912b93fd23be19a92.jpg',
    brandId: 'minijoy',
    category: 'clothing',
    description: 'Premium formal wear for your little gentleman.',
  },
  {
    id: 'mj5',
    name: 'Winter Puffer ',
    price: 55.99,
    image: 'https://i.pinimg.com/736x/32/92/c6/3292c6e4ff49e1b535f2e292588c9d28.jpg',
    brandId: 'minijoy',
    category: 'clothing',
    description: 'Warm and cozy jacket for cold winter days.',
  },
  {
    id: 'mj6',
    name: 'Purple  Style Dress',
    price: 39.99,
    image: 'https://i.pinimg.com/736x/8e/cb/39/8ecb39d884b33da4f700d70190ac97b8.jpg',
    brandId: 'minijoy',
    category: 'clothing',
    description: 'Trendy dress with a modern street style look.',
  },
  {
    id: 'mj7',
    name: 'Gray Summer ',
    price: 34.99,
    image: 'https://i.pinimg.com/736x/26/15/f6/2615f67e9aa15f3a5dbfe7f05b046a20.jpg',
    brandId: 'minijoy',
    category: 'clothing',
    description: 'Light and breezy dress perfect for summer days.',
  },
  {
    id: 'mj8',
    name: 'Elegant Party Dress',
    price: 48.99,
    image: 'https://i.pinimg.com/736x/37/b2/3e/37b23e16ce8cc08094a5d9500ec0b203.jpg',
    brandId: 'minijoy',
    category: 'clothing',
    description: 'Beautiful dress for special occasions and parties.',
  },

  // TinySteps Products (8)
  {
    id: 'ts1',
    name: 'Black Leather',
    price: 28.99,
    image: 'https://i.pinimg.com/736x/f7/b0/93/f7b093299d15e8bc05e1447c8de33f8e.jpg',
    brandId: 'tinysteps',
    category: 'shoes',
    description: 'Soft leather shoes perfect for first steps.',
  },
  {
    id: 'ts2',
    name: 'White  Booties',
    price: 24.99,
    image: 'https://i.pinimg.com/1200x/7a/d9/ca/7ad9ca220469dc44465a1d38087972a7.jpg',
    brandId: 'tinysteps',
    category: 'shoes',
    description: 'Comfortable cotton booties for newborns.',
  },
  {
    id: 'ts3',
    name: ' Dot Sandals',
    price: 26.99,
    image: 'https://i.pinimg.com/1200x/f0/70/41/f07041f9519549c64ff110ced610597f.jpg',
    brandId: 'tinysteps',
    category: 'shoes',
    description: 'Adorable sandals with playful polka dots.',
  },
  {
    id: 'ts4',
    name: 'White Sneakers',
    price: 32.99,
    image: 'https://i.pinimg.com/736x/b9/6d/e8/b96de84914bbb962ff2a6cb18582b790.jpg',
    brandId: 'tinysteps',
    category: 'shoes',
    description: 'Classic white sneakers for active toddlers.',
  },
  {
    id: 'ts5',
    name: 'Baby Shoe',
    price: 35.99,
    image: 'https://i.pinimg.com/1200x/4f/dd/38/4fdd383dc2e750c9b5d8933464285af9.jpg',
    brandId: 'tinysteps',
    category: 'shoes',
    description: 'Matching shoe and purse set for special occasions.',
  },
  {
    id: 'ts6',
    name: 'Baby Outfit ',
    price: 45.99,
    image: 'https://i.pinimg.com/736x/0c/3a/a5/0c3aa5158367614f0055f55b65c45e11.jpg',
    brandId: 'tinysteps',
    category: 'shoes',
    description: 'Complete baby outfit with coordinated pieces.',
  },
  {
    id: 'ts7',
    name: 'Organized ',
    price: 52.99,
    image: 'https://i.pinimg.com/736x/67/5b/59/675b59c3ae557b86296f14ff9ad0bfb2.jpg',
    brandId: 'tinysteps',
    category: 'shoes',
    description: 'Organized set of baby shoes and accessories.',
  },
  {
    id: 'ts8',
    name: 'Stylish  ',
    price: 38.99,
    image: 'https://i.pinimg.com/736x/5d/cf/22/5dcf22feacd01874f57df907014b1c2d.jpg',
    brandId: 'tinysteps',
    category: 'shoes',
    description: 'Trendy accessories for fashion-forward babies.',
  },

  // Playful Threads Products (8)
  {
    id: 'pt1',
    name: 'مجموعه كامله',
    price: 29.99,
    image: 'https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6211-scaled.jpg',
    brandId: 'playfulthreads',
    category: 'clothing',
    description: 'Vibrant casual wear for everyday adventures.',
  },
  {
    id: 'pt2',
    name: 'سيرم الترطيب',
    price: 36.99,
    image: 'https://dr-roaa-product.com/wp-content/uploads/2026/02/IMG_9991-scaled.jpeg',
    brandId: 'playfulthreads',
    category: 'clothing',
    description: 'Versatile vest styles for various occasions.',
  },
  {
    id: 'pt3',
    name: 'بكج الصابون المغربى',
    price: 32.99,
    image: 'https://dr-roaa-product.com/wp-content/uploads/2026/02/IMG_3142-scaled.jpeg',
    brandId: 'playfulthreads',
    category: 'clothing',
    description: 'Charming floral dress for spring days.',
  },
  {
    id: 'pt4',
    name: 'Large Size ',
    price: 41.99,
    image: 'https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_5988-1-scaled.jpg',
    brandId: 'playfulthreads',
    category: 'clothing',
    description: 'Curated collection of trendy kids wear.',
  },
  {
    id: 'pt5',
    name: 'moroccan',
    price: 37.99,
    image: 'https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6194-1-1229x1536.jpg',
    brandId: 'playfulthreads',
    category: 'clothing',
    description: 'Mix and match colorful pieces for creative styling.',
  },
  {
    id: 'pt6',
    name: 'Dilka',
    price: 260.00,
    image: 'https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6002-scaled.jpg',
    brandId: 'playfulthreads',
    category: 'clothing',
    description: 'Complete baby wardrobe essentials.',
  },
  {
    id: 'pt7',
    name: 'صابونيه التفتيح ',
    price: 39.99,
    image: 'https://dr-roaa-product.com/wp-content/uploads/2025/11/b356fd50-d0ba-4b2f-8b5e-9f39e0419654.jpeg',
    brandId: 'playfulthreads',
    category: 'clothing',
    description: 'Coordinated outfit set for fashion-conscious kids.',
  },
  {
    id: 'pt8',
    name: 'بكج العروس',
    price: 33.99,
    image: 'https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6213-scaled.jpg',
    brandId: 'playfulthreads',
    category: 'clothing',
    description: 'Light and comfortable summer casuals.',
  },

  // Bright Buds Products (8)
  {
    id: 'bb1',
    name: 'Bohemian ',
    price: 34.99,
    image: 'https://img.fantaskycdn.com/9935de2d6ab843fb30d3f283bd2e4cc5_750x.jpeg',
    brandId: 'brightbuds',
    category: 'accessories',
    description: 'Vibrant backpacks for school and adventures.',
  },
  {
    id: 'bb2',
    name: 'Sunglasses',
    price: 19.99,
    image: 'https://i.pinimg.com/1200x/f4/f3/f5/f4f3f56747faab0352da5f492b0add18.jpg',
    brandId: 'brightbuds',
    category: 'accessories',
    description: 'Stylish beanie and sunglasses combo.',
  },
  {
    id: 'bb3',
    name: ' Toy Collection',
    price: 24.99,
    image: 'https://i.pinimg.com/736x/49/e9/20/49e92079149663ffa9a4fb63d60dc6c7.jpg',
    brandId: 'brightbuds',
    category: 'accessories',
    description: 'Soft and cuddly plush companions.',
  },
  {
    id: 'bb4',
    name: 'Colorful Fashion ',
    price: 27.99,
    image: 'https://i.pinimg.com/webp/736x/28/d6/54/28d6543b5bff39121bd94ca1dcd27b4e.webp',
    brandId: 'brightbuds',
    category: 'accessories',
    description: 'Assorted fashion accessories in bright colors.',
  },
  {
    id: 'bb5',
    name: 'Candy Accessories',
    price: 15.99,
    image: 'https://img.fantaskycdn.com/6cde738f2074acdb5a2221bae22291c3_1024x.jpeg',
    brandId: 'brightbuds',
    category: 'accessories',
    description: 'Sweet candy-themed accessories.',
  },
  {
    id: 'bb6',
    name: 'Jewelry  Set',
    price: 29.99,
    image: 'https://img.fantaskycdn.com/42b141db379b2886a880f72bd82d313a_1024x.jpeg',
    brandId: 'brightbuds',
    category: 'accessories',
    description: 'Charming jewelry collection for young fashionistas.',
  },
  {
    id: 'bb7',
    name: 'Pink Floral ',
    price: 18.99,
    image: 'https://i.pinimg.com/736x/7b/d4/9a/7bd49abf106ccdd58678dd0b9a5876a6.jpg',
    brandId: 'brightbuds',
    category: 'accessories',
    description: 'Delicate floral accessories for special occasions.',
  },
  {
    id: 'bb8',
    name: 'Accessories ',
    price: 31.99,
    image: 'https://i.pinimg.com/736x/bc/eb/dc/bcebdcf475c8564dd2e9953c42ba6bd3.jpg',
    brandId: 'brightbuds',
    category: 'accessories',
    description: 'Complete summer accessory collection.',
  },

  // Little Wonders Products (8)
  {
    id: 'lw1',
    name: 'Colorful  Balls',
    price: 22.99,
    image: 'https://i.pinimg.com/736x/df/ba/9a/dfba9ae77c1a4ed80df7daf1330481ff.jpg',
    brandId: 'littlewonders',
    category: 'toys',
    description: 'Bright and bouncy balls for active play.',
  },
  {
    id: 'lw2',
    name: ' Toy Collection',
    price: 35.99,
    image: 'https://i.pinimg.com/736x/78/1e/f7/781ef7df243de322b4a28b5cf1bcbd77.jpg',
    brandId: 'littlewonders',
    category: 'toys',
    description: 'Colorful hanging toys for decoration and play.',
  },
  {
    id: 'lw3',
    name: 'Yellow Bunny Plush',
    price: 26.99,
    image: 'https://i.pinimg.com/736x/f3/72/34/f372347f86f522816f08b0a1d9ae2ef0.jpg',
    brandId: 'littlewonders',
    category: 'toys',
    description: 'Soft and cuddly bunny companion.',
  },
  {
    id: 'lw4',
    name: 'Blue Bear Plush',
    price: 28.99,
    image: 'https://i.pinimg.com/webp/1200x/9a/4e/b8/9a4eb8dd7fe67fec85aef48a53a67118.webp',
    brandId: 'littlewonders',
    category: 'toys',
    description: 'Adorable blue bear for bedtime cuddles.',
  },
  {
    id: 'lw5',
    name: 'LEGO Quilted ',
    price: 44.99,
    image: 'https://img.fantaskycdn.com/0fab75a8e9851148f4045428a8cd7a52_1024x.jpeg',
    brandId: 'littlewonders',
    category: 'toys',
    description: 'Creative building blocks for imaginative play.',
  },
  {
    id: 'lw6',
    name: 'Adorable ',
    price: 32.99,
    image: 'https://img.fantaskycdn.com/4ac3eefedf771640d3985cc1faf9324b_1024x.png',
    brandId: 'littlewonders',
    category: 'toys',
    description: 'Sturdy toy truck for construction play.',
  },
  {
    id: 'lw7',
    name: 'Pink Bear with ',
    price: 29.99,
    image: 'https://i.pinimg.com/736x/cf/9a/d6/cf9ad630c2d1c6bac890086eb1e05765.jpg',
    brandId: 'littlewonders',
    category: 'toys',
    description: 'Sweet pink bear with cozy scarf.',
  },
  {
    id: 'lw8',
    name: 'Colorful Toy ',
    price: 38.99,
    image: 'https://i.pinimg.com/1200x/db/f8/3c/dbf83cb0df01edc11c493d7fa6a4ca52.jpg',
    brandId: 'littlewonders',
    category: 'toys',
    description: 'Variety pack of colorful toys.',
  },

  // Happy Sprout Products (8)
  {
    id: 'hs1',
    name: 'Building Blocks Kit',
    price: 41.99,
    image: 'https://i.pinimg.com/1200x/a5/8b/2c/a58b2ca1c804a2c110de579771051c31.jpg',
    brandId: 'happysprout',
    category: 'educational',
    description: 'Educational building blocks for developing motor skills.',
  },
  {
    id: 'hs2',
    name: 'Learning Toy Box',
    price: 45.99,
    image: 'https://i.pinimg.com/736x/45/4f/ca/454fca30058b9be6a9829d6ee3d32a17.jpg',
    brandId: 'happysprout',
    category: 'educational',
    description: 'Comprehensive learning toy collection.',
  },
  {
    id: 'hs3',
    name: 'Educational Play Set',
    price: 39.99,
    image: 'https://i.pinimg.com/736x/31/a3/c9/31a3c92eef26194e8fd78a1e0530235d.jpg',
    brandId: 'happysprout',
    category: 'educational',
    description: 'Interactive learning through play.',
  },
  {
    id: 'hs4',
    name: 'STEM Building Kit',
    price: 48.99,
    image: 'https://i.pinimg.com/736x/dd/39/af/dd39afbc0804c14d6f6eafd825c5c817.jpg',
    brandId: 'happysprout',
    category: 'educational',
    description: 'Science and engineering learning kit.',
  },
  {
    id: 'hs5',
    name: 'Creative Construction Set',
    price: 42.99,
    image: 'https://i.pinimg.com/1200x/9e/90/91/9e90917edadab19a01a771eb5ed1c042.jpg',
    brandId: 'happysprout',
    category: 'educational',
    description: 'Build and learn with this creative set.',
  },
  {
    id: 'hs6',
    name: 'Learning Plush Toy',
    price: 34.99,
    image: 'https://i.pinimg.com/736x/be/f2/f0/bef2f01bc43b94bc9cc34d766fef9df0.jpg',
    brandId: 'happysprout',
    category: 'educational',
    description: 'Soft toy that teaches colors and shapes.',
  },
  {
    id: 'hs7',
    name: 'Educational Activity Set',
    price: 37.99,
    image: 'https://i.pinimg.com/736x/92/65/cd/9265cd8ff168da9594dff6f986813a46.jpg',
    brandId: 'happysprout',
    category: 'educational',
    description: 'Multiple activities for cognitive development.',
  },
  {
    id: 'hs8',
    name: 'Discovery Learning Kit',
    price: 46.99,
    image: 'https://i.pinimg.com/736x/a5/e6/3e/a5e63eef9602a10dc8737f7cc8aee3ad.jpg',
    brandId: 'happysprout',
    category: 'educational',
    description: 'Explore and discover with hands-on learning.',
  },
];

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByBrand = (brandId: string): Product[] => {
  return products.filter(product => product.brandId === brandId);
};
