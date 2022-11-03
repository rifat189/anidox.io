

export function sliderUpdate() {



    const slideContent = [
        [
            "img/anime poster widescreen/blue lock widescreen.jpg", 
            "'Blue Lock' drops their new episode",
            "Yoichi Isagi was mere moments away from scoring a goal that would have sent his high school soccer team to the nationals, but a split-second decision to pass the ball to his teammate cost him that reality. Bitter, confused, and disappointed, Isagi wonders if the outcome would have been different had he not made the pass. When the young striker returns home, an invitation from the Japan Football Union awaits him. Through an arbitrary and biased decision-making process, Isagi is one of three hundred U-18 strikers selected for a controversial project named Blue Lock",
            "Blue Lock",
            "TV Series",
            "8.38",
            "Ongoing",
            "8bit",
            ["Sport", "AI", "Thriller"],
            "0px",
            "translate(0, 0%)",
            "Update",
            "https://9anime.to/watch/blue-lock.2o2mq"
        ],
        
        [
            "img/anime poster widescreen/chainsaw man widescreen v2.jpg",
            "CGI & Visual Qualities of Chainsaw Man satisfy fans expectation",
            "Was it all just a coincidence, or was it inevitable? Ichigo Kurosaki gained the powers of a Soul Reaper through a chance encounter. As a Substitute Soul Reaper, Ichigo became caught in the turmoil of the Soul Society, a place where deceased souls gather. But with help from his friends, Ichigo overcame every challenge to become even stronger. When new Soul Reapers and a new enemy appear in his hometown of Karakura, Ichigo jumps back into the battlefield with his Zanpakuto to help those in need. Meanwhile, the Soul Society is observing a sudden surge in the number of Hollows being destroyed in the World of the Living. They also receive separate reports of residents in the Rukon District having gone missing. Finally, the Seireitei, home of the Soul Reapers, comes under attack by a group calling themselves the Wandenreich.",
            "Chainsaw Man",
            "TV Series",
            "8.99",
            "Ongoing",
            "Mappa",
            ["Action", "Supernatural", "Fantasy", "Thriller"],
            "50%",
            "translate(0, -50%)",
            "Update",
            "https://9anime.to/watch/chainsaw-man.8o9q"
        ],

        [
            "img/anime poster widescreen/nier automata widescreen.jpg",
            "Game 'NieR:Automata Ver 1.1a' getting its anime adaptation ",
            "Until 2017's Nier: Automata was released, the Nier franchise was otherwise considered underrated among the gaming community. But it was definitely ahead of its time, as the common tropes in otherwise 'normal' video games were deconstructed into messages that would stay with players long-term. Thanks to the hard work and study of morals that were placed in Nier: Automata's gameplay and storyline, the franchise became a massive hit. Even a remake of the original Nier was released in 2021. Yoko Taro doesn't only succeed in terms of interactivity and storytelling, but he manages to incorporate real-life issues and critique the morals of humanity. What does it mean to be human? Is the right thing, actually the right th",
            "NieR:Automata Ver 1.1a",
            "TV Series",
            "N/A",
            "Upcoming",
            "A-1 Pictures",
            ["Action", "Sci-Fi", "Fantasy", "Anime Adaptation"],
            "0px",
            "translate(0, 0)",
            "Announcement",
            " "
        ],

        [
            "img/anime poster widescreen/suzume no tojimari widescreen.jpg",
            "Suzume No Tojimari drops it's second trailer",
            "Suzume, a 17-year-old girl who lives in a quiet town in Kyushu, encounters a traveling young man who tells her 'I'm looking for a door.' She follows after him and discovers a weathered door in the ruins in the mountains, as if it were the only thing left standing from a collapse. As if drawn by something, Suzume reaches for the door... Before long, doors begin to open one after another in various parts of Japan. As disasters come from the far side of the doors, the open doors must be closed. The stars, the setting sun, and the morning sky—in that place she wandered into, there was a sky that seemingly blended all of time together. Guided by the mysterious doors, ",
            "Suzume No Tojimari",
            "Movies",
            "N/A",
            "Upcoming",
            "CoMix Wave Films",
            ["Fantasy", "Romance"],
            "-100px",
            "translate(0, 0)",
            "Movie Release",
            " "
        ],

        [
            // png
            "img/anime poster widescreen/demon slayer s3 widescreen.png",
            "Demon Slayer might NOT get new a season because of poor rating",
            "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remainin.",
            "Demon Slayer",
            "TV Series",
            "8.53",
            "Finished",
            "ufotable",
            ["Action", "Fantasy"],
            "50%",
            "translate(0, -50%)",
            "New Season",
            "https://9anime.to/watch/demon-slayer-kimetsu-no-yaiba.6q67"
        ]



    ];

    var altSlideContainer = document.getElementsByClassName("altSlideContainer")[0];
    // var altSlide = document.getElementsByClassName("altSlide");
    var altSlide = document.querySelector(".altSlide");

    var altSlideBtnHolder = document.getElementsByClassName("altSlideBtnHolder")[0];
    var altSlideIndicatorButton = document.querySelector(".altSlideIndicatorButton");

    // console.log(altSlide);

// CREATING NEW SLIDES & BTNs
    for (let x = 1; x < slideContent.length; x++) {
        // slide
        var newSlide = document.createElement('div');
        newSlide.classList = 'altSlide';
        newSlide.innerHTML = altSlide.innerHTML;

        altSlideContainer.appendChild(newSlide);
        // console.log(newSlide);

        // buttons
        var newBtn = document.createElement('button');
        newBtn.classList = 'altSlideIndicatorButton';

        altSlideBtnHolder.appendChild(newBtn);
        // console.log(newBtn);
        
    }

// GIVING NEW SLIDES THEIR CONTENT
    for (let i = 0; i < slideContent.length; i++) {
        var altSlideImg = document.getElementsByClassName('altSlideImg')[i];
        var altSlideTitle = document.getElementsByClassName('altSlideTitle')[i];
        var tagTaxt = document.getElementsByClassName('tagTaxt')[i];
        var altSlideWatchLink = document.getElementsByClassName('altSlideWatchLink')[i];
        var altSlideDescription = document.getElementsByClassName('altSlideDescription')[i];
        var altSlideAnimeName = document.getElementsByClassName('altSlideAnimeName')[i];
        var altSlideAnimeType = document.getElementsByClassName('altSlideAnimeType')[i];
        var altSlideAnimeScore = document.getElementsByClassName('altSlideAnimeScore')[i];
        var altSlideAnimeStatus = document.getElementsByClassName('altSlideAnimeStatus')[i];
        var altSlideAnimeStudio = document.getElementsByClassName('altSlideAnimeStudio')[i];
        var altSlideAnimeGenre = document.getElementsByClassName('altSlideAnimeGenre')[i];

//UPDATING THE VALUES OF TAGS 
        altSlideImg.setAttribute('src', slideContent[i][0]);
        altSlideImg.style.top = slideContent[i][9];
        altSlideImg.style.transform = slideContent[i][10];

        altSlideTitle.innerHTML = slideContent[i][1];
        tagTaxt.innerHTML = slideContent[i][11];
        altSlideWatchLink.setAttribute('href', slideContent[i][12]);
        altSlideDescription.innerHTML = slideContent[i][2];
        altSlideAnimeName.innerHTML = '<span>Anime: </span>' + '<a>' + slideContent[i][3] + '</a>';
        altSlideAnimeType.innerHTML = '<span>Type: </span>' + slideContent[i][4];
        altSlideAnimeScore.innerHTML = '<span>Score: </span>' + slideContent[i][5];
        altSlideAnimeStatus.innerHTML = '<span>Status: </span>' + slideContent[i][6];
        altSlideAnimeStudio.innerHTML = '<span>Studio: </span>' + '<a>' + slideContent[i][7] + '</a>';

//CREATING THE GENRE LIST
        for (let glist = 0; glist < slideContent[i][8].length; glist++) {
            var newGenre = document.createElement('a');
            newGenre.classList = 'genreStroke';
            newGenre.innerHTML = slideContent[i][8][glist];
            
            altSlideAnimeGenre.appendChild(newGenre);
        }

    }

    let altSlideIndicatorButtonAsWhole = document.querySelectorAll('.altSlideIndicatorButton');
    let altSlideButtonActive = document.getElementsByClassName('altSlideButtonActive');
    var altSlideAsWhole = document.getElementsByClassName('altSlide');
    let altSlideActive = document.getElementsByClassName('altSlideActive');


    for (let b = 0; b < slideContent.length; b++) {
        altSlideIndicatorButtonAsWhole[b].addEventListener("click", function(){
            altSlideButtonActive[0].classList.remove('altSlideButtonActive');
            altSlideIndicatorButtonAsWhole[b].classList.add('altSlideButtonActive');
            altSlideActive[0].classList.remove('altSlideActive');
            
            if (b != 0) {
            altSlideAsWhole[b].classList.toggle('altSlideActive');
            }
            if(b===0){
            altSlideAsWhole[b].classList.add('altSlideActive');
            }
        });
    }

// BELOW CODE ALSO WORKS WELL......
    // altSlideIndicatorButtonAsWhole.forEach(btn => {
    //     btn.addEventListener('click', ()=>
    //     alert(altSlideIndicatorButtonAsWhole.innerHTML) );
    // })




    // var chevronLeft = document.getElementsByClassName('altSlideChangeButton')[0];
    // var indexNumber = 0;
    // // console.log(chevronLeft);
    // chevronLeft.addEventListener("click",function(){
    //     indexNumber =+ 1;
    //     console.log(indexNumber);
    //     alert(indexNumber);
    //     // for (let kk = 0; kk < slideContent.length; kk++) {
    //         altSlideButtonActive[0].classList.remove('altSlideActive');            
    //         altSlide[indexNumber].classList.add('altSlideActive');            
    //     // }
    // });




}


