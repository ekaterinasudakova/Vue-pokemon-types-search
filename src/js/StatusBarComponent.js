Vue.component('status-bar', {
    props: ['keyword','pokemon-data'],
    data: function(){
        return{
        
        }
    },
    template:
    `
        <div>
           Showing 10 {{keyword}} type pokemon
        </div>
    `
})