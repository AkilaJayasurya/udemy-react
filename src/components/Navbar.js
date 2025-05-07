// Navbar component

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>

            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" style={{ color: " #030303;" }}></i>
                <input placeholder="Search for anything here Tech , Business , Art.." />

            </div>

            <div class="navbar__s3">
                <p>Courses</p>
                <div class="mylearning">
                    <p>MyLearning</p>
                    <div class="mylearning__popup">
                        <p>You didn't purchase anything</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping" style={{color:" #0a0a0a;"}}></i>
                <i className="fa-solid fa-bell" style={{color:" #030303;"}}></i>
                <i className="fa-solid fa-user" style={{color:" #000000;"}}></i>

            </div>
            <div className="menubar">
                <i className="fa-solid fa-bars"></i>
            </div>

        </div>
    )
}

export default Navbar