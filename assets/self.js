
var mod_box = document.getElementById("personalize_block");
var per_button = document.getElementById("personalize_button");
var close_button = document.getElementById("close_block");
let b = document.getElementById("text_svg");
const svg_tag = document.getElementById('curve');
const text_svg = document.getElementById("color_svg_2");
const proudct_tags = document.getElementById('p_t');
const product_tags_array = proudct_tags.innerHTML.split(",");
const input = document.getElementById('input1');
const title = document.getElementById('product_title').innerHTML.trimEnd();
//for font 
const text_path = document.querySelectorAll("textpath");



per_button.onclick = function () {
    mod_box.style.display = "block"
}
close_button.onclick = function () {
    mod_box.style.display = "none"
}
//loading function
const bracelet_styles={
            title:"bracelets_styles",
            font_family:"Compasse",
            text_transform:"uppercase",
            fill:"#323232",
            text_shadow:"0px 0.8px 0px"
};
const watch_styles={
    title:"watch_styles",
    font_family:"Better Grade",
    text_transform:"capitilize",
    fill:"white",
    text_shadow:"0"
};
// fontfamily,texttransform,fill
const global_data = [
                {
                    title:"bracelet",
                    name:"PERSONALISED CLASSIC BRACELET",
                    sides:"1",
                    path:"M88,194 C209,174 391,240 428,293",
                    max_length:"42",
                    font_family:bracelet_styles.font_family,
                    text_transform:bracelet_styles.text_transform,
                    fill:bracelet_styles.fill,
                    text_shadow:bracelet_styles.text_shadow

                },
                {
                    title:"bracelet",
                    name:"PERSONALISED SILVER KADA",
                    sides:"1",
                    path:"M69,262 C197,336 389,299 416,261",
                    max_length:"42",
                    font_family:bracelet_styles.font_family,
                    text_transform:bracelet_styles.text_transform,
                    fill:bracelet_styles.fill,
                    text_shadow:bracelet_styles.text_shadow

                }, 
                {
                    title:"bracelet",
                    name:"PERSONALISED ZODIAC BRACELET",
                    sides:"1",
                    path:"M65,272 C176,339 380,312 431,270",
                    max_length:"42",
                    font_family:bracelet_styles.font_family,
                    text_transform:bracelet_styles.text_transform,
                    fill:bracelet_styles.fill,
                    text_shadow:bracelet_styles.text_shadow

                },
                {
                    title:"watch",
                    name:"PERSONALISED EVERTON WATCH",
                    sides:"1",
                    path:"M195,275 C212,275 248,275 275,275",
                    max_length:"16",
                    font_family:watch_styles.font_family,
                    text_transform:watch_styles.text_transform,
                    fill:watch_styles.fill,
                    text_shadow:watch_styles.text_shadow

                }
                
                
]
;
function load(){

    global_data.forEach(function(item){

        if(item.name==title){
                svg_tag.setAttribute('d',item.path);
                text_svg.style.fill=item.fill;
                text_svg.style.textTransform=item.text_transform;
                text_svg.style.fontFamily=item.font_family;
                input.maxLength=item.max_length;
                // input.style.fontFamily=item.font_family;
                text_svg.style.textShadow=item.text_shadow;
                
        }


    })
   


}





function writing() {

    
   
    b.innerHTML = input.value;

    // resize_to_fit();
    if (product_tags_array.includes('bracelet')) {


        let inputlength = input.value.length;
        b.style.fontSize = "14px";
        input.style.textTransform = "uppercase";
        b.style.textTransform = "uppercase";

        if (inputlength < 31) {
            b.style.letterSpacing = "3px";
            console.log("working");
        }
        else if (inputlength > 31 && inputlength <= 34) {
            b.style.letterSpacing = "2px";
        }
        else if (inputlength > 34 && inputlength <= 38) {
            b.style.letterSpacing = "1px";
        }
        else if (inputlength > 38 && inputlength <= 42) {
            b.style.letterSpacing = "0px";
            a.maxLength = 42;
        }
        else if (inputlength > 42) {
            a.maxLength = 42;
            b.style.letterSpacing = "0px";
        }





    }
    else {

        b.style.letterSpacing = "1.5px";
        b.style.textTransform = "capitalize";
        if (a.value.length <= 11) {
            b.style.fontSize = "24px";
        }
        else if (a.value.length > 11 && a.value.length <= 12) {
            b.style.fontSize = "21px";
        }
        else if (a.value.length > 12 && a.value.length <= 13) {
            b.style.fontSize = "19px";
        }
        else if (a.value.length > 13 && a.value.length <= 14) {
            b.style.fontSize = "16px";
        }
        else if (a.value.length > 14 && a.value.length <= 16) {
            b.style.fontSize = "14px";
        }
        else if (a.value.length > 16) {
            input.maxLength = 16;

        }



    }



}




function save_edit_pic() {

    mod_box.style.display = "none"

}

function save_edit_pic() {

    mod_box.style.display = "none"

}