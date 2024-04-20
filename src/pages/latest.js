import BlogCover from "../components/blogcover";
import favicon from '../images/blogcoverimg.png';

function Latest(){
    return(
        <div className="latest">
            <div className="title">
                <h1 className="mainhead">Latest</h1>
                <hr className="underline"/>
            </div>
            <BlogCover colour="black" image={favicon}/>
            <BlogCover colour="black" image={favicon}/>
            <BlogCover colour="black" image={favicon}/>
            <BlogCover colour="black" image={favicon}/>
            <BlogCover colour="black" image={favicon}/>
            <BlogCover colour="black" image={favicon}/>
            <BlogCover colour="black" image={favicon}/>
            <BlogCover colour="black" image={favicon}/>
        </div>
    )
}

export default Latest;