<?php
$PageTitle = "PMC - Online Property Management Tools";
$PageDescription = "Use our property management tools to post listings, manage rental applications, screen tenants and collect rent payments all with PMC.";
function customPageHeader()
{ ?>
    <!--Arbitrary HTML Tags-->
<?php }
// Included Header for Tenants
include("./include/tenant/header.php")
?>

<div class="page page-no-padding landingPage">
    <div id="LandingPage-Hero" class="Hero-wrapper billboard">
        <div class="Hero-content billboard-content">
            <h1 class="billboard-title">
                An online tenant portal designed
                <br>
                with renters in mind.
            </h1>
            <div class="billboard-subtitle">
                Pay rent online, submit maintenance requests, and more through the PMC tenant portal.
            </div>
            <a href="#" class="billboard-link">
                <span class="billboard-btn">Post your first listing free</span>
            </a>
        </div>
    </div>
    <!-- Continue your code from this comment-->
</div>
</div>
<!-- Footer -->
<?php include("./include/tenant/footer.php") ?>
<!-- Footer -->
</div>
</div>
</div>
</body>

</html>