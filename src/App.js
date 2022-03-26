import { useEffect, useState } from 'react';
import './App.css'
import Card from './Component/oneCard'
import Timer from './Component/Timer';


const cardImages= [
    {"src":"/img/shubham-dhage-kUptPYLCnbk-unsplash.jpg", matched: false},
    {"src": "/img/content-pixie-SHAXItPqwxo-unsplash.jpg",matched: false}, 
    {"src":"/img/afif-kusuma-eTMtdh85TOk-unsplash.jpg", matched: false},
    {"src":"/img/milad-fakurian-E8Ufcyxz514-unsplash.jpg", matched: false}, 
    {"src":"/img/milad-fakurian-PGdW_bHDbpI-unsplash.jpg", matched: false},
    {"src":"/img/shubham-dhage-R5A_YlcSJwA-unsplash.jpg", matched: false},               

  //  each image is an object and the cards array are const would not need to change so it ok to create out



]
//shuffle cards will duplicate each once and it will randomise cards.



function App() {
  const [cards, setCards] = useState([])
//  set cards to be used 
  const[turns, setTurns] = useState(0)
  // this creates the choices that the user would make
  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)
  const[disabled, setDisabled] = useState(false)
  const shuffleCards = () => {
    setDisabled(false);
      const shuffledCards = [...cardImages, ...cardImages] 
      //  Card images are placed in the cards array and are duplicated
      .sort(()=>Math.random() -0.5)              // sorts the cards randomly
      .map((card)=>({...card, id  :Math.random() }))     //map through the card array randomizes the id to form a new array of cards
      // switches cards
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)

      //update shuffled cards
        setTurns(0)
        
  } 
  
      // handle choices which is either card one or two 
      const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
      }
      
        useEffect(() => {
          shuffleCards()
        }, [])
      //compare 2 selected cards
      useEffect(() => {
        if (choiceOne && choiceTwo) {
          setDisabled(true);
          if (choiceOne.src === choiceTwo.src) {
            setCards(prevCards => {
              return prevCards.map((card) => {
                if (card.src === choiceOne.src) {
                  return {
                    ...card,
                    matched: true
                  }
                } else {
                  return card;
                }
              })
            })
            resetTurn();
          } else {
            setTimeout(() => resetTurn(), 1000);
          }
        }
      }, [choiceOne, choiceTwo])

      // reset choices and increase number of turns
      const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
      }

      const disableGame = () => {
         setDisabled(true);
         console.log(disabled)
         
         
       }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={()=>{window.location.reload()}}>New Game</button>
      
      <div className="grid">
        {cards.map((card)=>(
        <Card 
        key = {card.id}
        card = {card}
        handleChoice = {handleChoice}
        cardFlipped = {card === choiceOne||card === choiceTwo ||card.matched}
        disabled={disabled}
        />
        ))}
      </div>
                  <Timer setDisabled={disableGame} disabled={disabled} min={1} sec={0} />

       <p>Turns:{turns}</p>

    </div>
    


  );
     }
        
           
export default App