// src/data/menuData.js

import { LuLeaf, LuSprout, LuWheatOff, LuMilkOff, LuEgg } from "react-icons/lu";

export const tagIcons = {
  vegetarian: { icon: LuLeaf, label: "Végétarien" },
  vegan: { icon: LuSprout, label: "Vegan" },
  glutenFree: { icon: LuWheatOff, label: "Sans gluten" },
  lactoseFree: { icon: LuMilkOff, label: "Sans lactose" },
};

export const menuItems = [
  // --- Formules brunch ---
  {
    category: "Formules brunch",
    name: "Brunch Classique",
    description: "Boisson chaude, jus pressé, tartines, œufs brouillés, pancakes",
    price: "19€",
    tags: [],
  },
  {
    category: "Formules brunch",
    name: "Brunch Végétarien",
    description: "Toasts avocat, granola, fruits frais, thé bio",
    price: "18€",
    tags: ["vegetarian"],
  },
  {
    category: "Formules brunch",
    name: "Brunch Healthy",
    description: "Smoothie bowl, muesli sans gluten, œufs pochés, thé vert bio",
    price: "21€",
    tags: ["vegetarian", "glutenFree"],
  },

  // --- Sucrés ---
  {
    category: "Sucrés",
    name: "Pancakes maison",
    description: "Servis avec sirop d’érable et fruits frais",
    price: "9€",
    tags: ["vegetarian"],
  },
  {
    category: "Sucrés",
    name: "Granola & yaourt",
    description: "Yaourt bio et granola maison, miel",
    price: "8€",
    tags: ["vegetarian"],
  },
  {
    category: "Sucrés",
    name: "Crêpes aux fruits rouges",
    description: "Servies tièdes avec coulis maison",
    price: "9,50€",
    tags: ["lactoseFree"],
  },
  {
    category: "Sucrés",
    name: "Pain perdu brioche",
    description: "À la cannelle, sirop d’érable",
    price: "8,50€",
    tags: [],
  },

  // --- Salés ---
  {
    category: "Salés",
    name: "Avocado toast & œuf poché",
    description: "Pain complet, avocat, œuf, graines",
    price: "9€",
    tags: ["vegetarian"],
  },
  {
    category: "Salés",
    name: "Omelette légumes de saison",
    description: "Œufs bio, poêlée de légumes frais",
    price: "8€",
    tags: ["vegetarian"],
  },
  {
    category: "Salés",
    name: "Wrap poulet & avocat",
    description: "Poulet grillé, salade croquante, sauce légère",
    price: "10€",
    tags: [],
  },
  {
    category: "Salés",
    name: "Tartine chèvre miel",
    description: "Fromage de chèvre, noix, miel local",
    price: "9,50€",
    tags: ["vegetarian"],
  },

  // --- Boissons ---
  {
    category: "Boissons",
    name: "Café bio",
    description: "",
    price: "2,50€",
    tags: [],
  },
  {
    category: "Boissons",
    name: "Jus d’orange pressé",
    description: "",
    price: "4€",
    tags: [],
  },
  {
    category: "Boissons",
    name: "Chocolat chaud onctueux",
    description: "",
    price: "4,50€",
    tags: ["vegetarian"],
  },
  {
    category: "Boissons",
    name: "Thé bien-être",
    description: "",
    price: "3,50€",
    tags: ["vegan", "glutenFree"],
  },
];