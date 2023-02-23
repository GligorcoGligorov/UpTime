<template>


<div class="d-flex cover-container w-100 h-100 mx-auto flex-column">

    
    <header class="d-flex justify-content-between m-4 p-4 ">
        <div class="">
            <h3 class="text-white">Cover</h3>
        </div>
        <div class="d-none d-sm-block">
            <nav class="nav nav-masthead justify-content-center">
                <a class="nav-link fw-bold  active" aria-current="page" href="#">Home</a>
                <a class="nav-link fw-bold " href="#">Features</a>
                <a class="nav-link fw-bold " href="#">Contact</a>
            </nav>
        </div>
        <div class="d-block d-sm-block d-sm-none">
            <svg style="color: white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40"
                zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0">
                <defs>
                    <clipPath id="id1">
                        <path
                            d="M 3.386719 7.164062 L 26.613281 7.164062 L 26.613281 22.40625 L 3.386719 22.40625 Z M 3.386719 7.164062 "
                            clip-rule="nonzero" fill="white"></path>
                    </clipPath>
                </defs>
                <g clip-path="url(#id1)">
                    <path fill="white"
                        d="M 3.398438 22.40625 L 26.601562 22.40625 L 26.601562 19.867188 L 3.398438 19.867188 Z M 3.398438 16.054688 L 26.601562 16.054688 L 26.601562 13.515625 L 3.398438 13.515625 Z M 3.398438 7.164062 L 3.398438 9.703125 L 26.601562 9.703125 L 26.601562 7.164062 Z M 3.398438 7.164062 "
                        fill-opacity="1" fill-rule="nonzero"></path>
                </g>
            </svg>
        </div>
    </header>

    
    
    <div class="main px-3 mt-5">
        <div>
            <h3 class="text-xl fs-1 textColor">Insert Url to check website</h3>
        </div>
        <div class="div1 p-3">
            <div class="input-group">
                <span class="input-group-text moreHeight" id="basic-addon3">example.com</span>
                <input type="text" v-model="this.url" autofocus class="form-control moreHeight" id="basic-url" aria-describedby="basic-addon3">
                <div class="d-block w-100 d-sm-none"></div>

                <!-- <input  class="w-100" type="text" id="input" v-model="url" autofocus> -->
                <button class="btn btn-lg btn-primary fw-bold mx-2 btnWidth rounded-sm" @keyup.enter="getStatusCode()" @click="getStatusCode()" id="btn">Insert</button>  
            </div>
        </div>
        
        <div :class="statusCode == 200 ? 'green' : (statusCode ? 'red' : 'text-white')" class="m-2">
            <span class="text-xl fs-3">Status Code: {{ statusCode != 200 && statusCode ? '400' : '' }} {{ statusCode }} {{ statusCode == 200 ? 'OK' : '' }} </span>
        </div>
        <div class="m-2">
            <span class="text-xl fs-5 text-white">{{ this.lastUrl }}</span>
        </div>
    </div>

    <footer class="fixed-bottom text-white-50 bgColor">
        <p class="m-0 p-2">Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a></p>
    </footer>
    
</div>
    
</template>



<script>


export default {
    
    name: 'UpTime',
    data() {
        return {
            url: '',
            statusCode: null,
            lastUrl : ''
        
        }
    },
    methods: {
    
        getStatusCode: function() {
            fetch(`http://localhost:3000/checkSite?url=${this.url}`)
                .then(response => response.json())
                .then(data => {
                    this.statusCode = data.status;
                    console.log(data);
                    this.lastUrl = this.url;
                    this.url = '';

                })
                .catch(error => {
                    console.log(error);
                    if (error.response) {
                        this.statusCode = error.response.status
                    } else {
                        this.statusCode = "An error occurred, no response"
                    }
                });

        }       
    },
   
    
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input{
    width: 50%;
}
.red{
    color: red;
    font-weight: bold;
}
.green{
    color: green;
    font-weight: bold;
}

body {
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
    height: 100%;
}

.cover-container {
    max-width: 42em;
}

.moreHeight{
    height: 50px !important;
}


/*
 * Header
 */

.nav-masthead .nav-link {
    color: rgba(255, 255, 255, .5);
    border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link+.nav-link {
    margin-left: 1rem;
}

.nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
}
.textColor{
    color: gainsboro;
}
.bgColor{
    background-color: rgba(151, 148, 148, 0.17);
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 576px) {
    .btnWidth {
        width: 100%;
        margin-top: 20px;
    }
    .rounded-sm {
        border-radius: 0.25rem !important;
    }
    .moreHeight {
        height: 70px !important;
    }
    .btn{
        width: 50%;
        height: 20% !important;
        display: block;
        margin: 10% auto !important;
    }
}


</style>
