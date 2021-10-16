
    const popupParent = document.querySelectorAll('.popup-btn');  
        const   noscroll=()=>{ 
          document.body.style.paddingRight=window.innerWidth-document.body.clientWidth+'px';
          document.body.classList.add('lock');
        }
        const scrollAgain=()=>{
            document.body.classList.remove('lock');
            document.body.style.paddingRight= 0;
        }
    popupParent.length&&popupParent.forEach(parent=>{
        parent.addEventListener('click' , (e)=>{
            console.log();
            const close  = parent.querySelectorAll('.popup__close');
            const text=parent.querySelector('.popup-text');
            const img=parent.querySelector('.popup-image');
            close.length&&close.forEach(c => {
                 c.addEventListener('click',()=>{
                text.classList.remove('open'); 
                img.classList.remove('open'); 
                scrollAgain()
            }) 
            });  
              e.target.classList.contains('popup-btn__suit')&&(img.classList.add('open'),noscroll()); 
            e.target.classList.contains('popup-btn__actor')&&(text.classList.add('open'),noscroll()); 
        })
    })

 