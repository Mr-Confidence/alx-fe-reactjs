import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  // Access filtered recipes from the store
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // Conditional rendering to ensure filteredRecipes is an array before mapping
  if (!Array.isArray(filteredRecipes) || filteredRecipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
