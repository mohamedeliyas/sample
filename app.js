/// <reference path="../../Lib/angular.js" />
var ver = 2.1;
var app = angular.module('BKWEB', ['ngMaterial', 'ngRoute', 'md.data.table', 'ngMdIcons', 'mdPickers', 'angular-loading-bar', 'rzModule', 'ngAnimate', 'ngSanitize', 'ui.filters', 'angular-flexslider', 'mwl.calendar', 'slickCarousel', 'mdPickersFare'])
     .config(["$mdThemingProvider", function ($mdThemingProvider) {
         $mdThemingProvider.theme('Login')
             .primaryPalette('grey')
               .accentPalette('orange');
     }]).config(["$mdThemingProvider", function ($mdThemingProvider) {
         $mdThemingProvider.theme('default')
           .primaryPalette('red')
           .accentPalette('deep-orange')
           .warnPalette('pink');
     }])
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = false;
        //cfpLoadingBarProvider.parentSelector = "#loading-bar-container";
        cfpLoadingBarProvider.spinnerTemplate = '<div class="loader-container"> <span class="fa fa-circle-o-notch fa-spin fa-2x" style=""></span> </div>';
    }])
        /*For Routing*/
    .config(['$routeProvider', '$controllerProvider', '$locationProvider', function AppConfig($routeProvider, $controllerProvider, $locationProvider) {
        app.controller = $controllerProvider.register;
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
                .when('/home', {
                    templateUrl: 'Home/index',
                    controller: "HomeCtrl"
                }).when('/login', {
                    templateUrl: 'authentication/index',
                    controller: "LoginCtrl"
                }).when('/airline', {
                    templateUrl: 'airline/index',
                    controller: "AirhomeCtrl"
                }).when('/dresult', {
                    templateUrl: 'domestic/result',
                    controller: "DomesticCtrl"
                }).when('/dombooking', {
                    templateUrl: 'dombooking/index',
                    controller: "DombookingCtrl"
                }).when('/dombooking', {
                    templateUrl: 'dombooking/index',
                    controller: "DombookingCtrl"
                }).when('/akSnrCtzBooking', {
                    templateUrl: 'Airline/AirAsiaOffline',
                    controller: "akSnrCtzBookingCtrl"
                }).when('/intrresult', {
                    templateUrl: 'International/Result',
                    controller: "IntrResultCtrl"
                }).when('/intrbook', {
                    templateUrl: 'International/Booking',
                    controller: "IntrBookCtrl"
                }).when('/airsticket', {
                    templateUrl: 'AirTicket/TckDisplay',
                    controller: "AirTicketDisCtrl"
                }).when('/airhistory', {
                    templateUrl: 'AirHistory/History',
                    controller: "AirHistoryCtrl"
                }).when('/viewpnr', {
                    templateUrl: 'ViewPnr/Index',
                    controller: "ViewPnrCtrl"
                }).when('/mobpay', {
                    templateUrl: 'Mobile/MobilePay',
                    controller: "MobPayCtrl"
                }).when('/mobhis', {
                    templateUrl: 'Mobile/MobileHistory',
                    controller: "MobHisCtrl"
                }).when('/ecpay', {
                    templateUrl: 'ECpay/ECPayBill',
                    controller: "ECPayBillCtrl"
                }).when('/eccash', {
                    templateUrl: 'ECpay/ECCash',
                    controller: "ECCashCtrl"
                }).when('/ecTopup', {
                    templateUrl: 'ECpay/EcPayTopup',
                    controller: "EcPayTopupCtrl"
                }).when('/ecSSS', {
                    templateUrl: 'ECpay/SSS',
                    controller: "EcSSSCtrl"
                }).when('/billpaymenthistory', {
                    templateUrl: 'ECpay/ECPayHistory',
                    controller: "ECPayHisCtrl"
                    //}).when('/hotelsearch', {
                    //    templateUrl: 'Hotel/Search',
                    //    controller: "HotelSearchCtrl"
                }).when('/hotelsearch', {
                    templateUrl: 'Hotel/Result',
                    controller: "HotelRsltCtrl"
                }).when('/hotrslt', {
                    templateUrl: 'Hotel/Result',
                    controller: "HotelRsltCtrl"
                }).when('/hotBook', {
                    templateUrl: 'Hotel/Booking',
                    controller: "HotelBookCtrl"
                }).when('/hotelhistory', {
                    templateUrl: 'Hotel/History',
                    controller: "HotelHistoryCtrl"
                }).when('/bussearch', {
                    templateUrl: 'Bus/Busindex',
                    controller: "BusRsltCtrl"
                }).when('/busbook', {
                    templateUrl: 'Bus/BusBooking',
                    controller: "BusBookCtrl"
                }).when('/bushistory', {
                    templateUrl: 'Bus/BusHistory',
                    controller: "BusHistCtrl"
                }).when('/Visa', {
                    templateUrl: 'Visa/Visaindex',
                    controller: "VisaCtrl"
                }).when('/bankdeposit', {
                    templateUrl: 'BankDeposit/BankDeposit',
                    controller: "BankDepositCtrl"
                }).when('/ferrysearch', {
                    templateUrl: 'Ferry/index',
                    controller: "FerrySearchCtrl"
                }).when('/servicecherge', {
                    templateUrl: 'ServiceCharge/ServiceChargeAdd',
                    controller: "ServiceChargeCtrl"
                }).when('/cbrrequest', {
                    templateUrl: 'CBI/CBIRequest',
                    controller: "CbiRequestCtrl"
                }).when('/cbrhistory', {
                    templateUrl: 'CBI/History',
                    controller: "CbiHistoryCtrl"
                }).when('/escalation', {
                    templateUrl: 'Escalaton/index',
                    controller: "EscalationCtrl"
                }).when('/email', {
                    templateUrl: 'Email/index',
                    controller: "EmailCtrl"
                }).when('/insurance', {
                    templateUrl: 'Insurance/index',
                    controller: "InsuranceCtrl"
                }).when('/insurancehistory', {
                    templateUrl: 'Insurance/insurancehistory',
                    controller: "InsuranceHistoryCtrl"
                }).when('/ferryhistory', {
                    templateUrl: 'Ferry/FerryHistory',
                    controller: "FerryHistoryCtrl"
                }).when('/mobilepay', {
                    templateUrl: 'Mobile/MobilePay',
                    controller: "MobPayCtrl"
                }).when('/MobileHistory', {
                    templateUrl: 'Mobile/MobileHistory',
                    controller: "MobHisCtrl"
                }).when('/holidaysearch', {
                    templateUrl: 'Holiday/HolidayDetails',
                    controller: "HolidaySearchCtrl"
                }).when('/holidayDetails', {
                    templateUrl: 'Holiday/MoreDetails',
                    controller: "moreDetailsCtrl"
                }).when('/holidaybuk', {
                    templateUrl: 'Holiday/HolidayBook',
                    controller: "HolidayBookCtrl"
                }).when('/holidayhistory', {
                    templateUrl: 'Holiday/HolidayHistory',
                    controller: "HolidayBookCtrl"
                }).when('/addbagage', {
                    templateUrl: 'AddBaggage/Index',
                    controller: "AddBaggageCtrl"
                }).when('/paxcalender', {
                    templateUrl: 'PassengerCalender/Index'
                }).when('/changepassword', {
                    controller: "ChangePwdCtrl",
                    templateUrl: 'ControlPanels/ChangePassword'
                }).when('/Offer', {
                    controller: "OfferCtrl",
                    templateUrl: 'Offer/OfferIndex'
                }).when('/profile', {
                    templateUrl: 'ControlPanels/Profile',
                    controller: "ProfileCtrl"
                }).when('/Reschedule', {
                    templateUrl: 'Reschedule/Index',
                    controller: "RescheduleCtrl"
                }).when('/accountstatement', {
                    templateUrl: 'AccountStatement/Index',
                    controller: "AccountStatementCtrl"
                }).when('/aboutus', {
                    templateUrl: 'AboutUs/AboutUs'
                }).when('/contactus', {
                    templateUrl: 'ContactUs/ContactUs'
                }).when('/privacypolicy', {
                    templateUrl: 'PrivacyPolicy/PrivacyPolicy'
                }).when('/lowfarecalender', {
                    templateUrl: 'Lowfare/lowfarecalender',
                    controller: "LowfareCtrl"
                }).when('/visarecuirment', {
                    templateUrl: 'visarecuirment/VisaRecuirmentdetails',
                    controller: "LowfareCtrl"
                }).otherwise({
                    templateUrl: getpath() + 'authentication/index',
                    controller: "LoginCtrl"
                });
    }])
    .directive('ngKeyevent', function () {
        return function (scope, element, attrs) {
            element.bind("keypress", function (event) {
                var x = event.which;
                var spce = false;
                if (attrs.freeze != null) { //freeze attr is makes non editable DOM controls
                    return false;
                }
                if (attrs.space != null) {
                    spce = true;
                    if (attrs.space.toLowerCase() == "false") {
                        spce = false;
                    }
                }
                var key = window.event ? event.keyCode : event.which;
                var keychar = String.fromCharCode(key);
                keychar = keychar.toLowerCase();

                if (key == 13) { return false; }
                if ((key == null) || (key == 0) || (key == 8) || (key == 9) || key == 13 || (key == 27) || (key == 188)) {
                    return true;
                }
                if (key == 32) { return spce; }
                var Value = [];
                if (attrs.username != null) {//username attr allows only below value
                    Value = ["abcdefghijklmnopqrstuvwxyz."];
                }
                if (attrs.usernamen != null) { //usernamen attr allows only below value
                    Value = ["abcdefghijklmnopqrstuvwxyz0123456789"];
                }
                if (attrs.password != null) {//password attr allows only below value
                    Value = ["abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-.,"];
                }
                if (attrs.address != null) {//address attr allows only below value
                    Value = ["abcdefghijklmnopqrstuvwxyz0123456789,"];
                }
                if (attrs.numeric != null) {//numeric attr allows only below value
                    if (attrs.maxlength != null) {
                        if (this.value.length > attrs.maxlength - 1) {
                            return false;
                            //Check max length (numeric type max length not working so it will halps to max length)
                        }
                    }
                    Value = ["0123456789"];
                }
                if (attrs.decimal != null) {//numeric attr allows only below value
                    if (attrs.maxlength != null) {
                        if (this.value.length > attrs.maxlength - 1) {
                            return false;
                            //Check max length (numeric type max length not working so it will halps to max length)
                        }
                    }
                    Value = ["0123456789."];
                }
                if (attrs.date != null) {//date attr allows only below value
                    Value = ["0123456789/"];
                }
                if (attrs.email != null) { //email attr allows only below value
                    Value = ["abcdefghijklmnopqrstuvwxyz0123456789_@.-"];
                }
                if (Value[0].indexOf(keychar) > -1) {
                    return true;
                }
                else {
                    return false;
                }

            });
        };
    })
    .directive('ngMyclick', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {

                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngMyclick);
                    });

                    event.preventDefault();
                }
            });
        };
    })
    .factory('RemoteService', ["$http", function ($http) {
        var _FetchData = function (arg) {
            return $http(arg)
        };
        return {
            FetchData: _FetchData
        };
    }])
    .directive('ngStickytext', ["$mdSticky", " $compile", function ($mdSticky, $compile) {
        return {
            restrict: 'E',
            template: '<span>Sticky Text</span>',
            link: function (scope, element) {
                $mdSticky(scope, element);
            }
        };
    }])
    .service("Searchresult", function () {
        var Result = {};
        return {
            getResult: function () {
                return Result;
            },
            setResult: function (value) {

                Result = value;
            }
        };
    })
    .directive('setHeight', ["$window", function ($window) {
        return {
            link: function (scope, element, attrs) {
                console.log('scope, element, attrs', scope, element, attrs)
                element.css('min-height', $window.innerHeight + 'px');
            }
        }
    }])

    .directive('setClassWhenAtTop', ["$window", function ($window) {
        var $win = angular.element($window); // wrap window object as jQuery object

        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                    offsetTop = element.offset().top + 25; // get element's top relative to the document

                $win.on('scroll', function (e) {
                    if ($win.scrollTop() >= offsetTop) {
                        element.addClass(topClass);
                    } else {
                        element.removeClass(topClass);
                    }
                });
            }
        };

    }])
    .run(['$anchorScroll', function ($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }])

  




    .directive('loading', ["$http", function ($http) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                }
                scope.$watch(scope.isLoading, function (v) {
                    if (v) {
                        elm.show();
                    }
                    else {
                        elm.hide();
                    }
                })
            }
        }
        //return function (scope, elem, attrs) {
        //    scope.isLoading = function () {
        //        return $http.pendingRequests.length > 0;
        //    }
        //    scope.$watch(scope.isLoading, function (v) {
        //        if (v) {
        //            elem.show();
        //        }
        //        else {
        //            elem.hide();
        //        }
        //    })
        //}
    }])
