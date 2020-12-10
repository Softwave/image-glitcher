import './Canvas.css';
import './Button.css';
import glitch from 'glitch-canvas';


import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {
    // Canvas stuff 
    const canvasRef = useRef(null)
    var imgSrc = useState('http://i.imgur.com/ctg8RaK.png')

    //
    var glitchAmount = useState(0)


    // File stuff 
    const inputFileRef = React.createRef()


    // Button stuff 
    const { name } = props 
    const btnLabel = name
    const cName = "Button-button " + String(btnLabel)

    const handleFileChange = (e) => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')


        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            var canvWidth = 600
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img,0,0);
            }
            img.src = event.target.result;
            imgSrc = event.target.result;
        }
            reader.readAsDataURL(e.target.files[0]);  
    }


    const handleChangeAmount = (e) => {
        console.log(e.target.value)
        glitchAmount = e.target.value
    }

    const clickLoad = () => {
        inputFileRef.current.click()
    }

    const clickGlitch = () => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        glitch({amount: glitchAmount, seed: 25, quality: 46})
            .fromImageData(imageData)
            .toDataURL()
            .then(function(dataURL) { 
                var glitchedImg = new Image()   
                glitchedImg.src = dataURL 

                
                //imgSrc = glitchedImg
                glitchedImg.onload = function() {
                    context.drawImage(glitchedImg, 0, 0, canvas.width, canvas.height)
                }
                
                imgSrc = glitchedImg
                
            });
    }
    
    const redraw = ctx => {
        var canvas = ctx.canvas
        var img = new Image()
        var canvWidth = 600
        img.onload = function() {
            if(img.width>img.height){
                canvas.width = canvWidth
                canvas.height = canvWidth / img.width * img.height
            } else {
                canvas.width = canvWidth / img.height * img.width
                canvas.height = canvWidth
            }   
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
        img.src = imgSrc
    }
  
    return (
        <div>
            <input type="file" ref={inputFileRef} onChange={handleFileChange}></input>
            <h2>Amount</h2>
            <div className="Canvas-slidecontainer">
                <input type="range" min="1" max="100" onChange={handleChangeAmount} defaultValue="0" className="Canvas-slider" id="myRange"></input>
            </div>
            <div className="Canvas-container">
                <canvas className="Canvas-canvas" ref={canvasRef} {...props}/>
            </div>
            <div className="btnContainer">
                <a href="#" onClick={clickLoad} className='Button-button Load Image' name="Load Image">Load Image</a>
                <a href="#" onClick={clickGlitch} className='Button-button Glitch' name="Glitch">Glitch</a>
                <br/><br/><br/>
            </div>
      </div>
    );
}

export default Canvas
