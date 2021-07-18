// fetch('https://animechan.vercel.app/api/available/anime')
      // .then(response => response.json())
      // .then(anime => console.log(anime))
// 
      // fetch('https://animechan.vercel.app/api/random')
      //   .then(response => response.json())
      //   .then(quote => console.log(quote))

// establishing connection to server api
function getAnime(){
      fetch("https://animechan.vercel.app/api/random",{
            method: "GET"
      })
      .then((random)=> random.json())
      //.then((data) => console.log(random))
      //.then((data)=> console.log(random.anime))
      //.then((data)=> console.log(random.character))
     // .then((data)=> console.log(random.quote))

     
      .then((random) => loadAnime(random));
}
// funtion to load data from server
// function loadAnime(anime){
      // const container = document.createElement("div");
      // container.className = "container-outer";
      // container.innerHTML =`
      // <h2>${data.anime}</h2>
      // <h5>${data.character}</h5>
      // <p>${data.quote}</p>
      // `;
      // document.body.append(container);  
// }
function loadAnime(random) 
{
      
      const userList = document.createElement("div");
      userList.className = "user-list";
     // anime.forEach((data) => {
        const userContainer = document.createElement("div");
        userContainer.className = "user-container";
    
        userContainer.innerHTML = `
    
    
        <div>
        <label class="bold">Anime:</label>
        <label class="anime">${random.anime}</label></br>
          <label class="bold">Character: </label>
          <label class="user-name">${random.character}</label><br>
         <label class="bold center">Quote:</label>
         <p class="user-time" >${random.quote}</p>
          <button onclick="refreshAnime()" class="center">Load Another</button>
        </div>
        `;
      
        userList.append(userContainer);
     // });
    
      document.body.append(userList);
      
    }
   

    function refreshAnime(){
      fetch("https://animechan.vercel.app/api/random",{
            method: "GET"
      })
      .then((random)=> random.json());
      //.then((random) => refreshAnime())
      document.querySelector(".user-list").remove();
      getAnime();
    }
// function call
getAnime();