
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
    const c2 = localStorage.getItem(data_head_2+" f");
    const a = document.getElementById('input1');
    const a2 = document.getElementById('text_svg');
    const a3 = document.getElementById('text_svg2')


    a.value = c;
    a2.innerHTML = c;
    a3.innerHTML = c;
    a3.style.fontSize=c2;
    a2.style.fontSize=c2;

    

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
    const col = document.getElementById("color_svg_1");
    const colo = document.getElementById("color_svg_2");
    if (product_tags_array.includes("watch")) {

        col.style.fill = "white";
        colo.style.fill = "white";
        input.style.fontFamily = "Compasse";
        col.style.fontFamily = "Compasse";
        colo.style.fontFamily = "Compasse";


    }
    else if(product_tags_array.includes("bracelet"))
    {
        input.style.fontFamily = "Better Grade, sans-serif";
        col.style.fontFamily = "Better Grade, sans-serif";
        colo.style.fontFamily = "Better Grade, sans-serif";
        input.style.fontWeight="bolder";
        col.style.fontWeight="bolder";
        colo.style.fontWeight="bolder";


    }
}

function resize_to_fit() {
    let color_svg_2 = document.getElementById("color_svg_2");
    let b = document.getElementById("text_svg");
    let c = document.getElementById("text_svg2");

   

    if (b.getBBox().width >= 355) {

        let fontSizee = window.getComputedStyle(b).fontSize;
        b.style.fontSize = (parseFloat(fontSizee) - 1) + 'px';

    }
    else{
        resize_to_fit();
    }
   
    

}


function writing() {

    let a = document.getElementById('input1');
    let c = document.getElementById("text_svg2");
    let d = window.getComputedStyle(document.getElementById("text_svg")).fontSize;

    let b = document.getElementById("text_svg");



    b.innerHTML = a.value;
    c.innerHTML = a.value;


    
    // resize_to_fit();
    if(product_tags_array.includes('bracelet')){
        if(a.value.length <=40){
            b.style.fontSize="14px";
        }
       else if(a.value.length>40 && a.value.length<=43){
            b.style.fontSize="13px";
        }
        else if(a.value.length<=40)
        {
            b.style.fontSize="14px";
        }
        
        else if (a.value.length <=43){
            b.style.fontSize="13px";
        }
        else if(a.value.length >43 && a.value.length <=46){
            b.style.fontSize="12px";
        }
        else if(a.value.length>47 && a.value.length <=50)
        {
            b.style.fontSize="11px";
        }
        else if( a.value.length>50 && a.value.length <=53 )
        {
            b.style.fontSize="10px";
        }
        else if( a.value.length>53 && a.value.length <=54 )
        {
            b.style.fontSize="9px";
        }
        else if( a.value.length>54 && a.value.length <=57 )
        {
            b.style.fontSize="8px";
        }
        else if( a.value.length>57 && a.value.length <=60 )
        {
            b.style.fontSize="7px";
        }
        else if( a.value.length>60 && a.value.length <=63 )
        {
            b.style.fontSize="6px";
        }
        else if(a.value.length>63){
            // alert("More Values Can't Be Entered.");
            input.maxLength=63;
        }
        c.style.fontSize=d;

    }
    else{
        if(a.value.length <=9){
            b.style.fontSize="14px";
        }
        else if(a.value.length>9 && a.value.length<=10)
        {
            b.style.fontSize="13px";
        }
        else if(a.value.length>10 && a.value.length<=11){
            b.style.fontSize="12px";
        }
        else if(a.value.length>11 && a.value.length<=12)
        {
            b.style.fontSize="11px";

        }
        else if(a.value.length>12 && a.value.length<=13)
        {
            b.style.fontSize="10px";

        }
        else if(a.value.length>13 && a.value.length<=14)
        {
            b.style.fontSize="9px";

        }
        else if(a.value.length>14 && a.value.length<=15)
        {
            b.style.fontSize="8px";

        }
        else if(a.value.length>15 && a.value.length<=16)
        {
            b.style.fontSize="7px";

        }
        else if(a.value.length>16 && a.value.length<=18)
        {
            b.style.fontSize="6px";

        }
        else if(a.value.length>18){
            // alert("More Values Can't Be Entered.");
            input.maxLength=18;
        }
        c.style.fontSize=d;
        
    }
    


}


// 		function for c

function save_edit_pic() {

    const data = document.getElementById('input1').value;
    const font_size=window.getComputedStyle(document.getElementById("text_svg")).fontSize;
    const data_head = document.getElementById('product_title').innerHTML;
    const data_head_2 = document.getElementById('product_title').innerHTML;

    const cookie = document.cookie = "" + data_head + "=" + data + "; expires=Tues, 20 Dec 2022 12:00:00 UTC";

    localStorage.setItem(data_head, data,);
    localStorage.setItem(data_head_2+" f",font_size);
    mod_box.style.display = "none"

}
