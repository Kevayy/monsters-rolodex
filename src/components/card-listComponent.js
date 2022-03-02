import Card from "./cardComponent";
import '.././card-list.css'

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return (
                <Card monster={monster} />
            )
        })}
    </div>
);

export default CardList;