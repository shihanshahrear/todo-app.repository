
function insertAfter (oldElement, newElement){
    const parent =oldElement.parentElement;
    
    console.log(oldElement.nextElementSibling);
    parent.insertBefore(newElement,oldElement.nextElementSibling )
    }


    export default insertAfter;