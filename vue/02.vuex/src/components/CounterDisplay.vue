<template>
    <div>
        Count is {{ counter }}
    </div>
</template>

<script>
import store from '../store'
export default {
    computed:{
        counter(){
            return store.state.counter;
        }
    }
    // data (){
    //     return {
    //         count: 0
    //     }
    // },
    // events:{
    //     increment(){
    //         this.count++;
    //     }
    // }
}
</script>
