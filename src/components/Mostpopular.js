import p1 from "../assets/images/p1.jpg"
import p2 from "../assets/images/p2.jpg"
import p3 from "../assets/images/p3.jpg"
import p4 from "../assets/images/p4.jpg"

//most popular 

function Mostpopular()
{
    return(
        <div className="popular">
        <h1>Most Popular</h1>
        <p>Pick the best fit</p>
        <div className="popular__container">
            <div className="popular__coursecard">
                <img src={p1} alt=""/>
                <h3>2023 Python Data Visualisazion Masterclass</h3>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹499 <del>999</del></p>
            </div>
            <div className="popular__coursecard">
                <img src={p2} alt=""/>
                <h3>Web Development</h3>
                <p>Boot camp</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹499 <del>999</del></p>
            </div>
            <div className="popular__coursecard">
                <img src={p3} alt=""/>
                <h3>2023 Python Data Visualisazion Masterclass</h3>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹499 <del>999</del></p>
            </div>
            <div className="popular__coursecard">
                <img src={p4} alt=""/>
                <h3>UI/UX designwith figma</h3>
                <p>col steele</p>
                <p>4.8⭐⭐⭐⭐</p>
                <p>₹499 <del>999</del></p>
            </div>
         
        </div>
    </div>
    )
}

export default Mostpopular