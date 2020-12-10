import './Canvas.css';
import './Button.css';
import glitch from 'glitch-canvas';


import React, { useRef, useState } from 'react'

const Canvas = props => {
    // Canvas stuff 
    const canvasRef = useRef(null)

    //
    var [glitchAmount, setGlitch] = useState(0)


    // File stuff 
    const inputFileRef = React.createRef()

    const handleFileChange = (e) => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')


        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
            reader.readAsDataURL(e.target.files[0]);  
    }


    const handleChangeAmount = (e) => {
        //console.log(e.target.value)
        setGlitch(e.target.value)
        //console.log(glitchAmount)
        //clickGlitch()
        //setState({glitchAmount: e.target.value})
        //glitchAmount = e.target.value
    }

    const clickLoad = () => {
        inputFileRef.current.click()
    }

    const clickGlitch = () => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        var params = { 
            amount: 5,
            quality: 64,
            iterations: parseInt(glitchAmount),
            seed: 25
        }
        console.log(params)
        glitch(params)
            .fromImageData(imageData)
            .toDataURL()
            .then(function(dataURL) { 
                var glitchedImg = new Image()   
                glitchedImg.src = dataURL 

                glitchedImg.onload = function() {
                    context.drawImage(glitchedImg, 0, 0, canvas.width, canvas.height)
                }
                                
            });
    }
  
    return (
        <div>
            <input type="file" ref={inputFileRef} onChange={handleFileChange}></input>
            <h2>Amount</h2>
            <div className="Canvas-slidecontainer">
                <input type="range" min="1" max="99" onChange={handleChangeAmount} defaultValue="0" className="Canvas-slider" id="myRange"></input>
            </div>
            <div className="Canvas-container">
                <canvas className="Canvas-canvas" ref={canvasRef} {...props}/>
            </div>
            <div className="btnContainer">
                <button onClick={clickLoad} className='Button-button Load Image' name="Load Image">Load Image</button>
                <button onClick={clickGlitch} className='Button-button Glitch' name="Glitch">Glitch</button>
                <br/><br/><br/>
            </div>
      </div>
    );
}

export default Canvas
