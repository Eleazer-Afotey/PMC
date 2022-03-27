<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= isset($PageTitle) ? $PageTitle : "PMC - Online Property Management Tools" ?></title>
    <meta name="description" content="<?= isset($PageDescription) ? $PageDescription : "Use our property management tools to post listings, manage rental applications, screen tenants and collect rent payments all with PMC." ?>">
    <!-- Style -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/responsive.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/custom.css">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- Icons -->
    <script src="https://code.iconify.design/2/2.2.0/iconify.min.js"></script>
    <!-- Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <div id="app-root">
        <div>
            <div class="main-body">
                <div>
                    <!-- Top Header -->
                    <div class="top-header">
                        <div class="top-header-banner responsiveContainer headerNavigation-container">
                            <div class="flex topInnerHeader topInnerFlex">
                                <!-- Top Header Left Section -->
                                <div class="HeaderNavigation-sectionLeft">
                                    <div class="HeaderNavigation-sectionLeft-mobile">
                                        <div class="MenuIcon">
                                            <div class="innerMenuIcon">
                                                <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img" class="MenuIconMobile">
                                                    <title>Menu</title>
                                                    <path stroke="none" d="M26 18H6a2 2 0 010-4h20a2 2 0 010 4zM26 10H6a2 2 0 010-4h20a2 2 0 010 4zM26 26H6a2 2 0 010-4h20a2 2 0 010 4z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="HeaderNavigation-sectionLeft-desktop">
                                        <div class="sectionLeft-desktop"></div>
                                    </div>
                                </div>
                                <!-- Top Header Middle Section -->
                                <div class="HeaderNavigation-sectionMiddle">
                                    <div class="HeaderNavigation-sectionMiddle-mobile">
                                        <div class="logo-Container">
                                            <a href="./index.html" class="logo-link">
                                                <img src="" alt="PMC">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="HeaderNavigation-sectionMiddle-desktop">
                                        <div class="sectionMiddle-desktop logo-containerDesktop">
                                            <a href="./index.html" class="logo_link">
                                                <img src="" alt="PMC">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!-- Top Header Right Section -->
                                <div class="HeaderNavigation-sectionRight">
                                    <div class="sectionRight">
                                        <div class="sectionRight-flex sectionRight-container">
                                            <div class="sectionRight-link">
                                                <a href="./tenant" class="topHeader-link">For Tenants</a>
                                            </div>
                                            <div class="sectionRight-link">
                                                <a href="#" class="topHeader-link">Pricing</a>
                                            </div>
                                            <div class="sectionRight-link">
                                                <a href="#" class="topHeader-link">Advertise</a>
                                            </div>
                                            <div class="sectionRight-link">
                                                <a href="#" class="topHeader-link">Help</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navBar">
                        <div class="navBar-inner">
                            <div class="navItem active">
                                <a href="#" class="nav-link">Landlords</a>
                            </div>
                            <div class="navItem">
                                <a href="#" class="nav-link">Rental Listings</a>
                            </div>
                            <div class="navItem">
                                <a href="#" class="nav-link">Rental Applications</a>
                            </div>
                            <div class="navItem">
                                <a href="#" class="nav-link">Tenant Screening</a>
                            </div>
                            <div class="navItem">
                                <a href="#" class="nav-link">Online Payment</a>
                            </div>
                            <div class="navItem">
                                <a href="#" class="nav-link">Online Lease</a>
                            </div>
                            <div class="navItem">
                                <a href="#" class="nav-link">Maintenance Traking</a>
                            </div>
                            <div class="navItem">
                                <a href="#" class="nav-link"></a>
                            </div>
                        </div>
                        <div class="user-auth">
                            <div class="navItem authItem">
                                <a href="#" class="btn auth-link">Sign Up</a>
                            </div>
                            <div class="navItem authItem">
                                <a href="#" class="auth-link">Log In</a>
                            </div>
                        </div>
                    </div>