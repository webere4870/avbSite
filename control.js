let initialDisplay = document.querySelector('.animationControl');
initialDisplay.style.display = 'none';

let scrollAnimation = document.getElementById('snapScroll');

document.addEventListener("scroll", fadeItems);

window.onload = async function()
 {
    let myTime = await new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
            resolve('nothing');
        }, 3000);
    });
    let preLoader = document.querySelectorAll('.loadingScreen');
    for(let counter = 0; counter < preLoader.length; counter++)
    {
        preLoader[counter].style.display = "none";
    }
    let body = document.querySelectorAll('.animationControl');
    for(let counter = 0; counter < preLoader.length; counter++)
    {
        body[counter].style.display = "block";
    }
 }

window.addEventListener("DOMContentLoaded", function(e)
{
 let slideShow = document.getElementById('testSlideShow');
 let arr = slideShow.getElementsByTagName("div");
 let fadeComplete = function(e) {slideShow.appendChild(arr[0]);}
 for(let counter = 0; counter < arr.length; counter++)
 {
     arr[counter].addEventListener("animationend", fadeComplete, false);
 }
}, false)


function fadeItems()
        {
            
            let myItem = document.querySelectorAll('#snapScroll h1');
            for(let counter =1; counter<myItem.length; counter++)
            {
                let trueOrFalse = isInViewport(myItem[counter]);
                if(trueOrFalse === true)
                {
                    myItem[counter].style.transform = 'translateY(-50px)';
                }
            }
            
        }

        
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

// window.addEventListener("DOMContentLoaded", function(e) {

//     var stage = document.getElementById("stage");
//     var fadeComplete = function(e) { stage.appendChild(arr[0]); };
//     var arr = stage.getElementsByTagName("a");
//     for(var i=0; i < arr.length; i++) {
//       arr[i].addEventListener("animationend", fadeComplete, false);
//     }

//   }, false);

window.addEventListener("resize", ()=>
{
    console.log(window.innerWidth);
    let myMenu = document.querySelectorAll('.hamburger');
    let bigMenu = document.querySelectorAll('.navigationBar');
    if(window.innerWidth <= 800)
    {
        for(let counter =0; counter < myMenu.length; counter++)
        {
            myMenu[counter].style.display = 'flex';
            bigMenu[counter].style.display = 'none';
        }
    }
    else
    {
        for(let counter =0; counter < myMenu.length; counter++)
        {
            myMenu[counter].style.display = 'none';
            bigMenu[counter].style.display = 'flex';
        }
    }
})

function openSmallMenu()
{
    let smallMenu = document.querySelectorAll('.smallNavigationBar');
    let xButton = document.querySelectorAll('.xButton');
    let lockBody = document.querySelectorAll('body');
    let hamburger = document.querySelectorAll('.hamburger');
    for(let counter = 0; counter < lockBody.length; counter++)
    {   
        smallMenu[counter].style.display = 'flex';
        xButton[counter].style.display = 'block';
        hamburger[counter].style.display = 'none';
        lockBody[counter].style.overflowY ='hidden';
    }
}

function closeItem()
{
    let closer = document.querySelectorAll('.smallNavigationBar');
    let unlockBody = document.querySelectorAll('body');
    let xButton = document.querySelectorAll('.xButton');
    let hamburger = document.querySelectorAll('.hamburger');
    for(let counter = 0; counter < unlockBody.length; counter++)
    {
        hamburger[counter].style.display = 'flex';
        closer[counter].style.display = 'none';
        unlockBody[counter].style.overflowY ='inherit';
        xButton[counter].style.display = 'none';
    }
}