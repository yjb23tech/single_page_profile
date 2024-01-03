import ProfileImage from "../public/images/personal_head_shot.jpeg"

const SinglePageProfile = () => {
    return (
        <div>
            <img src={ProfileImage} alt="Joshua Banjo's Headshot Photo" />
            <h1>Hi, my name is Joshua</h1>
            <h2>Fun facts about me:</h2>
            <ul>
                <li>30 Years Old</li>
                <li>Live in London</li>
                <li>Trapper of the Year</li>
            </ul>
            <p>Please connect with me on Linkedin</p>
            <input type="text" placeholder="Enter email..." />
            <button>Join newsletter</button>
        </div>
    )
}

export default SinglePageProfile; 