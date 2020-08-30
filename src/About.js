import React, { Component} from 'react'
import './App.css';
import pic1 from './pic1.JPG'

class About extends Component {
    render(){
        return(
            <>
                <h1>About Me</h1>
                <img class="pic"src ={pic1} alt="picture"/>
                <div>
                    <p>I am Junior Full Stack Developer.</p> 
                    <p>I believe that my detail - oriented personality </p>
                    <p>and creativity are my core strengths while solving</p> 
                    <p>technical problems and building new projects.</p> 
                    <p>Learning new things is definitely what motivates me</p> 
                    <p>to grow and improve to be a better person.</p> 
                </div>
                <h4>Contact me for any jobs related:</h4>
                <p>Philip Yap</p>
                <p>email: p@gmail.com</p>
                <p>phone: 111-111-1111</p>
            </>
        )
    }
}
export default About