let foods = [];

function addFood() {
  const foodInput = document.getElementById("food");
  const caloriesInput = document.getElementById("calories");

  const food = foodInput.value;
  const calories = Number(caloriesInput.value);

  if (food && calories) {
    const newFood = { food, calories };
    foods.push(newFood);

    const foodList = document.getElementById("foodList");
    const newRow = foodList.insertRow(-1);
    const foodCell = newRow.insertCell(0);
    const caloriesCell = newRow.insertCell(1);
    foodCell.innerText = food;
    caloriesCell.innerText = calories;

    const totalCalories = document.getElementById("totalCalories");
    totalCalories.innerText = Number(totalCalories.innerText) + calories;

    foodInput.value = "";
    caloriesInput.value = "";
  }
}
