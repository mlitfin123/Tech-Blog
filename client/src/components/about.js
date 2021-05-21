import React from 'react';

const About = () => {
    document.title = "Fit-to-Tech"
    return (
        <main>
        <div class="jumbotron p-4 p-md-2 text-white rounded bg-dark">
            <h1>About Me</h1>
        </div>
        <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
                <div class="nav justify-content-center">
            <ul>
                <a className="links" href="https://github.com/mlitfin123" target="_blank" rel="noreferrer">GitHub</a>
                <a className="links" href="https://www.instagram.com/marklifting/" target="_blank" rel="noreferrer">Instagram</a>
                <a className="links" href="https://www.facebook.com/mark.litfin5" target="_blank" rel="noreferrer">Facebook</a>
                <a className="links" href="https://www.linkedin.com/in/mark-litfin-b132bb67/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="links" href="https://marksfolio.herokuapp.com/" target="_blank" rel="noreferrer">Portfolio</a>
            </ul>
            </div>
            </div>
                <div className="col">
                </div>
            </div>
        <hr/>
            <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
        <p className="blogBody"> My name is Mark Litfin. I am an IT professional and upcoming Software Developer. 
            My personal and professional journey has brought me through many different avenues to get to this point. 
            When I was younger I had strong interests in getting into computer programming, 
            mainly for game development, after taking one computer programming class in high school 
            in which I struggled I decided IT was not the career for me. Now that I look back at it, 
            I realize the root of my struggles had to do mostly with my lack of work ethic and commitment 
            to learning rather than my lack of interest and the difficulty of the subject matter. Anyways 
            I had another strong interest at the same time, and this was sports and fitness. 
            <br></br><br></br>I ended up gravitating towards this hobby as I got older and into college age which led me 
            to major in Exercise Science as my first degree. I ended up obtaining my Bachelor's in Exercise Science along with 
            2 trainer certifications 
            in health and fitness, but after pursuing success this field for a few years I realized I didn't 
            enjoy certain aspects of it and decided I would much rather keep sports and exercise a hobby. This 
            is when I went back to school to pursue a second degree in IT.<br></br>I was so far out of touch 
            with the technology field that I had no idea which direction to pursue so I started asking 
            others who were already in the field. The top answer I got was to pursue Cybersecurity, so that's what I did. 
            I got my Bachelor's in Computer Networking and Cybersecurity from the University of Maryland University College(UMUC)
            and then went and obtained my Certified Ethical Hacker(CEH), Network+, and Security+ certifications.
            I was able to find my first job in the field about 3 months before finishing my degree, this was a software testing position
            that had limited technical requirements, but it was still a job in the field so I was happy.<br></br><br></br>
            Now that I was in the field I got to see what it was really like. I attempted a couple times to get into Cybersecurity but had no real luck without cyber experience.
            One of the main requirements a lot of Cyber positions I was interested in was scripting or coding experience, which essentially meant I needed to learn a programming language.
            So I set out to teach myself to program in order to eventually obtain a Cybersecurity position. I started looking at tutorials, taking free online classes,
            and even got to the point that I started building my own applications. This made me realize I enjoyed building things more than securing or breaking into them
            but I was still having trouble taking the next step.<br></br><br></br>
            I taught myself to build a website, I built 2 applications using python, and I built a game using C#. But all of these took a long time to figure out
            the simplest of tasks so I decided to take the plunge and enter a coding bootcamp to take the next step in my development knowledge.
            So I ended up entering a 6 month long coding bootcamp with a focus on web development which has brought me to where I am today, the current owner of Fit-to-Tech Technologies.
            I created this website as a part of my venture to continue with my development aspirations over the long term and to share the knowledge I aquire along the way. It's a process that I expect to just
            continue to grow from here.</p><br></br>
        <img className="selfIMG" src="assets/images/Arcade.jpg" alt="Me" width="300" height="400"></img>
        <img className="selfIMG" src="assets/images/selfie.jpg" alt="Me" width="220" height="400"></img>
            </div>
                <div className="col">
                </div>
            </div>
        </main>
    )
}
export default About;