
// import style from "./MemeCard.module.css"
// // import meme1 from "../../assets/Images/meme1.jpg"
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const MemeCard = ({meme}) => {

//     const [memes, setMemes] = useEffect([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() =>{
    
//       const fetchMemes = async () => {
//         try {
//             const response = await axios.get('/api/memes'); // Assuming your backend server is running on the same host
//             setMemes(response.data.data);
//             setIsLoading(false);
//         } catch (error) {
//             console.error('Error fetching memes:', error);
//             setIsLoading(false);
//         }
//     };

//     fetchMemes();
//     },[]);
//     const size= {
//         width:'200px',
//         height:'250px'
//     };


// return(
    
//         <>
//           <div className={style.mainCards}>
//             {isLoading ? (
//                 <div className={style.loaderContainer}>
//                     <div className={style.loader}></div>
//                     <div className={style.loaderText}>Loading...</div>
//                 </div>
//             ) : (
//                 memes.map((meme) => (
//                     <figure className={style.figure} key={meme.id}>
//                         <img src={meme.image} alt="Meme img" className={style.image} style={size} />
//                         <figcaption className={style.figcaption}>
//                             <p>
//                                 <span>{meme.createdAt.split("T")[0]}</span>
//                             </p>
//                             <p>
//                               {meme.caption}
//                             </p>
//                         </figcaption>
//                     </figure>
//                 ))
//             )}
//         </div>
//         </>
//       );
    
    
// }
// export default MemeCard;




import style from "./MemeCard.module.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const MemeCard = () => {
    const [memes, setMemes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMemes = async () => {
            try {
                const response = await axios.get('/api/memes');
                setMemes(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching memes:', error);
                setIsLoading(false);
            }
        };

        fetchMemes();
    }, []); 
    const size = {
        width: '200px',
        height: '250px'
    };

    return (
        <>
            <div className={style.mainCards}>
                {isLoading ? (
                    <div className={style.loaderContainer}>
                        <div className={style.loader}></div>
                        <div className={style.loaderText}>Loading...</div>
                    </div>
                ) : (
                    memes.map((meme) => (
                        <figure className={style.figure} key={meme.id}>
                            <img src={meme.image} alt="Meme img" className={style.image} style={size} />
                            <figcaption className={style.figcaption}>
                                <p>
                                    <span>{meme.createdAt.split("T")[0]}</span>
                                </p>
                                <p>{meme.caption}</p> {/* Display the caption */}
                            </figcaption>
                        </figure>
                    ))
                )}
            </div>
        </>
    );
};

export default MemeCard;
