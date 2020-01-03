<template>
    <div>
<!--        <div class="container">-->
<!--            <div class="container_navbarmenu">-->
<!--                <ul>-->
<!--                    <li><router-link to="/">Home</router-link></li>-->
<!--                    <li><router-link to="/about">About</router-link></li>-->
<!--                    <li><router-link to="/data">Data</router-link></li>-->
<!--                </ul>-->
<!--            </div>-->
<!--            <div class="container_heroimage">-->
<!--                <h1>Collins <span>Kiprotich</span></h1>-->
<!--                <button>WELCOME</button>-->
<!--            </div>-->
<!--            <hr />-->
<!--            <div class="container_body">-->
<!--                <div class="container_tasks">-->
<!--                    <h2>Today's Tasks</h2>-->
<!--                    <ul>-->
<!--                        <li>HTML</li>-->
<!--                        <li>Installing Vagrant</li>-->
<!--                        <li>Configuring NGINX</li>-->
<!--                        <li>Running Virtualhost</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <hr />-->
<!--                <div class="container_table">-->
<!--                    <h2>Team Members</h2>-->
<!--                    <table>-->
<!--                        <tr>-->
<!--                            <th>#</th>-->
<!--                            <th>Name</th>-->
<!--                            <th>Age</th>-->
<!--                            <th>Location</th>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                            <td>1</td>-->
<!--                            <td>Michael Kamau</td>-->
<!--                            <td>20</td>-->
<!--                            <td>Nairobi</td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                            <td>2</td>-->
<!--                            <td>Cetric Okola</td>-->
<!--                            <td>24</td>-->
<!--                            <td>Kisumu</td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                            <td>3</td>-->
<!--                            <td>Margaret Mwaura</td>-->
<!--                            <td>23</td>-->
<!--                            <td>Thika</td>-->
<!--                        </tr>-->
<!--                    </table>-->
<!--                </div>-->
<!--                <hr />-->
<!--                <div class="container_media">-->
<!--                    <h2>Media Content</h2>-->
<!--                    <ul>-->
<!--                        <li>-->
<!--                            <div>-->
<!--                                <video width="400" height="250" controls>-->
<!--                                    <source src="../../assets/video.mp4" type="video/mp4" />-->
<!--                                </video>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <div>-->
<!--                                <audio controls>-->
<!--                                    <source src="../../assets/audio.mp3" type="audio/mpeg" />-->
<!--                                </audio>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <hr />-->
<!--                <div class="container_form">-->
<!--                    <h2>Forms</h2>-->
<!--                    <form action="">-->
<!--                        <input type="text" placeholder="Enter your name" />-->
<!--                        <input type="number" min="0" placeholder="Enter your age" />-->
<!--                        <button>SUBMIT</button>-->
<!--                    </form>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="container_footer">-->
<!--                Copyright 2019-->
<!--            </div>-->
<!--        </div>-->
<!--        <div>-->
<!--            <slot></slot>-->
<!--        </div>-->
        <div class="container_navbarmenu">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/data">Data</router-link></li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
