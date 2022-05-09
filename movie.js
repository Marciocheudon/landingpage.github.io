*/var main = document.querySelectorAll('.main .center')[0];
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1')
.then(Response=>Response.json())
.then(data=>{
    data.results.map((i,j)=>{

        if(j > 15)
            return;
        if(j == 0){
            main.innerHTML+=`
           
            <div class="banner-principal" style="background-image:url('72horas.png')"></div>
            
            <h2>Assista o melhor filme</h2>
            `;
        }else{
            if(j == i){
                main.innerHTML+=`
               
                <div class="card-product" style="background-image:url('airods.png')"></div>

                
             
                `;
            }else{
                main.innerHTML+=`
               
                <div class="card-product"> <img src="airpods.png`+i.poster_path+`" /></div> 
                
                `;
            }
        }

    })
})