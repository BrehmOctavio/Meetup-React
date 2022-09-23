import "../sass/layout.css";
import Title from "../components/Title";
import CardAdd from "../components/CardAdd";


export default function AddNewMeetup(){


    return(
        <div className="div-layout">
            <Title title="Add New Meetup"/>
            <CardAdd/>
        </div>
    )
}