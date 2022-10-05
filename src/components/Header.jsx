const Header = ({handleNotifications, count}) => {
    return (
        <div className="header">
            <div className="heading">
                <h3>Notifications <span>{count}</span></h3>
            </div>
            <div className="reading">
                <p onClick={handleNotifications}>Mark all as read</p>
            </div>
        </div>
    );
}
 
export default Header;