import {ref} from 'vue';
const nowTime = ref("00:00:00");
    const getNowTime = () => {
      const now = new Date();
      const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
      const min =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      const sec =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
      nowTime.value = hour + ":" + min + ":" + sec;
      setTimeout(getNowTime, 1000); //每一秒执行一次这个方法;
    };
    export {nowTime,getNowTime}