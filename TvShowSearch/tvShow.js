const form=document.querySelector('#tvForm')

form.addEventListener('submit', async function(e){
    e.preventDefault();
    try{
    const toBeSearch=form.elements.tv.value;
    const config={params:{q:toBeSearch}}
    const res= await axios.get("https://api.tvmaze.com/search/shows",config)
    makeImage(res.data)
    form.elements.tv.value=''}
    catch(err){
        console.log("ERRRRRRRRR")
    }
})

const makeImage=(shows)=>{
    for(let result of shows){
        if(result.show.image){
            const img=document.createElement('IMG')
            img.src=result.show.image.medium
            document.body.append(img)
        }
    }
}
