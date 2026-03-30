let orderList = [
  {
    order_id: "ORD1001",
    tracking_id: "TRK987654321",
    courier: "Delhivery",
    user: { name: "Siva", email: "siva@gmail.com", phone: "9876543210" },
    items: [
      { product_id: 1, title: "Wireless Bluetooth Headphones", quantity: 2, price: 5999 },
      { product_id: 4, title: "Smart Watch", quantity: 1, price: 3499 }
    ],
    total_amount: 15497,
    payment: { method: "UPI", status: "Paid" },
    order_status: "Out for Delivery",
    delivery_address: {
      street: "4th Avenue",
      area: "Anna Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600040",
      country: "India",
      gps: { lat: 13.0850, lng: 80.2101 }
    }
  },

  {
    order_id: "ORD1002",
    tracking_id: "TRK123456789",
    courier: "BlueDart",
    user: { name: "Arun", email: "arun@gmail.com", phone: "9123456780" },
    items: [{ product_id: 2, title: "Smartphone 5G", quantity: 1, price: 21999 }],
    total_amount: 21999,
    payment: { method: "Credit Card", status: "Paid" },
    order_status: "Shipped",
    delivery_address: {
      street: "100 Feet Road",
      area: "Indiranagar",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560038",
      country: "India",
      gps: { lat: 12.9719, lng: 77.6412 }
    }
  },

  {
    order_id: "ORD1003",
    tracking_id: "TRK555666777",
    courier: "Ekart",
    user: { name: "Priya", email: "priya@gmail.com", phone: "9012345678" },
    items: [{ product_id: 10, title: "Men's Running Shoes", quantity: 2, price: 3499 }],
    total_amount: 6998,
    payment: { method: "COD", status: "Pending" },
    order_status: "Out for Delivery",
    delivery_address: {
      street: "North Usman Road",
      area: "T Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600017",
      country: "India",
      gps: { lat: 13.0620, lng: 80.2370 }
    }
  },

  {
    order_id: "ORD1004",
    tracking_id: "TRK999888777",
    courier: "Amazon Logistics",
    user: { name: "Rahul", email: "rahul@gmail.com", phone: "9988776655" },
    items: [{ product_id: 3, title: "Gaming Laptop", quantity: 1, price: 87999 }],
    total_amount: 87999,
    payment: { method: "EMI", status: "Paid" },
    order_status: "Delivered",
    delivery_address: {
      street: "Cyber Towers Road",
      area: "HITEC City",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500081",
      country: "India",
      gps: { lat: 17.4477, lng: 78.3913 }
    }
  },

  {
    order_id: "ORD1005",
    tracking_id: "TRK222333444",
    courier: "DTDC",
    user: { name: "Lakshmi", email: "lakshmi@gmail.com", phone: "9090909090" },
    items: [{ product_id: 7, title: "Air Conditioner", quantity: 1, price: 37999 }],
    total_amount: 37999,
    payment: { method: "UPI", status: "Paid" },
    order_status: "Processing",
    delivery_address: {
      street: "Pillayar Koil Street",
      area: "Besant Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600090",
      country: "India",
      gps: { lat: 13.0076, lng: 80.2670 }
    }
  },

  {
    order_id: "ORD1006",
    tracking_id: "TRK666555444",
    courier: "Delhivery",
    user: { name: "Anu", email: "anu@gmail.com", phone: "9876501234" },
    items: [{ product_id: 5, title: "Bluetooth Speaker", quantity: 1, price: 4499 }],
    total_amount: 4499,
    payment: { method: "Card", status: "Paid" },
    order_status: "Shipped",
    delivery_address: {
      street: "ITPL Main Road",
      area: "Whitefield",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560066",
      country: "India",
      gps: { lat: 12.9692, lng: 77.7502 }
    }
  },

  {
    order_id: "ORD1007",
    tracking_id: "TRK444333222",
    courier: "BlueDart",
    user: { name: "Vikram", email: "vikram@gmail.com", phone: "9123454321" },
    items: [{ product_id: 6, title: "DSLR Camera", quantity: 1, price: 49999 }],
    total_amount: 49999,
    payment: { method: "UPI", status: "Paid" },
    order_status: "Processing",
    delivery_address: {
      street: "Sector V Road",
      area: "Salt Lake",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700091",
      country: "India",
      gps: { lat: 22.5797, lng: 88.4366 }
    }
  },

  {
    order_id: "ORD1008",
    tracking_id: "TRK333222111",
    courier: "Ekart",
    user: { name: "Geetha", email: "geetha@gmail.com", phone: "9012341122" },
    items: [{ product_id: 8, title: "Microwave Oven", quantity: 1, price: 12999 }],
    total_amount: 12999,
    payment: { method: "Debit Card", status: "Paid" },
    order_status: "Shipped",
    delivery_address: {
      street: "DP Road",
      area: "Kothrud",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411038",
      country: "India",
      gps: { lat: 18.5026, lng: 73.8105 }
    }
  },

  {
    order_id: "ORD1009",
    tracking_id: "TRK111222333",
    courier: "DTDC",
    user: { name: "Deepak", email: "deepak@gmail.com", phone: "9988112233" },
    items: [{ product_id: 9, title: "Refrigerator", quantity: 1, price: 26999 }],
    total_amount: 26999,
    payment: { method: "Credit Card", status: "Paid" },
    order_status: "Delivered",
    delivery_address: {
      street: "CG Road",
      area: "Navrangpura",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "380009",
      country: "India",
      gps: { lat: 23.0392, lng: 72.5642 }
    }
  },

  {
    order_id: "ORD1010",
    tracking_id: "TRK777888999",
    courier: "Amazon Logistics",
    user: { name: "Ajay", email: "ajay@gmail.com", phone: "9098765432" },
    items: [{ product_id: 10, title: "Men's Running Shoes", quantity: 1, price: 3499 }],
    total_amount: 3499,
    payment: { method: "COD", status: "Pending" },
    order_status: "Processing",
    delivery_address: {
      street: "Beach Road",
      area: "Besant Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600090",
      country: "India",
      gps: { lat: 13.0067, lng: 80.2667 }
    }
  }
];

module.exports = orderList