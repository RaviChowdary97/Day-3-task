const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();
xhr.onload = function () {
  var data = JSON.parse(this.response);
  console.log("data", data);
  console.log(data[153].name.common);
  for (var i in data) {
    const res = data[i].name.common;
    const res1 = data[i].population;
    const res2 = data[i].region;
    const res3 = data[i].subregion;
    console.log(res);
    console.log(res1);
    console.log(res2);
    console.log(res3);
  }
};
