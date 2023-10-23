import projectOne  from "../assets/project-1.png";
import projectTwo  from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1: {
        title: "ADARTZ-WEBSITE",
        image: projectOne,
        description: (
            <>
                <p>
                ADARTZ is an artist-centric e-commerce platform, 
                offering a vibrant online marketplace for creators to showcase and sell their unique artworks.
                </p>
            </>
        ),
        github: "https://github.com/ADARTZ",
        demo: "https://www.instagram.com/shallow_attraction/"
    },
    2: {
        title: "Currency Converter",
        image: projectTwo,
        description: (
            <>
                <p>
                Introducing my custom currency converter - a user-friendly solution 
                I've created to simplify currency conversion with live exchange rate updates.
                </p>
            </>
        ),
        github: "https://github.com/ADARTZ",
        demo: "https://adcurrencyconverter.netlify.app/"
    },
    3: {
        title: "My-Game",
        image: projectThree,
        description: (
            <>
                <p>
                A word guessing game challenges players to uncover a hidden word or phrase through clues and deduction, 
                offering a stimulating and entertaining linguistic challenge.
                </p>
            </>
        ),
        github: "https://github.com/ADARTZ",
        demo: "https://adguessgame.netlify.app/"
    },
};

export default projects;