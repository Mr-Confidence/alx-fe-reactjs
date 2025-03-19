import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json"; // Import the data.json file

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the recipe ID from the URL params
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      // Redirect to home page if recipe not found
      navigate("/");
    }
  }, [id, navigate]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </button>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4">{recipe.title}</h2>
          <p className="text-xl text-gray-700 mb-4">{recipe.summary}</p>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc pl-5 space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg text-gray-600">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Cooking Instructions
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-lg text-gray-600">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
