import "../sass/cardAdd.css";


export default function CardAdd(){

const inputStyle ={
    border: "none",
}

    return(
        <div className="card-add">
            <p className="title">Meetup Title</p>
            <input className="input-title" type="text" required/>
            <p className="title">Meetup Image</p>
            <input className="input-title" style={inputStyle} type="file" required/>
            <p className="title">Address</p>
            <input className="input-title" type="text" required/>
            <p className="title">Description</p>
            <input className="input-description" type="text" required/>
            <div className="div-btn">
                <button className="btn-add-meetup">Add Meetup</button>
            </div>
        </div>
    )
}