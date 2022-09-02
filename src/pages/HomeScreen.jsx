import CategoryCard from "../components/CategoryCard"

const HomeScreen =()=>{



    return(
        <>
        <h3 className="text-danger">Extrem Metal Vinyle Store</h3>
        <div className="container-fluid">
            <div className="row">
               <CategoryCard/>
               <CategoryCard/>
            </div>
        </div>
        </>
    )
}
export default HomeScreen