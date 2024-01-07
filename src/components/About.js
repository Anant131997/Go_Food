import AboutTeamClass from "./AboutTeamClass";

const About = () => {
    return(
        <div className="m-10 min-h-[55vh]">
            <h1 className="about-heading">About</h1>
            <h3 className="about-description">We are inside About page</h3><br />
            <AboutTeamClass name={"Anant Narayan Singh"}/>
        </div>
    );
};

export default About;