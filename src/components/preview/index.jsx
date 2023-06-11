import React, { useEffect, useRef, useState } from 'react';
import CatSprite from './cat.svg';

const Preview = () => {
  const canvasRef = useRef(null);
  const spriteRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState("");
  const [showSprite, setShowSprite] = useState(true);


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Load and render the image sprite
    const spriteImage = new Image();
    spriteImage.src = CatSprite;
    spriteImage.onload = () => {
      spriteRef.current = spriteImage;
      const initialOffsetX = canvas.width / 2 - spriteImage.width / 2;
      const initialOffsetY = canvas.height / 2 - spriteImage.height / 2;
      setOffsetX(initialOffsetX);
      setOffsetY(initialOffsetY);
      context.drawImage(spriteImage, initialOffsetX, initialOffsetY); // Render the sprite at initial position
    };






    return () => {

    };

  }, []);


  useEffect(() => {

    const handleCustomEvent = (event) => {
      const { detail } = event;
      if (detail.type === "MoveSteps") {
        setOffsetX((prevOffsetX) => {
          return prevOffsetX + (detail.value * 5)
        });
      }
      else if (detail.type === "RotateClockwise") {
        setRotation((prevRotation) => {
          return prevRotation + detail.value
        });
      }
      else if (detail.type === "RotateAntiClockwise") {
        setRotation((prevRotation) => {
          return prevRotation - detail.value
        });
      }
      else if (detail.type === "GoToPosition") {
        setOffsetX(detail.value.x)
        setOffsetY(detail.value.y)
      }
      else if (detail.type === "SayHello") {
        setToast(detail.value)
        showToastMessage()
      }
      else if (detail.type === "Think") {
        setToast(detail.value)
        showToastMessage()
      }
      else if (detail.type === "Show") {
        setShowSprite(true)
      }
      else if (detail.type === "Hide") {
        setShowSprite(false)
      }
    }


    window.addEventListener('customEvent', handleCustomEvent);

    return () => {
      window.removeEventListener('customEvent', handleCustomEvent);
    }
  }, [])


  useEffect(() => {

    if (!canvasRef.current || !spriteRef.current) {
      return
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const animate = () => {
      context.clearRect(0, 0, canvas?.width ?? 500, canvas.height ?? 500);
      context.save(); // Save the current context state
      if (showSprite) {
        context.translate(offsetX, offsetY);
        context.rotate((rotation * Math.PI) / 180);
        context.drawImage(
          spriteRef.current,
          -spriteRef.current.width / 2,
          -spriteRef.current.height / 2
        );
      }// Render the sprite at the translated and rotated position
      context.restore(); // Restore the saved context state
      if (showToast && showSprite) {
        context.fillStyle = '#fff';
        const toastWidth = 120;
        const toastHeight = 30;
        const toastX = offsetX - toastWidth / 2;
        const toastY = offsetY - spriteRef.current.height / 2 - toastHeight - 10;
        context.fillRect(toastX, toastY, toastWidth, toastHeight);
        context.fillStyle = '#000';
        context.font = '14px Arial';
        context.fillText(toast, toastX + 10, toastY + 20);
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isDragging, offsetX, offsetY, rotation, showToast, toast, showSprite]);

  const handleMouseDown = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the sprite was clicked
    if (
      mouseX >= offsetX &&
      mouseX <= offsetX + spriteRef.current.width &&
      mouseY >= offsetY &&
      mouseY <= offsetY + spriteRef.current.height
    ) {
      setIsDragging(true);
      setOffsetX(mouseX - offsetX);
      setOffsetY(mouseY - offsetY);
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Calculate the new sprite position based on the mouse movement
      const newOffsetX = mouseX - offsetX;
      const newOffsetY = mouseY - offsetY;

      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // const moveSpriteLeft = () => {
  //   setOffsetX((prevOffsetX) => prevOffsetX - 10
  //   );
  // };

  // const moveSpriteRight = () => {
  //   setOffsetX((prevOffsetX) => prevOffsetX + 10);
  // };

  // const rotateSprite = () => {
  //   setRotation((prevRotation) => prevRotation + 45); // Increase the rotation angle by 45 degrees
  // };

  const showToastMessage = () => {
    setShowToast(true);

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
      setToast("")
    }, 3000);
  };


  return (
    <div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          border: '1px solid black',
          background: 'white',
        }}
      />
      {/* <div>
        <button onClick={moveSpriteLeft}>Move Left</button>
        <button onClick={moveSpriteRight}>Move Right</button>
        <button onClick={rotateSprite}>Rotate</button>
        <button onClick={showToastMessage}>Show Toast</button>
      </div> */}
    </div>
  );
};

export default Preview;
