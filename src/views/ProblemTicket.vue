<template>
    <div class="container">
        <div class="headbtn">
            <router-link to="/normalreport"><button class="cancel">Cancel</button></router-link>
            <router-link to="/statustracking"><button class="status">Status</button></router-link>
        </div>
        <div class="line1container"><div class="line1"></div></div>
        
        <div class="headtext">
            <h2>Noise Issue</h2>
            <p>(Report sended)</p>
        </div>
        <div class="maintext">
            <p>Description: มีเสียงดังจากเพดานชั้นสาม คาดว่าเป็นหนูอยากให้ช่วยจัดการค่ะ ขอบคุณค่ะ</p>
            <p>Location: อาคารลำดวน 2 ชั้น 3</p>
            <p>Contact: Pornsiri Chan o cha, 0987654123 </p>
            <p>Photo:</p>
            <p>Name: Pornsiri Chan-o-cha</p>
            <p>ID: 6881305007 </p>
            <p>Date: 23/2/2023</p>
            <p>Time: 8:42 PM </p>
        </div>
        <div class="line1container"><div class="line1"></div></div>
    </div>
</template>

<style scoped>
    .container{
        width: 390px;
        height: 800px ;
        border-radius: 15px;
        background-color: white;
    }
    .headbtn{
        display: flex;
        justify-content: space-between;
        margin-left: 25px;
        margin-right: 25px;
        padding-top: 15px;
        
    }
    .cancel{
        border: none;
        background-color: white;
        color: rgb(247, 53, 53);
    }
    .status{
        border: none;
        background-color: white;
        color: rgb(53, 115, 247);
    }
    .line1container{
        display: flex;
        justify-content: center;
    }
    .line1{
        width:350px;
        height:2px;
        background-color: rgb(217, 217, 217);
        margin-top: 10px;
        margin-bottom: 10px;  
    }
    .headtext{
        display: flex;
        justify-content: space-between;
        margin-left: 25px;
        margin-right: 25px; 
        align-items: center;
        margin-bottom: -5px;
    }
    .headtext h2{
        font-weight: bold;
        font-size: 23px;
    }
    
    .maintext{
        margin-left: 25px;
        margin-right: 25px; 
    }
    .maintext p{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>