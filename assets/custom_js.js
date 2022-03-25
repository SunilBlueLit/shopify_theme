
var mod_box = document.getElementById("personalize_block");
var per_button = document.getElementById("personalize_button");
var close_button = document.getElementById("close_block");

const proudct_tags = document.getElementById('p_t');
const product_tags_array = proudct_tags.innerHTML.split(",");
const input = document.getElementById('input1');
//for font 
const text_path = document.querySelectorAll("textpath");

const object1 = {
    bracelet: 40,
    watch: 8
};

per_button.onclick = function () {
    mod_box.style.display = "block"
}
close_button.onclick = function () {
    mod_box.style.display = "none"
}


function load() {

    const data_head = document.getElementById('product_title').innerHTML;
    const data_head_2 = document.getElementById('product_title').innerHTML;

    const c = localStorage.getItem(data_head);
    const c2 = localStorage.getItem(data_head_2+" L");
    const a = document.getElementById('input1');
    const a2 = document.getElementById('text_svg');
  


    a.value = c;
    a2.innerHTML = c;
   
    a2.style.letterSpacing=c2;
   

    

    //  setting max value of input tag 



    // for (const [key, value] of Object.entries(object1)) {

    //     for (let i = 0; i < product_tags_array.length; i++) {

    //         if (`${key}` == product_tags_array[i]) {

    //             input.maxLength = `${value}`;

    //         }

    //     }


    // }


    //  setting path for curve
    const paths_objects = {
        top_curve: "M88,194 C209,174 391,240 428,293",
        down_curve_2: "M69,262 C197,336 389,299 416,261",
        down_curve: "M65,272 C176,339 380,312 431,270",
        watch_middle: "M195,275 C212,275 248,275 275,275"
    };
    const svg_tag = document.getElementById('curve');
    for (const [key, value] of Object.entries(paths_objects)) {

        for (let i = 0; i < product_tags_array.length; i++) {



            if (`${key}` == product_tags_array[i]) {

                svg_tag.setAttribute('d', `${value}`);

            }

        }


    }
    // path_id.setAttribute('d')="M69,262 C197,336 389,299 416,261";
    //for setting color of svg text;
    
    const colo = document.getElementById("color_svg_2");
    if (product_tags_array.includes("watch")) {

      
        colo.style.fill = "white";
        input.style.fontFamily = "Better Grade";
      
        colo.style.fontFamily = "Better Grade";
        // input.style.fontWeight="bold";
        // col.style.fontWeight="bold";
        // colo.style.fontWeight="bold";


    }
    else if(product_tags_array.includes("bracelet"))
    {
       
        // col.style.fontWeight="590";
      
        colo.style.fill="#323232";
        // colo.style.fontWeight="590";
        colo.style.textShadow="0px 1px 0px  ";
        
        input.style.fontFamily = "Compasse ";
       
        colo.style.fontFamily = "Compasse";


    }
}

    

// }


function writing() {

    let a = document.getElementById('input1');
   
    let d = window.getComputedStyle(document.getElementById("text_svg")).letterSpacing;

    let b = document.getElementById("text_svg");



    b.innerHTML = a.value;


    
    // resize_to_fit();
    if(product_tags_array.includes('bracelet')){

        b.style.letterSpacing="3px";
      
        b.style.fontSize="14px";
      
        if(a.value.length<=34){
            b.style.letterSpacing="3px";
        }
        else if(a.value.length>34 && a.value.length<=36)
        {
            b.style.letterSpacing="2px";
        }
        else if(a.value.length>36 && a.value.length<=40)
        {
            b.style.letterSpacing="1px";
        }
        else if(a.value.length>40 && a.value.length<=48)
        {
            b.style.letterSpacing="0px";
            input.maxLength=48;
        }

  
    
       

    }
    else{

        b.style.letterSpacing="1.5px";
       
        if(a.value.length <=11){
            b.style.fontSize="24px";
        }
        else if(a.value.length>11 && a.value.length<=12)
        {
            b.style.fontSize="21px";
        }
        else if(a.value.length>12 && a.value.length<=13)
        {
            b.style.fontSize="19px";
        }
        else if(a.value.length>13 && a.value.length<=14)
        {
            b.style.fontSize="16px";
        }
        else if(a.value.length>14 && a.value.length<=16)
        {
            b.style.fontSize="14px";
        }
        else if (a.value.length>16)
        {
            input.maxLength=16;
   
        }


        
    }
    


}


// 		function for c

function save_edit_pic() {

    const data = document.getElementById('input1').value;
    const letter_spacing=window.getComputedStyle(document.getElementById("text_svg")).letterSpacing;
    const data_head = document.getElementById('product_title').innerHTML;
    const data_head_2 = document.getElementById('product_title').innerHTML;

    const cookie = document.cookie = "" + data_head + "=" + data + "; expires=Tues, 20 Dec 2022 12:00:00 UTC";

    localStorage.setItem(data_head, data,);
    localStorage.setItem(data_head_2+" L",letter_spacing);
    mod_box.style.display = "none"

}
