import profileImg from '../../../assets/me.png';

const Profile = () => {
    return (
        <div id="profile">
            <img src={profileImg} alt="profile image"/>
            <div id="right-profile">
                <div>
                    <div>Hey There,</div>
                    <div>I am Alan</div>
                </div>
                <div id="email">
                    alannadolnyy@gmail.com
                </div>
                <div id="experience">
                    <span>3</span>
                    <span> years experience</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;