
const StarDetail = ({stars}) => {
  console.log(stars, 'lo que llega por stars');
    return (
      <div  >
        {[...Array(stars)].map((_, index) => {
          index += 1;
          return(<span key ={index}>&#9733;</span>)
        })}
      </div>
    );
  };

export default StarDetail