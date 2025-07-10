import React, { useState } from 'react';
import './App.css';

const recipes = [
  {
    title: "Pancakes Rapides",
    description: "Des pancakes moelleux prêts en 10 minutes.",
    ingredients: ["Farine", "Lait", "Œufs", "Sucre", "Beurre"],
    steps: [
      "Mélanger les ingrédients.",
      "Chauffer la poêle.",
      "Cuire les pancakes.",
      "Servir avec sirop ou fruits."
    ],
    time: "10 minutes"
  },
  {
    title: "Toast aux œufs",
    description: "Petit-déjeuner rapide.",
    ingredients: ["Pain", "Œufs", "Beurre", "Sel", "Poivre"],
    steps: [
      "Griller le pain.",
      "Cuire les œufs.",
      "Déposer sur le pain.",
      "Assaisonner et servir."
    ],
    time: "5 minutes"
  }
  // Ajoute d'autres recettes si tu veux !
];

function App() {
  const [search, setSearch] = useState('');
  const filteredRecipes = recipes.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="overlay">
        <h1>Une Tite Vite à Manger 🍽️</h1>
        <input
          type="text"
          placeholder="Cherche une recette..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {filteredRecipes.length === 0 && (
          <p>Aucune recette trouvée 😢</p>
        )}
        {filteredRecipes.map((recipe, idx) => (
          <div key={idx} className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p><strong>Temps:</strong> {recipe.time}</p>
            <h3>Ingrédients:</h3>
            <ul>
              {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
            <h3>Étapes:</h3>
            <ol>
              {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
