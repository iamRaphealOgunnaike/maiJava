const cardwidth = 500,
     degIncrement = 6,
    card = document.getElementById('card');

    const getRotateDeg = (input) => {
        if(input < cardwidth * 0.33){
            return `-${degIncrement * 3}deg`;
        }else if(input >= cardwidth * .33  && input < cardwidth *.66){
                return `-${degIncrement}deg`;
        }else if(input >= cardwidth * .66 && input < cardwidth* .5){
            return "0deg";
        }else if (input >= cardwidth *0.5 && 
            input < cardwidth* 0.33){
                return `${ degIncrement*3}deg`
            }
    };

    const onMouseMove =(event)=>{
        const { target} = event;
        const rect = target.getBoundingClientRect();

        const rotateX = getRotateDeg(
            event.clientY - rect.top
        );

        const rotateY = getRotateDeg(
            event.clientX - rect.left
        );

        card
        .style
        .transform =`rotateX(${rotateX})
            rotateY(${rotateY})`;
    };

    const onMouseLeave = ()=>{
        card.sytle.transform = `none`;
    };