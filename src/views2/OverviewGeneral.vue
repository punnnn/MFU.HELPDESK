<template>
    <div class="card">
                <div class="title">
                    <div class="smalltitle">
                        <img src="https://cdn-icons-png.flaticon.com/128/2043/2043175.png">
                        <p>x</p>
                        <h4>General Issues</h4>
                    </div>
                    <h4>Tasks</h4>
                </div>
                <div class="line"></div>
                <div class="title2">
                    <div class="smalltitle">
                        <img src="https://cdn-icons-png.flaticon.com/512/5278/5278522.png">
                        <p>x</p>
                        <h4>Noise Issues</h4>
                    </div>
                    <h4>5</h4>
                </div>
                <div class="title3">
                        <p>1.IE53XM34KO</p>
                        <p>Admin01</p>
                        <p class="process">ON PROCESS</p>
                </div>
                <div class="title3">
                        <p>2.42LS32JLJF</p>
                        <p class="p1">Admin01</p>
                        <p class="process">ON PROCESS</p>
                </div>
                <div class="title3">
                        <p>3.DF234H00FG</p>
                        <p class="p2">Admin02</p>
                        <p class="waiting">WAITING</p>
                </div>
                <div class="title3">
                        <p>4.JF9LXLJ39R</p>
                        <p>Admin01</p>
                        <p class="process">ON PROCESS</p>
                </div>
                <div class="title3">
                        <p>5.K93JGS34J2</p>
                        <p class="p3">Admin02</p>
                        <p class="complete">COMPLETE</p>
                </div>
                <div class="line2"></div>
                <div class="title2">
                    <div class="smalltitle">
                        <img src="https://cdn-icons-png.flaticon.com/512/5541/5541684.png">
                        <p>x</p>
                        <h4>Smell Issues</h4>
                    </div>
                    <h4>3</h4>
                </div>
                <div class="title3">
                        <p>1.98DFHDHF14</p>
                        <p>Admin01</p>
                        <p class="process">ON PROCESS</p>
                </div>
                <div class="title3">
                        <p>2.4VJ83SKC90</p>
                        <p class="p4">Admin01</p>
                        <p class="complete">COMPLETE</p>
                </div>
                <div class="title3">
                        <p>3.SLK93DK32K</p>
                        <p class="p5">Admin02</p>
                        <p class="waiting">WAITING</p>
                </div>
                <div class="line2"></div>
                <div class="title2">
                    <div class="smalltitle">
                        <img src="https://cdn-icons-png.flaticon.com/512/4213/4213554.png">
                        <p>x</p>
                        <h4>Trash Issues</h4>
                    </div>
                    <h4>4</h4>
                </div>
                <div class="title3">
                        <p>1.JD93LXAE35</p>
                        <p class="p6">Admin02</p>
                        <p class="complete">COMPLETE</p>
                </div>
                <div class="title3">
                        <p>2.I03KCJN4IV</p>
                        <p class="p7">Admin01</p>
                        <p class="process">ON PROCESS</p>
                </div>
                <div class="title3">
                        <p>3.CI39DKMR3P</p>
                        <p class="p8">Admin01</p>
                        <p class="waiting">WAITING</p>
                </div>
                <div class="title3">
                        <p>4.CVNI9EN1NS</p>
                        <p class="p9">Admin02</p>
                        <p class="waiting">WAITING</p>
                </div>
            </div>
</template>

<style scoped>
    .card {
    width: 370px;
    height: 440px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 5px;
    cursor: pointer;
    margin-left: 10px;
}
.title {
    display: flex;
    justify-content: space-between;
    padding: 5px 5px 5px 5px;
}
.title2{
    display: flex;
    justify-content: space-between;
    padding: 5px 20px 5px 20px;
}
.title3{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding-left: 30px;
    padding-right: 30px;
}

.smalltitle {
    display: flex;
}
.smalltitle p{
    color: #ffffff;
}

.title img {
    height: 20px;
    width: 20px;
}
.title2 img {
    height: 20px;
    width: 20px;
}

.line {
    width: 370px;
    height: 2px;
    background-color: rgb(217, 217, 217);
    border-radius: 2px;
}
.line2{
    width: 320px;
    height: 2px;
    background-color: rgb(217, 217, 217);
    border-radius: 2px;
    margin-left: 25px;
    margin-top: 10px;
    margin-bottom: 5px;
}

.p1{
    padding-left: 3px;
}
.p2{
    padding-right: 33px;
}
.p3{
    padding-right: 16px;
}
.p4{
    padding-right: 13px;
}
.p5{
    padding-right: 29px;
}
.p6{
    padding-right: 13px;
}
.p7{
    padding-left: 5px;
}
.p8{
    padding-right: 32px;
}
.p9{
    padding-right: 27px;
}



.process{
    color: #FFA167;
}
.waiting{
    color:#EB6E6E;
}
.complete{
    color: #7ED957;
}

</style>