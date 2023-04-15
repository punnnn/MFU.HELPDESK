<template>
    <div>
        <header>
            <RouterLink to="/">
            <button class="backBtn">&lt</button>
            </RouterLink>
            <div class="logotext">
                <h4>MFU.HELPDESK</h4>
                <p>Problem Report</p>
            </div>
            <button class="child3">></button>
            
        </header>
    </div>
</template>

<style scoped>


header {
    height: 60px;
    width: 391px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: rgb(238, 238, 238);
}

.logotext{
    text-align: center;   
}

.logotext h4{
    font-weight: bold;
    font-size: 15px;
}

.logotext p{
    font-size: small;
}

.child3{
    border: none;
    font-size: 30px;
    color: rgb(238, 238, 238);
}

.backBtn{
    border: none;
    font-size: 30px;
    color: rgb(53, 115, 247);
}





</style>