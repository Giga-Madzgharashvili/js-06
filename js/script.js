const sites = {
    site1: {
        siteName: "https://reqres.in/api/users?page=2",
        returnSiteData: function(){
            return(this.siteName);
        }
    },
    site2: {
        siteName: "https://reqres.in/api/unknown",
        returnSiteData: function(){
            return(this.siteName);
        }
    }
};
const site1 = sites.site1.returnSiteData();
const site2 = sites.site2.returnSiteData();

 function getData(obj){
    let request = new XMLHttpRequest();
    function render() {
        let returnData = this.responseText;
        let newData = JSON.parse(returnData);
        console.log(newData);
        let ul = document.createElement("ul");
        newData.data.forEach(element => {
            let li = document.createElement("li");
            li.textContent = element.first_name;
            ul.appendChild(li);
        });
        
        document.getElementById("app").appendChild(ul);
    }
    request.addEventListener("load", render);
    request.open("GET", obj);
    request.send();
 }

 getData(site1);
 getData(site2);