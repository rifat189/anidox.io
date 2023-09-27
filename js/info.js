$(document).ready(function(){

    trending();
    Beginner();
    Mystery();
    tocShow();
    showInfo();
    userDetails();

});

    // format animeName(0), studio(1), release(2), score(3), type(4), status(5), episodes(6), duration(7), imgsrc(8), videosrc(9) , genreArray(10), color(11)
    
function trending() {



    const anime = [
        ['Bleach: Thousand-Year Blood War', 'Pierrot', 'Fall 2022', '9.11', 'TV Series', 'Ongoing', '1', '24', 'img/anime poster/bleach tybw poster.jpg', 'https://9anime.to/watch/bleach-sennen-kessen-hen.w190l', ['Action', 'Advantage', 'Fantasy'], '#C02222'],
        ['Chainsaw Man', 'Mappa', 'Fall 2022', '8.99', 'TV Series', 'Ongoing', '1', '25', 'img/anime poster/chainsaw man poster.jpg', 'https://9anime.to/watch/chainsaw-man.8o9q', ['Action', 'Supernatural', 'Suspense'], '#2683AD'],
        ['Mob Psycho 100 III', 'Bones', 'Fall 2022', '8.62', 'TV Series', 'Ongoing', '3', '23', 'img/anime poster/mob psycho 100 poster.jpg', 'https://9anime.to/watch/mob-psycho-100.80m3', ['Action', 'Comedy'], '#1AAFF6'],
        ['One Piece', 'Toei Animation', 'Fall 1999', '8.67', 'TV Series', 'Ongoing', '1043', '24', 'img/anime poster/one piece poster.jpg', 'https://9anime.to/watch/one-piece.ov8', ['Action', 'Comedy', 'Adventure'], '#DCBC58'],
        ['Blue Lock', '8bit', 'Fall 2022', '8.38', 'TV Series', 'Ongoing', '2', '24', 'img/anime poster/blue lock poster.jpg', 'https://9anime.to/watch/blue-lock.2o2mq', ['Sport', 'AI', 'Thriller'], '#0d4cbd'],
        ['Call Of The Night', 'LIDENFILMS', 'Summer 2022', '8.11', 'TV Series', 'Finished', '13', '22', 'img/anime poster/call of the night poster.jpg', 'https://9anime.to/watch/call-of-the-night.0229k', ['Vampire', 'Supernatural', 'Romance'], '#3E248C'],
        ['Lycoris Recoil', 'A-1 Pictures', 'Summer 2022', '8.29', 'TV Series', 'Finished', '13', '24', 'img/anime poster/lycoris recoil poster.jpg', 'https://9anime.to/watch/lycoris-recoil.w117o', ['Action', 'Yuri', 'Comedy'], '#D1706F'],
        ['My Hero Academia Season 6', 'Bones', 'Fall 2022', '8.13', 'TV Series', 'Ongoing', '2', '23', 'img/anime poster/my hero academia s6 poster.jpg', 'https://9anime.to/watch/boku-no-hero-academia-6.xrrvz', ['Action', 'Supernatural', 'Comedy'], '#37A39C'],
        ['Classroom Of The Elite Season 2', 'Lerche', 'Summer 2022', '8.16', 'TV Series', 'Finished', '13', '24', 'img/anime poster/cote s2 poster.jpg', 'https://9anime.to/watch/classroom-of-the-elite-ii.w1o64', ['Psychological', 'School', 'Suspense'], '#CF326C'],
        ['The Eminence Of Shadow', 'Nexus', 'Fall 2022', '7.69', 'TV Series', 'Ongoing', '1', '24', 'img/anime poster/the eminence of shadow poster.jpg', 'https://9anime.to/watch/the-eminence-in-shadow.4ylx', ['Action', 'Comedy', 'Isekai'], '#387BB1'],
    ];


    var trendSection = document.getElementById('trending');
    var sectionBox = trendSection.querySelector('.sectionBox');
    var secContId = sectionBox.querySelector("#sectionContentId");
    // var sectionContent = sectionBox.querySelector('.sectionContent');

    // var trendSection = $('#trending'); 
    // console.log(trendSection);
    // console.log(sectionBox);

    for (let n = 1; n < anime.length; n++) {

        var newSectionContent = document.createElement("div");
        newSectionContent.classList = 'sectionContent';
        newSectionContent.id = '';
        newSectionContent.innerHTML = secContId.innerHTML;

        sectionBox.appendChild(newSectionContent);
    }



    for (let i = 0; i < anime.length; i++) {

        var animeName = sectionBox.getElementsByClassName('animeName')[i];
        var animeImg = sectionBox.getElementsByClassName('animeImg')[i];
        var studio = sectionBox.getElementsByClassName('studio')[i];
        var release = sectionBox.getElementsByClassName('release')[i];
        var rating = sectionBox.getElementsByClassName('rating')[i];
        var type = sectionBox.getElementsByClassName('type')[i];
        var showStatus = sectionBox.getElementsByClassName('status')[i];
        var episode = sectionBox.getElementsByClassName('episode')[i];
        var episodeLength = sectionBox.getElementsByClassName('length')[i];
        var watchLink = sectionBox.getElementsByClassName('watchBtnLink')[i];
        var footerStudio = sectionBox.getElementsByClassName('footerStudio')[i];
        var footerName = sectionBox.getElementsByClassName('footerAnimeName')[i];


        animeName.innerHTML = anime[i][0];
        footerName.innerHTML = anime[i][0];
        studio.innerHTML = anime[i][1];
        footerStudio.innerHTML = anime[i][1];
        release.innerHTML = anime[i][2];
        rating.innerHTML = '<span>Rating: </span>' + anime[i][3];
        type.innerHTML = '<span>Type: </span>' + anime[i][4];
        showStatus.innerHTML = '<span>Status: </span>' + anime[i][5];
        episode.innerHTML = '<span>Episodes: </span>' + anime[i][6];
        episodeLength.innerHTML = '<span>Duration: </span>' + anime[i][7] + ' min/ep';
        animeImg.setAttribute("src", anime[i][8]);
        watchLink.setAttribute("href", anime[i][9]);


        for (let a = 0; a < anime[i][10].length; a++) {
            var genre = sectionBox.getElementsByClassName("genre")[i];
            var newGenre = document.createElement('span');
            newGenre.classList = 'genreFill';
            newGenre.innerHTML = anime[i][10][a];
            newGenre.style.background = anime[i][11];
            

            genre.appendChild(newGenre);

            // console.log(newGenre);

        }



    };

    // console.log(trendSection);


}

