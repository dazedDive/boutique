

const CategoryCard =({title,description,image})=>{


    return(
        <>
        <div className="col-6 col-md-3">
        <div className="card shadow p-3 mb-5 bg-body rounded">
        <img src={image} class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        </div>
  </div>
</div>
        </>
    )
}

export default CategoryCard