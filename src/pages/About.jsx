import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChefHat,
  Search,
  Heart,
  Utensils,
  Users,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Search size={28} />,
      title: "Discover Recipes",
      text: "Explore recipes from different cuisines and find something perfect for your next meal.",
    },
    {
      icon: <ChefHat size={28} />,
      title: "Create Recipes",
      text: "Create and share your own recipes with the recipe community.",
    },
    {
      icon: <Heart size={28} />,
      title: "Find Your Favorites",
      text: "Discover recipes that match your taste and become your new favorites.",
    },
    {
      icon: <Utensils size={28} />,
      title: "Cook With Ease",
      text: "Find useful recipe information such as preparation time, cuisine, tags and ratings.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* HERO */}

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-400 font-semibold mb-4">
              ABOUT OUR RECIPE PLATFORM
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Food brings
              <span className="text-green-400"> people </span>
              together.
            </h1>

            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              Our recipe platform is built for people who love discovering,
              creating and cooking delicious food. Whether you are looking for a
              quick meal or something new to try, we make finding recipes
              simple.
            </p>

            <button
              onClick={() => navigate("/recipes")}
              className="mt-8 flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold"
            >
              Explore Recipes
              <ArrowRight size={18} />
            </button>
          </div>

          {/* VISUAL */}

          <div className="flex justify-center">
            <div className="w-[350px] h-[350px] rounded-full bg-green-500/10 flex items-center justify-center">
              <div className="w-[280px] h-[280px] rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                <span className="text-8xl">👨‍🍳</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}

      <section className="bg-gray-800/40 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-green-400 font-semibold">OUR STORY</p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Making cooking more enjoyable
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              We created this platform with a simple idea: finding a good recipe
              should be easy. Instead of searching through countless websites,
              users can explore recipes in one place and quickly find meals that
              match their interests.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              From everyday meals to new cuisines, our goal is to make
              discovering food fun, simple and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-green-400 font-semibold">WHAT YOU CAN DO</p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Everything you need to explore food
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our platform gives you simple tools to discover and create recipes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-7 hover:border-green-500/50 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mt-5">{feature.title}</h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}

      <section className="bg-gray-800/40 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center">
              <Users size={32} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mt-6">
              Built for food lovers
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Food is more than just a meal. It is creativity, culture and a way
              to connect with people. This platform gives food lovers a place to
              discover new ideas and create their own recipes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-green-400">1000+</p>

              <p className="text-gray-400 mt-2">Recipes</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-green-400">50+</p>

              <p className="text-gray-400 mt-2">Cuisines</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-green-400">4.9</p>

              <p className="text-gray-400 mt-2">Average Rating</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-green-400">24/7</p>

              <p className="text-gray-400 mt-2">Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-green-500 rounded-3xl p-10 md:p-16 text-center">
          <ChefHat size={42} className="mx-auto text-gray-900" />

          <h2 className="text-4xl font-bold text-gray-900 mt-5">
            Ready to discover something delicious?
          </h2>

          <p className="text-gray-800 mt-4 max-w-xl mx-auto">
            Explore our recipes and find your next favorite meal.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button
              onClick={() => navigate("/recipes")}
              className="bg-gray-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-gray-800"
            >
              Explore Recipes
            </button>

            <button
              onClick={() => navigate("/")}
              className="bg-white text-gray-900 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100"
            >
              Back Home
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ChefHat size={22} className="text-green-400" />

            <span className="font-bold">RecipeHub</span>
          </div>

          <p className="text-gray-500 text-sm">Discover. Create. Cook.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
