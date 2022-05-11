
const audioClips = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  const audioClips2 = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'shotgun',
      url: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_42c2ce9d86.mp3?filename=shotgun-firing-4-6746.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'stinger',
      url: 'https://cdn.pixabay.com/download/audio/2022/01/07/audio_5aa22f146f.mp3?filename=rclick-13693.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'impact',
      url: 'https://cdn.pixabay.com/download/audio/2022/04/16/audio_f409b11d83.mp3?filename=impact-109588.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Wind-Rapid',
      url: 'https://cdn.pixabay.com/download/audio/2022/03/26/audio_2d81f38953.mp3?filename=rapid-wind-sound-effect-2-108400.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'bing',
      url: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_ee9ac692c2.mp3?filename=scale-e6-14577.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Camera',
      url: 'https://cdn.pixabay.com/download/audio/2022/01/07/audio_3d596edfd7.mp3?filename=camera-13695.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "glass-break",
      url: 'https://cdn.pixabay.com/download/audio/2022/03/16/audio_492840191c.mp3?filename=glass-breaking-93803.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Swosh',
      url: 'https://cdn.pixabay.com/download/audio/2022/04/29/audio_f28098ce3c.mp3?filename=swing-whoosh-110410.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Surprise',
      url: 'https://cdn.pixabay.com/download/audio/2022/03/22/audio_e350ea2393.mp3?filename=surprise-sound-effect-99300.mp3'
    }
  ];
  
                
  const App= () => {
    const [volume,setvolume]=React.useState(1);
    const [Sounds,setSounds]=React.useState(audioClips);
    const [active,setActive]=React.useState(false);
    const [dis,setdis]=React.useState(null);
   
   const toggleSound=()=>{
     if (Sounds===audioClips){
       setSounds(audioClips2);
       setdis('GroupTWO');
       console.log(Sounds);
       setActive(true);
     }
     else{
       
   
      setdis('GroupONE');
       setSounds(audioClips);
       setActive(false);
     }
   }
   const sendDataToParent2 = (e) => { // the callback. Use a better name
    console.log(e);
    setdis(e);
  };
    return (
      
      <div  id="drum-machine"> 
      <h1 className="text-white text-center">Drum-Machine By Zulkaif Ahmed</h1>
      <h2 className="text-white text-center">freecodecamp project</h2>
       <div className="drum">
         
     
        { Sounds.map((clip)=> <Pad  
         key={clip.id} clip={clip}
          volume={volume} 
          sendDataToParent2={sendDataToParent2}/>
          )}
          
        </div>
        <br/>
         <button id="tog" className={`btn btn-primary  ${active && "btn-warning"}`} onClick={toggleSound}>
           Toggle Sounds</button>
    <br/>
        <div id="display"><h2>Display</h2><h1>{dis}</h1></div>
        
  
        <br/>
        <div id="vol">
        <input  className='w-50 ' onChange={(e)=>{setvolume(e.target.value),setdis('volume:'+Math.floor(e.target.value*100))}}   type='range' step='0.01' value={volume} max='1' min='0'/>
        </div>
        
      </div>
      
    );
  }
  const OUTPUT=({clip,sendDataToParent})=>{
  
  const [state,setState]=React.useState(null);
  const handleChange =((e)=> {
    if (e.keyCode === clip.keyCode) {
    setState(clip.id);
   
    sendDataToParent(clip.id);
   
  }
  })
  React.useEffect(()=>{
    document.addEventListener('keydown',handleChange);
        return ()=>{
          document.removeEventListener('keydown',handleChange);
        };
      },[handleChange])
  
  return (<h1 onKeyPress={handleChange} ></h1>);
  }
  const Pad = ({clip,volume,sendDataToParent2}) => {
  const [active,setActive]=React.useState(false);
  
  const [disp,setdisp]=React.useState(null);
  const sendDataToParent = (e) => { // the callback. Use a better name
   
    setdisp(e);
  };
    
  const playSound = React.useCallback(()=> {
    console.log(clip)
    
    setActive(true);
    setTimeout(()=>setActive(false),200);
  
            var a = document.getElementById(clip.keyTrigger);
    a.currentTime=0;
    a.volume=volume;
    a.play();
     sendDataToParent2(clip.id);
  
  },[volume]);
  
  const handleKeyPress = React.useCallback((e)=> {
      if (e.keyCode === clip.keyCode) {
        setActive(true);
        setTimeout(()=>setActive(false),200);
          var a = document.getElementById(clip.keyTrigger);
         // console.log(clip);
        a.volume = volume;
          a.play();
  
        sendDataToParent2(clip.id);
         
      }
      },[playSound])
    
      React.useEffect(()=>{
        document.addEventListener('keydown',handleKeyPress);
        return ()=>{
          document.removeEventListener('keydown',handleKeyPress);
        };
      },[handleKeyPress])
  
   
   
    
  return (<><div 
    onClick={playSound} 
  className={`drum-pad btn btn-primary   ${active && "btn-warning"}`} id={clip.keyCode} >
  <audio className='clip' src={clip.url} id={clip.keyTrigger}>
      {/*<source src={clip.url}  type="audio/mpeg"/>*/} 
  </audio> 
      {clip.keyTrigger}</div>
      <OUTPUT clip={clip} sendDataToParent={sendDataToParent}/></>
      )
  }
  
  const container = document.getElementById('root');
  

  const root = ReactDOM.createRoot(container);
  root.render(<App/>)

  