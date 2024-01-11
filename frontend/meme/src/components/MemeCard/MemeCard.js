
import style from "./MemeCard.module.css"

const MemeCard = ({meme}) => {

    const size= {
        width:'200px',
        height:'250px'
    };


return(
    
        <>
          <figure className={style.figure} >
          <img src={""} alt=" Meme img" className={style.image} style={size}/>
            <figcaption className={style.figcaption}>
              <p>
              <span>{meme.createdAt.split("T")[0]}</span>
              </p>
              
            </figcaption>
          </figure>
        </>
      );
    
    
}
export default MemeCard;