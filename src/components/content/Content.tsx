import Profile from "./sections/Profile.tsx";
import './content.scss';
import Education from "./sections/Education.tsx";
import Experience from "./sections/Experience.tsx";

const Content = () => {
    return (
        <div id="content">
            <Profile />
            <Education />
            <Experience />
        </div>
    )
}

export default Content;
