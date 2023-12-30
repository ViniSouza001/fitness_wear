const stripe = Stripe(
  "pk_live_51OS4DvEixHlr2hL8LrnLan29l69T9BNFXEbH6siEDhiPAa0QsjWyEf3UuR69bgbRNdIUUhKW7V64NsgWciyFWypM008RA0QbyZ"
);
let informations;

const takeData = async () => {
  const info = await fetch("./src/data/data.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await info.json();
  informations = data;
  building();
};
takeData();

const building = async () => {
  const categories = await takeCategories(informations);
  addOptions(categories);
  const main = document.querySelector("main");

  categories.forEach((category) => {
    const categoryElement = createCategoryCard(category);
    // to be continue...
  });

  // const imageUrl = informations[0].imageURL;
  // main.innerHTML = `<img src='${imageUrl}' alt="Imagem qualquer" class="images" />`;
};

const takeCategories = async (array) => {
  const categories = [];
  array.forEach((info) => {
    const categoryExisting = categories.some((category) => {
      return category == info.category;
    });
    if (categoryExisting) {
      return;
    } else {
      categories.push(info.category);
    }
  });
  return categories;
};

const addOptions = (categories) => {
  const selectCategory = document.querySelector(".select");
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.toLowerCase();
    option.textContent = category;
    selectCategory.appendChild(option);
  });
};

// interactable functions
const filter = () => {
  const inputStr = document.querySelector("#filterStr").value;
  console.log(inputStr);
};
