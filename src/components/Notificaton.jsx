const Notification = (props) => {
    return (
        <div className={!props.read ? "notification unread" : "notification"}>
            <div className="pfp-wrapper">
                <img src={props.pfp} alt="profile-icon" />
            </div>
            <div className="details-wrapper">
                <div>
                    <p><strong className="name"> {props.name} </strong> {props.type} <strong className="detail"> {props.detail} </strong> <span className="unread">{!props.read ? "•" : ""}</span> </p>
                    <p className="time"> {props.time} </p>
                    {props.message && (<div className="message">
                        <p>{props.message}</p>
                    </div>)}
                </div>
                {props.picture && (<div>
                    <img src={props.picture} alt="picture" className="picture" />
                </div>)}
            </div>
        </div>
    );
}
 
export default Notification;