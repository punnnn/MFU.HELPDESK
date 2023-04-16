<template>
    <div class="container">
        <div class="headtext">
            
                <h2>Noise Issue</h2>
                <p>(Report Confirm)</p>
                
       
        </div>
        <div class="line1container"><div class="line1"></div></div>
        <div class="maintextcontainer">
            <p>Description: มีเสียงดังจากเพดานชั้นสาม คาดว่าเป็นหนูอยากให้ช่วย
จัดการค่ะ อ่านหนังสือไม่ได้เลย ขอบคุณค่ะ</p>
            <p>Location: อาคารลำดวน 2 ชั้น 3</p>
            <p>Contact: Pornsiri Chan o cha, 0987654123 </p>
            <p>Photo :      File.jpg      File2.jpg </p>
            <p>Name: Pornsiri Chan-o-cha</p>
            <p>ID: 6881305007 </p>
            <p>Date: 23/2/2023</p>
            <p>Time: 8:42 PM </p>
            
            <router-link to="/statusline">
  <button class="custom-btn">Status</button>
</router-link>

            

        </div>
    </div>
</template>

<style scoped>
.custom-btn {
  background-color: transparent; /* กำหนดพื้นหลังเป็นโปร่งใส */
  border: none; /* ลบเส้นขอบของปุ่ม */
  color: blue; /* กำหนดสีตัวอักษร */
  cursor: pointer;
  outline: none; /* ไม่แสดงเส้นโค้งเมื่อคลิกปุ่ม */

}

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