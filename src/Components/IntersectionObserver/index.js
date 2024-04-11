import React, {useEffect} from 'react';
import "./style.css";

function Main() {
    
    useEffect(() => {
        let cards = document.querySelectorAll('.card');
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show', entry.isIntersecting);
                if(entry.isIntersecting){
                    observer.unobserve(entry.target);
                }  
            })
        }, {
            threshold : 1,
            // root : 'parent-container' // we can assign observation to a parent scrolling container 
            // rootMargin : "-100px" //-100px to load something 100px after intersection and 100px for load something 100px after intersection
        });

        cards.forEach(c => {
            observer.observe(c)
        })

        let lastCardObserver = new IntersectionObserver(enteries => {
            let lastCard = enteries[0];
            if(!lastCard.isIntersecting) return;
            loadMoreCards();
            lastCardObserver.unobserve(lastCard.target);
            lastCardObserver.observe(document.querySelector('.card:last-child'));
        });

        let elem = document.querySelector('.card:last-child');
        lastCardObserver.observe(elem);

        function loadMoreCards(){
            let cardContainer = document.querySelector(".card-container");

            for(let i=0;i<10;i++){
                let newDiv = document.createElement('div');
                newDiv.classList.add('card');
                newDiv.textContent = "new xcard";
                observer.observe(newDiv);
                cardContainer.appendChild(newDiv);
            }
        }

    },[])
  return (
    <div className='card-container'>
        <div className='card'>This is a first card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a card</div>
        <div className='card'>This is a last card</div>
    </div>
  )
}

export default Main;