.config(['$httpProvider', function ($httpProvider) {
    // enable http caching
    //$httpProvider.defaults.cache = true;
}])
.config(['calendarConfig', function (calendarConfig) {

    // Change the month view template globally to a custom template
    //calendarConfig.templates.calendarMonthView = 'path/to/custom/template.html'; 

    // Use either moment or angular to format dates on the calendar. Default angular. Setting this will override any date formats you have already set.
    calendarConfig.dateFormatter = 'moment';

    // This will configure times on the day view to display in 24 hour format rather than the default of 12 hour
    calendarConfig.allDateFormats.moment.date.hour = 'HH:mm';

    // This will configure the day view title to be shorter
    calendarConfig.allDateFormats.moment.title.day = 'ddd D MMM';

    // This will set the week number hover label on the month view
    calendarConfig.i18nStrings.weekNumber = '';

    // This will display all events on a month view even if they're not in the current month. Default false.
    calendarConfig.displayAllMonthEvents = true;

    // Make the week view more like the day view, ***with the caveat that event end times are ignored***.
    calendarConfig.showTimesOnWeekView = true;

}])
.factory('alert', function ($uibModal) {
    function show(action, event) {
        return $uibModal.open({
            templateUrl: 'modalContent.html',
            controller: function () {
                var vm = this;
                vm.action = action;
                vm.event = event;
            },
            controllerAs: 'vm'
        });
    }

    return {
        show: show
    };

}).filter('orderObjectBy', function () {
    return function (items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });

        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if (reverse) filtered.reverse();
        return filtered;
    };
}).filter('replaceSpl', function () {
    return function (input) {
        return input.replace(/[^a-zA-Z ]/g, " ");
    };
});
;

//angular.bootstrap(document.documentElement, ['BKAPP']);
