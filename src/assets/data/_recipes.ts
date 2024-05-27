import { Recipe } from "../../interfaces/recipe";

export const resipes:Recipe[] = [
  {
    name: "Spaghetti Carbonara",
    image: "https://th.bing.com/th/id/OIP.Y9Ggv_GmsWWjWgnvJOc1XQHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7",
    ingredients: [
      { name: "spaghetti", unit: "g", numberPerUnit: 200, pricePerUnit: 0.02 },
      { name: "pancetta", unit: "g", numberPerUnit: 100, pricePerUnit: 0.10 },
      { name: "large eggs", unit: "piece", numberPerUnit: 2, pricePerUnit: 0.20 },
      { name: "pecorino cheese", unit: "g", numberPerUnit: 50, pricePerUnit: 0.15 },
      { name: "parmesan", unit: "g", numberPerUnit: 50, pricePerUnit: 0.12 },
      { name: "black pepper", unit: "tsp", numberPerUnit: 1, pricePerUnit: 0.05 },
      { name: "salt", unit: "tsp", numberPerUnit: 1, pricePerUnit: 0.01 },
      { name: "garlic cloves", unit: "piece", numberPerUnit: 2, pricePerUnit: 0.05 },
      { name: "olive oil", unit: "tbsp", numberPerUnit: 1, pricePerUnit: 0.10 }
    ],
    instructions: [
      "Cook the spaghetti in a large pot of boiling salted water until al dente.",
      "While the pasta cooks, heat a large skillet over medium heat and add the pancetta, cooking until crisp.",
      "Beat the eggs in a bowl, then add the grated pecorino and parmesan cheeses, and mix well.",
      "Drain the pasta, reserving some of the cooking water.",
      "Add the pasta to the skillet with the pancetta and remove from heat.",
      "Quickly pour in the egg and cheese mixture, tossing everything together.",
      "If the sauce is too thick, add some reserved pasta water to loosen it.",
      "Season with black pepper and serve immediately."
    ],
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    rate: 4.5,
    chef: {
      name: "Gordon Ramsay",
      experience: "20 years",
      avatar: "https://th.bing.com/th/id/OIP.UCrgCBSSHZAE2Mrj0lvPFgHaE7?rs=1&pid=ImgDetMain"
    },
    category: "Pasta",
    country: "Italy"
  },
  {
    name: "Chicken Curry",
    image: "https://th.bing.com/th/id/OIP.ddQVTbxl9fq-ixqHDohtoAHaFs?w=226&h=180&c=7&r=0&o=5&pid=1.7",
    ingredients: [
      { name: "chicken breast", unit: "lb", numberPerUnit: 1, pricePerUnit: 3.00 },
      { name: "curry powder", unit: "tbsp", numberPerUnit: 2, pricePerUnit: 0.20 },
      { name: "onion", unit: "piece", numberPerUnit: 1, pricePerUnit: 0.50 },
      { name: "garlic cloves", unit: "piece", numberPerUnit: 2, pricePerUnit: 0.05 },
      { name: "ginger", unit: "tbsp", numberPerUnit: 1, pricePerUnit: 0.10 },
      { name: "coconut milk", unit: "can", numberPerUnit: 1, pricePerUnit: 1.50 },
      { name: "chicken broth", unit: "cup", numberPerUnit: 1, pricePerUnit: 0.75 },
      { name: "tomato paste", unit: "tbsp", numberPerUnit: 2, pricePerUnit: 0.15 },
      { name: "salt", unit: "tsp", numberPerUnit: 1, pricePerUnit: 0.01 },
      { name: "pepper", unit: "tsp", numberPerUnit: 1, pricePerUnit: 0.05 },
      { name: "cilantro", unit: "bunch", numberPerUnit: 1, pricePerUnit: 0.75 },
      { name: "olive oil", unit: "tbsp", numberPerUnit: 2, pricePerUnit: 0.10 }
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add the onion, garlic, and ginger, cooking until fragrant.",
      "Stir in the curry powder and cook for another minute.",
      "Add the chicken cubes, cooking until browned on all sides.",
      "Stir in the tomato paste, coconut milk, and chicken broth.",
      "Bring to a boil, then reduce heat and simmer for 20 minutes, or until chicken is cooked through.",
      "Season with salt and pepper to taste.",
      "Garnish with cilantro and serve with rice."
    ],
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    rate: 4.7,
    chef: {
      name: "Jamie Oliver",
      experience: "15 years",
      avatar: "https://th.bing.com/th/id/OIP.UCrgCBSSHZAE2Mrj0lvPFgHaE7?rs=1&pid=ImgDetMain"
    },
    category: "Main Course",
    country: "India"
  },
  {
    name: "Chocolate Chip Cookies",
    image: "https://www.spendwithpennies.com/wp-content/uploads/2022/04/Chocolate-Chip-Cookies-SpendWithPennies-2.jpg",
    ingredients: [
      { name: "unsalted butter", unit: "cup", numberPerUnit: 1, pricePerUnit: 0.80 },
      { name: "granulated sugar", unit: "cup", numberPerUnit: 1, pricePerUnit: 0.50 },
      { name: "brown sugar", unit: "cup", numberPerUnit: 1, pricePerUnit: 0.60 },
      { name: "large eggs", unit: "piece", numberPerUnit: 2, pricePerUnit: 0.20 },
      { name: "vanilla extract", unit: "tsp", numberPerUnit: 2, pricePerUnit: 0.30 },
      { name: "all-purpose flour", unit: "cup", numberPerUnit: 3, pricePerUnit: 0.25 },
      { name: "baking soda", unit: "tsp", numberPerUnit: 1, pricePerUnit: 0.05 },
      { name: "baking powder", unit: "tsp", numberPerUnit: 0.5, pricePerUnit: 0.05 },
      { name: "salt", unit: "tsp", numberPerUnit: 1, pricePerUnit: 0.01 },
      { name: "chocolate chips", unit: "cup", numberPerUnit: 2, pricePerUnit: 1.50 }
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C).",
      "In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.",
      "Beat in the eggs one at a time, then stir in the vanilla extract.",
      "Combine the flour, baking soda, baking powder, and salt; gradually add to the creamed mixture.",
      "Fold in the chocolate chips.",
      "Drop by rounded spoonfuls onto ungreased baking sheets.",
      "Bake for 8 to 10 minutes, or until golden brown.",
      "Cool on wire racks before serving."
    ],
    prepTime: "20 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    rate: 4.8,
    chef: {
      name: "Ina Garten",
      experience: "25 years",
      avatar: "https://th.bing.com/th/id/OIP.UCrgCBSSHZAE2Mrj0lvPFgHaE7?rs=1&pid=ImgDetMain"
    },
    category: "Dessert",
    country: "United States"
  },
  {
    name: "Beef Tacos",
    image: "https://www.jocooks.com/wp-content/uploads/2020/08/ground-beef-tacos-1-12.jpg",
    ingredients: [
      { name: "ground beef", unit: "lb", numberPerUnit: 1, pricePerUnit: 4.00 },
      { name: "taco seasoning", unit: "packet", numberPerUnit: 1, pricePerUnit: 1.00 },
      { name: "water", unit: "cup", numberPerUnit: 0.5, pricePerUnit: 0.00 },
      { name: "taco shells", unit: "piece", numberPerUnit: 8, pricePerUnit: 0.20 },
      { name: "shredded lettuce", unit: "cup", numberPerUnit: 1, pricePerUnit: 0.50 },
      { name: "diced tomatoes", unit: "cup", numberPerUnit: 1, pricePerUnit: 0.75 },
      { name: "shredded cheese", unit: "cup", numberPerUnit: 1, pricePerUnit: 1.00 },
      { name: "sour cream", unit: "tbsp", numberPerUnit: 1, pricePerUnit: 0.10 },
      { name: "salsa", unit: "tbsp", numberPerUnit: 1, pricePerUnit: 0.10 }
    ],
    instructions: [
      "Cook the ground beef in a skillet over medium heat until browned.",
      "Drain any excess fat.",
      "Add the taco seasoning and water to the skillet, and simmer for 5 minutes.",
      "Warm the taco shells according to the package instructions.",
      "Assemble the tacos by filling each shell with the beef mixture, lettuce, tomatoes, and cheese.",
      "Top with sour cream and salsa as desired."
    ],
    prepTime: "10 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    rate: 4.6,
    chef: {
      name: "Rick Bayless",
      experience: "30 years",
      avatar: "https://th.bing.com/th/id/OIP.UCrgCBSSHZAE2Mrj0lvPFgHaE7?rs=1&pid=ImgDetMain"
    },
    category: "Main Course",
    country: "Mexico"
  }
];