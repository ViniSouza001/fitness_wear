const stripe = Stripe(
  "pk_live_51OS4DvEixHlr2hL8LrnLan29l69T9BNFXEbH6siEDhiPAa0QsjWyEf3UuR69bgbRNdIUUhKW7V64NsgWciyFWypM008RA0QbyZ"
);

let reversedCard = false;

const takeData = async () => {
  const info = await fetch("./src/data/data.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await info.json();
  building(data);
};
takeData();

const building = async (data) => {
  const categories = await takeCategories(data);
  addOptions(categories);
  const main = document.querySelector("main");

  let i = 0;
  while (i <= categories.length) {
    if (categories[i] !== undefined) {
      const title = document.createElement("h1");
      title.classList.add("title");
      title.textContent = categories[i];
      main.appendChild(title);
    }
    data.forEach((eachData) => {
      if (eachData.category === categories[i]) {
        makeCard(eachData);
      }
    });

    i++;
    console.log(categories[i]);
  }

  // continue
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

const makeCard = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <img src="${data.imageURL}" alt="clothing image"/>
    <div class="textContainer">
      <p>${data.description}</p>
      <p>${data.size}</p>
      <p>${data.price}</p>
      <a href="${data.buyingLink}">Buy</a>
    </div>
  `;
  document.querySelector("main").appendChild(card);
};

// interactable functions
const filter = () => {
  const inputStr = document.querySelector("#filterStr").value;
  alert(inputStr);
};
