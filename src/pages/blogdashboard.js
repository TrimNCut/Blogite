import favicon from '../images/favicon.png';

function BlogDashboard(){
    return(
        <div className="blogdashcon">
            <div className="blogdashnav">
                <img src={favicon} alt="logo" />
                <select name="fonts">
                    <option value="poppins">Poppins</option>
                    <option value="timesnewroman">Times New Roman</option>
                </select>
            </div>
            <div className="blogdashworkspace">

            </div>
            <div className="blogdashfoot"></div>
        </div>
    )
}

export default BlogDashboard;