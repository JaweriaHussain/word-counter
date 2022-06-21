const Valchar = document.getElementById('textarea');
let valcount = document.getElementById('total-counter');
let valRemain = document.getElementById('total-Remain');
let useVar = 0;
const updateCounter= () =>{
    useVar = Valchar.value.length;
    valcount.innerText = useVar;
    valRemain.innerText = 150-useVar;
}

Valchar.addEventListener("keyup",()=> updateCounter());
const Copytext = ()=>
{
    Valchar.select();
    Valchar.setSelectionRange(0,9999);
    navigator.clipboard.writeText(Valchar.value);
}