
import {sliderUpdate} from "./slider.js";



// CALLING THE FUNCTION ON LOAD OF THE DOCUMENT OTHERWISE THIS FUNCTION DOESN'T WORK 

window.onload = function(){
    navOptionsShow();
    sliderUpdate();
};


// GENRE ARRAY 
const genreArr =[
    'Action',
    'Comedy',
    'Drama',
    'Fantasy',
    'Harem',
    'Horror',
    'Isekai',
    'Magic',
    'Mecha',
    'Music',
    'Mystery',
    'Psychological',
    'Romance',
    'School',
    'Slice Of Life',
];

// YEAR ARRAY
const yearArr =[
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005',
    '2004',
    '2003',
    '2002',
    '2001',
    '2000',
];

// var navOptionsList = document.querySelector(".navOptionsList");

// console.log(navOptionsList);

function navOptionsShow(){

    var hiddenList = document.getElementsByClassName("hiddenList");
    var navOptionsList = document.getElementsByClassName("navOptionsList");
    var genreOptions = document.getElementsByClassName("genreOptions");
    var yearOptions = document.getElementsByClassName("yearOptions");
    var navOptionsTitle = document.getElementsByClassName("navOptionsTitle");
    

// CREATING NEW GENRES
   for (let f = 1; f < genreArr.length; f++) {
    var newGenreList = document.createElement('a');
        newGenreList.classList = 'genreOptions';  
        hiddenList[0].appendChild(newGenreList);
   }


// CHANGING THE INNERHTML OF GENRE LINKS
   for (let ff = 0; ff < genreArr.length; ff++) {
        genreOptions[ff].innerHTML = genreArr[ff]; 
   }

// CREATING NEW YEARS
   for (let y = 1; y < yearArr.length; y++) {
    var newYearList = document.createElement('a');
        newYearList.classList = 'yearOptions';  
        hiddenList[1].appendChild(newYearList);
   }


// CHANGING THE INNERHTML OF YEAR LISTS
   for (let yy = 0; yy < yearArr.length; yy++) {
        yearOptions[yy].innerHTML = yearArr[yy]; 
   }



// ANIMATE THE HIDDENLIST TO SHOW AND HIDE
    for (let i = 0; i < 2; i++) {
        navOptionsList[i].addEventListener('mouseover',function(){
                hiddenList[i].style.display = 'grid';
                navOptionsList[i].style.background = "#fff";
    })
    navOptionsList[i].addEventListener('mouseout',function(){
        hiddenList[i].style.display = 'none';
        navOptionsList[i].style.background = "transparent";
})
}
};











// onmouseover="listShow(0)" onmouseout="listHide(0)"
// onmouseover="listShow(1)" onmouseout="listHide(1)"

// function listShow(n){
//     for (let m = 0; m < hiddenList.length; m++) {
//         if (m===n) {
//             hiddenList[m].style.display = "grid";
//             navOptionsList[m].style.background = "#fff";
//             // navOptionsList[m].style.borderRadius = "5px 5px 0 0";
//         } else {
//             hiddenList[m].style.display = "none";
//         }
        
//     }
// }


// function listHide(n) {
//     hiddenList[n].style.display = "none";
//     navOptionsList[n].style.height = "100%";
//     navOptionsList[n].style.background = "transparent";
// }