function showMyAnimal(){

    const animals = [
            {
                text: 'කූඹියෙක්',
                image: 'ant.jpg',
            },
            {
                text: 'කුරුල්ලෙක්',
                image: 'bird.jpg',
            },
            {
                text: 'පූසෙක්',
                image: 'cat.jpg',
            },
            {
                text: 'බව්වෙක්',
                image: 'dog.jpg',
            },
            {
                text: 'අලියෙක්',
                image: 'elephant.jpg',
            },
            {
                text: 'නරියෙක්',
                image: 'fox.jpg',
            },
            {
                text: 'ගෙම්බෙක්',
                image: 'frog.jpg',
            }
        ]
      $('#playnow').hide();
      $('#info-section').hide();
      $('#animal-info').show();

      const an = animals[ Math.floor( animals.length * Math.random() ) ];
      if(an){
        $('#animal-name').html(an.text);
        const url = './img/animals/' + an.image;
        $('#animal-img').attr('src', url);
      }
    }

    function showMyPersonal(){
        $('#playnow').hide();
        $('#info-section').hide();
        $('#game-info').show();
        var personal = ['cute','baby','hot','lovely']
        const an = personal[ Math.floor( personal.length * Math.random() ) ];
        if(an){
            textOverlay(FBInstant.player.getPhoto() , an);
        }
        var data64 = $('#game-id').toDataURL("image/jpeg");
        $('#share').click(function (e) { 
            FBInstant.shareAsync({
                intent: 'REQUEST'  ,
                Image: data64  ,
                text: 'Come play with your friend!' ,
            }) 
        });
      }
    
    
    function textOverlay(profilePic , text){
        const canvas = document.getElementById('game-img');
        const ctx = canvas.getContext('2d');
    
        const img = new Image();
        img.onload = function() {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          ctx.font = 'bold 30px Arial';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, canvas.width/2, canvas.height/2);
        };
        img.src = profilePic ;
      }