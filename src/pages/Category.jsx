import React from "react";

const categories = [
  {
    name: "Dogs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVAoZ9vdAqn0glo8ceyTeptP5Rnq8q486HQ&s",
    foods: [
      { name: "Kibble", icon: "🥣" },
      { name: "Canned Meat", icon: "🍖" },
      { name: "Raw Meat", icon: "🥩" },
      { name: "Boiled Chicken & Rice", icon: "🍗🍚" }
    ]
  },
  {
    name: "Cats",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQl1CQRnV3zVKArEhDJSMXmyxoLbGZ5lD0g&s",
    foods: [
      { name: "Cat Kibble", icon: "🥣" },
      { name: "Tuna", icon: "🐟" },
      { name: "Raw Fish", icon: "🐠" },
      { name: "Cooked Chicken", icon: "🍗" }
    ]
  },
  {
    "name": "Rabbits",
    "image": "https://images.pexels.com/photos/247373/pexels-photo-247373.jpeg",
    "foods": [
      { "name": "Timothy Hay", "icon": "🌿" },
      { "name": "Carrots", "icon": "🥕" },
      { "name": "Pellets", "icon": "🍘" },
      { "name": "Apples", "icon": "🍏" }
    ]
}
,
{
    "name": "Birds",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg",
    "foods": [
      { "name": "Seeds", "icon": "🌾" },
      { "name": "Fruits", "icon": "🍓" },
      { "name": "Insects", "icon": "🐛" },
      { "name": "Nectar", "icon": "🍯" }
    ]
  }
,  
{
    "name": "Fish",
    "image": "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg",
    "foods": [
      { "name": "Flakes", "icon": "🐠" },
      { "name": "Pellets", "icon": "🍘" },
      { "name": "Bloodworms", "icon": "🪱" },
      { "name": "Brine Shrimp", "icon": "🦐" }
    ]
}
,
{
    "name": "Cows",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg",
    "foods": [
      { "name": "Grass", "icon": "🌿" },
      { "name": "Hay", "icon": "🌾" },
      { "name": "Silage", "icon": "🥬" },
      { "name": "Grains", "icon": "🌽" }
    ]
  }
  

  
];

const Category = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🐾 Pet Food Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-md mb-2" />
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <ul className="list-disc pl-5">
              {category.foods.map((food, idx) => (
                <li key={idx}>{food.icon} {food.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
