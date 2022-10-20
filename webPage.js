import'../App.css';
function WebPage() {
    return (

    <div id="pageContainer">
        <div id="pageHeader">
            <h1>Zain Khan</h1>
            <h2>Class of 2024</h2>             
        </div>
        <div id="horizontalCardsContainer">
            <div id="profileImage">
                    <img>src="zainKhanProfilePic.jpeg" width="500" height="500" alt="Zain Pfp"</img> 
            </div>
            <div id="aboutMeContainer">
                <div className='paragraphText'>
                    <p>Hi! My name is Zain Khan, and I am a junior studying Computer Science in SEAS!
                    My hobbies include the following:
                    </p>
                </div>
                <div className='paragraphText'>
                    <ul>
                        <li>Working out</li>
                        <li>Playing chess</li>
                        <li>Board/card games</li>
                        <li>Watching TV</li>
                    </ul> 
                </div>
                <div>
                    <p> 
                        <a href="https://github.com/zain6khan">GitHub</a>   
                        <a href="https://www.linkedin.com/in/zain-khan-upenncs/">LinkedIn</a>   
                        <a href="https://www.instagram.com/zain.khan.6/">Instagram</a>
                    </p>   
                </div>
            </div>
        </div>
    </div>

    );
}

export default WebPage;