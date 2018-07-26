/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function colapse(id_parend,id_child){
    var element = document.getElementById(id_child);
    console.log(element.classList)
    if(element.classList.contains('in')){
         $('collapse').removeClass('in')
    }else{
         $('collapse').removeClass('in')
        $('#'+id_child).addClass('in')
    }
}