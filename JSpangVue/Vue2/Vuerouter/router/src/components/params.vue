<template>
    <div>
        <h2>{{ msg }}</h2>
        <div><p>newsId:{{ $route.params.newsId }}</p></div>
        <div><p>newsTitle:{{ $route.params.newsTitle }}</p></div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:'params page',
            }
        },
        beforeRouteEnter:(to,from,next)=>{
            console.log('准备进入路由');
            next();
        },
        beforeRouteLeave:(to,from,next)=>{
            console.log('准备离开路由');
            next();
        }
    }
</script>