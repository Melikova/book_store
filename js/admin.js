
const apiKey = "AIzaSyAkvx-sx9SeDZe-FkrmgSgY35x6zuMSEQw";
const searchInput = document.querySelector("#search");
const searchBookResult = document.querySelector("#searchBookResult");

let timer;

// Debounce function
async function getApi(query) {
  clearTimeout(timer);

  timer = setTimeout(async () => {
    try {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&key=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("data: ", data);
      printResult(data);
    } catch (err) {
      console.log("err: ", err);
    }
  }, 300);
    
}

// Checks the entered character
function changeEvent(event) {
  const query = event.target.value.trim().toLowerCase();
  const lastChar = query.charAt(query.length - 1);

    if (lastChar.match(/[a-z]/i)) {
    getApi(query);
  } else {
    clearResult();
  }
}

function searcInput(event) {
  if (event.keyCode === 13) {
    let text = searchInput.value;
    console.log(text);
    getApi(text);
  }
}

function clearResult() {
  searchBookResult.innerHTML = "";
}



function printResult(data) {
  clearResult();

  data.items.forEach((bookItem) => {
    const smallThumbnailLink = bookItem.volumeInfo.imageLinks.smallThumbnail;
    const bookTitle = bookItem.volumeInfo.title;

    const bookElement = document.createElement("div");
    bookElement.classList.add("w-25", "d-flex", "h6", "align-items-center");
      bookElement.style.cursor = "pointer";
    bookElement.innerHTML = `
      <img class="w-100 p-2" src="${smallThumbnailLink}" alt="">
      <p>${bookTitle}</p>`;

    searchBookResult.appendChild(bookElement);
  });
}


// when user click out input
document.addEventListener("mousedown", (event) => {
  const clickInput = searchInput.contains(event.target);
  if (!clickInput) {
    searchInput.value = "";
    clearResult();
  }
});

searchInput.addEventListener("input", changeEvent);
searchInput.addEventListener("keyup", searcInput);
