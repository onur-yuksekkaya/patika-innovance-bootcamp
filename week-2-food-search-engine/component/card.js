import { saveToLocalFavorited } from "../index";

let tabIndex = 1;

const Card = ({
  idMeal,
  isFavorited,
  strMeal,
  strMealThumb,
  strYoutube,
  strCategory,
  strArea,
}) => {
  const foodCard = document.createElement("div");
  const foodTitle = document.createElement("div");
  const imageThumb = document.createElement("img");
  const youtube = document.createElement("div");
  const favoriteButton = document.createElement("i");
  const BadgeParent = document.createElement("div");
  const category = document.createElement("span");
  const area = document.createElement("span");

  //Card Container
  foodCard.classList.add(
    "food-card",
    "col-lg-4",
    "col-md-6",
    "my-3",
    "mx-auto"
  );
  foodCard.setAttribute("tabIndex", tabIndex);
  tabIndex++;
  foodCard.setAttribute("id", `card-${idMeal}`);
  // Card image
  imageThumb.classList.add("img-top");
  imageThumb.src = strMealThumb;
  // Card favorite button
  favoriteButton.classList.add("fas", "fa-2x", "fa-heart", "mt-2");
  favoriteButton.setAttribute("id", `fav-${idMeal}`);
  favoriteButton.style.color = isFavorited ? "#ff86b5" : "black";
  // Card title
  foodTitle.classList.add("title");
  foodTitle.innerHTML = strMeal;
  // badge parent
  BadgeParent.classList.add("d-flex", "justify-content-between", "mb-3");
  // category badge
  category.classList.add("badge", "rounded-pill", "bg-success");
  category.innerHTML = strCategory;
  //are badge
  area.classList.add("badge", "rounded-pill", "bg-dark");
  area.innerHTML = strArea;
  // Card youtube link
  youtube.classList.add("more-btn");
  youtube.innerHTML =
    "<a href='" + strYoutube + "' target='_blank'>Watch The Video</a>";
  // add to card containers
  foodCard.appendChild(imageThumb);
  foodCard.appendChild(favoriteButton);
  foodCard.appendChild(foodTitle);
  foodCard.appendChild(BadgeParent);
  BadgeParent.appendChild(category);
  BadgeParent.appendChild(area);
  foodCard.appendChild(youtube);

  // Click Events
  foodCard.addEventListener("click", function () {
    // Focus on the exact box
    foodCard.focus();
  });

  // Key Events
  foodCard.addEventListener("keyup", (event) => {
    let clickedKey = event.key;
    if (clickedKey === "f") {
      saveToLocalFavorited(foodCard.id.substr(5));
    }
  });

  favoriteButton.addEventListener("click", (event) => {
    saveToLocalFavorited(foodCard.id.substr(5));
  });

  return foodCard;
};

export default Card;
