import NavBar from './Header/NavBar'
import SearchBar from './Header/SearchBar'
import Banner from './Main/Banner'
import ListDoctors from './TopDoctors/ListDoctors'

export default function Home (){
    return(
        <div className= " h-screen bg-[#E7EFFD] w-screen ">
            <NavBar/>
            <SearchBar/>
            <Banner/>

            <ListDoctors/>
        </div>
    )
}