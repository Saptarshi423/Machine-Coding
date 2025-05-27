const api_URL = "https://swapi.py4e.com/api/people/";
let selector = document.querySelector("#mySelect");
let incomingData = null;

const setData = (data) => {
  if (!data || data.length === 0) {
    console.error("No data available to set.");
    return;
  }

  incomingData = data;
};

const populateTable = (data) => {
  if (!data || data.length === 0) {
    console.error("No data available to populate the table.");
    return;
  }

  console.log("Films:", data[0]);
  console.log("Starships:", data[1]);
  
   
};

const populateList = (data) => {
  if (!data || data.length === 0) {
    console.error("No data available to populate the list.");
    return;
  }
  console.log(data);
  setData(data);

  data.forEach((item) => {
    let option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    selector.appendChild(option);
  });
};

const fetchParallelyStarships = async (urls) => {
  const response = await Promise.all(urls.map((url) => fetchItems(url)));
  try {
    const results = response;
    return results;
  } catch (error) {
    console.error("Error fetching data in parallel:", error);
    return [];
  }
};

const fetchParallely = async (urls) => {
  const response = await Promise.all(urls.map((url) => fetchItems(url)));

  try {
    const results = response;
    return results;
  } catch (error) {
    console.error("Error fetching data in parallel:", error);
    return [];
  }
};

const fetchItems = async (URL) => {
  try {
    const response = await fetch(URL);
    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
};

selector.addEventListener("change", async (event) => {
  const selectedValue = event.target.value;
  const selectedItem = incomingData.find((item) => item.name === selectedValue);
  if (selectedItem) {
    console.log("Selected Item:", selectedItem);
    const response = await Promise.all([
      fetchParallely(selectedItem.films),
      fetchParallelyStarships(selectedItem.starships),
    ]);

    console.log(response);
    populateTable(response);
  } else {
    console.error("Selected item not found in incoming data.");
  }
});

fetchItems(api_URL).then((data) => {
  if (data && data.results) {
    populateList(data.results);
  } else {
    console.error("No results found in the fetched data.");
  }
});
