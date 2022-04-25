const btnPress= document.querySelector('#PTgetJ');
const headJokes=document.querySelector("#jokess");

const jokes = async ()=>{
    try{
    const config= {headers: {Accept:'application/json' } }
    const res= await axios.get("https://icanhazdadjoke.com/",config)
    console.log(res.data.joke)
    const newEl=document.createElement('LI')
    newEl.append(res.data.joke)
    headJokes.append(newEl)
    }
    catch(err){
        console.log("Opps an error Occurs ")
    }
}


btnPress.addEventListener('click',jokes)