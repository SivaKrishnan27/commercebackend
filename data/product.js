let products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    description: "High-quality over-ear headphones with noise cancellation and long battery life.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.5,
    reviews_count: 120,
    reviews: [
      { user: "Arun", rating: 5, comment: "Amazing sound quality!", date: "2026-03-10" },
      { user: "Priya", rating: 4, comment: "Comfortable but slightly costly.", date: "2026-03-12" }
    ],
    brand: "Sony",
    warranty: "1 Year",
    price: 7999,
    offer_price: 5999,
    discount_percent: 25,
    stock: 50,
    total_sold: 1200,
    delivery: { days: 3, type: "Standard" },
    store_location: { city: "Chennai", country: "India" },
    payment_options: ["UPI","CARD","COD"],
    refund: { type: "Replacement", days: 7 },
    free_delivery: true
  },

  {
    id: 2,
    title: "Smartphone 5G",
    description: "Latest 5G smartphone with AMOLED display and 128GB storage.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.3,
    reviews_count: 340,
    reviews: [
      { user: "Karthik", rating: 4, comment: "Good performance!", date: "2026-02-25" },
      { user: "Meena", rating: 5, comment: "Worth every rupee!", date: "2026-03-05" }
    ],
    brand: "Samsung",
    warranty: "1 Year",
    price: 24999,
    offer_price: 21999,
    discount_percent: 12,
    stock: 80,
    total_sold: 3400,
    delivery: { days: 2, type: "Express" },
    store_location: { city: "Bangalore", country: "India" },
    payment_options: ["UPI","CARD","EMI"],
    refund: { type: "Replacement", days: 10 },
    free_delivery: true
  },

  {
    id: 3,
    title: "Gaming Laptop",
    description: "Powerful gaming laptop with RTX graphics and 16GB RAM.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.7,
    reviews_count: 95,
    reviews: [
      { user: "Rahul", rating: 5, comment: "Runs all games smoothly!", date: "2026-03-01" },
      { user: "Vikram", rating: 4, comment: "Great but battery drains fast.", date: "2026-03-03" }
    ],
    brand: "Dell",
    warranty: "2 Years",
    price: 95000,
    offer_price: 87999,
    discount_percent: 7,
    stock: 30,
    total_sold: 850,
    delivery: { days: 5, type: "Standard" },
    store_location: { city: "Hyderabad", country: "India" },
    payment_options: ["UPI","CARD","EMI"],
    refund: { type: "Replacement", days: 7 },
    free_delivery: true
  },

  {
    id: 4,
    title: "Smart Watch",
    description: "Fitness smartwatch with heart rate monitor and GPS.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.2,
    reviews_count: 210,
    reviews: [
      { user: "Anu", rating: 4, comment: "Tracks fitness accurately.", date: "2026-02-20" },
      { user: "Ravi", rating: 5, comment: "Best budget smartwatch!", date: "2026-03-02" }
    ],
    brand: "Noise",
    warranty: "1 Year",
    price: 4999,
    offer_price: 3499,
    discount_percent: 30,
    stock: 100,
    total_sold: 2100,
    delivery: { days: 2, type: "Express" },
    store_location: { city: "Mumbai", country: "India" },
    payment_options: ["UPI","CARD"],
    refund: { type: "Replacement", days: 7 },
    free_delivery: true
  },

  {
    id: 5,
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and waterproof design.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.4,
    reviews_count: 150,
    reviews: [
      { user: "Suresh", rating: 5, comment: "Bass is awesome!", date: "2026-03-08" },
      { user: "Divya", rating: 4, comment: "Good but heavy.", date: "2026-03-09" }
    ],
    brand: "JBL",
    warranty: "1 Year",
    price: 5999,
    offer_price: 4499,
    discount_percent: 25,
    stock: 0,
    total_sold: 1500,
    delivery: { days: 4, type: "Standard" },
    store_location: { city: "Delhi", country: "India" },
    payment_options: ["UPI","CARD"],
    refund: { type: "Replacement", days: 10 },
    free_delivery: true
  },

  {
    id: 6,
    title: "DSLR Camera",
    description: "Professional DSLR camera with 24MP sensor.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.6,
    reviews_count: 60,
    reviews: [
      { user: "Naveen", rating: 5, comment: "Crystal clear photos!", date: "2026-03-01" },
      { user: "Pooja", rating: 4, comment: "Great for beginners.", date: "2026-03-04" }
    ],
    brand: "Canon",
    warranty: "2 Years",
    price: 55000,
    offer_price: 49999,
    discount_percent: 9,
    stock: 20,
    total_sold: 600,
    delivery: { days: 6, type: "Standard" },
    store_location: { city: "Kolkata", country: "India" },
    payment_options: ["UPI","EMI"],
    refund: { type: "Replacement", days: 7 },
    free_delivery: false
  },

  {
    id: 7,
    title: "Air Conditioner",
    description: "1.5 Ton inverter AC with energy saving mode.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.1,
    reviews_count: 90,
    reviews: [
      { user: "Manoj", rating: 4, comment: "Cools quickly!", date: "2026-03-06" },
      { user: "Lakshmi", rating: 4, comment: "Installation was smooth.", date: "2026-03-07" }
    ],
    brand: "LG",
    warranty: "5 Years",
    price: 42000,
    offer_price: 37999,
    discount_percent: 10,
    stock: 15,
    total_sold: 950,
    delivery: { days: 7, type: "Standard" },
    store_location: { city: "Chennai", country: "India" },
    payment_options: ["UPI","CARD","EMI"],
    refund: { type: "Replacement", days: 7 },
    free_delivery: true
  },

  {
    id: 8,
    title: "Microwave Oven",
    description: "Convection microwave oven with multiple cooking modes.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.3,
    reviews_count: 78,
    reviews: [
      { user: "Geetha", rating: 5, comment: "Very useful in kitchen!", date: "2026-02-28" },
      { user: "Ramesh", rating: 4, comment: "Good features.", date: "2026-03-02" }
    ],
    brand: "IFB",
    warranty: "3 Years",
    price: 15000,
    offer_price: 12999,
    discount_percent: 13,
    stock: 40,
    total_sold: 780,
    delivery: { days: 3, type: "Standard" },
    store_location: { city: "Pune", country: "India" },
    payment_options: ["UPI","CARD"],
    refund: { type: "Replacement", days: 7 },
    free_delivery: true
  },

  {
    id: 9,
    title: "Refrigerator",
    description: "Double door fridge with fast cooling technology.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.5,
    reviews_count: 110,
    reviews: [
      { user: "Deepak", rating: 5, comment: "Very spacious!", date: "2026-03-05" },
      { user: "Sneha", rating: 4, comment: "Energy efficient.", date: "2026-03-06" }
    ],
    brand: "Whirlpool",
    warranty: "10 Years Compressor",
    price: 30000,
    offer_price: 26999,
    discount_percent: 10,
    stock: 25,
    total_sold: 1100,
    delivery: { days: 5, type: "Standard" },
    store_location: { city: "Ahmedabad", country: "India" },
    payment_options: ["UPI","CARD","EMI"],
    refund: { type: "Replacement", days: 10 },
    free_delivery: true
  },

  {
    id: 10,
    title: "Men's Running Shoes",
    description: "Comfortable and lightweight running shoes.",
    image: "https://via.placeholder.com/300",
    gallery_images: ["https://via.placeholder.com/300","https://via.placeholder.com/300"],
    rating: 4.2,
    reviews_count: 200,
    reviews: [
      { user: "Ajay", rating: 5, comment: "Very comfortable!", date: "2026-03-01" },
      { user: "Kiran", rating: 4, comment: "Good for daily use.", date: "2026-03-02" }
    ],
    brand: "Nike",
    warranty: "6 Months",
    price: 4999,
    offer_price: 3499,
    discount_percent: 30,
    stock: 120,
    total_sold: 5000,
    delivery: { days: 2, type: "Express" },
    store_location: { city: "Chennai", country: "India" },
    payment_options: ["UPI","COD"],
    refund: { type: "Return", days: 7 },
    free_delivery: true
  }
];

module.exports = products;