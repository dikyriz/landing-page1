import './css/about.css';

export default function About () {
    return (
        <section className="section-about" >
            <a className='anchor' id="about"/>
            <div className = "about-item-header" >
                <h1 className = "about-title">&#8722; About Me &#8722;</h1>
                <p className = "about-description" >
                Fuelled by a passion
                for designing compelling products,
                I have a deep desire to excel and continuously improve in my work. 
                <span className = "about-description-child" > I enjoy solving problems with clean scalable solutions.I have a genuine passion
                for inspiring design.I have a strong foundation in graphic and interactive design,
                and interest in use centred branding and visual systems, understanding their potential within digital spaces. 
                </span> 
                </p> 
            </div>

            <div className = "about-item" >
                <h1 className = "about-item-title"> 9 <span className = "about-item-description" > Years of experience </span></h1>
                <h1 className = "about-item-title" > 123 <span className = "about-item-description" > Happy clients </span></h1>
            </div>
            <div className = "about-item" >
                <h1 className = "about-item-title" > 432 <span className = "about-item-description" > Complete projects </span> </h1>
                <h1 className = "about-item-title" > 50 <span className = "about-item-description" > Innovations </span></h1> 
            </div>             

        </section>
    );
}