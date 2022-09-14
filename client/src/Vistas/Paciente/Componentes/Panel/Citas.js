import React from 'react';

const Citas = () => {
let dateJs
let date2 = dateJs.toISOString()
console.log(date2);

let citaPAg = '2022-09-07T00:00:00.000Z'

    return (
        <div>
            <p>Tus citas pendientes</p>
            <p>Tus citas terminadas: 
                {dateJs}
            </p>
            <p>{citaPAg}</p>
        </div>
    );
}

export default Citas;
