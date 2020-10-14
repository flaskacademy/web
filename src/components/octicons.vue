<template>
    <svg 
        :width="$octicons[icon].heights[get_size].options.width"
        :height="$octicons[icon].heights[get_size].options.height"
        :viewBox="$octicons[icon].heights[get_size].options.viewBox"
        aria-hidden="true"
        :version="$octicons[icon].heights[get_size].options.version" 
        :class="$octicons[icon].heights[get_size].options.class" 
        v-html="$octicons[icon].heights[get_size].path"
    ></svg>
</template>

<script>
export default {
    props: ['icon', 'size'],
    computed: {
        get_size: function(){
            if(this.size == undefined){
                return '24';
            } else {
                switch(this.size){
                    case 'sm':
                        return '16';
                        break;
                    case 'lg':
                        return '24';
                        break;
                    case '16':
                        return '16';
                        break;
                    default:
                        return '24'
                }
            }
        }
    }
}
</script>