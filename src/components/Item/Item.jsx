import "./Item.css";
import {capitalize} from '../../utils/funciones'

const Item = ({name, price, imgUrl}) => {

    const styles = {
        display:"flex",
        flexDirection:"column",
        width: 330,
        height: 500,
        alignItems: "center",
        margin: 20
    }
    
    return(
        <div className={name} style={styles}>
            <h1>{capitalize(name)}</h1>
            <h1>Precio: {price}</h1>
            <img src={imgUrl} style={{width: 300, height: 300}} alt=""/>
        </div>
    )
}

export default Item;