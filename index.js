function shadow_image(options){
    let images = document.querySelectorAll('.shadow_image');

    if(options.shadow_type === 'hard')
        options.shadow_type='0px'
    else
        options.shadow_type= '15px'

    images.forEach(image =>{
        image.style.box_shadow = '10px 10px  $ {options.shadow_type} 1px rgbe(0,0,0,0.12) ';

        if(options.padding){
            image.style.padding= 'lem'
        }
    })
}

module.exports.shadow_image=shadow_image;