const container=document.querySelector('.container');
const seat=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieselect= document.getElementById('movie');


let ticketprice= parseInt( movieselect.value);


function updateCount() {
    
    const selectedSeats=document.querySelectorAll('.row .seat.selected');

    const seatIndex = [...selectedSeats].map(seats=>{
        return [seat].indexOf(seats);
    })
    const seatcount= selectedSeats.length;
    count.innerText= seatcount;
    total.innerText= seatcount * ticketprice;   
}


movieselect.addEventListener('change',e=>{
    ticketprice= +e.target.value;
    updateCount()
})

container.addEventListener('click',e=>{
    if (e.target.classList.contains('seat')) {
        e.target.classList.toggle('selected');
        updateCount();
    }
})


function buy() {
    const selectedSeats=document.querySelectorAll('.row >.seat.selected');
    selectedSeats.forEach(e=> {
        e.className="seat occupied";

    });
    setTimeout(() => {
        alert("Number of seats :"+count.innerHTML+"\n"+"Total amount paid :"+total.innerHTML);
    }, 2000);;
    save();
}


/*function buy() {
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    selectedSeats.className="seat occupied";
}
/*function buy(){
    console.log("Number of seats :" + total);
    console.log("Total amount paid :"+ seatcount);
    
    
}*/
