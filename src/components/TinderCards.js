import React, { useState } from 'react';
import "../styles/TinderCards.scss";
import TinderCard from "react-tinder-card"


function TinderCards() {
    const [cards, setCards] = useState(
        [
            {
                name: "Puma",
                url: "https://cdn.hswstatic.com/gif/mountain-lion.jpg"
            },
            {
                name: "Leopard",
                url: "https://d2ru2mvuh5wx24.cloudfront.net/experience_bootstrap/1154/hump_day__1920x864.jpg"
            },
            {
                name: "Cheetah",
                url: "https://nationalzoo.si.edu/sites/default/files/animals/cheetah-003.jpg"
            },
            {
                name: "Snow-leopard",
                url: "https://ca-times.brightspotcdn.com/dims4/default/dc1d8bd/2147483647/strip/true/crop/1280x854+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7b%2F4a%2F79a53cd547508cac8c01ec16017a%2Fnaphisa.jpg"
            },
            {
                name: "Lynx",
                url: "https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Lynx-photo.jpg"
            },
            {
                name: "Jaguar",
                url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F28944fd6-1134-11ea-b931-e6147e389878.jpg?crop=1500%2C1000%2C0%2C0"
            },
            {
                name: "Lion",
                url: "https://www.worldatlas.com/r/w1200/upload/7a/16/cf/shutterstock-161967581.jpg"
            },
            {
                name: "Tiger",
                url: "https://files.worldwildlife.org/wwfcmsprod/images/Sumatran_Tiger_New_Hero_Image/story_full_width/2tlod51659_Sumatran_Tiger_Hero.jpg"
            }
        ]
    );
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }
    return (
        <div className="tinder-cards">
            <div>
                {cards.map((card, index) =>
                (
                    <TinderCard
                        className="swipe"
                        key={index}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, card.name)}
                        onCardLeftScreen={() => outOfFrame(card.name)}
                    >
                        <div className="card" style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + card.url + ")" }}>
                            <h1 className="cardName">{card.name}</h1>
                        </div>

                    </TinderCard>

                ))}
            </div>
        </div>
    )
}

export default TinderCards
