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
        var personal = ['আপনি ঘরও সামলান, বউও সামলান, টাকাও সামলান আবার আপনার টক্সিক বন্ধুদের কেও সামলান।']
        const text = personal[ Math.floor( personal.length * Math.random() ) ];
        const picSelect = './img/cricket/shakib.jpg' ;
        if(text){
            textOverlay(FBInstant.player.getPhoto() , picSelect, 'সাকিব আল হাসান' ,text);
        }
        $('#share').click(function (e) { 
            var data64 = document.getElementById('game-img').toDataURL("image/jpeg");
            FBInstant.shareAsync({
                intent: 'REQUEST'  ,
                image: data64  ,
                text: 'Come play with your friend!' ,
            }) 
        });
      }
    
    
    function textOverlay(profilePic ,selectedPic,cricketerName, text){
        const canvas = document.getElementById('game-img');
        var ctx = canvas.getContext("2d");

        //gradient backgroud in the canvas
        let grd = ctx.createLinearGradient(0, 853, 1352, 0);
        grd.addColorStop(0, '#00a0ff');
        // grd.addColorStop(0, '#16537e');
        grd.addColorStop(1, '#12cba6');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 1342, 853);
       
        ctx.font = "600 20px Helvetica";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(`আপনি ${cricketerName} এর মতো:`, 170 , 45);

        // Load the two images
        var image1 = new Image();
        image1.src = FBInstant.player.getPhoto() ;

        var image2 = new Image();
        image2.src = selectedPic ;

        // When the first image is loaded, draw it on the canvas
        image1.onload = function() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(80+10 , 90+70, 80 , 0, 2 * Math.PI);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(image1, 10, 10+70 , 160 , 160);
            ctx.restore();
        };

        // When the second image is loaded, draw it on the canvas
        image2.onload = function() {
            ctx.beginPath();
            ctx.arc(270 , 90+70, 80 , 0, 2 * Math.PI);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(image2, 190, 10+70 , 160 , 160);
            ctx.restore();
        };

        // Write some text on the canvas
        ctx.font = "600 25px Helvetica";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        // ctx.textBaseline = 'middle';
        wrapText(ctx,text , 185, 250+60 , 300 , 40 )
        // ctx.fillText(text, 30 , 280);
        image1.setAttribute('crossorigin', 'anonymous');
        image2.setAttribute('crossorigin', 'anonymous');

      }

    // canvas text don't wrap text , so use this function 
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
        let words = text.split(" ");
        let line = "";
      
        for (let i = 0; i < words.length; i++) {
          let testLine = line + words[i] + " ";
          let metrics = context.measureText(testLine);
          let testWidth = metrics.width;
      
          if (testWidth > maxWidth && i > 0) {
            context.fillText(line, x, y);
            line = words[i] + " ";
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
    }
