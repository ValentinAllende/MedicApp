
const StarDetail = ({stars}) => {
  console.log(stars);
    return (
      <div>
        {[...Array(Math.round(stars))].map((_, index) => {
          index += 1;
          return(<span key ={index}>&#9733;</span>)
        })}
      </div>
    );
  };

export default StarDetail