function Beginner() {
    const anime = [
        ['Your Name.', 'CoMix Wave Films', 'Aug 22, 2022', '8.86', 'Movie', 'Finished', '1', '106', 'img/anime poster/your name poster.jpg', 'https://9anime.to/watch/your-name.nkll', ['Fantasy', 'Drama', 'Romance'], '#2B4089'],
        ['Attack On Titan', 'Wit Studio', 'Spring 2013', '8.53', 'TV Series', 'Finished', '25', '24', 'img/anime poster/attack on titan poster.jpg', 'https://9anime.to/watch/attack-on-titan.kww', ['Action', 'Drama', 'Suspense'], '#17252C'],
        ['Death Note', 'Madhouse', 'Fall 2006', '8.62', 'TV Series', 'Finished', '37', '23', 'img/anime poster/death note poster.jpg', 'https://9anime.to/watch/death-note.z02', ['Action', 'Supernatural', 'Suspense'], '#323D48'],
        ['I Want To Eat Your Pancreas', 'Studio VOLN', 'Sep 1, 2018', '8.56', 'Movie', 'Finished', '1', '108', 'img/anime poster/i want to eat your pancreas poster.jpg', 'https://9anime.to/watch/i-want-to-eat-your-pancreas.4myj', ['Drama', 'Romance', 'Slice Of Life'], '#CF326C'],
        ['Weathering With You', 'CoMix Wave Films', 'Jul 19, 2019', '8.30', 'Movie', 'Finished', '1', '112', 'img/anime poster/weathering with you poster.jpg', 'https://9anime.to/watch/weathering-with-you.9xqn', ['Drama', 'Fantasy', 'Romance'], '#3880D7'],
        ['Jujutsu Kaisen', 'Mappa', 'Fall 2020', '8.67', 'TV Series', 'Finished', '24', '23', 'img/anime poster/jujutsu kaisen poster.jpg', 'https://9anime.to/watch/jujutsu-kaisen.32n8', ['Fantasy', 'Supernatural'], '#1D2F5C'],
        ['A Slient Voice', 'Kyoto Animation', 'Sep 17, 2016', '8.95', 'Movie', 'Finished', '1', '130', 'img/anime poster/a slient voice poster.jpg', 'https://9anime.to/watch/a-silent-voice.4wzo', ['Drama', 'School'], '#CF326C'],
        ['Erased', 'A-1 Pictures', 'Winter 2016', '8.31', 'TV Series', 'Finished', '12', '24', 'img/anime poster/erased poster.jpg', 'https://9anime.to/watch/erased.kkw', ['Drama', 'Suspense', 'Sci-Fi'], '#3b5b95'],
        ['One Piece', 'Toei Animation', 'Fall 1999', '8.67', 'TV Series', 'Ongoing', '1043', '24', 'img/anime poster/one piece poster.jpg', 'https://9anime.vc/watch/one-piece-100?ep=2142', ['Action', 'Comedy', 'Adventure'], '#DCBC58'],
        ['Naruto:Shippuden', 'Pierrot', 'Winter 2007', '8.25', 'TV Series', 'Finished', '500', '23', 'img/anime poster/naruto shippuden poster.jpg', 'https://9anime.to/watch/naruto-shippuden.qv3', ['Action', 'Advanture', 'Shonen'], '#E58335'],
        ['Haikyuu!', 'Production I.G', 'Spring 2014', '8.45', 'TV Series', 'Finished', '25', '24', 'img/anime poster/haikyuu poster.jpg', 'https://9anime.to/watch/haikyu.rjqn', ['Sports', 'School'], '#E58335'],
        ['Tokyo Ghoul', 'Pierrot', 'Summer 2014', '7.79', 'TV Series', 'Finished', '12', '24', 'img/anime poster/tokyo ghoul poster.jpg', 'https://9anime.to/watch/tokyo-ghoul.7w06', ['Action', 'Gore', 'Horror'], '#323D48'],

    ];

    var beginnerSection = document.getElementById('beginner');
    var sectionBox = beginnerSection.querySelector('.sectionBox');
    var secContId = sectionBox.querySelector("#sectionContentId");


    for (let list = 1; list < anime.length; list++) {

        var newSectionContent = document.createElement("div");
        newSectionContent.classList = 'sectionContent';
        newSectionContent.id = '';
        newSectionContent.innerHTML = secContId.innerHTML;

        sectionBox.appendChild(newSectionContent);

        // console.log(newSectionContent);
    }

    
    for (let i = 0; i < anime.length; i++) {

        var animeName = sectionBox.getElementsByClassName('animeName')[i];
        var animeImg = sectionBox.getElementsByClassName('animeImg')[i];
        var studio = sectionBox.getElementsByClassName('studio')[i];
        var release = sectionBox.getElementsByClassName('release')[i];
        var rating = sectionBox.getElementsByClassName('rating')[i];
        var type = sectionBox.getElementsByClassName('type')[i];
        var showStatus = sectionBox.getElementsByClassName('status')[i];
        var episode = sectionBox.getElementsByClassName('episode')[i];
        var episodeLength = sectionBox.getElementsByClassName('length')[i];
        var watchLink = sectionBox.getElementsByClassName('watchBtnLink')[i];
        var footerStudio = sectionBox.getElementsByClassName('footerStudio')[i];
        var footerName = sectionBox.getElementsByClassName('footerAnimeName')[i];


        animeName.innerHTML = anime[i][0];
        footerName.innerHTML = anime[i][0];
        studio.innerHTML = anime[i][1];
        footerStudio.innerHTML = anime[i][1];
        release.innerHTML = anime[i][2];
        rating.innerHTML = '<span>Rating: </span>' + anime[i][3];
        type.innerHTML = '<span>Type: </span>' + anime[i][4];
        showStatus.innerHTML = '<span>Status: </span>' + anime[i][5];
        episode.innerHTML = '<span>Episodes: </span>' + anime[i][6];
        episodeLength.innerHTML = '<span>Duration: </span>' + anime[i][7] + ' min/ep';
        animeImg.setAttribute("src", anime[i][8]);
        watchLink.setAttribute("href", anime[i][9]);


        for (let a = 0; a < anime[i][10].length; a++) {
            var genre = sectionBox.getElementsByClassName("genre")[i];
            var newGenre = document.createElement('span');
            newGenre.classList = 'genreFill';
            newGenre.innerHTML = anime[i][10][a];
            newGenre.style.background = anime[i][11];
            

            genre.appendChild(newGenre);

            // console.log(newGenre);

        }



    };

    // console.log(psychoSection);


}

