const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.getElementById("para");

let btn = document.getElementById("btn");

const getFacts = async () => {
  try {
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);
    let Data = await response.json();
    // Generate a random index to get a random fact
    let randomIndex = Math.floor(Math.random() * Data.length);
   
    
    // Display the fact at the random index
    factPara.innerText = Data[randomIndex ].text;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

btn.addEventListener("click", getFacts);
// getFacts();
