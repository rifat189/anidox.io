$(document).ready(function(){
    characterUpdate();
})

function characterUpdate(){
    const characterSet = [
        ["Chika FUJIWARA", "Love Is War", "img/anime character pic/chika fujiwara.jpg","3,90,488"],
        ["Ayanokoji", "Classroom Of The Elite", "img/anime character pic/ayanokoji.jpg","3,68,465"],
        ["Makise KURISU", "Steins;Gate", "img/anime character pic/makise kurisu.jpg","3,50,445"],
        ["Monkey D. LUFFY", "One Piece", "img/anime character pic/luffy.jpg","3,36,880"],
        ["Levi ACKERMAN", "Attack On Titan", "img/anime character pic/levi ackerman.jpg","3,29,874"],
        ["Chizuru ICHINOSE", "Rent-A-Girlfriend", "img/anime character pic/chizuru ichinose.jpg","3,08,651"],
        ["Power", "Chainsaw Man", "img/anime character pic/power.png","2,94,583"],
        ["Todoroki SHOTO", "My Hero Academia", "img/anime character pic/todoroki.jpg","3,10,490"],
        ["Chizuru HISHIRO", "Re:Life", "img/anime character pic/chizuru hishiro.jpg","1,90,898"],
        ["GOKU", "Dragon Ball", "img/anime character pic/goku.jpg","5,98,654"],
        ["SAITAMA", "One Punch Man", "img/anime character pic/saitama.jpg","5,58,140"],
    ]; 

    var characterHolder = document.querySelector('.characterHolder');
    var characterContent = document.querySelector('.characterContent');

    for (let n = 1; n < characterSet.length; n++){
        var newcharacterContent = document.createElement('div');
        newcharacterContent.classList = 'characterContent';
        newcharacterContent.innerHTML = characterContent.innerHTML;

        characterHolder.appendChild(newcharacterContent);

        // console.log(newcharacterContent);

    }
    for (let i = 0; i < characterSet.length; i++) {
        var characterPic = document.getElementsByClassName('characterPic')[i];
        var characterName = document.getElementsByClassName('characterName')[i];
        var characterAnimeName = document.getElementsByClassName('characterAnimeName')[i];
        var characterContentClass = document.getElementsByClassName('characterContent')[i];
        var followerCount = document.getElementsByClassName('followerCount')[i];

        characterContentClass.setAttribute('data-text', characterSet[i][0])
        characterName.innerHTML = characterSet[i][0];
        characterAnimeName.innerHTML = characterSet[i][1];
        characterPic.setAttribute('src', characterSet[i][2]);
        followerCount.innerHTML = characterSet[i][3];

    }

}