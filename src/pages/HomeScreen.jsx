import CategoryCard from "../components/CategoryCard"

const HomeScreen =()=>{

    const categoryPool =
     [{id:1,image:"https://picsum.photos/id/237/200/300",title:"Heavy Metal",description:"du text"},
     {id:2,image:"https://picsum.photos/id/232/200/300",title:"Death Metal",description:"autre text"},
     {id:3,image:"https://picsum.photos/id/231/200/300",title:"Grind Core",description:"encore du text"},
     {id:4,image:"https://picsum.photos/id/236/200/300",title:"Industrial",description:"lorem 15"},

    ]
    const categoriesList = categoryPool.map(categorie=><CategoryCard 
    key={categorie.id} 
    image={categorie.image}
    title={categorie.title}
    description={categorie.description}/>)


    return(
        <>
        <div className="container-fluid bg-danger">
        <h3 className="text-dark py-3">Extrem Metal Vinyle Store</h3>
        </div>
        <div className="container-fluid">
            <div className="row">
               {categoriesList}
            </div>
        </div>
        </>
    )
}
export default HomeScreen