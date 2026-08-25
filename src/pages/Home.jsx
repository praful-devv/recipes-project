import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChefHat, Clock, Star, ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Italian",
    "Asian",
  ];

  const features = [
    {
      icon: <ChefHat size={28} />,
      title: "Thousands of Recipes",
      text: "Discover recipes from different cuisines and cooking styles.",
    },
    {
      icon: <Clock size={28} />,
      title: "Quick & Easy",
      text: "Find recipes based on preparation time and difficulty.",
    },
    {
      icon: <Star size={28} />,
      title: "Highly Rated",
      text: "Explore recipes loved and highly rated by food lovers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* HERO */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="text-green-400 font-semibold mb-4">
              🍳 YOUR NEXT MEAL STARTS HERE
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover
              <span className="text-green-400"> Delicious </span>
              Recipes
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-xl">
              Find your next favorite meal from thousands of delicious recipes.
              Explore new flavors, discover cuisines and cook something amazing
              today.
            </p>

            {/* SEARCH */}
            <div className="mt-8 flex items-center bg-gray-800 border border-gray-700 rounded-xl p-2 max-w-xl">
              <Search size={22} className="text-gray-400 ml-2" />

              <input
                type="text"
                placeholder="Search for a recipe..."
                className="bg-transparent outline-none px-4 py-3 flex-1 text-white"
              />

              <button
                onClick={() => navigate("/recipes")}
                className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-semibold"
              >
                Search
              </button>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => navigate("/recipes")}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold"
              >
                Explore Recipes
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/create")}
                className="border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-xl"
              >
                Create Recipe
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-[400px] h-[400px] rounded-full bg-green-500/10 flex items-center justify-center">
                <div className="w-[320px] h-[320px] rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                  <span className="text-9xl">🍲</span>
                </div>
              </div>

              <div className="absolute top-8 right-0 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3">
                ⭐ 4.9 Rating
              </div>

              <div className="absolute bottom-10 left-0 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3">
                🍴 1000+ Recipes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-green-400 text-sm font-semibold">EXPLORE</p>

            <h2 className="text-3xl font-bold mt-2">Browse Categories</h2>
          </div>

          <button
            onClick={() => navigate("/recipes")}
            className="text-green-400 flex items-center gap-2"
          >
            View all
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => navigate("/recipes")}
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-6 text-center transition"
            >
              <div className="text-3xl mb-3">🍽️</div>

              <p className="font-semibold">{category}</p>
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <p className="text-green-400 text-sm font-semibold">POPULAR</p>

          <h2 className="text-3xl font-bold mt-2">
            What are you cooking today?
          </h2>

          <p className="text-gray-400 mt-2">
            Explore our collection and find something delicious.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-7xl">
              🍝
            </div>

            <div className="p-5">
              <p className="text-green-400 text-sm">Italian</p>

              <h3 className="text-xl font-bold mt-2">Delicious Pasta</h3>

              <p className="text-gray-400 mt-2">
                Simple and delicious pasta recipes for every occasion.
              </p>

              <button
                onClick={() => navigate("/recipes")}
                className="mt-4 text-green-400 flex items-center gap-2"
              >
                View Recipes
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
            <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-7xl">
              🍔
            </div>

            <div className="p-5">
              <p className="text-green-400 text-sm">Fast Food</p>

              <h3 className="text-xl font-bold mt-2">Quick Meals</h3>

              <p className="text-gray-400 mt-2">
                Quick recipes when you want something tasty without waiting.
              </p>

              <button
                onClick={() => navigate("/recipes")}
                className="mt-4 text-green-400 flex items-center gap-2"
              >
                View Recipes
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
            <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-7xl">
              🍰
            </div>

            <div className="p-5">
              <p className="text-green-400 text-sm">Dessert</p>

              <h3 className="text-xl font-bold mt-2">Sweet Treats</h3>

              <p className="text-gray-400 mt-2">
                Satisfy your sweet tooth with amazing dessert recipes.
              </p>

              <button
                onClick={() => navigate("/recipes")}
                className="mt-4 text-green-400 flex items-center gap-2"
              >
                View Recipes
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-800/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-green-400 text-sm font-semibold">WHY US</p>

            <h2 className="text-3xl font-bold mt-2">
              Everything You Need To Cook
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mt-5">{feature.title}</h3>

                <p className="text-gray-400 mt-3">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-green-500 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to cook something amazing?
          </h2>

          <p className="text-gray-800 mt-4 max-w-xl mx-auto">
            Explore delicious recipes and discover your next favorite meal.
          </p>

          <button
            onClick={() => navigate("/recipes")}
            className="mt-8 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800"
          >
            Explore Recipes
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
