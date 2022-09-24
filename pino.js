

// document.addEventListener('keypress',function(e){
//     console.log(e.key)
// })

    document.addEventListener('keypress',(e)=>{
        buttonPressed(e.key)
        switch(e.key){
// keyboard main
            case "a": 
                var sound = new Audio('pianoSound/key01.mp3')
                sound.play();
            break;
            case "b": 
            var sound = new Audio('pianoSound/key02.mp3')
            sound.play();
            break;
            case "c": 
            var sound = new Audio('pianoSound/key03.mp3')
            sound.play();
            break;
            case "d": 
            var sound = new Audio('pianoSound/key04.mp3')
            sound.play();
            break;
            case "e": 
            var sound = new Audio('pianoSound/key05.mp3')
            sound.play();
            break;
            case "f": 
            var sound = new Audio('pianoSound/key06.mp3')
            sound.play();
            break;
            case "g": 
            var sound = new Audio('pianoSound/key07.mp3')
            sound.play();
            break;
            case "h": 
            var sound = new Audio('pianoSound/key08.mp3')
            sound.play();
            break;
            case "i": 
            var sound = new Audio('pianoSound/key09.mp3')
            sound.play();
            break;
            case "j": 
            var sound = new Audio('pianoSound/key10.mp3')
            sound.play();
            break;
            case "k": 
            var sound = new Audio('pianoSound/key11.mp3')
            sound.play();
            break;
            case "l": 
            var sound = new Audio('pianoSound/key12.mp3')
            sound.play();
            break;
            case "m": 
            var sound = new Audio('pianoSound/key13.mp3')
            sound.play();
            break;
            case "n": 
            var sound = new Audio('pianoSound/key14.mp3')
            sound.play();
            break;
            case "o": 
            var sound = new Audio('pianoSound/key15.mp3')
            sound.play();
            break;
            case "p": 
            var sound = new Audio('pianoSound/key16.mp3')
            sound.play();
            break;
            case "q": 
            var sound = new Audio('pianoSound/key17.mp3')
            sound.play();
            break;
            case "r": 
            var sound = new Audio('pianoSound/key18.mp3')
            sound.play();
            break;
            case "s": 
            var sound = new Audio('pianoSound/key19.mp3')
            sound.play();
            break;
            case "t": 
            var sound = new Audio('pianoSound/key20.mp3')
            sound.play();
            break;
            case "u": 
            var sound = new Audio('pianoSound/key21.mp3')
            sound.play();
            break;
            case "v": 
            var sound = new Audio('pianoSound/key22.mp3')
            sound.play();
            break;
            case "w": 
            var sound = new Audio('pianoSound/key23.mp3')
            sound.play();
            break;
            case "x": 
            var sound = new Audio('pianoSound/key24.mp3')
            sound.play();
            break;
            case "y": 
            var sound = new Audio('pianoSound/key25.mp3')
            sound.play();
            break;
            case "z": 
           
// ley [pad]
            case "1" :
                var sound = new Audio('drum/drum1.mp3')
                sound.play();break;
            case "2" :
                var sound = new Audio('drum/drum2.wav')
                sound.play();break;
            case "3" :
                var sound = new Audio('drum/drum3.wav')
                sound.play();break;
            case "4" :
                var sound = new Audio('drum/drum4.wav')
                sound.play();break;
            case "5" :
                var sound = new Audio('drum/drum5.wav')
                sound.play();break;
            case "6" :
                var sound = new Audio('drum/drum6.wav')
                sound.play();break;
            case "7" :
                var sound = new Audio('drum/drum7.wav')
                sound.play();break;
            case "8" :
                var sound = new Audio('drum/drum3.wav')
                sound.play();break;
            case "9" :
                var sound = new Audio('drum/drum5.wav')
                sound.play();break;




            default:
                alert("Please press A - Z ")
        }
    }) 
function buttonPressed(current){
    var active = document.querySelector('.'+ current)
    active.classList.add('pressed')
    setTimeout(()=>{
    active.classList.remove('pressed')
        
    },100)

}
