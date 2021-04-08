(() => {
    const detector01 = document.querySelector('#detector-1')
    const detector02 = document.querySelector('#detector-2')

    function handleOrientation(event) {
        console.log(event.absolute);

        var absolute = event.absolute;
        var alpha = event.alpha;
        var beta = event.beta;
        var gamma = event.gamma;

        var p = document.createElement('p')
        p.innerText = gamma * 200
        // document.querySelector("#result").appendChild(p)
        
        if(gamma*15>50 || gamma*15<0){
            detector01.style.bottom = 0
            detector02.style.bottom = 0
        }else{
            detector01.style.bottom = gamma*15+"px"
            detector02.style.bottom = gamma*15+"px"
        }
        if(gamma*15>15 || gamma*15 <0){
            detector01.style.left = 20
            detector02.style.left = 20
        }else{
            detector01.style.left = gamma*15+"px"
            detector02.style.left = gamma*15+"px"
        }
        // detector02.style.transform = 'translate3d(' + gamma * 200 + 'px, 0, 0)'
        // detector01.style.transform = 'translate3d(' + gamma * 200 + 'px, 0, 0)'

    }

    window.addEventListener("deviceorientation", handleOrientation, true);

})();