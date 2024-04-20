function BlogCover(props){
    return(
        <div className="blogcover">
            <div className="blogcoversign" style={{backgroundColor: `var(--${props.colour})`}}></div>
            <div className="blogcoverborder" style={{border: `0.1vw solid var(--${props.colour})`}}>
                <img className="blogcoverimg" src={props.image} alt="blogImage"/>
                <div className="blogcoverheading">
                    <h1 style={{color: `var(--${props.colour})`}}>Blog Name</h1>
                    <p style={{color: `var(--${props.colour})`}}>@blogger</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCover;