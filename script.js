sendParsedSearchResults();

function sendParsedSearchResults() {
  const search = document.getElementById("search");
  const searchAll = search.children[0].children[1];
  const searchFiltered = [...searchAll.getElementsByClassName("g")];
  const mappedResult = searchFiltered.map((el) => el.getElementsByTagName("a")[0].href);

  console.log(mappedResult);

  fetch("http://localhost:8000", {
    method: "post",
    body: JSON.stringify(mappedResult),
  });
}