function Mystery() {
    const anime = [
        ['Death Note', 'Madhouse', 'Fall 2006', '8.62', 'TV Series', 'Finished', '37', '23', 'img/anime poster/death note poster.jpg', 'https://9anime.to/watch/death-note.z02', ['Action', 'Supernatural', 'Suspense'], '#323D48'],
        ['Erased', 'A-1 Pictures', 'Winter 2016', '8.31', 'TV Series', 'Finished', '12', '24', 'img/anime poster/erased poster.jpg', 'https://9anime.to/watch/erased.kkw', ['Drama', 'Suspense', 'Sci-Fi'], '#3b5b95'],
        ['Steins;Gate', 'White Fox', 'Spring 2011', '9.08', 'TV Series', 'Finished', '24', '24', 'img/anime poster/steins gate poster.png', 'https://9anime.to/watch/steinsgate.1rx', ['Sci-Fi', 'Suspense'], 'crimson'],
        ['Serial Experiments Lain', 'Triangle Staff', 'Summer 1998', '8.07', 'TV Series', 'Finished', '13', '23', 'img/anime poster/serial experiments lain poster.jpg', 'https://9anime.to/watch/serial-experiments-lain.5km9', ['Sci-Fi', 'Mystery', 'Supernatural'], '#323D48'],
        ['Hyouka', 'Kyoto Animation', 'Spring 2012', '8.09', 'TV Series', 'Finished', '22', '25', 'img/anime poster/hyouka poster.jpg', 'https://9anime.to/watch/hyouka.lqq', ['Mystery', 'School'], '#DCBC58'],
        ['Summertime Rendering', 'OLM', 'Spring 2022', '8.57', 'TV Series', 'Finished', '25', '23', 'img/anime poster/summertime rendering poster.jpg', 'https://9anime.to/watch/summer-time-rendering.yyjx', ['Mystery', 'Supernatural', 'Suspense'], '#3880D7'],
        ['Another', 'P.A. Works', 'Winter 2012', '7.48', 'TV Series', 'Finished', '12', '24', 'img/anime poster/another poster v2.jpg', 'https://9anime.to/watch/another.ojn5', ['Horror', 'Mystery', 'Supernatural'], '#3E248C'],
        ['The Promised Neverland', 'CloverWorks', 'Winter 2019', '8.53', 'TV Series', 'Finished', '12', '22', 'img/anime poster/the promised neverland poster.jpg', 'https://9anime.to/watch/the-promised-neverland.r12q', ['Psychological', 'Survival'], '#37A39C'],
        ['Bakemonogatari', 'Shaft', 'Summer 2009', '8.34', 'TV Series', 'Finished', '15', '25', 'img/anime poster/bakemonogatari poster.jpg', 'https://9anime.to/watch/bakemonogatari.579', ['Mystery', 'Romance', 'Supernatural'], '#387BB1'],
        // ['Perfect Blue', 'Madhouse, ONIRO', 'Feb 28, 1998', '8.54', 'Movie', 'Finished', '1', '81', 'img/anime poster/perfect blue poster.jpg', 'https://aniwave.to/watch/perfect-blue.90y8', ['Avant Grande', 'Horror', 'Drama', 'Sci-Fi'], 'slategrey'],
        ['Paprika', 'Madhouse', 'Nov 25, 2006', '8.04', 'Movie', 'Finished', '1', '90', 'img/anime poster/paprika poster.jpg', 'https://9anime.to/watch/paprika.lnq6', ['Horror', 'Suspense', 'Sci-Fi'], 'crimson'],

    ];

    var psychoSection = document.getElementById('psychological');
    var sectionBox = psychoSection.querySelector('.sectionBox');
    var secContId = sectionBox.querySelector("#sectionContentId");


    for (let list = 1; list < anime.length; list++) {

        var newSectionContent = document.createElement("div");
        newSectionContent.classList = 'sectionContent';
        newSectionContent.id = '';
        newSectionContent.innerHTML = secContId.innerHTML;

        sectionBox.appendChild(newSectionContent);

        // console.log(newSectionContent);
    }

    
    for (let i = 0; i < anime.length; i++) {

        var animeName = sectionBox.getElementsByClassName('animeName')[i];
        var animeImg = sectionBox.getElementsByClassName('animeImg')[i];
        var studio = sectionBox.getElementsByClassName('studio')[i];
        var release = sectionBox.getElementsByClassName('release')[i];
        var rating = sectionBox.getElementsByClassName('rating')[i];
        var type = sectionBox.getElementsByClassName('type')[i];
        var showStatus = sectionBox.getElementsByClassName('status')[i];
        var episode = sectionBox.getElementsByClassName('episode')[i];
        var episodeLength = sectionBox.getElementsByClassName('length')[i];
        var watchLink = sectionBox.getElementsByClassName('watchBtnLink')[i];
        var footerStudio = sectionBox.getElementsByClassName('footerStudio')[i];
        var footerName = sectionBox.getElementsByClassName('footerAnimeName')[i];


        animeName.innerHTML = anime[i][0];
        footerName.innerHTML = anime[i][0];
        studio.innerHTML = anime[i][1];
        footerStudio.innerHTML = anime[i][1];
        release.innerHTML = anime[i][2];
        rating.innerHTML = '<span>Rating: </span>' + anime[i][3];
        type.innerHTML = '<span>Type: </span>' + anime[i][4];
        showStatus.innerHTML = '<span>Status: </span>' + anime[i][5];
        episode.innerHTML = '<span>Episodes: </span>' + anime[i][6];
        episodeLength.innerHTML = '<span>Duration: </span>' + anime[i][7] + ' min/ep';
        animeImg.setAttribute("src", anime[i][8]);
        watchLink.setAttribute("href", anime[i][9]);


        for (let a = 0; a < anime[i][10].length; a++) {
            var genre = sectionBox.getElementsByClassName("genre")[i];
            var newGenre = document.createElement('span');
            newGenre.classList = 'genreFill';
            newGenre.innerHTML = anime[i][10][a];
            newGenre.style.background = anime[i][11];
            

            genre.appendChild(newGenre);

            // console.log(newGenre);

        }



    };

    // console.log(psychoSection);


}

