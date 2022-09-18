
function getData(){
    let request = new XMLHttpRequest();

    function returnData(){
        let returnRequest = this.responseText;
       
        let newData = JSON.parse(returnRequest);
        let ul = document.createElement("ul");
        ul.classList.add("ul-data");
        newData.data.forEach((element) => {
            let li = document.createElement("li");
            li.classList.add("app-li");
            let p = document.createElement("p");
            p.classList.add("title");
            p.textContent = `Name ${element.first_name}` ;
            let img = document.createElement("img");
            img.setAttribute("src", element.avatar);
            img.classList.add("images");
            ul.appendChild(li);
            li.appendChild(p);
            li.appendChild(img);
            
            
          });
        document.getElementById("app").appendChild(ul);
  
        
       
    }
    request.addEventListener("load", returnData);
    request.open("GET", "https://reqres.in/api/users?page=2");
    request.send();
}

getData();

