import "../sass/layout.css";
import Title from "../components/Title";
import Card from "../components/Card";


export default function AllMeetups({ meetups, addToFavorite, deleteToFavorite }){


    return(
            <div className="div-layout">
                <Title title="All Meetups"/>
                {
                    meetups.map((card) => <Card key={card.id} data={card} addToFavorite={addToFavorite} deleteToFavorite={deleteToFavorite}/>)
                }
            </div>
    )
}