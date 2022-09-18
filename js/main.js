const sites = {
  site1: {
    siteName: "https://reqres.in/api/users?page=2",
    returnData: function () {
      return this.siteName;
    },
  },
  site2: {
    siteName: "https://reqres.in/api/unknown",
    returnData: function () {
      return this.siteName;
    },
  },
};
function getData(){
    let request = new XMLHttpRequest();

    function returnData(){
        let returnRequest = this.responseText;
        let newData = JSON.parse(returnRequest);
        let ul = document.createElement("ul");
        ul.classList.add("data");
        newData.data.forEach((element) => {
            let li = document.createElement("li");
            li.classList.add("data-li");
            let div = document.createElement("div");
            div.classList.add("data-title");
            div.textContent = `${element.name}` ;
            let p = document.createElement("p");
            p.classList.add("data-p");
            p.textContent =`${element.year}`;
            ul.appendChild(li);
            li.appendChild(div);
            li.appendChild(p);
            
            
            
          });
        document.getElementById("data").appendChild(ul);
  
        
       
    }
    request.addEventListener("load", returnData);
    request.open("GET", "https://reqres.in/api/unknown");
    request.send();
}

getData();
