
const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "image2.png",
    "text1.txt",
    "text2.txt",
    "photo1.jpg",
    "photo2.jpg",
    "program1.exe",
    "program2.exe",
    "data1.csv",
    "data2.csv",
    "report1.pdf",
    "report2.pdf",
    "image3.png",
    "text3.txt",
    "photo3.jpg",
    "document3.pdf"
  ];


  function segregateFiles(files){
    let pdf = [];
    let jpg = [];
    let txt = [];
    let exe = [];
    let csv = [];
    let png = [];

   for(let i in files){
      if(files[i].match("jpg")){
      jpg.push( files[i]);
      }
     else if(files[i].match("pdf")){
        pdf.push(files[i]);
      }
     else if(files[i].match("txt")){
        txt.push(files[i]);
      }
     else if(files[i].match("png")){
     png.push(files[i]);
      }
     else if(files[i].match("exe")){
        exe.push(files[i]);
      }
     else if(files[i].match("csv")){
        csv.push(files[i]);
      }
   }

   console.log( "pdf: [ "+ pdf + " ]");
   console.log( "png: [ "+ png + " ]");
   console.log( "jpg: [ "+ jpg  + " ]");
   console.log( "txt: [ "+ txt + " ]");
   console.log( "csv: [ "+ csv + " ]");
   console.log( "exe: [ "+ exe + " ]");
 

  }

segregateFiles(files);
  

  