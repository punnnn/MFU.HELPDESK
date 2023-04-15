<template>
    <RouterLink to="/problemticket" style="text-decoration: none; color: inherit;">
        <div class="container">
            <div class="card">
                <div class="frontcard">
                    <img src="https://cdn-icons-png.flaticon.com/512/5278/5278522.png">
                    <h4>Noise Issues</h4>
                    <p>Loud, Disturbing Noise</p>
                </div>
                <div class="line"></div>
                <div class="endcard">
                    <p>Description: มีเสียงดังจากเพดานชั้นสาม คาดว่าเป็นหนู...</p>
                    <p>Name: Pornsiri Chan-o-cha</p>
                    <p>ID: 6881305007 </p>
                    <p>Date: 23/2/2023</p>
                    <div class="completecontainer">
                        <h4>Time: 8:42 PM</h4>
                        <p>Completed</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="frontcard">
                    <img src="https://cdn-icons-png.flaticon.com/512/9095/9095902.png">
                    <h4>Other Issues</h4>
                    <p>Other Issues</p>
                </div>
                <div class="line"></div>
                <div class="endcard">
                    <p>Description: ดนสฟ่หดห่วดวฟาก่ดวสฟ่วหสดสห่สวดฟสา</p>
                    <p>Name: Pornsiri Chan-o-cha</p>
                    <p>ID: 6881305007 </p>
                    <p>Date: 23/2/2023</p>
                    <div class="completecontainer2">
                        <h4>Time: 8:42 PM</h4>
                        <p>Rejected</p>
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
    
    .card{
        width: 350px;
        height: 150px;
        background-color: white ;
        margin-left: 15px;
        border-radius: 10px;
        margin-bottom: 5px;
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .frontcard{
        text-align: center;
        width: 140px;
    }
    .frontcard img{
    height: 60px;
    width: 60px;
    margin-top: 20px;
    }
    .frontcard h4{
    font-weight: bold;
    
    }
    .frontcard p {
    font-size: 9px;
    }

    .line {
        width: 2px;
        height: 120px;
        background-color: rgb(217, 217, 217);
        border-radius: 2px;
    }
    .endcard{ 
        margin-left:10px ;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .endcard p {
        padding-top: 3px;
        padding-bottom: 3px;
        font-size: 10px;
    }
    .completecontainer{
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        
    }
    .completecontainer h4{
        font-size: 10px;
    }
    .completecontainer p{
        color: rgb(98,196,90);
        font-size: 13px;
        
    }
    .completecontainer2{
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        
    }
    .completecontainer2 h4{
        font-size: 10px;
    }
    .completecontainer2 p{
        color: rgb(247, 53, 53);
        font-size: 13px;
    }
</style>