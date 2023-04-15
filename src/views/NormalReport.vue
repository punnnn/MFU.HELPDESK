<template>
    <div class="container">
        <div class="HeadText">
            <h2>New Report</h2>
            <RouterLink to="/ProblemTicket">
                <button>Send</button>
            </RouterLink>
        </div>
        <div class="inputcontainer">
            <h4>Description</h4>
            <input  type="text" placeholder="Issue Description...">
            <h4>Location</h4>
            <input  type="text" placeholder="Room, Building...">
            <h4>Contact</h4>
            <input  type="text" placeholder="Facebook, Line ID, Phone Number...">
            <h4>Photo</h4>
            <input class="upload" type="text" placeholder="                                    ^">
        </div>
        
    </div>
</template>

<style scoped>
    .container{
        width: 390px;
        height: 800px ;
        background-color: rgb(246,246,246);
        border-radius: 15px;
    }
    .HeadText{
        display: flex;
        margin-left: 25px;
        margin-right: 25px;
        padding-top: 15px;
        justify-content: space-between;
    }
    .HeadText h2{
        font-weight: bold;
        font-size: 23px;
        
    }
    .HeadText button{
        color: rgb(53, 115, 247);
        border: none;
        background-color:rgb(246,246,246);
    }
    .inputcontainer{
        
        padding-top: 5px;
        padding-left: 25px;
       
    }

    .inputcontainer h4{
        margin-top: 5px;
        margin-bottom: 5px;
        
    }
    input {
        height: 40px;
        width: 345px;
        border-radius: 15px;
        border-style: none;
        margin-top: 12px;
        margin-bottom: 10px;
        padding-left: 10px;   
    }
    .upload{
        font-size: 30px;
    }

    
</style>