import java from "../assets/images/java.jpg"
import HTML from "../assets/images/HTML.jpg"
import AI from "../assets/images/AI.jpg"
import CODE from "../assets/images/CODE.jpg"


//recommend section

function Recommend() {
    return (
        <div className="recommended">
            <h1>Recommended for you</h1>
            <p>Pick the Best Fit</p>

            <div className="recommended__container">

                <div className="coursecard">
                    <img src={java} alt=""/>
                    <h3>2025 JAVA course from scratch</h3>
                    <p>col steele</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>₹499 <del>999</del></p>
                </div>
                <div className="coursecard">
                    <img src={HTML} alt=""/>
                    <h3>2025 Artificial Intelligence </h3>
                    <p>For Future</p>
                    <p>4.1⭐⭐⭐⭐</p>
                    <p>₹499 <del>999</del></p>
                </div>
                <div className="coursecard">
                    <img src={AI} alt=""/>
                    <h3>Programming Languages</h3>
                    <p>Training</p>
                    <p>3.5⭐⭐⭐</p>
                    <p>₹499 <del>999</del></p>
                </div>
                <div class="coursecard">
                    <img src={CODE} alt=""/>
                    <h3>Web Development</h3>
                    <p>Boot Camp</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>₹499 <del>999</del></p>
                </div>
              
            </div>

        </div>
    )
}

export default Recommend