import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // Error state to hold error messages

  // Handle input changes
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleIngredientsChange = (e) => setIngredients(e.target.value);
  const handleStepsChange = (e) => setSteps(e.target.value);

  // Validation logic
  const validate = () => {
    const errors = {};

    // Check if title is empty
    if (!title) {
      errors.title = "Recipe title is required";
    }

    // Check if ingredients are provided (at least two ingredients)
    const ingredientsList = ingredients
      .split("\n")
      .map((ingredient) => ingredient.trim())
      .filter((ingredient) => ingredient !== "");
    if (ingredientsList.length < 2) {
      errors.ingredients = "Please provide at least two ingredients";
    }

    // Check if steps are provided
    if (!steps) {
      errors.steps = "Preparation steps are required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // Run validation
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Prepare the new recipe data
    const newRecipe = {
      title,
      ingredients: ingredients
        .split("\n")
        .map((ingredient) => ingredient.trim())
        .filter((ingredient) => ingredient !== ""),
      steps: steps
        .split("\n")
        .map((step) => step.trim())
        .filter((step) => step !== ""),
    };

    // Submit the new recipe (for now, log to console)
    console.log("New Recipe Submitted:", newRecipe);

    // Reset the form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        Add a New Recipe
      </h2>

      {/* Display errors if any */}
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 mb-4">
          {Object.values(errors).map((error, index) => (
            <p key={index} className="text-center">
              {error}
            </p>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 grid md:grid-cols-2 gap-6"
      >
        {/* Recipe Title */}
        <div className="col-span-2">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className={`w-full p-3 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="col-span-2">
          <label
            htmlFor="ingredients"
            className="block text-lg font-semibold mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={handleIngredientsChange}
            className={`w-full p-3 border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter ingredients (one per line)"
            rows="5"
          />
        </div>

        {/* Preparation Steps */}
        <div className="col-span-2">
          <label htmlFor="steps" className="block text-lg font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={handleStepsChange}
            className={`w-full p-3 border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter preparation steps (one per line)"
            rows="5"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
