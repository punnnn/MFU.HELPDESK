<template>
    <div class="container">
        <div class="headtext">
                <h2>Noise Issue</h2>
                <router-link to="/historyadmin">
  <button class="custom-btn">Report Manager</button>
</router-link>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/5278/5278522.png">
        <div class="barcontainer">
            <div class="bar"></div>
        </div>
        <div class="bartext">
            <p>Report Submit</p>
            <p>Information Receive</p>
            <p>In Process</p>
            <p>Finish</p>
        </div>
        <div class="line1container"><div class="line1"></div></div>
        <div class="maintextcontainer">
            <p>ยังไม่มีข้อมูล</p>
            <p>ยังไม่มีข้อมูล</p>
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: 390px;
        height: 800px ;
        border-radius: 15px;
        background-color: white;
    }
    .headtext{
        display:flex;
        justify-content: space-between;
        padding-top: 20px;
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 15px;
    }
    .headtext h2{
        font-weight: bold;
        font-size: 23px;
    }
    .headtext button{
        border: none;
        background-color: white;
        color: rgb(53, 115, 247);
    }
    img{
        width:90px;
        height: 90px;
        margin-left: 40px;
        margin-bottom: 25px;
    }
    .barcontainer{
        display: flex;
        justify-content: center;
    }
    .bar{
        width: 360px;
        height: 10px;
        background-color: rgb(217, 217, 217);
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .bartext{
        display: flex;
        justify-content: space-around;
        font-size: 14px;
    }
    .line1container{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .line1{
        width:375px;
        height:2px;
        background-color: rgb(217, 217, 217);
        margin-top: 10px;
        margin-bottom: 10px;  
    }
    .maintextcontainer{
        margin-top: 17px;
        margin-left: 25px;
        margin-right: 25px;
    }
    .maintextcontainer p {
        font-size: 14px;
        margin-bottom: 7px;
    }
</style>