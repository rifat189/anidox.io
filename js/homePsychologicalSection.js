// import {showInfo} from "./info.js";


// $(document).ready(function(){

//     sectionPsycho();
//     showInfo();

// });


// function sectionPsycho() {
//     const anime = [
//         ['Bleach: Thousand-Year Blood War', 'Pierrot', 'Fall 2022', '9.11', 'TV Series', 'Ongoing', '1', '24', 'img/anime poster/death note poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Action', 'Advantage', 'Fantasy'], '#C02222'],
//         ['Classroom Of The Elite Season 2', 'Lerche', 'Summer 2022', '8.16', 'TV Series', 'Finished', '13', '24', 'img/anime poster/cote s2 poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Psychological', 'School', 'Suspense'], '#CF326C'],
//         ['Chain Man', 'Mappa', 'Fall 2022', '8.99', 'TV Series', 'Ongoing', '1', '25', 'img/anime poster/serial experiments lain poster.jpg', 'https://9anime.vc/watch/chainsaw-man-17406?ep=94597', ['Action', 'Supernatural', 'Suspense'], '#2683AD'],
//         ['Mob Psycho 100 III', 'Bones', 'Fall 2022', '8.62', 'TV Series', 'Ongoing', '3', '23', 'img/anime poster/erased poster.jpg', 'https://9anime.vc/watch/mob-psycho-100-iii-18153?ep=94442', ['Action', 'Comedy'], '#1AAFF6'],
//         ['One Piece', 'Toei Animation', 'Fall 1999', '8.67', 'TV Series', 'Ongoing', '1043', '24', 'img/anime poster/one piece poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Action', 'Comedy', 'Adventure'], '#DCBC58'],
//         ['Blue Lock', '8bit', 'Fall 2022', '8.38', 'TV Series', 'Ongoing', '2', '24', 'img/anime poster/blue lock poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Sport', 'AI', 'Thriller'], '#0d4cbd'],
//         ['Call Of The Night', 'LIDENFILMS', 'Summer 2022', '8.11', 'TV Series', 'Finished', '13', '22', 'img/anime poster/call of the night poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Vampire', 'Supernatural', 'Romance'], '#3E248C'],
//         ['Lycoris Recoil', 'A-1 Pictures', 'Summer 2022', '8.29', 'TV Series', 'Finished', '13', '24', 'img/anime poster/lycoris recoil poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Action', 'Yuri', 'Comedy'], '#D1706F'],
//         ['My Hero Academia Season 6', 'Bones', 'Fall 2022', '8.13', 'TV Series', 'Ongoing', '2', '23', 'img/anime poster/my hero academia s6 poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Action', 'Supernatural', 'Comedy'], '#37A39C'],
//         ['The Eminence Of Shadow', 'Nexus', 'Fall 2022', '7.69', 'TV Series', 'Ongoing', '1', '24', 'img/anime poster/the eminence of shadow poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Action', 'Comedy', 'Isekai'], '#387BB1'],
//     ];

//     var psychoSection = document.getElementById('psychological');
//     var sectionBox = psychoSection.querySelector('.sectionBox');
//     var secContId = sectionBox.querySelector("#sectionContentId");


//     for (let list = 1; list < anime.length; list++) {

//         var newSectionContent = document.createElement("div");
//         newSectionContent.classList = 'sectionContent';
//         newSectionContent.id = '';
//         newSectionContent.innerHTML = secContId.innerHTML;

//         sectionBox.appendChild(newSectionContent);

//         // console.log(newSectionContent);
//     }

    
//     for (let i = 0; i < anime.length; i++) {

//         var animeName = sectionBox.getElementsByClassName('animeName')[i];
//         var animeImg = sectionBox.getElementsByClassName('animeImg')[i];
//         var studio = sectionBox.getElementsByClassName('studio')[i];
//         var release = sectionBox.getElementsByClassName('release')[i];
//         var rating = sectionBox.getElementsByClassName('rating')[i];
//         var type = sectionBox.getElementsByClassName('type')[i];
//         var showStatus = sectionBox.getElementsByClassName('status')[i];
//         var episode = sectionBox.getElementsByClassName('episode')[i];
//         var episodeLength = sectionBox.getElementsByClassName('length')[i];
//         var watchLink = sectionBox.getElementsByClassName('watchBtnLink')[i];
//         var footerStudio = sectionBox.getElementsByClassName('footerStudio')[i];
//         var footerName = sectionBox.getElementsByClassName('footerAnimeName')[i];


//         animeName.innerHTML = anime[i][0];
//         footerName.innerHTML = anime[i][0];
//         studio.innerHTML = anime[i][1];
//         footerStudio.innerHTML = anime[i][1];
//         release.innerHTML = anime[i][2];
//         rating.innerHTML = '<span>Rating: </span>' + anime[i][3];
//         type.innerHTML = '<span>Type: </span>' + anime[i][4];
//         showStatus.innerHTML = '<span>Status: </span>' + anime[i][5];
//         episode.innerHTML = '<span>Episodes: </span>' + anime[i][6];
//         episodeLength.innerHTML = '<span>Duration: </span>' + anime[i][7] + ' min/ep';
//         animeImg.setAttribute("src", anime[i][8]);
//         watchLink.setAttribute("href", anime[i][9]);


//         for (let a = 0; a < anime[i][10].length; a++) {
//             var genre = sectionBox.getElementsByClassName("genre")[i];
//             var newGenre = document.createElement('span');
//             newGenre.classList = 'genreFill';
//             newGenre.innerHTML = anime[i][10][a];
//             newGenre.style.background = anime[i][11];
            

//             genre.appendChild(newGenre);

//             // console.log(newGenre);

//         }



//     };

//     // console.log(psychoSection);


// }






