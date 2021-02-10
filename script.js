
movieName=document.getElementById('name')
genere=document.getElementById('genere')
language=document.getElementById('language')
img=document.getElementById('img')

document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault(); 
    //let url = `http://api.tvmaze.com/search/shows?q=`;
    let url=`http://api.tvmaze.com/singlesearch/shows?q=`
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
   // console.log(url);

    async function getMovieDetail(url){
        var res=await fetch(url)
       data=await res.json()
       return data
    }
    val=getMovieDetail(url)
    val.then(response=>{
         console.log(response)
        // console.log(response[0].show.name)

        movieName.innerHTML=response.name
        genere.innerHTML=""
        for(var i=0;i<response.genres.length;i++)
        {
            genere.innerHTML+=response.genres[i]+"  "
        }
       // genere.innerHTML=response.genres[0]
        language.innerHTML=response.language
        image=response.image.original
        img.setAttribute("src",image)
        img.style=width="200px";
        img.style.height="200px"
        
    })
    
   
     .catch(err => {
        console.error(err);
      });
  });


