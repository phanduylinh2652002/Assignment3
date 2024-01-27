var submitElement = document.getElementById('submit');
var viewMoreElement = document.querySelectorAll('.view-more');

console.log(viewMoreElement);
//Show thong tin ca nhan
submitElement.onclick = function () {
    const emailElement = document.getElementById('floatingInput').value;
    const infoElement = document.getElementById('info-group');
    const inputElement = document.getElementById('input-form');
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = regex.test(emailElement);

    if(result){
        infoElement.classList.remove('hide');
        inputElement.classList.add('hide');
    }
}

//Show thong tin nghe nghiep
viewMoreElement.forEach(function(e, index){
    var infoJobElement = document.querySelectorAll('#infoJob');
    var moreElement = document.querySelectorAll('.more');
    var lessElement = document.querySelectorAll('.less');
    var result = true;
    e.onclick = function(){
        result = !result;
        if(!result){
            infoJobElement[index].classList.remove('hide');
            moreElement[index].classList.add('hide');
            lessElement[index].classList.remove('hide');
        }
        else{
            infoJobElement[index].classList.add('hide');
            moreElement[index].classList.remove('hide');
            lessElement[index].classList.add('hide');
        }
    }
});