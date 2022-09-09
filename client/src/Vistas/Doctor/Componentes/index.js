import NavBar from "../../Compartido/Componentes/Header/NavBar";
//import jwt_decode from "jwt-decode";

export default function PanelDoctor (){

    // let id = '6310362ffc13ae315700004c'
  /*   const tokenDoc = localStorage.getItem('auth-token')
    const jwtDoctor = jwt_decode(tokenDoc)
    console.log(jwtDoctor, 'eldecode');
 */
    
    const doc =   {
        "id": "63114ae4fc13ae2bd6000013",
        "name": "Juana Woodfine",
        "specialities": [
           "Medicina Interna",
           "Hematología",
           "Mastología"
        ],
        "license": "5405734926",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "8923 Bellgrove Drive",
        "email": "jwoodfinej@bluehost.com",
        "password": "j5qFFy",
        "phoneNumber": "(514) 1982101",
        "schedule": { "hour": "08:00 - 17:00", "space": 20},
        "checkUpPrice": "$993.44",
        "active": true,
        "rating": 4.1,
        "image": "https://media.istockphoto.com/photos/portrait-of-smiling-female-doctor-wearing-uniform-standing-picture-id1346711310?b=1&k=20&m=1346711310&s=170667a&w=0&h=cMFFAeZUGt-z2GKU84EES1pOznUiYORcSpal62wUAGQ="
      }

      const citas = [
            {
            "id": "6310362ffc13ae3157000032",
            "idDoctor": "63114b27fc13ae1dea000018",
            "idPatient": "630fff54fc13ae7e72000475",
            "date": "9/14/2021",
            "hour": "14:30",
            "additionalComment": "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam",
            "active": false
          },
          {
            "id": "6310362ffc13ae3157000033",
            "idDoctor": "63114b27fc13ae1dea000016",
            "idPatient": "630fff54fc13ae7e72000475",
            "date": "8/21/2022",
            "hour": "16:30",
            "additionalComment": "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est",
            "active": true
          },
          {
            "id": "6310362ffc13ae3157000034",
            "idDoctor": "63114b27fc13ae1dea000013",
            "idPatient": "630fff54fc13ae7e72000477",
            "date": "9/9/2022",
            "hour": "15:30",
            "additionalComment": "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
            "active": false
          },
          {
            "id": "6310362ffc13ae3157000035",
            "idDoctor": "63114b27fc13ae1dea000016",
            "idPatient": "630fff54fc13ae7e72000475",
            "date": "7/24/2022",
            "hour": "08:00",
            "additionalComment": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
            "active": false
          },
      ]


    return (
        <>
       <NavBar/>
        <div className="flex justify-center">
        <div className="w-2/3 bg-[#292F53] mt-10 rounded"> 
        <p className="text-white text-7xl font-poppins  mt-4 ml-4">Hola <span className="text-[#1479FF]">{doc.name.split(' ')[0]}</span> </p>
        <div>
            <img src={doc.image} className=" w-40 h-40 rounded-full object-cover ml-4" alt='foto doc'/>
        </div>
        <form>
            <p className="text-white text-l font-poppins  mt-8 ml-4 mb-4">Registra tu  <span className="text-[#1479FF]">agenda</span> para esta semana: </p>
            <label className="text-white font-poppins  mt-4 ml-4">Fechas: </label>
            <p></p>
            <input type='text' className="ml-4 bg-[#E7EFFD] w-60" placeholder="ej: 2022-09-05 / 2022-09-09"></input>
            <br></br>
            <label className="text-white font-poppins  mt-4 ml-4">Horas:</label>
            <p></p>
            <input type='text'className="ml-4 bg-[#E7EFFD] w-60" placeholder="ej: 08:00 - 17:00"></input>
            <br></br>
            <button className='font-poppins text-white  focus:bg-[#292F53] rounded bg-[#1479FF] w-40 h-10 ml-4 mt-4 mb-4' >Registrar agenda</button>
        </form>
        <section>
            <p className="text-white text-l font-poppins  mt-8 ml-4">Mis <span className="text-[#1479FF]">citas</span> de la semana:</p>
            {citas.map(cita =>{
                return(
                    <div className= " m-2 p-4 font-poppins text-[#1479FF]">
                    <p> Fecha: <span className=" text-white font-raleway">{cita.date}</span></p>
                    <p>Hora: <span className=" text-white font-raleway">{cita.hour}</span> </p>
                    <p>Comentarios del paciente: <span className=" text-white font-raleway">{cita.additionalComment}</span></p>
                    <hr className="mt-7 border-solid border-1 border-[#1479FF]"></hr>
                    </div>
                )
               
            })}

        </section>
        <p className="mb-4"></p>
        </div>
        </div>
        </>
    )
}