function tocShow() {
    var listIconContainer = document.querySelector('.listIconContainer');
    var tableOfContentList = document.querySelector('.tableOfContentList');

    listIconContainer.addEventListener('click', function(){
        if (tableOfContentList.style.display === 'flex') {
            tableOfContentList.style.display = 'none';
            listIconContainer.style.background = 'transparent';
            listIconContainer.style.color = '#203040ca';

        } else {
            tableOfContentList.style.display = 'flex';
            listIconContainer.style.background = '#004385';
            listIconContainer.style.color = '#fff';

        }
    })
}

function userDetails() {
    var userIconContainer = document.querySelector('.userIconContainer');
    var userSettings = document.querySelector('.userSettings');

    userIconContainer.addEventListener('click',function(){
        if (userSettings.style.display === 'flex') {
            userSettings.style.display = 'none';
            userSettings.style.top = '110%';

        }
        else{
            userSettings.style.top = '130%';
            userSettings.style.display = 'flex';

        }
    })
    

}

export function showInfo() {
    var sectionContent = document.querySelectorAll(".sectionContent");

    sectionContent.forEach(function (element) {
        var imgInfoContainer = element.querySelector(".imgInfoContainer");
        var sectionContentFooter = element.querySelector(".sectionContentFooter");
        var img = imgInfoContainer.querySelector(".animeImg");
        var hiddenInfo = imgInfoContainer.querySelector(".hiddenInfo");
        var extBtn = imgInfoContainer.querySelector('.imgExtBtn');
        var watchBtn = imgInfoContainer.querySelector(".watchBtn");


        // console.log(img)

        img.addEventListener("mouseover", function () {
            // hiddenInfo.style.display = "flex";
            hiddenInfo.style.display = "grid";
            imgInfoContainer.style.boxShadow = "0 0 10px #39393929";
            sectionContentFooter.style.fontWeight = "500";

        });

        img.addEventListener("mouseleave", function () {
            hiddenInfo.style.display = "none";
            imgInfoContainer.style.boxShadow = "0 0 0";
            sectionContentFooter.style.fontWeight = "400";
        });

        imgInfoContainer.addEventListener("mouseover", function () {
            extBtn.style.display = "flex";
        });

        imgInfoContainer.addEventListener("mouseleave", function () {
            extBtn.style.display = "none";
        });


    })


}














