document.addEventListener('DOMContentLoaded', function () {
   



    const header = document.getElementById('headerDiv');
    header.innerHTML = 

    `<div class="mdc-tab-bar mdc-top-app-bar mdc-top-app-bar--fixed" role="tablist">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">

                <button id="programsbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='index.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label"><img tabindex="0" style="width:2rem" src="logosquare2.png" aria-label="coat button"></span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>

                <button id="programsbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='scientista.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Scientista?</span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>

                <button id="programsbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='programs.html'">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Programs</span>
                    </span>
                    <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple"></span>
                </button>

            <button id="valuesbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='aboutus.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">About Us</span>
                </span>
                <span id="valuesindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
            </button>


            <button id="valuesbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='allies.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Allies</span>
                </span>
                <span id="valuesindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
            </button>

        <button id="valuesbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='futurefair.html'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">Future Fair</span>
            </span>
            <span id="valuesindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
            </span>
            <span class="mdc-tab__ripple"></span>
        </button>

            <button id="valuesbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='redcoat.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Redcoat</span>
                </span>
                <span id="valuesindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
            </button>


                
                
                </div>
            </div>
        </div>
    </div>
    <div class="mdc-top-app-bar--fixed-adjust"></div>`
    
    const footer = document.getElementById('footerDiv');
    footer.innerHTML = 


    `<div class="footer">
    <p tabindex="0" class="mdc-typography--body1" >Data Scientista Society</p>

    <div>
    <a class="mdc-typography--body1" href="https://www.meetup.com/DataScientistaSociety/" target='blank'>
        <img src="images/social-media-icons/meetup.png" alt="Meetup" />
    </a>

    <a  class="mdc-typography--body1" href="https://www.linkedin.com/company/data-scientista-society" target='blank'>
        <img src="images/social-media-icons/linkedin.png" alt="Linkedin" />
    </a>

    <a class="mdc-typography--body1" href="mailto:datascientistasociety@gmail.com?subject=Message from website" target='blank'>
        <img src="images/social-media-icons/email.png" alt="Mail" />
    </a>

</a>
</div>


    <p tabindex="0" class="mdc-typography--body1 white">

    Email: <a class="mdc-typography--body1 white" href="mailto:datascientistasociety@gmail.com">datascientistasociety@gmail.com</a></p>

        


                    


<!-- https://mycyberuniverse.com/add-social-media-buttons-to-your-website.html -->


    

       

    
    
    <div>
    <a class="mdc-typography--body1 white" href="index.html" class="">Home</a>
    <a class="mdc-typography--body1 white" href="programs.html" class="">Programs</a>
    <a class="mdc-typography--body1 white" href="values.html" class="">Values</a>
    <a class="mdc-typography--body1 white" href="ourstory.html" class="">Our Story</a>
    <a class="mdc-typography--body1 white" href="aboutus.html" class="">About Us</a>
    <a class="mdc-typography--body1 white" href="allies.html" class="">Allies</a>
    <a class="mdc-typography--body1 white" href="redcoat.html" class="">Redcoat</a>
    <a class="mdc-typography--body1 white" href="futurefair.html" class="">Future Fair</a>
    </div>
    `



})