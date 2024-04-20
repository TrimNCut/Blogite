import BlogCover from "../components/blogcover";
import favicon from '../images/blogcoverimg.png';

function Popular(){
    return(
        <div className="popular">
            <div className="title">
                <h1 className="mainhead">Popular</h1>
                <hr className="underline"/>
            </div>
            <BlogCover colour="black" image={favicon}/>
        </div>
    )   
}

export default Popular;