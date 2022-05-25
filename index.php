<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Page Title -->
    <title>PMC</title>
    <!-- Style sheets -->
    <link rel="stylesheet" href="./asset/css/main.css">
    <link rel="stylesheet" href="./asset/css/home.css">
    <link rel="stylesheet" href="./asset/css/index.css">
    <!-- Scripts -->
</head>

<body role="document">
    <!-- Nav Bar -->
    <nav id="masthead" class="navbar navbar-default" role="banner">
        <!-- Mobile Nav -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navigation">
                <span>Login</span>
            </button>
            <!-- logo / Home page link -->
            <a href="" title="Apartments for rent – RentCafe" class="logo">
                <img alt="Property Management System - logo" src="https://cdngeneral.rentcafe.com/Content/images/rc-logo-grey.png" srcset="https://cdngeneral.rentcafe.com/Content/images/rc-logo-grey.png 1x, https://cdngeneral.rentcafe.com/Content/images/rc-logo-grey-2x.png 2x">
            </a>
        </div>
        <!-- Desktop Nav -->
        <div class="navigation collapse navbar-collapse" id="navigation" role="navigation">
            <div>
                <div id="secondary">
                    <div class="dropdown home-menu-dropdown">
                        <a class="nav-link btn dropdown-toggle" type="button" id="dropdownMenuLogin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span id="username-container">
                                Login
                            </span>
                            <span class="caret"></span>
                        </a>
                        <ul class="nav navbar-nav navbar-right dropdown-menu" id="login-links" role="menu" aria-labelledby="dropdownMenuLogin">
                            <li role="presentation"><a role="menuitem" id="GuestLoginLink" rel="nofollow" href="" target="_self">Guest Login</a></li>
                            <li role="presentation"><a role="menuitem" id="ResidentLoginLink" rel="nofollow" href="" target="_blank">Resident Login</a></li>
                            <li role="presentation"><a role="menuitem" id="ManagerLoginLink" rel="nofollow" href="" target="_blank">Manager Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- Home page hero -->
    <div class="home-hero">
        <!-- change image from home.css file in the asset/css/home.css -->
        <div class="home-main">
            <h1>Rent Easy, Rest Easy</h1>
            <form action="/" id="searchForm" method="post" name="searchForm" onsubmit="RCILS.homepage.SearchBegin();">
                <div class="input-group">
                    <input id="DirectoryType" name="DirectoryType" type="hidden" value="">
                    <input id="CountryCode" name="CountryCode" type="hidden" value="US">
                    <input id="BackgroundImage" name="BackgroundImage" type="hidden" value="">
                    <input id="MarketingContentView" name="MarketingContentView" type="hidden" value="_HomeContentUS">
                    <input aria-expanded="false" aria-label="Search by City, State or Zip Code" autocorrect="off" class="form-control" data-val="true" data-val-regex="The Location field is required." data-val-regex-pattern="^(?!\s*$).+" data-val-required="The Location field is required." id="Location" name="Location" placeholder="Enter a location, apartment type (studio, pet-friendly...)" role="combobox" tabindex="0" title="Location input field" type="text" value="" data-geoidfield="LocationGeoId" data-seourlfield="LocationSeoUrl" autocomplete="off">
                    <input id="LocationGeoId" name="LocationGeoId" type="hidden" value="">
                    <input id="LocationSeoUrl" name="LocationSeoUrl" type="hidden" value="">
                    <input id="PropertyName" name="PropertyName" type="hidden" value="">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="submit" aria-label="Search"><span aria-hidden="true" class="search"></span><span class="txt"></span></button>
                    </span>
                </div>
                <span class="field-validation-valid" data-valmsg-for="Location" data-valmsg-replace="true"></span><span class="field-validation-valid" data-valmsg-for="EmptyFieldError" data-valmsg-replace="true"></span><input name="__RequestVerificationToken" type="hidden" value="CfDJ8JljB4puxg9Itj_C7YLBCgsjMH2Wi0mSSFZbZm2bEpp0o1oKOFlZLbqYFMn67iME_tmAhIXluVJkz0_qbX6UGONsU58UjVAEguAh-MwdcDqTXEA_3Ne_T8HxyO5K2V6_xMlRaMUtcBY8bHXtU4R4kx0">
            </form>
        </div>
    </div>
    <!-- Main -->
    <!-- [home-section-intro] -->
    <section class="home-section home-section-intro">
        <div class="container-fluid">
            <div class="home-section-content verified-listings">
                <h2 class="home-section-header">100% Verified Listings</h2>
                <p>RentCafe.com delivers the safest apartment search experience on the web.<br><span>Apartment listings directly from top property managers, pricing and availability updated daily, and your information<br> immediately delivered to the property!</span></p>
            </div>
        </div>
    </section>
    <!-- /[home-section-intro] -->
    <!-- [home-section-main-items] -->
    <section class="home-section-main-items">
        <section class="home-section-top-banners">

            <div class="home-section-top-banners-content rent-calculator dom-adapt" data-target="RentCalculator">
                <div class="background-images-lazy lazy loaded">
                    <h2>Figure Out Your<br> Rent Budget</h2>
                    <a class="btn btn-primary" href="https://www.rentcafe.com/rent-affordability-calculator/">
                        <span>Rent Calculator</span>
                    </a>
                </div>
            </div>


            <div class="home-section-top-banners-content apartments-near-me ">
                <div class="background-images-lazy lazy loaded">
                    <h2>Discover Apartments<br> Near You</h2>
                    <a class="btn btn-primary" href="https://www.rentcafe.com/apartments-for-rent-near-me/">
                        <span>Apartments Near Me</span>
                    </a>
                </div>
            </div>


            <div class="home-section-top-banners-content storage-units-near-me dom-adapt" data-target="StorageUnitsNearMe">
                <div class="background-images-lazy lazy loaded">
                    <h2>Find Storage Units<br> Near You</h2>
                    <a class="btn btn-primary" href="https://www.rentcafe.com/self-storage-near-me/">
                        <span>Storage Units Near Me</span>
                    </a>
                </div>
            </div>

        </section>


        <section class="home-section home-section-top-cities" id="home-section-top-cities">
            <div class="container-fluid">
                <h2 class="home-section-header">Find Apartments in Popular U.S. Cities</h2>
                <div class="carousel slide carousel-top-cities" id="top-cities" data-preload="false" data-items="2" data-interval="false" data-window-based="true">
                    <div id="containerImageId" class="carousel-inner top-cities">

                        <div class="item property-details container-image on_deck" data-custom-width="100" data-use-3d="true" style="width: 50%; transform: translate3d(0%, 0px, 0px);">
                            <img width="100%" height="100%" class="image lazy" title="Atlanta Apartments for Rent" alt="Atlanta Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/atlanta_ga.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/atlanta_ga.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/ga/atlanta/">ATLANTA <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image on_deck active" data-custom-width="100" data-use-3d="true" style="width: 50%; transform: translate3d(100%, 0px, 0px);">
                            <img width="100%" height="100%" class="image lazy" title="Austin Apartments for Rent" alt="Austin Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/austin_tx.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/austin_tx.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/tx/austin/">AUSTIN <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Charlotte Apartments for Rent" alt="Charlotte Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/charlotte_nc.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/charlotte_nc.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/nc/charlotte/">CHARLOTTE <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Chicago Apartments for Rent" alt="Chicago Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/chicago_il.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/chicago_il.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/il/chicago/">CHICAGO <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Cincinnati Apartments for Rent" alt="Cincinnati Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/cincinnati_oh.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/cincinnati_oh.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/oh/cincinnati/">CINCINNATI <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Dallas Apartments for Rent" alt="Dallas Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/dallas_tx.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/dallas_tx.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/tx/dallas/">DALLAS <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Denver Apartments for Rent" alt="Denver Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/denver_co.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/denver_co.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/co/denver/">DENVER <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Houston Apartments for Rent" alt="Houston Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/houston_tx.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/houston_tx.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/tx/houston/">HOUSTON <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Las Vegas Apartments for Rent" alt="Las Vegas Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/las_vegas_nv.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/las_vegas_nv.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/nv/las-vegas/">LAS VEGAS <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Los Angeles Apartments for Rent" alt="Los Angeles Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/los_angeles_ca.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/los_angeles_ca.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/ca/los-angeles/">LOS ANGELES <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Miami Apartments for Rent" alt="Miami Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/miami_fl.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/miami_fl.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/fl/miami/">MIAMI <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Minneapolis Apartments for Rent" alt="Minneapolis Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/minneapolis_mn.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/minneapolis_mn.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/mn/minneapolis/">MINNEAPOLIS <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Philadelphia Apartments for Rent" alt="Philadelphia Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/philadelphia_pa.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/philadelphia_pa.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/pa/philadelphia/">PHILADELPHIA <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Phoenix Apartments for Rent" alt="Phoenix Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/phoenix_az.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/phoenix_az.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/az/phoenix/">PHOENIX <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Portland Apartments for Rent" alt="Portland Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/portland_or.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/portland_or.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/or/portland/">PORTLAND <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Raleigh Apartments for Rent" alt="Raleigh Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/raleigh_nc.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/raleigh_nc.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/nc/raleigh/">RALEIGH <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="San Francisco Apartments for Rent" alt="San Francisco Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/san_francisco_ca.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/san_francisco_ca.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/ca/san-francisco/">SAN FRANCISCO <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Seattle Apartments for Rent" alt="Seattle Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/seattle_wa.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/seattle_wa.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/wa/seattle/">SEATTLE <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="St. Paul Apartments for Rent" alt="St. Paul Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/st_paul_mn.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/st_paul_mn.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/mn/st-paul/">ST. PAUL <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Tampa Apartments for Rent" alt="Tampa Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/tampa_fl.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/tampa_fl.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/fl/hillsborough-county/tampa/">TAMPA <span>APARTMENTS</span></a>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <img width="100%" height="100%" class="image lazy" title="Washington Apartments for Rent" alt="Washington Apartments for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/washington_dc.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/washington_dc.png" style="display: block;">
                            <a href="https://www.rentcafe.com/apartments-for-rent/us/dc/washington/">WASHINGTON <span>APARTMENTS</span></a>
                        </div>
                    </div>
                    <a class="carousel-control left display-none" href="javascript:void(0);" data-target="#top-cities" data-slide="prev" style="display: inline;">
                        <i class="fa-icon icon-chevron-left"></i>
                    </a>
                    <a class="carousel-control right" href="javascript:void(0);" data-target="#top-cities" data-slide="next" style="display: inline;">
                        <i class="fa-icon icon-chevron-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <section class="home-section home-section-directory directory-type">
            <div class="container-fluid">
                <h2 class="home-section-header">Get an Apartment that Suits You</h2>
                <div class="carousel carousel-directory-type slide" id="carousel-directory-type" data-items="2" data-interval="false" data-window-based="true">
                    <div id="containerDirectoryType" class="carousel-inner">

                        <div class="item property-details container-image on_deck" data-custom-width="100" data-use-3d="true" style="width: 50%; transform: translate3d(0%, 0px, 0px);">
                            <div class="item-even even-0">
                                <span class="background-images-lazy lazy loaded dir-type dir-pet-friendly-apartments"></span>
                                <a href="https://www.rentcafe.com/sitemaps/pet-friendly-apartments/">Pet Friendly Apartments</a>
                            </div>
                        </div>
                        <div class="item property-details container-image on_deck active" data-custom-width="100" data-use-3d="true" style="width: 50%; transform: translate3d(100%, 0px, 0px);">
                            <div class="item-odd odd-1">
                                <span class="background-images-lazy lazy loaded dir-type dir-cheap-apartments"></span>
                                <a href="https://www.rentcafe.com/sitemaps/cheap-apartments/">Cheap Apartments</a>
                            </div>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <div class="item-even even-2">
                                <span class="background-images-lazy lazy loaded dir-type dir-luxury-apartments"></span>
                                <a href="https://www.rentcafe.com/sitemaps/luxury-apartments/">Luxury Apartments</a>
                            </div>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <div class="item-odd odd-3">
                                <span class="background-images-lazy lazy loaded dir-type dir-houses"></span>
                                <a href="https://www.rentcafe.com/sitemaps/houses-for-rent/">Houses</a>
                            </div>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <div class="item-even even-4">
                                <span class="background-images-lazy lazy loaded dir-type dir-studio-apartments"></span>
                                <a href="https://www.rentcafe.com/sitemaps/studio-apartments-for-rent/">Studio Apartments</a>
                            </div>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <div class="item-odd odd-5">
                                <span class="background-images-lazy lazy loaded dir-type dir-1-bedroom-apartments"></span>
                                <a href="https://www.rentcafe.com/sitemaps/1-bedroom-apartments-for-rent/">1 Bedroom Apartments</a>
                            </div>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <div class="item-even even-6">
                                <span class="background-images-lazy lazy loaded dir-type dir-2-bedroom-apartments"></span>
                                <a href="https://www.rentcafe.com/sitemaps/2-bedroom-apartments-for-rent/">2 Bedroom Apartments</a>
                            </div>
                        </div>
                        <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                            <div class="item-odd odd-7">
                                <span class="background-images-lazy lazy loaded dir-type dir-3-bedroom-apartments"></span>
                                <a href="https://www.rentcafe.com/sitemaps/3-bedroom-apartments-for-rent/">3 Bedroom Apartments</a>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control left display-none" href="javascript:void(0);" data-target="#carousel-directory-type" data-slide="prev" style="display: inline;">
                        <i class="fa-icon icon-chevron-left"></i>
                    </a>
                    <a class="carousel-control right" href="javascript:void(0);" data-target="#carousel-directory-type" data-slide="next" style="display: inline;">
                        <i class="fa-icon icon-chevron-right"></i>
                    </a>
                </div>
            </div>
        </section>
        <section class="home-section home-section-intro">
            <div class="container-fluid">
                <div class=" home-section-content home-section-content-toggle find-apartments active" id="home-section-find-apartments">
                    <h2 class="home-section-header"><span class="get-apartment-steps">1</span>Find Apartments for Rent</h2>
                    <p>Featuring hundreds of thousands of apartments and houses for rent, RentCafe.com makes it easy for you to find your perfect home. Check prices, see photo displays, floor plans, amenities, and more!</p>
                </div>
                <div class="home-section-content home-section-content-toggle secure-leases" id="home-section-secure-leases">
                    <h2 class="home-section-header"><span class="get-apartment-steps">2</span>Secure Leases</h2>
                    <p>Secure your lease quickly and hassle-free, online or in-person. With RentCafe.com, you can check real-time availability, contact properties, submit rental applications, and receive approval notifications.</p>
                </div>
                <div class="home-section-content home-section-content-toggle rest-easy" id="home-section-rest-easy">
                    <h2 class="home-section-header"><span class="get-apartment-steps">3</span>Rest Easy</h2>
                    <p>It’s good to be home! On RentCafe.com you can make secure rent payments, view balances, submit maintenance requests, get community news, and renew your lease — all under one roof.</p>
                </div>
                <div class="container-toggle-section-intro">
                    <span class="active toggle-section-intro" for="home-section-find-apartments"></span>
                    <span class="toggle-section-intro" for="home-section-secure-leases"></span>
                    <span class="toggle-section-intro" for="home-section-rest-easy"></span>
                </div>
            </div>
            <div class="dom-adapt mobile_control " data-source="RentCalculator"></div>
        </section>
    </section>
    <!-- /[home-section-main-items] -->
    <!-- [home-section-apps] -->
    <section class="home-section home-section-apps">
        <div class="container-fluid">
            <h2 class="home-section-header">Get the Rental You Want - Fast and Free!</h2>
            <div class="home-section-content">
                <div class="app-section-content">
                    <p>On the move? The RentCafe.com app helps you find your next great apartment quickly. Anytime. Anywhere.</p><br>
                    <p> Download the RentCafe.com apartment search app now from iTunes and Google Play and get instant access to rental listings nearby or across the US.</p>
                    <a href="https://itunes.apple.com/us/app/apartment-search-by-rentcafe/id425728801?mt=8" target="_blank" class="download-app download-app-itunes">iTunes</a>
                    <a href="https://play.google.com/store/apps/details?id=com.yardi.systems.rentcafe.prospect" target="_blank" class="download-app download-app-googleplay">Google Play</a>
                </div>
            </div>
        </div>
    </section>
    <!-- /[home-section-apps] -->
    <section class="home-section home-section-details">
        <div class="container-fluid">
            <div class="home-section-content">
                <h2>RentCafe for Residents</h2>
                <p class="subtitle">You're home! Enjoy 24/7 resident services</p>
                <p>
                    RentCafe.com helps you save time and manage your new rental effortlessly, from anywhere. Log into your <a class="link-text" href="https://www.rentcafe.com/residentservices/apartmentsforrent/userlogin.aspx" target="_blank">Resident Portal</a>, make and keep track of rent payments, maintenance requests, and lease renewals.<br><br> Have your apartment information and services at the tip of your fingers.<br><br> Download the free RentCafe.com Resident App, available now on <a class="link-text" href="https://itunes.apple.com/us/app/rentcafe-resident/id541403633?ls=1&amp;mt=8" target="_blank">iTunes</a> and <a class="link-text" href="https://play.google.com/store/apps/details?id=com.yardi.systems.rentcafe.resident" target="_blank">Google Play</a>.
                </p>
                <a class="btn btn-primary green transparent" href="https://www.rentcafe.com/residentservices/apartmentsforrent/userlogin.aspx" target="_blank"><span>Resident Login</span></a>

            </div>
            <div class="home-section-content">
                <h2>RentCafe for Property Managers</h2>
                <p class="subtitle">List on RentCafe.com and connect with your residents</p>
                <p>
                    Gain increased exposure, more leads, and better chances to fill vacancies with qualified residents!<br><br> Generate higher resident retention and satisfaction with online rental applications, approvals, and lease renewals, while making your residents’ life easier.<br><br> With RentCafe.com fully integrated with <a class="link-text" href="http://www.yardi.com/solutions/yardi-voyager-residential" target="_blank">Yardi Voyager</a> and <a class="link-text" href="http://www.yardi.com/products/rentcafe-crm/" target="_blank">RentCafeCRM</a>, property management has never been this easy!
                </p>
                <a class="btn btn-primary green transparent" href="https://sitemanager.rentcafe.com/sitemanager/login.aspx" target="_blank"><span>Manager Login</span></a>
            </div>
        </div>
    </section>
    <section class="home-section home-section-storage" id="home-section-storage">
        <div class="container-fluid">
            <h2 class="home-section-header">Find Self-Storage Right Here on RentCafe!</h2>
        </div>
        <div class="dom-adapt mobile_control " data-source="StorageUnitsNearMe"></div>
        <div class="container-fluid">
            <p>
                Search and find storage units near you - it's easy as one-two-three!<br>
                Check out the facilities in your area, decide on the best unit size, compare prices, and then contact the storage provider.<br>
                With more than 25,000 storage listings across the country, finding your ideal storage unit on RentCafe is a breeze!
            </p>
            <div class="carousel slide carousel-top-cities-storage" id="top-cities-storage" data-preload="false" data-items="2" data-interval="false" data-window-based="true">
                <div class="carousel-inner top-cities-storage">

                    <div class="item property-details container-image on_deck" data-custom-width="100" data-use-3d="true" style="width: 50%; transform: translate3d(0%, 0px, 0px);">
                        <img class="image lazy" title="Atlanta Self-Storage Units for Rent" alt="Atlanta Self-Storage Units for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/atlanta_ga.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/atlanta_ga.png" style="display: block;">
                        <a href="https://www.rentcafe.com/storage-units/us/ga/atlanta/">ATLANTA <span>SELF-STORAGE</span></a>
                    </div>

                    <div class="item property-details container-image on_deck active" data-custom-width="100" data-use-3d="true" style="width: 50%; transform: translate3d(100%, 0px, 0px);">
                        <img class="image lazy" title="Miami Self-Storage Units for Rent" alt="Miami Self-Storage Units for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/miami_fl.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/miami_fl.png" style="display: block;">
                        <a href="https://www.rentcafe.com/storage-units/us/fl/miami/">MIAMI <span>SELF-STORAGE</span></a>
                    </div>

                    <div class="item property-details container-image" data-custom-width="100" data-use-3d="true" style="width: 50%;">
                        <img class="image lazy" title="Phoenix Self-Storage Units for Rent" alt="Phoenix Self-Storage Units for Rent" data-src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/phoenix_az.png" src="https://cdngeneral.rentcafe.com//dmslivecafe/ils/Content/marketing/popular-cities/homepage/phoenix_az.png" style="display: block;">
                        <a href="https://www.rentcafe.com/storage-units/us/az/phoenix/">PHOENIX <span>SELF-STORAGE</span></a>
                    </div>

                </div>
                <a class="carousel-control left display-none" href="javascript:void(0);" data-target="#top-cities-storage" data-slide="prev" style="display: inline;">
                    <i class="fa-icon icon-chevron-left"></i>
                </a>
                <a class="carousel-control right" href="javascript:void(0);" data-target="#top-cities-storage" data-slide="next" style="display: inline;">
                    <i class="fa-icon icon-chevron-right"></i>
                </a>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <footer id="footer">
        <div class="footer-inner container-fluid">
            <div class="footer-links">
                <div class="general-links">
                    <a href="https://www.rentcafe.com/canada/" class="home-rentcafe-canada" aria-label="RentCafe Canada Logo - Home">RentCafe Canada</a>
                    <div class="general-links-child">
                        <span>Follow us</span>
                        <a target="_blank" title="RentCafe Facebook" class="home-facebook" href="https://www.facebook.com/Rentcafecom/" aria-label="RentCafe Facebook link">Facebook</a>
                        <a target="_blank" title="RentCafe Instagram" class="home-instagram" href="https://www.instagram.com/rentcafecom/" aria-label="RentCafe Instagram link">Instagram</a>
                        <a target="_blank" title="RentCafe Twitter" class="home-twitter" href="https://twitter.com/RENTCafeCom" aria-label="RentCafe Twitter link">Twitter</a>
                        <a target="_blank" title="RentCafe Pinterest" class="home-pinterest" href="https://www.pinterest.com/rentcafecom/" aria-label="RentCafe Pinterest link">Pinterest</a>
                    </div>
                </div>
                <!--<div class="footer-site-quick-links">-->
                <ul class="site-links">
                    <li>Get to know us</li>
                    <li><a target="_blank" href="https://www.rentcafe.com/apartmentsforrent/homeaboutus.aspx">About Us</a></li>
                    <li><a target="_blank" href="https://www.rentcafe.com/apartmentsforrent/homeformanagers.aspx">List with RentCafe.com</a></li>
                    <li><a target="_blank" href="https://www.rentcafe.com/canada/">RentCafe.com Canada</a></li>
                    <li><a href="https://resources.yardi.com/legal/rentcafe-privacy-policy/" target="_blank">Privacy Policy</a></li>
                    <li><a href="https://resources.yardi.com/legal/rentcafe-terms-of-service/" target="_blank">Terms</a></li>
                    <li><a href="https://resources.yardi.com/legal/accessibility-policy/" target="_blank">Accessibility Statement</a></li>
                </ul>
                <ul class="quick-links">
                    <li>Quick links</li>
                    <li><a target="_blank" href="https://www.rentcafe.com/apartmentsforrent/homefaq.aspx">FAQ</a></li>
                    <li><a target="_blank" href="https://www.rentcafe.com/apartmentsforrent/homecontactus.aspx">Contact us</a></li>
                    <li><a target="_blank" href="https://www.rentcafe.com/sitemaps/">Sitemaps</a></li>
                    <li><a target="_blank" href="https://www.rentcafe.com/blog/">Blog</a></li>
                </ul>
                <ul class="yardi-links">
                    <li>Yardi Companies &amp; Affiliates</li>
                    <li><a target="_blank" href="https://www.yardi.com">Yardi Systems</a></li>
                    <li><a target="_blank" href="https://www.yardimatrix.com">Yardi Matrix</a></li>
                    <li><a target="_blank" href="https://www.yardikube.com">Yardi Kube</a></li>
                    <li><a target="_blank" href="https://www.yardibreeze.com">Yardi Breeze</a></li>
                    <li><a target="_blank" href="https://www.yardicorom.com">Yardi Corom</a></li>
                    <li><a target="_blank" href="https://www.storagecafe.com">StorageCafe</a></li>
                    <li><a target="_blank" href="https://www.commercialcafe.com">CommercialCafe</a></li>
                    <li><a target="_blank" href="https://www.commercialsearch.com">CommercialSearch</a></li>
                    <li><a target="_blank" href="https://www.point2homes.com">Point2</a></li>
                    <li><a target="_blank" href="https://www.propertyshark.com/mason/">PropertyShark</a></li>
                    <li><a target="_blank" href="https://www.commercialedge.com">CommercialEdge</a></li>
                    <li><a target="_blank" href="https://www.multihousingnews.com">MultiHousing News</a></li>
                    <li><a target="_blank" href="https://www.commercialsearch.com/news/">Commercial Property Executive</a></li>
                    <li><a target="_blank" href="https://42floors.com">42Floors</a></li>
                </ul>
            </div>
            <hr>
            <div class="copyright">
                <img align="bottom" alt="equal housing opportunity" height="12" src="https://cdngeneral.rentcafe.com/Content/images/ech_logo.png" title="equal housing opportunity" width="20"> © 2022 - Yardi Systems Inc. All Rights Reserved.
            </div>
        </div>
    </footer>
</body>

</html>