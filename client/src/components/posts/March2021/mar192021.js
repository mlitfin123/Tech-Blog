import React from 'react';
import { Link } from 'react-router-dom';

const Mar192021= () => {
    document.title = "Creating Your First Loop with JavaScript"
    return (
        <main >
        <div className="jumbotron p-4 p-md-2 text-white rounded bg-dark">
            <h1>Creating Your First Loop with JavaScript</h1>
        </div>
        <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
            <h4 className="authorName"><Link to={"./about"} className="authorName">Mark Litfin</Link></h4>
            <h5 className="blogTitle">March 19, 2021</h5>
        </div>
                <div className="col">
                </div>
            </div>
        <hr/>
            <div className="row">
                <div className="col">
                </div>
                <div className="col-11">
                <p className="blogBody">
                    When I first began learning programming and even as I continue to work my way through various programming projects I've constantly 
                    considered loops to be one of the most confusing things I've had to deal with. Loops confused me so much that I did everything I could to avoid 
                    them for the first few projects I worked on. However the more I learned to understand them I've realized how much simpler they really do make your 
                    life as a developer. So if you are similar to how I was and are confused so much by loops that you keep deciding to manually copy paste the same 
                    lines over and over rather than struggle with syntax errors on yet another loop then I am here to do my best to explain them in a way 
                    that I could not figure out when doing my own research.
                    <br></br>
                    <br></br>
                    The first thing to understand is that javascript supports multiple different types of loops. Personally I have stuck mostly with your 
                    basic "for" loop and "while" loop, however javascript also supports "for/in", "for/of", and "do/while" loops. When I first learned the 
                    "for" loop it's all I wanted to stick with. While you might have unique situations that make certain types of loops easier to use than others 
                    each one essentially does the same thing, and that is to repeat a specific action over and over, but in my opinion they each have its own 
                    learning curve and I know I had to change my train of thought for each different type. Just starting off I think it's best to stick with the "for", 
                    "while", and "do/while" loops which is why I'm sticking with just those 3 to talk about in this current article for the time being.
                    <br></br>
                    <br></br>
                    <h4 className="blog-headers">For Loop</h4>
                    It comes as no surprise that my favorite loop to use is the first one I learned. I feel the most comfortable with the "for" loop. Here is an 
                    example: 
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\mar19\for_loop.PNG" alt="for loop" width="500"></img>
                    <br></br>
                    <br></br>
                    The "for" loop is a statement that simply executes the code until a specified condition equals to false. To create this loop you will declare a 
                    variable which can have any name but in development the normal practice is to write it as "i" as shown in the example. We will then give this variable a value "0", this is the number 
                    the loop will begin at. The next part of the loop specifies the condition to equal the loop to false using "&lt;" or "&gt;". 
                    Take the variable "i" that you just declared and add the number of times you want to iterate through the loop before stopping. 
                    This number will be tracked throughout each iteration and can be a number you manually add or most often it will be the length of an array of some sort. 
                    The "&lt;" sign will specify that the loop will continually count up from the number of the declared variable value of "0" until it is no longer 
                    less than the number specified. The next part of the loop is the variable name "i" with an additional "++" which instructs the variable to increment by 1 
                    each time the loop runs. The last part of a "for" loop is the function you want to run each time the loop iterates through. In this case the loop 
                    simply creates a console.log that increments the number each time.
                    <h4 className="blog-headers">While Loop</h4>
                    The "while" loop is a statement that continually executes as long a a specified condition is true. Here is an example:
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\mar19\while_loop.PNG" alt="while loop" width="200"></img>
                    <br></br>
                    <br></br>
                    As shown in the example, you first will have a declared variable to use in the "while" loop. In this particular example you have 2 variables, each were given the 
                    value of "0". After declaring these variables you will then create the loop which in this example means while "n" is less than "5" it will continue to run. The next 
                    section of the loop is "n++" which means that each time the loop runs the value of "n" will increase by one. The last section of this loop is "x += n" which means the 
                    value of "x" will be increased by the value of "n" each time through the loop.
                    <h4 className="blog-headers">Do/While Loop</h4>
                    The "do...while" loop is very similar to the previous loops talked about. This loop will continue doing a specified action while the specified condition is true, but will 
                    break once it becomes false. Take a look at the following example:
                    <br></br>
                    <br></br>
                    <img src="\assets\images\posts\mar19\do_while_loop.PNG" alt="do/while loop" width="250"></img>
                    <br></br>
                    <br></br>
                    To begin this loop the variable "i" is declared with a value of "0". The "do" portion of the loop simply tells the value of "i" to increment by 1 each time through the loop and 
                    console.log the current number according to which time through the loop it is. This will keep running as long as the number is less than 5. This type of loop is useful when trying 
                    to execute multiple actions based on a single condition.
                    <h4 className="blog-headers">Break Statement</h4>
                    Everything I have talked about with loops before now has been taking the assumption that your loop will eventually reach a point that the condition you specified is false. This is 
                    very important to avoid an infinite loop. However there is another way you can terminate your loop within the code you have written. By entering a "break" statement as a part of one of 
                    your conditions the loop will terminate once it is true. An example would be if you have the loop running continuously or if you have a loop running to a specific number but want to stop it 
                    early on another condition you can write an "if" something equals to true then "break" within the loop.
                    <h4 className="blog-headers">Continue Statement</h4>
                    In contrast to the "break" statement there also exists in JavaScript the "continue" statement. This statement was honestly a little confusing to me at first because of the name it was given, 
                    but that's why I wanted to include it here. The "continue" statement can be used to restart a loop that is already in progress. For example as the loop is counting numbers you can add an "if" 
                    statement to have the loop restart once the variable equals 3. When I first came across this statement I kept thinking in my mind why is this needed? The loop is already running, why would you 
                    need to continue it? This is now how I remember this statement, just that it didn't make sense to me and I had to pause and really think about what this is doing.
                </p>
                </div>
                <div className="col">
                </div>
            </div>
        </main>
    )
}
export default Mar192021;