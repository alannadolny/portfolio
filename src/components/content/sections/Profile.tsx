import profileImg from "../../../assets/me.png";

const Profile = () => {
  return (
    <div id="profile">
      <div id="profile-left-column">
        <div>
          <div>Hey There,</div>
          <div>I am Alan</div>
        </div>
        <div id="email">alannadolnyy@gmail.com</div>
      </div>
      <div>
        <img src={profileImg} alt="profile image" />
      </div>
      <div id="profile-right-column">
        <div className="right-info">
          <span>3</span>
          <span> years experience</span>
        </div>
        <div className="right-info">
          <span>5</span>
          <span>known technologies</span>
        </div>
        <div className="right-info">
          <span>20</span>
          <span>projects finished (GitHub)</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
