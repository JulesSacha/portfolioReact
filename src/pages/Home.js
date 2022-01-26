import React from 'react';
import Cube from '../components/cube';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';

// var cube = document.querySelector('.cube');
// var radioGroup = document.querySelector('.radio-group');
// var currentClass = '';

// function changeSide() {
//     var checkedRadio = radioGroup.querySelector(':checked');
//     var showClass = 'show-' + checkedRadio.value;
//     if (currentClass) {
//         cube.classList.remove(currentClass);
//     }
//     cube.classList.add(showClass);
//     currentClass = showClass;
// }
// set initial side
// changeSide();
// radioGroup.addEventListener('change', changeSide);


const home = () => {
    return (
        <div className="home">
            <Navigation />
            <Cube />
            <br/>
            <br/>
            <br/>
            <br/>
            <Signature />

        </div>
    );
};




export default home;
