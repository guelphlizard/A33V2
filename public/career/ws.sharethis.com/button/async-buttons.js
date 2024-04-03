stlib.nativeButtons = {
    supportedNativeButtons: {
        linkedinfollow: {
            log: true,
            config: true,
            dependencyLoaded: false,
            dependencyLoading: false,
            requiredFields: [
                ["st_followId", "Profile Id", "Enter '207839' for profile id"]
            ]
        },
        twitterfollow: {
            log: false,
            config: true,
            requiredFields: [
                ["st_username", "Username", "Enter 'sharethis' for username"]
            ]
        },
        pinterestfollow: {
            log: true,
            config: true,
            requiredFields: [
                ["st_username", "Username", "Enter 'sharethis' for username"]
            ]
        },
        youtube: {
            log: true,
            config: true,
            requiredFields: [
                ["st_username", "Username", "Enter 'sharethis' for username"]
            ]
        },
        foursquaresave: {
            log: false,
            config: true,
            dependencyLoaded: false,
            dependencyLoading: false
        },
        foursquarefollow: {
            log: false,
            config: true,
            requiredFields: [
                ["st_username", "Username", "Enter 'sharethis' for username"],
                ["st_followId", "Follow id", "Enter '1234567' for follow id"]
            ]
        },
        googleplusfollow: {
            log: true,
            config: true,
            requiredFields: [
                ["st_followId", "Page Id", "Enter '110967630299632321627' for page id"]
            ]
        },
        googleplusadd: {
            log: true,
            config: true,
            requiredFields: [
                ["st_followId", "Profile Id", "Enter '113842823840690472625' for profile id"]
            ]
        }
    },
    loadService: function(a) {
        if (a == "foursquaresave" || a == "foursquarefollow") {
            if (stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded == false) {
                if (stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading == false) {
                    stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading = true;
                    var c = "https://platform.foursquare.com/js/widgets.js";
                    var b = {
                        uid: "606"
                    };
                    if ("https:" == document.location.protocol) {
                        c = "https://platform-s.foursquare.com/js/widgets.js";
                        b.secure = true
                    }(function() {
                        window.___fourSq = b;
                        var d = document.createElement("script");
                        d.type = "text/javascript";
                        d.src = c;
                        d.async = true;
                        var e = document.getElementsByTagName("script")[0];
                        d.onload = function() {
                            fourSq.widget.Factory.go();
                            stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded = true;
                            stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading = false
                        };
                        d.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                fourSq.widget.Factory.go();
                                stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded = true;
                                stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading = false
                            }
                        };
                        e.parentNode.insertBefore(d, e)
                    })()
                }
            } else {
                fourSq.widget.Factory.go()
            }
        } else {
            if (a == "pinterestfollow") {} else {
                if (a == "twitterfollow") {} else {
                    if (a == "youtube") {} else {
                        if (a == "linkedinfollow") {
                            if (window.IN && typeof(window.IN.parse) === "function") {
                                window.IN.parse()
                            } else {
                                if (stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading == false) {
                                    stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading = true;
                                    var c = "//platform.linkedin.com/in.js";
                                    (function() {
                                        var d = document.createElement("script");
                                        d.type = "text/javascript";
                                        d.src = c;
                                        d.async = true;
                                        var e = document.getElementsByTagName("script")[0];
                                        d.onload = function() {
                                            stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading = false
                                        };
                                        d.onreadystatechange = function() {
                                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                                stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading = false
                                            }
                                        };
                                        e.parentNode.insertBefore(d, e)
                                    })()
                                }
                            }
                        } else {}
                    }
                }
            }
        }
    },
    logService: function(a, b) {
        stlib.data.resetShareData();
        stlib.data.set("url", b, "shareInfo");
        stlib.data.set("destination", a, "shareInfo");
        stlib.data.setSource("chicklet");
        stlib.data.set("buttonType", "chicklet", "shareInfo");
        stlib.sharer.share()
    },
    makeButton: function(v, d, c) {
        if (v == "foursquaresave") {
            try {
                var j = document.createElement("<div></div>");
                var h = document.createElement("<a></a>")
            } catch (g) {
                j = document.createElement("div");
                h = document.createElement("a")
            }
            j.className = "stNativeButton stFourSquare";
            h.setAttribute("href", "https://foursquare.com/intent/venue.html");
            h.setAttribute("class", "fourSq-widget");
            h.setAttribute("data-on-open", "foursquareCallback");
            j.appendChild(h);
            return j
        } else {
            if (v == "foursquarefollow") {
                if (typeof(c.username) == "undefined" || c.username == "") {
                    return false
                }
                if (typeof(c.followId) == "undefined" || c.followId == "") {
                    return false
                }
                try {
                    var j = document.createElement("<div></div>");
                    var h = document.createElement("<a></a>")
                } catch (g) {
                    j = document.createElement("div");
                    h = document.createElement("a")
                }
                j.className = "stNativeButton stFourSquare";
                h.setAttribute("href", "https://foursquare.com/user/" + c.username);
                h.setAttribute("class", "fourSq-widget");
                h.setAttribute("data-type", "follow");
                h.setAttribute("data-fuid", c.followId);
                h.setAttribute("data-on-open", "foursquareCallback");
                j.appendChild(h);
                return j
            } else {
                if (v == "googleplusfollow" || v == "googleplusadd") {
                    if (typeof(c.followId) == "undefined" || c.followId == "") {
                        return false
                    }
                    try {
                        var p = document.createElement("<span></span>")
                    } catch (g) {
                        p = document.createElement("span")
                    }
                    p.className = "stNativeButton stGoogleNative";
                    var n = document.createElement("g:plus");
                    n.setAttribute("href", "https://plus.google.com/" + c.followId);
                    n.setAttribute("width", "300");
                    n.setAttribute("height", "69");
                    p.appendChild(n);
                    return p
                } else {
                    if (v == "pinterestfollow") {
                        if (typeof(c.username) == "undefined" || c.username == "") {
                            return false
                        }
                        try {
                            var b = document.createElement("<span></span>");
                            var o = document.createElement("<a></a>");
                            var m = document.createElement("<img></img>")
                        } catch (g) {
                            b = document.createElement("span");
                            o = document.createElement("a");
                            m = document.createElement("img")
                        }
                        b.className = "stNativeButton stPinterestfollow";
                        var f = c.username;
                        o.setAttribute("target", "_blank");
                        o.setAttribute("href", "//pinterest.com/" + f + "/");
                        m.setAttribute("src", "//passets-cdn.pinterest.com/images/follow-on-pinterest-button.png");
                        m.setAttribute("width", "156");
                        m.setAttribute("height", "26");
                        m.setAttribute("alt", "Follow " + f + " on Pinterest");
                        o.appendChild(m);
                        b.appendChild(o);
                        return b
                    } else {
                        if (v == "twitterfollow") {
                            if (typeof(c.username) == "undefined" || c.username == "") {
                                return false
                            }
                            try {
                                var i = document.createElement("<iframe></iframe>")
                            } catch (g) {
                                i = document.createElement("iframe")
                            }
                            var k = "&screen_name=" + c.username;
                            var q = "&show_count=false";
                            iedocmode = stlib.browser.getIEVersion();
                            var u = "";
                            if (d == "vcount") {
                                q = "&show_count=true"
                            } else {
                                if (d == "hcount") {
                                    q = "&show_count=true"
                                }
                            }
                            i.setAttribute("allowtransparency", "true");
                            i.setAttribute("frameborder", "0");
                            i.setAttribute("scrolling", "no");
                            i.className = "stTwitterFollowFrame";
                            i.setAttribute("src", "//platform.twitter.com/widgets/follow_button.html?lang=en&show_screen_name=false" + k + q);
                            var t = document.createElement("span");
                            t.className = "stNativeButton stTwitterFollowFrame stTwitterFollow";
                            t.appendChild(i);
                            return t
                        } else {
                            if (v == "youtube") {
                                if (typeof(c.username) == "undefined" || c.username == "") {
                                    return false
                                }
                                try {
                                    var l = document.createElement("<span></span>");
                                    var e = document.createElement("<a></a>");
                                    var a = document.createElement("<img></img>")
                                } catch (g) {
                                    l = document.createElement("span");
                                    e = document.createElement("a");
                                    a = document.createElement("img")
                                }
                                l.setAttribute("class", "stNativeButton stYoutube");
                                var f = c.username;
                                e.setAttribute("target", "_blank");
                                e.setAttribute("href", "//youtube.com/subscription_center?add_user=" + f);
                                a.setAttribute("src", "//s.ytimg.com/yt/img/creators_corner/Subscribe_to_my_videos/YT_Subscribe_130x36_red.png");
                                a.setAttribute("alt", "Follow " + f + " on youtube");
                                e.appendChild(a);
                                l.appendChild(e);
                                return l
                            } else {
                                if (v == "linkedinfollow") {
                                    if (typeof(c.followId) == "undefined" || c.followId == "") {
                                        return false
                                    }
                                    var r = document.createElement("span");
                                    r.setAttribute("class", "stNativeButton stLinkedinfollow");
                                    var s = document.createElement("script");
                                    s.type = "text/javascript";
                                    s.setAttribute("type", "IN/FollowCompany");
                                    s.setAttribute("data-id", c.followId);
                                    s.setAttribute("data-counter", "none");
                                    if (d == "vcount") {
                                        s.setAttribute("data-counter", "top")
                                    } else {
                                        if (d == "hcount") {
                                            s.setAttribute("data-counter", "right")
                                        }
                                    }
                                    r.appendChild(s);
                                    return r
                                } else {}
                            }
                        }
                    }
                }
            }
        }
    },
    checkNativeButtonSupport: function(a) {
        if (stlib.nativeButtons.supportedNativeButtons[a]) {
            return true
        }
        return false
    },
    checkNativeButtonLogging: function(a) {
        if (stlib.nativeButtons.supportedNativeButtons[a]) {
            return stlib.nativeButtons.supportedNativeButtons[a].log
        }
        return false
    },
    checkNativeButtonConfig: function(a) {
        if (stlib.nativeButtons.supportedNativeButtons[a]) {
            return stlib.nativeButtons.supportedNativeButtons[a].config
        }
        return false
    }
};
foursquareCallback = function(c) {
    if (c) {
        var a = "foursquaresave";
        var b = "https://foursquare.com/intent/venue.html";
        if (c.config.type) {
            a = "foursquarefollow";
            b = "https://foursquare.com/user/" + c.config.fuid
        }
        stlib.nativeButtons.logService(a, b)
    }
};
stlib.nativeCounts = {
    nativeCountServices: {
        linkedin: true,
        facebook: true,
        stumbleupon: true
    },
    nativeFunc: [],
    addNativeFunc: function(b, a) {
        stlib.nativeCounts.nativeFunc[b] = a
    },
    getNativeCounts: function(d, c, b) {
        switch (d) {
            case "facebook":
                var a = "select url, like_count, total_count, comment_count, share_count, click_count from link_stat where url='" + encodeURIComponent(c) + "'";
                var e = "https://ws.sharethis.com/api/processFQLQuery.php?fqlQuery=" + a + "&callback=" + b;
                stlib.scriptLoader.loadJavascript(e, function() {});
                break;
            case "linkedin":
                stlib.scriptLoader.loadJavascript("https://www.linkedin.com/countserv/count/share?format=jsonp&callback=" + b + "&url=" + encodeURIComponent(c), function() {});
                break;
            case "stumbleupon":
                stlib.scriptLoader.loadJavascript("https://www.stumbleupon.com/services/1.1/badge.getinfo?url=" + encodeURIComponent(c) + "&format=jsonp&callback=" + b, function() {});
                break
        }
    },
    checkNativeCountServicesQueue: function(a) {
        if (stlib.nativeCounts.nativeCountServices[a]) {
            return true
        }
        return false
    }
};
var init_hash = function() {
    stlib.hash.init();
    stlib.data.set("shareHash", stlib.hash.shareHash, "pageInfo");
    stlib.data.set("incomingHash", stlib.hash.incomingHash, "pageInfo");
    var a = "";
    if (!stlib.hash.doNotHash) {
        a = "#" + stlib.data.get("shareHash", "pageInfo")
    }
    baseURL = stlib.hash.updateParams();
    stlib.data.set("url", baseURL + a, "shareInfo")
};
var stWidgetVersion = false,
    showHoverbarReskinned = false;
var isEsiLoaded = false;
if (typeof(switchTo5x) == "undefined") {
    stWidgetVersion = "4x"
} else {
    if (switchTo5x == false) {
        stWidgetVersion = "4x"
    }
    if (switchTo5x == true) {
        stWidgetVersion = "5xa"
    }
}
var stShowNewMobileWidget = false;
var stButtons = {};
stButtons.messageQueueInstance = null;
stButtons.cbQueue = [];
stButtons.queue = [];
stButtons.goToInit = false;
stButtons.widget = false;
stButtons.widgetArray = [];
stButtons.cbAppQueue = [];
stButtons.retrievedCounts = {};
stButtons.cbNativeQueue = [];
stButtons.cbVal = 0;
stButtons.queuePos = 0;
stButtons.counts = [];
st_showing = false;
stButtons.urlElements = [];
stButtons.publisherTracker = null;
stButtons.plusOneLoaded = false;
stButtons.plusOneLoading = false;
stButtons.xfbmlLoaded = false;
stButtons.xfbmlLoading = false;
stButtons.fbTracked = false;
stButtons.twitterTracked = false;
stButtons.pumpInstance = null;
stButtons.countsResp = [];
stButtons.countsNativeResp = [];
__stgetPubGA = function() {
    if (typeof(_gaq) !== "undefined" && typeof(__stPubGA) == "undefined") {
        if (typeof(_gat) !== "undefined") {
            __stPubGA = _gat._getTrackerByName("~0")._getAccount()
        }
        if (typeof(__stPubGA) !== "undefined" && __stPubGA == "UA-XXXXX-X" && typeof(_gat._getTrackerByName) !== "undefined") {
            _gaq.push(function() {
                var a = _gat._getTrackerByName();
                __stPubGA = a._getAccount()
            })
        }
    } else {
        if (typeof(ga) !== "undefined" && typeof(__stPubGA) == "undefined") {
            ga(function() {
                var e = ga.getAll();
                for (var b = 0; b < e.length; ++b) {
                    var c = e[b];
                    var a = c.get("trackingId");
                    var d = a.indexOf("UA");
                    if (d >= 0) {
                        __stPubGA = a
                    }
                }
            })
        }
    }
    if (__stPubGA == "UA-XXXXX-X") {
        delete __stPubGA
    }
};
var isMobileButtonLoaded = false;
var stRecentServices = false;
var iswhatsappCustomButton = false;
var isKikCustomButton = false;
var stIsLoggedIn = false,
    servicesLoggedIn = {};
var stFastShareObj = {};
stFastShareObj.shorten = true;
if ("https:" == document.location.protocol) {
    var useFastShare = false
}
if (typeof(useFastShare) == "undefined") {
    var useFastShare = true
}
if (typeof(stButtonsLib) == "undefined" && typeof(SHARETHIS) == "undefined") {
    var stButtonsLib = {};
    stButtonsLib.clickSubscribers = [];
    stButtonsLib.nonClickSubscribers = [];
    stButtonsLib.readyRun = false;
    stButtonsLib.params = function() {
        stButtonsLib.params.executedOnReady = false
    };
    stButtonsLib.onReady = function() {
        stButtonsLib.params.executedOnReady = true;
        if (stButtonsLib.readyRun == true) {
            return false
        }
        stButtonsLib.readyRun = true;
        init_hash();
        stButtonsLib.getAllAppDefault(function() {
            if (stButtons.messageQueueInstance == null) {
                stButtons.messageQueueInstance = new stlib.messageQueue()
            }
            stButtonsLib.processSTQ();
            var a = stButtonsLib.getSource();
            if ((stWidget.options.lang !== "undefined") && (stWidget.options.lang !== "")) {
                stlib.logger.lang = stWidget.options.lang
            } else {
                stlib.logger.lang = "en"
            }
            stWidget.options.sessionID = stLight.sessionID;
            stButtons.onReady()
        })
    };
    stButtonsLib.getSource = function() {
        var a = "share4x";
        if (stWidgetVersion == "5xa") {
            a = "share5x"
        }
        if (stButtonsLib.hasButtonOnPage()) {
            if (stButtonsLib.loadedFromBar) {
                if (stWidgetVersion == "5xa") {
                    a = "bar_share5x"
                } else {
                    a = "bar_share4x"
                }
            }
        } else {
            if (stButtonsLib.loadedFromBar) {
                a = "bar"
            }
        }
        return a
    };
    stButtonsLib.getSource2 = function(a) {
        var c = "share4x";
        if (stWidgetVersion == "5xa") {
            c = "share5x";
            try {
                if (stButtonsLib.clickCallBack != false) {
                    stButtonsLib.clickCallBack(a.service)
                }
            } catch (b) {}
        }
        if (a.type == "stbar" || a.type == "stsmbar") {
            c = "bar"
        }
        return c
    };
    stButtonsLib.log = function(c, d, a, b) {
        stlib.data.resetShareData();
        stlib.data.set("url", document.location.href, "shareInfo");
        stlib.data.set("title", document.title, "shareInfo");
        stlib.data.set("counter", stButtonsLib.counter++, "shareInfo");
        stlib.data.setSource(d);
        if (typeof(a) != "undefined") {
            stlib.data.set("destination", a, "shareInfo")
        }
        if (typeof(b) != "undefined") {
            stlib.data.set("buttonType", b, "shareInfo")
        }
        stlib.logger.log(c)
    };
    stButtonsLib._stFpc = function() {
        if (!document.domain || document.domain.search(/\.gov/) > 0) {
            return false
        }
        var g = stButtonsLib._stGetFpc("__unam");
        if (g == false) {
            var c = Math.round(Math.random() * 2147483647);
            c = c.toString(16);
            var h = (new Date()).getTime();
            h = h.toString(16);
            var e = "";
            var a = stButtonsLib._stGetD();
            a = a.split(/\./)[1];
            if (!a) {
                return false
            }
            e = stButtonsLib._stdHash(a) + "-" + h + "-" + c + "-1";
            g = e;
            stButtonsLib._stSetFpc(g)
        } else {
            var b = g;
            var f = b.split(/\-/);
            if (f.length == 4) {
                var d = Number(f[3]);
                d++;
                b = f[0] + "-" + f[1] + "-" + f[2] + "-" + d;
                g = b;
                stButtonsLib._stSetFpc(g)
            }
        }
        return g
    };
    stButtonsLib._stSetFpc = function(g) {
        var a = "__unam";
        var c = new Date;
        var i = c.getFullYear();
        var f = c.getMonth() + 9;
        var h = c.getDate();
        var d = a + "=" + escape(g);
        if (i) {
            var b = new Date(i, f, h);
            d += "; expires=" + b.toGMTString()
        }
        var e = stButtonsLib._stGetD();
        d += "; domain=" + escape(e) + ";path=/";
        document.cookie = d
    };
    stButtonsLib._stGetD = function() {
        var b = document.domain.split(/\./);
        var a = "";
        if (b.length > 1) {
            a = "." + b[b.length - 2] + "." + b[b.length - 1]
        }
        return a
    };
    stButtonsLib._stGetFpc = function(b) {
        var a = document.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
        if (a) {
            return (unescape(a[2]))
        } else {
            return false
        }
    };
    stButtonsLib._stdHash = function(a) {
        var e = 0,
            d = 0;
        for (var c = a.length - 1; c >= 0; c--) {
            var b = parseInt(a.charCodeAt(c));
            e = ((e << 8) & 268435455) + b + (b << 12);
            if ((d = e & 161119850) != 0) {
                e = (e ^ (d >> 20))
            }
        }
        return e.toString(16)
    };
    stButtonsLib._thisScript = null;
    stButtonsLib.getShareThisLightScript = function() {
        var d = document.getElementsByTagName("script");
        var c = null;
        for (var b = 0; b < d.length; b++) {
            var a = d[b].src;
            if (a.search(/.*sharethis.*\/button\/light.*/) >= 0) {
                c = d[b]
            }
        }
        return c
    };
    stButtonsLib.dbrInfo = function() {
        var i = document.referrer;
        if (i && i.length > 0) {
            var g = /\/\/.*?\//;
            var d = i.match(g);
            if (typeof(d) !== "undefined" && typeof(d[0]) !== "undefined") {
                var b = new RegExp(document.domain, "gi");
                if (b.test(d[0]) == true) {
                    return false
                }
            }
            var f = /(http:\/\/)(.*?)\/.*/i;
            var e = /(^.*\?)(.*)/ig;
            var a = "";
            var c = i.replace(f, "$2");
            var b = new RegExp(c, "gi");
            if (c.length > 0) {
                a += "&refDomain=" + c
            } else {
                return false
            }
            var h = i.replace(e, "$2");
            if (h.length > 0) {
                a += "&refQuery=" + encodeURIComponent(h)
            }
            return a
        } else {
            return false
        }
    };
    stButtonsLib.odjs = function(a, b) {
        this.head = document.getElementsByTagName("head")[0];
        this.scriptSrc = a;
        this.script = document.createElement("script");
        this.script.setAttribute("type", "text/javascript");
        this.script.setAttribute("src", this.scriptSrc);
        if (window.attachEvent && document.all) {
            this.script.onreadystatechange = function() {
                if (this.readyState == "complete" && this.readyState == "loaded") {
                    b()
                }
            }
        } else {
            this.script.onload = b
        }
        this.head.appendChild(this.script)
    };
    stButtonsLib.getAllAppDefault = function(a) {
        if (name == "cns") {
            if (stWidget.options.doNotHash == null) {
                stlib.hash.doNotHash = stWidget.options.doNotHash = true
            }
            if (stWidget.options.hashAddressBar == null) {
                stlib.hash.hashAddressBar = stWidget.options.hashAddressBar = false
            }
            if (stWidget.options.doNotCopy == null) {
                stlib.hash.doNotCopy = stWidget.options.doNotCopy = true
            }
        } else {
            if (name == "snapsets") {
                if (stWidget.options.snapsets == null) {
                    stWidget.options.snapsets = false
                }
            }
        }
        a()
    };
    stButtonsLib.allDefault = function(a) {
        if (a) {
            if (a.cns) {
                stButtonsLib.cnsDefault(a.cns)
            }
            if (a.snapsets) {
                stButtonsLib.snapSetsDefault(a.snapsets)
            }
            if (a.migration) {
                stButtonsLib.migrationDefault(a.migration)
            } else {
                stButtonsLib.usePublisherDefaultSettings()
            }
            if (a.mobileWidget) {
                stButtonsLib.mobileWidgetSetsDefault(a.mobileWidget)
            } else {
                if (typeof(stButtonsLib.mobileWidget) != "undefined") {
                    stButtonsLib.setUserDefinedMobileParameter()
                }
            }
        } else {
            stButtonsLib.usePublisherDefaultSettings()
        }
    };
    stButtonsLib.mobileWidgetSetsDefault = function(a) {
        if (typeof(a) != "undefined" && typeof(a.mobileWidget) != "undefined") {
            showHoverbarReskinned = a.mobileWidget
        }
        if (typeof(stButtonsLib.mobileWidget) != "undefined") {
            stButtonsLib.setUserDefinedMobileParameter()
        } else {
            if (a) {
                stShowNewMobileWidget = a.mobileWidget
            }
        }
    };
    stButtonsLib.setUserDefinedMobileParameter = function() {
        if (stButtonsLib.mobileWidget === true || stButtonsLib.mobileWidget === "true") {
            stShowNewMobileWidget = true
        } else {
            if (stButtonsLib.mobileWidget === false || stButtonsLib.mobileWidget === "false") {
                stShowNewMobileWidget = false
            } else {
                stShowNewMobileWidget = false
            }
        }
    };
    stButtonsLib.usePublisherDefaultSettings = function() {
        if (typeof(switchTo5x) == "undefined") {
            stWidgetVersion = "4x"
        } else {
            if (switchTo5x == false) {
                stWidgetVersion = "4x"
            }
            if (switchTo5x == true) {
                stWidgetVersion = "5xa"
            }
        }
        if (typeof(stButtonsLib.mobileWidget) != "undefined") {
            stButtonsLib.setUserDefinedMobileParameter()
        }
    };
    stButtonsLib.migrationDefault = function(a) {
        if (stWidgetVersion == "5x" || stButtonsLib.version == "5x") {
            stWidgetVersion = "5xa"
        }
    };
    stButtonsLib.snapSetsDefault = function(a) {
        if (a) {
            if (a.override) {
                stWidget.options.snapsets = a.snapsets
            } else {
                if (stWidget.options.snapsets == null) {
                    stWidget.options.snapsets = a.snapsets
                }
            }
        }
    };
    stButtonsLib.cnsDefault = function(a) {
        if (a) {
            if (a.override) {
                stWidget.options.doNotHash = a.doNotHash;
                stWidget.options.hashAddressBar = a.hashAddressBar;
                stWidget.options.doNotCopy = a.doNotCopy
            } else {
                if (stWidget.options.doNotHash == null) {
                    stWidget.options.doNotHash = a.doNotHash
                }
                if (stWidget.options.hashAddressBar == null) {
                    stWidget.options.hashAddressBar = a.hashAddressBar
                }
                if (stWidget.options.doNotCopy == null) {
                    stWidget.options.doNotCopy = a.doNotCopy
                }
            }
            stlib.hash.doNotHash = stWidget.options.doNotHash = (/true/i).test(stWidget.options.doNotHash) ? true : false;
            stlib.hash.hashAddressBar = stWidget.options.hashAddressBar = (/true/i).test(stWidget.options.hashAddressBar) ? true : false;
            stlib.hash.doNotCopy = stWidget.options.doNotCopy = (/true/i).test(stWidget.options.doNotCopy) ? true : false
        }
    };
    stButtonsLib.loadServicesLoggedIn = function(a) {
        a()
    };
    stButtonsLib.options = function(a) {
        if (a && a.version) {
            stButtonsLib.version = a.version
        }
        if (a && typeof(a.mobileWidget) != "undefined") {
            stButtonsLib.mobileWidget = a.mobileWidget
        }
        if (a && a.publisher) {
            stlib.data.setPublisher(a.publisher);
            stButtonsLib.publisher = a.publisher
        }
        if (a && a.loadedFromBar) {
            stButtonsLib.loadedFromBar = a.loadedFromBar
        }
        if (a && a.clickCallBack && typeof(a.clickCallBack) == "function") {
            stButtonsLib.clickCallBack = a.clickCallBack
        }
        for (var b in a) {
            if (b == "shorten") {
                stFastShareObj.shorten = a[b]
            }
            if (stWidget.options.hasOwnProperty(b) && a[b] !== null) {
                stWidget.options[b] = a[b]
            }
        }
    };
    stButtonsLib.hasButtonOnPage = function() {
        var f = document.getElementsByTagName("*");
        var d = new RegExp(/^st_(.*?)$/);
        var c = new RegExp(/st_(.*?)_custom$/);
        var a = f.length;
        for (var b = 0; b < a; b++) {
            if (typeof(f[b].className) == "string" && f[b].className != "") {
                if ((f[b].className.match(/st_whatsapp_custom/g) || f[b].className.match(/st_kik_custom/g)) && !(stlib.browser.mobile.isIOs() || stlib.browser.mobile.isAndroid()) && !(iswhatsappCustomButton || isKikCustomButton)) {
                    if (typeof(window.console) !== "undefined") {
                        try {
                            if (f[b].className.match(/st_whatsapp_custom/g)) {
                                console.debug("WhatsApp custom button has support for iOS (iPhone) and android only and it will not work on any other platform.");
                                iswhatsappCustomButton = true
                            } else {
                                if (f[b].className.match(/st_kik_custom/g)) {
                                    console.debug("Kik custom button has support for iOS (iPhone) and android only and it will not work on any other platform.");
                                    isKikCustomButton = true
                                }
                            }
                        } catch (e) {}
                    }
                }
                if (f[b].className.match(c) && f[b].className.match(c).length >= 2 && f[b].className.match(c)[1]) {
                    return true
                } else {
                    if (f[b].className.match(d) && f[b].className.match(d).length >= 2 && f[b].className.match(d)[1]) {
                        return true
                    }
                }
            }
        }
        return false
    }
}
stButtons.smartifyButtons = function(a) {
    if (typeof(a) != "undefined" && a != "undefined") {
        stRecentServices = a;
        for (var b in stRecentServices) {
            stRecentServices[b].processed = false
        }
    }
    stButtons.completeInit()
};
stButtons.makeButton = function(u) {
    var f = u.service;
    var F = u.text;
    var W = "";
    if (typeof(stWidget.options.shorten) != "undefined") {
        W = stWidget.options.shorten
    }
    if (F == null && (u.type == "vcount" || u.type == "hcount")) {
        F = "Share";
        if (f == "email") {
            F = "Mail"
        }
    }
    if (f == "fb_like") {
        f = "fblike"
    } else {
        if (f == "fblike_fbLong") {
            f = "fblike";
            u.type = "fbLong"
        }
    }
    var g = stWidget.ogurl ? stWidget.ogurl : (stWidget.twitterurl ? stWidget.twitterurl : document.location.href);
    g = u.url ? u.url : g;
    var S = g;
    stlib.data.set("url", S, "shareInfo");
    var L = (u.short_url != null) ? u.short_url : "";
    var I = stWidget.ogtitle ? stWidget.ogtitle : (stWidget.twittertitle ? stWidget.twittertitle : document.title);
    I = u.title ? u.title : I;
    if (typeof(u.pinterest_native) == "string") {
        u.pinterest_native = u.pinterest_native.replace(/^\s+|\s+$/g, "")
    }
    if ((f == "weheartit" || f == "pinterest" || f == "kik") && (u.pinterest_native == "false" || u.pinterest_native == null || u.pinterest_native == "")) {
        var e = stWidget.ogimg ? stWidget.ogimg : (stWidget.twitterimg ? stWidget.twitterimg : (u.thumbnail ? u.thumbnail : null));
        if (typeof(e) == "string") {
            e = e.replace(/^\s+|\s+$/g, "")
        }
        if (typeof(u.image) == "string") {
            u.image = u.image.replace(/^\s+|\s+$/g, "")
        }
        e = (u.image) ? u.image : e
    }
    var X = stWidget.desc ? stWidget.desc : "";
    X = stWidget.ogdesc ? stWidget.ogdesc : (stWidget.twitterdesc ? stWidget.twitterdesc : stWidget.desc);
    X = (u.summary && u.summary != null) ? u.summary : X;
    var q = (u.message && u.message != null) ? u.message : "";
    if (/(http|https):\/\//.test(g) == false) {
        g = decodeURIComponent(g);
        I = decodeURIComponent(I)
    }
    if (/(http|https):\/\//.test(L) == false) {
        L = decodeURIComponent(L)
    }
    var ad = document.createElement("span");
    ad.setAttribute("style", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;");
    ad.className = "stButton";
    if (u.type == "custom" && f != "email" && f != "sharethis" && f != "wordpress") {
        u.element.onclick = function() {
            _$d_();
            _$d1("Clicked on a custom button to share");
            stButtonsLib.callSubscribers("click", f, g);
            stlib.data.resetShareData();
            stlib.data.set("url", g, "shareInfo");
            stlib.data.set("short_url", L, "shareInfo");
            stlib.data.set("shorten", W, "shareInfo");
            stlib.data.set("title", I, "shareInfo");
            stlib.data.set("destination", f, "shareInfo");
            stlib.data.setSource("chicklet");
            stlib.data.set("buttonType", u.type, "shareInfo");
            if (typeof(pinterest_native) != "undefined" && pinterest_native != null && pinterest_native != " ") {
                stlib.data.set("pinterest_native", pinterest_native, "shareInfo")
            }
            if (typeof(e) != "undefined" && e != null && e != " ") {
                stlib.data.set("image", e, "shareInfo")
            }
            if (typeof(X) != "undefined" && X != null) {
                stlib.data.set("description", X, "shareInfo")
            }
            if (q != "") {
                stlib.data.set("message", q, "shareInfo")
            }
            if (u.element.getAttribute("st_username") != null) {
                stlib.data.set("refUsername", u.element.getAttribute("st_username"), "shareInfo")
            }
            if (f == "twitter" && u.element.getAttribute("st_via") != null) {
                stlib.data.set("via", u.element.getAttribute("st_via").replace(/^\s+|\s+$/g, ""), "shareInfo")
            }
            stlib.sharer.share(null, stWidget.options.servicePopup);
            if (f == "pinterest") {
                stlib.sharer.sharePinterest()
            }
            if (f == "print") {
                stlib.sharer.stPrint()
            }
        };
        return false
    }
    if (!((f == "email" || f == "sharethis" || f == "wordpress") || (stIsLoggedIn && servicesLoggedIn && typeof(servicesLoggedIn[f]) != "undefined" && ((useFastShare || (!useFastShare && switchTo5x)) && (f == "facebook" || f == "twitter" || f == "yahoo" || f == "linkedin"))))) {
        ad.onclick = function() {
            if (!(stlib.browser.mobile.isIOs() || stlib.browser.mobile.isAndroid()) && ((f == "whatsapp" || f == "kik") && window.location.pathname.indexOf("get-sharing-tools") != -1)) {} else {
                _$d_();
                _$d1("Clicked on a regular button to share");
                stButtonsLib.callSubscribers("click", f, g);
                var b = this.getElementsByTagName("*");
                for (var a = 0; a < b.length; a++) {
                    if (b[a].className == "stBubble_hcount" || b[a].className == "stBubble_count") {
                        if (!stWidget.options.nativeCount || !stlib.nativeCounts.checkNativeCountServicesQueue(f)) {
                            if (!isNaN(b[a].innerHTML)) {
                                b[a].innerHTML = Number(b[a].innerHTML) + 1
                            }
                        }
                    }
                }
                if (stWidget.options.tracking) {
                    shareLog(f, g)
                }
                stlib.data.resetShareData();
                var af = "";
                var ae = stButtonsLib.getSource();
                if (ae == "share5x") {
                    af = "5x"
                } else {
                    if (ae == "share4x") {
                        af = "4x"
                    }
                }
                stlib.data.set("url", g, "shareInfo");
                stlib.data.set("short_url", L, "shareInfo");
                stlib.data.set("shorten", W, "shareInfo");
                stlib.data.set("title", I, "shareInfo");
                stlib.data.set("destination", f, "shareInfo");
                stlib.data.setSource("chicklet" + af);
                stlib.data.set("buttonType", u.type, "shareInfo");
                if (typeof(pinterest_native) != "undefined" && pinterest_native != null && pinterest_native != " ") {
                    stlib.data.set("pinterest_native", pinterest_native, "shareInfo")
                }
                if (typeof(e) != "undefined" && e != null) {
                    stlib.data.set("image", e, "shareInfo")
                }
                if (typeof(X) != "undefined" && X != null) {
                    stlib.data.set("description", X, "shareInfo")
                }
                if (q != "") {
                    stlib.data.set("message", q, "shareInfo")
                }
                if (u.element.getAttribute("st_username") != null) {
                    stlib.data.set("refUsername", u.element.getAttribute("st_username"), "shareInfo")
                }
                if (f == "twitter" && u.element.getAttribute("st_via") != null) {
                    stlib.data.set("via", u.element.getAttribute("st_via").replace(/^\s+|\s+$/g, ""), "shareInfo")
                }
                stlib.sharer.share(null, stWidget.options.servicePopup);
                if (f == "pinterest" && (stlib.data.get("image", "shareInfo") == false || stlib.data.get("image", "shareInfo") == null)) {
                    stlib.sharer.sharePinterest()
                }
                if (f == "print") {
                    stlib.sharer.stPrint()
                }
            }
        }
    }
    if (f == "gbuzz") {
        return ad
    }
    if (f == "fblike" || f == "fbsend" || f == "fbrec" || f == "fbLong" || f == "fbsub") {
        if (f == "fbsub") {
            if (u.element.getAttribute("st_username") != null) {
                g = "https://facebook.com/" + u.element.getAttribute("st_username")
            } else {
                g = ""
            }
        }
        return stButtons.makeFBButton(f, u.type, g)
    }
    if (stlib.nativeButtons.checkNativeButtonSupport(f)) {
        var T = {};
        if (u.element.getAttribute("st_username") != null) {
            T.username = u.element.getAttribute("st_username")
        }
        if (u.element.getAttribute("st_followId") != null) {
            T.followId = u.element.getAttribute("st_followId")
        }
        retObj = stlib.nativeButtons.makeButton(f, u.type, T);
        if (retObj) {
            if (stlib.nativeButtons.checkNativeButtonLogging(f)) {
                retObj.onclick = function() {
                    stlib.nativeButtons.logService(f, g)
                }
            }
            return retObj
        } else {
            if (typeof(window.console) !== "undefined") {
                try {
                    console.debug("Looks like " + f + " is missing some required parameters. Please recheck " + f + " HTML \nFor help, contact support@sharethis.com")
                } catch (Y) {}
            }
            return ad
        }
    }
    if (f == "plusone") {
        stButtons.loadPlusone = true;
        var D = document.createElement("div");
        D.innerHTML = "&nbsp;";
        iedocmode = stlib.browser.getIEVersion();
        var v = (navigator.userAgent.indexOf("MSIE 7.0") != -1);
        var h = (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1);
        var N = "display:inline-block;overflow:hidden;line-height:0px;";
        var A = "overflow:hidden;zoom:1;display:inline;vertical-align:bottom;";
        var B = "overflow:hidden;zoom:1;display:inline;line-height:0px;position:relative;";
        var d = document.createElement("g:plusone");
        var k = g;
        if ((/#sthash/i).test(k)) {
            var m = k.split("#");
            if (m.length > 0) {
                k = m[0]
            }
        }
        d.setAttribute("href", k);
        if (u.type == "vcount") {
            d.setAttribute("size", "tall");
            D.setAttribute("style", N + "vertical-align:bottom;width:55px; height:61px;");
            v && D.style.setAttribute ? D.style.setAttribute("cssText", N + "vertical-align:bottom;width:55px; height:61px;", 0) : null;
            (iedocmode && (iedocmode == 7) && D.style.setAttribute) ? D.style.setAttribute("cssText", B + "vertical-align:bottom;bottom:-8px;width:55px; height:80px;", 0): (null)
        } else {
            if (u.type == "hcount") {
                d.setAttribute("size", "medium");
                d.setAttribute("count", "true");
                D.setAttribute("style", N + "position:relative;vertical-align:middle;bottom:0px;width:75px; height:21px;");
                v && D.style.setAttribute ? D.style.setAttribute("cssText", N + "position:relative;vertical-align:middle;width:75px; height:21px;", 0) : null;
                (iedocmode && (iedocmode == 7) && D.style.setAttribute) ? D.style.setAttribute("cssText", B + "vertical-align:middle;bottom:2px;width:75px; height:21px;", 0): (null)
            } else {
                if (u.type == "button") {
                    d.setAttribute("size", "medium");
                    d.setAttribute("count", "false");
                    D.setAttribute("style", N + "position:relative;vertical-align:middle;bottom:0px;width:36px; height:21px;");
                    v && D.style.setAttribute ? D.style.setAttribute("cssText", N + "position:relative;vertical-align:middle;width:36px; height:21px;", 0) : null;
                    (iedocmode && (iedocmode == 7) && D.style.setAttribute) ? D.style.setAttribute("cssText", B + "vertical-align:middle;bottom:-8px;width:36px; height:39px;", 0): (null)
                } else {
                    if (u.type == "large") {
                        d.setAttribute("size", "large");
                        d.setAttribute("count", "false");
                        D.setAttribute("style", N + "position:relative;vertical-align:middle;bottom:12px;width:38px; height:27px;");
                        v && D.style.setAttribute ? D.style.setAttribute("cssText", N + "position:relative;vertical-align:middle;bottom:0px;width:38px; height:30px;", 0) : null;
                        (iedocmode && ((iedocmode == 8) || (iedocmode == 9)) && D.style.setAttribute) ? D.style.setAttribute("cssText", B + "vertical-align:middle;bottom:7px;width:38px; height:39px;", 0): (null);
                        (iedocmode && (iedocmode == 7) && D.style.setAttribute) ? D.style.setAttribute("cssText", B + "vertical-align:middle;bottom:1px;width:38px; height:39px;", 0): (null)
                    } else {
                        d.setAttribute("size", "small");
                        d.setAttribute("count", "false");
                        D.setAttribute("style", N + "position:relative;vertical-align:middle;bottom:0px;width:36px; height:16px;");
                        v && D.style.setAttribute ? D.style.setAttribute("cssText", N + "position:relative;vertical-align:middle;width:36px; height:16px;", 0) : null;
                        (iedocmode && (iedocmode == 7) && D.style.setAttribute) ? D.style.setAttribute("cssText", B + "vertical-align:middle;bottom:-12px;width:36px; height:36px;", 0): (null)
                    }
                }
            }
        }
        D.appendChild(d);
        d.setAttribute("callback", "plusoneCallback");
        return D
    }
    var i = "https://ws.sharethis.com/images/";
    var r = f;
    if (u.type == "chicklet") {
        var K = document.createElement("span");
        K.className = "chicklets " + f;
        if (F == null) {
            K.innerHTML = "&nbsp;";
            ad.style.paddingLeft = "0px";
            ad.style.paddingRight = "0px";
            ad.style.width = "16px"
        } else {
            K.appendChild(document.createTextNode(F))
        }
        ad.appendChild(K);
        return ad
    } else {
        if (u.type == "large") {
            var K = document.createElement("span");
            K.className = "stLarge";
            ad.appendChild(K);
            K.style.backgroundImage = "url('" + i + "2017/" + r + "_32.png')";
            return ad
        } else {
            if (u.type == "basic" || u.type == "circle" || u.type == "brushed" || u.type == "shiny") {
                var K = document.createElement("span");
                K.className = "stLarge";
                K.className = u.size == "16" ? ((u.type == "brushed" || u.type == "shiny") ? "stSmall2" : "stSmall") : K.className;
                K.className = u.size == "64" ? "stHuge" : K.className;
                ad.appendChild(K);
                K.style.backgroundImage = "url('" + i + u.type + "/" + u.size + "/" + r + (u.color ? "_" + u.color : "_" + u.type) + ".png')";
                return ad
            } else {
                if (u.type == "pcount" || u.type == "stbar" || u.type == "stsmbar") {
                    var z = document.createElement("span");
                    var K = document.createElement("span");
                    if (u.type == "stsmbar") {
                        K.className = "stSmBar";
                        var i = "https://ws.sharethis.com/images/";
                        K.style.backgroundImage = "url('" + i + "2017/" + r + "_16.png')"
                    } else {
                        K.className = "stLarge";
                        var i = "https://ws.sharethis.com/images/";
                        K.style.backgroundImage = "url('" + i + "2017/" + r + "_32.png')"
                    }
                    z.appendChild(K);
                    var s = document.createElement("span");
                    var ac = document.createElement("div");
                    if (u.type == "stsmbar") {
                        ac.className = "stBubbleSmHoriz"
                    } else {
                        ac.className = "stBubbleSm"
                    }
                    ac.setAttribute("id", "stBubble_" + u.count);
                    ac.style.visibility = "hidden";
                    var U = document.createElement("div");
                    U.className = "stBubble_count_sm";
                    ac.appendChild(U);
                    s.appendChild(ac);
                    s.appendChild(z);
                    ad.appendChild(s);
                    stButtons.getCount2(g, f, U);
                    z.onmouseover = function() {
                        var a = document.getElementById("stBubble_" + u.count);
                        a.style.visibility = "visible"
                    };
                    z.onmouseout = function() {
                        var a = document.getElementById("stBubble_" + u.count);
                        a.style.visibility = "hidden"
                    };
                    return ad
                } else {
                    if (u.type == "button" || u.type == "vcount" || u.type == "hcount") {
                        var z = document.createElement("span");
                        z.className = "stButton_gradient";
                        var G = document.createElement("span");
                        G.className = "chicklets " + f;
                        if (F == null) {
                            G.innerHTML = "&nbsp;"
                        } else {
                            G.appendChild(document.createTextNode(F))
                        }
                        z.appendChild(G);
                        if (f == "facebook" || f == "twitter" || f == "linkedin" || f == "yahoo" || f == "pinterest" || f == "sharethis" || f == "email") {
                            var t = document.createElement("span");
                            t.className = "stMainServices st-" + f + "-counter";
                            t.innerHTML = "&nbsp";
                            z = t;
                            t.style.backgroundImage = "url('" + i + "2017/" + r + "_counter.png')"
                        }
                        if (u.type == "vcount") {
                            var s = document.createElement("div");
                            var ac = document.createElement("div");
                            ac.className = "stBubble";
                            var U = document.createElement("div");
                            U.className = "stBubble_count";
                            ac.appendChild(U);
                            s.appendChild(ac);
                            s.appendChild(z);
                            ad.appendChild(s);
                            stButtons.getCount2(g, f, U)
                        } else {
                            if (u.type == "hcount") {
                                var s = document.createElement("span");
                                var M = document.createElement("span");
                                M.className = "stButton_gradient stHBubble";
                                var p = document.createElement("span");
                                p.className = "stButton_left";
                                p.innerHTML = "&nbsp;";
                                var w = document.createElement("span");
                                w.className = "stButton_right";
                                w.innerHTML = "&nbsp;";
                                var U = document.createElement("span");
                                U.className = "stBubble_hcount";
                                M.appendChild(U);
                                s.appendChild(z);
                                var C = document.createElement("span");
                                C.className = "stArrow";
                                C.appendChild(M);
                                s.appendChild(C);
                                ad.appendChild(s);
                                stButtons.getCount2(g, f, U)
                            } else {
                                ad.appendChild(z)
                            }
                        }
                        if (u.type == "vcount" || u.type == "hcount") {
                            if (u.ctype == "native") {
                                if (f == "twitter") {
                                    var V = document.createElement("span");
                                    V.className = "stButton";
                                    var E = 55;
                                    var Z = 20;
                                    var Q = "";
                                    var j = "none";
                                    var H = 7;
                                    if (u.type == "vcount") {
                                        var o = document.createElement("div");
                                        E = 55;
                                        Z = 62;
                                        Q = "top:42px;";
                                        j = "vertical"
                                    } else {
                                        if (u.type == "hcount") {
                                            var o = document.createElement("span");
                                            E = 110;
                                            Z = 20;
                                            j = "horizontal"
                                        }
                                    }
                                    iedocmode = stlib.browser.getIEVersion();
                                    var R = document.createElement("span");
                                    R.setAttribute("style", "vertical-align:bottom;line-height:0px;position:absolute;padding:0px !important;" + Q + "width:55px;height:20px;");
                                    (iedocmode && (iedocmode == 7) && R.style.setAttribute) ? R.style.setAttribute("cssText", "vertical-align:bottom;line-height:0px;position:absolute;padding:0px !important;" + Q + "width:55px;height:20px;", 0): null;
                                    try {
                                        var P = document.createElement('<iframe name="stframe" allowTransparency="true" scrolling="no" frameBorder="0"></iframe>')
                                    } catch (Y) {
                                        P = document.createElement("iframe");
                                        P.setAttribute("allowTransparency", "true");
                                        P.setAttribute("frameborder", "0");
                                        P.setAttribute("scrolling", "no")
                                    }
                                    var ab = encodeURIComponent(g);
                                    P.setAttribute("src", "https://platform.twitter.com/widgets/tweet_button.html?count=" + j + "&url=" + ab);
                                    P.setAttribute("style", "width:" + E + "px;height:" + Z + "px;");
                                    (iedocmode && (iedocmode == 7) && P.style.setAttribute) ? P.style.setAttribute("cssText", "width:" + E + "px;height:" + Z + "px;", 0): null;
                                    if ((useFastShare && servicesLoggedIn && typeof(servicesLoggedIn[f]) != "undefined")) {
                                        o.appendChild(R)
                                    }
                                    o.appendChild(P);
                                    z = o;
                                    V.appendChild(z);
                                    V.setAttribute("style", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;vertical-align:bottom;margin-top:6px;width:" + E + "px;height:" + Z + "px;");
                                    (iedocmode && (iedocmode == 7) && V.style.setAttribute) ? V.style.setAttribute("cssText", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;vertical-align:bottom;width:" + E + "px;height:" + Z + "px;", 0): null;
                                    ad = V
                                } else {
                                    if (f == "facebook") {
                                        stButtons.getXFBMLFromFB(u);
                                        return stButtons.makeFBButton("fblike", u.type, g)
                                    } else {
                                        if (f == "linkedin") {}
                                    }
                                }
                            }
                        }
                    } else {
                        if (u.type == "css") {
                            var z = document.createElement("div");
                            z.className = "stCSSButton";
                            if (u.cssType == "cssV") {
                                var y = document.createElement("div");
                                y.className = "stCSSVBubble";
                                var J = document.createElement("div");
                                J.className = "stCSSVBubble_count";
                                y.appendChild(J);
                                var l = document.createElement("div");
                                l.className = "stCSSVArrow";
                                var O = document.createElement("div");
                                O.className = "stCSSVArrowBorder";
                                O.appendChild(l);
                                ad.appendChild(y);
                                ad.appendChild(O);
                                stButtons.getCount2(g, f, J)
                            }
                            var c = document.createElement("div");
                            c.className = "stCSSSprite " + f;
                            c.innerHTML = "&nbsp;";
                            var K = document.createElement("span");
                            K.className = "stCSSText";
                            z.appendChild(c);
                            if (F == null || F == "") {} else {
                                K.appendChild(document.createTextNode(F));
                                z.appendChild(K)
                            }
                            ad.appendChild(z);
                            if (u.cssType == "cssH") {
                                var x = document.createElement("div");
                                x.className = "stCSSHBubble";
                                var J = document.createElement("div");
                                J.className = "stCSSHBubble_count";
                                x.appendChild(J);
                                var aa = document.createElement("div");
                                aa.className = "stCSSHArrow";
                                var n = document.createElement("div");
                                n.className = "stCSSHArrowBorder";
                                n.appendChild(aa);
                                ad.appendChild(n);
                                ad.appendChild(x);
                                stButtons.getCount2(g, f, J)
                            }
                        }
                    }
                }
            }
        }
    }
    return ad
};
stButtons.makeFBButton = function(i, k, b) {
    try {
        var h = document.createElement("<div></div>")
    } catch (d) {
        h = document.createElement("div")
    }
    if ((/#sthash/i).test(b)) {
        var l = b.split("#");
        if (l.length > 0) {
            b = l[0]
        }
    }
    var c = b;
    var g = "button_count";
    var j = "fb-send";
    var e = "";
    iedocmode = stlib.browser.getIEVersion();
    var f = "";
    if (k == "vcount") {
        g = "box_count"
    } else {
        if (k == "hcount") {} else {
            if (k == "large") {
                f = (iedocmode && (iedocmode == 7)) ? "vertical-align:bottom;bottom:3px;" : "bottom:7px;margin-top:9px;"
            } else {
                if (k == "button") {} else {
                    f = "top:1px;margin-top:0px;"
                }
            }
        }
    }
    if (i == "fbLong") {
        j = "fb-like";
        g = "standard";
        h.setAttribute("data-layout", g);
        h.setAttribute("data-send", "false");
        h.setAttribute("data-show-faces", "false")
    } else {
        if (i == "fbsend") {
            j = "fb-send"
        } else {
            if (i == "fblike" || i == "fbrec") {
                (i == "fbrec") ? e = "recommend": null;
                j = "fb-like";
                h.setAttribute("data-action", e);
                h.setAttribute("data-send", "false");
                h.setAttribute("data-layout", g);
                h.setAttribute("data-show-faces", "false")
            } else {
                if (i == "fbsub") {
                    j = "fb-subscribe";
                    h.setAttribute("data-layout", g);
                    h.setAttribute("data-show-faces", "false")
                }
            }
        }
    }
    h.setAttribute("class", j);
    h.setAttribute("data-href", c);
    if (iedocmode && (iedocmode == 7)) {
        if (i != "fbsend") {
            h = document.createElement("<div class='" + j + "' data-action='" + e + "' data-send='false' data-layout='" + g + "' data-show-faces='false' data-href='" + c + "'></div>")
        } else {
            h = document.createElement("<div class='" + j + "' data-href='" + c + "'></div>")
        }
    }
    var a = document.createElement("span");
    a.setAttribute("style", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;position:relative;margin:3px 3px 0;padding:0px;font-size:11px;line-height:0px;vertical-align:bottom;overflow:visible;" + f);
    (iedocmode && (iedocmode == 7) && a.style.setAttribute) ? a.style.setAttribute("cssText", "text-decoration:none;color:#000000;display:inline-block;cursor:pointer;position:relative;margin:3px 3px 0;font-size:11px;line-height:0px;" + f, 0): (null);
    a.appendChild(h);
    return a
};
stButtons.getCount = function(c, a, d) {
    var b = false;
    if (d && d !== null) {
        while (d.childNodes.length >= 1) {
            try {
                d.removeChild(d.firstChild)
            } catch (e) {}
        }
    }
    stButtons.cbQueue.push({
        url: c,
        service: a,
        element: d
    });
    stButtons.getServerCounts(c, a, d)
};
stButtons.getCount2 = function(c, a, d) {
    var b = false;
    if (d && d !== null) {
        while (d.childNodes.length >= 1) {
            try {
                d.removeChild(d.firstChild)
            } catch (e) {}
        }
    }
    if (stWidget.options.nativeCount && stlib.nativeCounts.checkNativeCountServicesQueue(a)) {
        if (a == "facebook") {
            if ((/#/).test(c)) {
                c = c.split("#")[0]
            }
        }
        stButtons.cbNativeQueue.push({
            url: c,
            service: a,
            element: d
        });
        if (typeof(stButtons.countsNativeResp[c]) == "undefined") {
            stButtons.countsNativeResp[c] = []
        }
        if (typeof(stButtons.countsNativeResp[c][a]) == "undefined") {
            stlib.nativeCounts.getNativeCounts(a, c, "stButtons." + a + "CB");
            stButtons.countsNativeResp[c][a] = null
        } else {
            if (stButtons.countsNativeResp[c][a] != null) {
                switch (a) {
                    case "facebook":
                        stButtons.facebookCB(stButtons.countsNativeResp[c][a]);
                        break;
                    case "linkedin":
                        stButtons.linkedinCB(stButtons.countsNativeResp[c][a]);
                        break;
                    case "stumbleupon":
                        stButtons.stumbleuponCB(stButtons.countsNativeResp[c][a]);
                        break
                }
            }
        }
    } else {
        stButtons.cbQueue.push({
            url: c,
            service: a,
            element: d
        });
        if (c in stButtons.retrievedCounts) {
            stButtons.processCount(stButtons.countsResp[c])
        } else {
            stButtons.getServerCounts(c, a, d)
        }
    }
};
stButtons.processCB = function(a) {
    if (typeof(a) != "undefined" && typeof(a.ourl) != "undefined") {
        stButtons.countsResp[a.ourl] = a
    }
    stButtons.processCount(a)
};
stButtons.stumbleuponCB = function(a) {
    var b = {
        ourl: "",
        stumbleupon: null
    };
    if (typeof(a) != "undefined" && typeof(a.result) != "undefined") {
        if (typeof(stButtons.countsNativeResp[a.result.url]) != "undefined") {
            stButtons.countsNativeResp[a.result.url]["stumbleupon"] = a
        }
        b.ourl = a.result.url;
        if (typeof(a.result.views) != "undefined") {
            b.stumbleupon = a.result.views
        }
    }
    stButtons.processNativeCount(b, "stumbleupon")
};
stButtons.linkedinCB = function(a) {
    var b = {
        ourl: "",
        linkedin: null
    };
    if (typeof(a) != "undefined") {
        if (typeof(stButtons.countsNativeResp[a.url]) != "undefined") {
            stButtons.countsNativeResp[a.url]["linkedin"] = a
        }
        b.ourl = a.url;
        if (typeof(a.count) != "undefined") {
            b.linkedin = a.count
        }
    }
    stButtons.processNativeCount(b, "linkedin")
};
stButtons.facebookCB = function(a) {
    var b = {
        ourl: "",
        facebook: null
    };
    if (typeof(a) != "undefined") {
        if (typeof(stButtons.countsNativeResp[a.data[0].url]) != "undefined") {
            stButtons.countsNativeResp[a.data[0].url]["facebook"] = a.data
        }
        b.ourl = a.data[0].url;
        if (typeof(a.data[0].total_count) != "undefined") {
            b.facebook = a.data[0].total_count
        }
    }
    stButtons.processNativeCount(b, "facebook")
};
stButtons.processCount = function(b) {
    if (!(b)) {
        return
    }
    stButtons.storedCountResponse = b;
    var a = false;
    for (var c = 0; c < stButtons.cbQueue.length; c++) {
        var e = stButtons.cbQueue[c];
        if (b.ourl == e.url) {
            var g = "New";
            try {
                if (e.service == "sharethis") {
                    if (stWidget.options.minShareCount == null || b.total >= stWidget.options.minShareCount) {
                        if (stWidget.options.newOrZero == "zero") {
                            g = (b.total > 0) ? stButtons.human(b.total) : "0"
                        } else {
                            g = (b.total > 0) ? stButtons.human(b.total) : "New"
                        }
                    }
                } else {
                    if (e.service == "facebook" && typeof(b.facebook2) != "undefined") {
                        if (stWidget.options.minShareCount == null || b.facebook2 >= stWidget.options.minShareCount) {
                            g = stButtons.human(b.facebook2)
                        }
                    } else {
                        if (typeof(b[e.service]) != "undefined") {
                            if (stWidget.options.minShareCount == null || b[e.service] >= stWidget.options.minShareCount) {
                                g = (b[e.service] > 0) ? stButtons.human(b[e.service]) : "0"
                            }
                        } else {
                            if (stWidget.options.minShareCount == null || stWidget.options.minShareCount <= 0) {
                                g = "0"
                            }
                        }
                    }
                }
                if (/stHBubble/.test(e.element.parentNode.className) == true) {
                    e.element.parentNode.style.display = "inline-block"
                } else {
                    if (/stBubble/.test(e.element.parentNode.className) == true) {
                        e.element.parentNode.style.display = "block"
                    }
                }
                e.element.innerHTML = g
            } catch (d) {
                if (!e.element.hasChildNodes()) {
                    var f = document.createElement("div");
                    f.innerHTML = g;
                    e.element.appendChild(f)
                }
            }
            a = true
        }
    }
};
stButtons.processNativeCount = function(b, a) {
    if (!(b)) {
        return
    }
    if (!(a)) {
        return
    }
    for (var c = 0; c < stButtons.cbNativeQueue.length; c++) {
        var e = stButtons.cbNativeQueue[c];
        if (b.ourl == e.url || (a == "stumbleupon" && b.ourl.replace(/http:\/\/www\.|http:\/\/|www\./i, "") == e.url.replace(/http:\/\/www\.|http:\/\/|www\./i, ""))) {
            var g = "New";
            try {
                if (e.service == a) {
                    if (b[a] != null) {
                        if (stWidget.options.minShareCount == null || b[a] >= stWidget.options.minShareCount) {
                            g = stButtons.human(b[a])
                        }
                    }
                } else {
                    continue
                }
                if (/stHBubble/.test(e.element.parentNode.className) == true) {
                    e.element.parentNode.style.display = "inline-block"
                } else {
                    if (/stBubble/.test(e.element.parentNode.className) == true) {
                        e.element.parentNode.style.display = "block"
                    }
                }
                e.element.innerHTML = g
            } catch (d) {
                if (!e.element.hasChildNodes()) {
                    var f = document.createElement("div");
                    f.innerHTML = g;
                    e.element.appendChild(f)
                }
            }
        }
    }
};
stButtons.human = function(a) {
    if (a >= 100000) {
        a = a / 1000;
        a = Math.round(a);
        a = a + "K"
    } else {
        if (a >= 10000) {
            a = a / 100;
            a = Math.round(a);
            a = a / 10;
            a = a + "K"
        }
    }
    return a
};
stButtons.isValidService = function(a) {
    return (typeof(stlib.allServices) === "object" && stlib.allServices.hasOwnProperty(a)) ? true : (typeof(stlib.allOauthServices) === "object" && stlib.allOauthServices.hasOwnProperty(a)) ? true : (typeof(stlib.allNativeServices) === "object" && stlib.allNativeServices.hasOwnProperty(a)) ? true : (typeof(stlib.allOtherServices) === "object" && stlib.allOtherServices.hasOwnProperty(a)) ? true : false
};
stButtons.locateElements = function(e) {
    var E = document.getElementsByTagName("*");
    var t = [];
    var W = new RegExp(/st_(.*?)_custom/);
    var V = new RegExp(/st_(.*?)_vcount/);
    var G = new RegExp(/st_(.*?)_vcount_native/);
    var U = new RegExp(/st_(.*?)_hcount/);
    var s = new RegExp(/st_(.*?)_hcount_native/);
    var T = new RegExp(/st_(.*?)_button/);
    var S = new RegExp(/st_(.*?)_large/);
    var R = new RegExp(/st_(.*?)_pcount/);
    var P = new RegExp(/st_(.*?)_stbar/);
    var M = new RegExp(/st_(.*?)_stsmbar/);
    var L = new RegExp(/st_(.*?)_css/);
    var D = new RegExp(/^st_(.*?)$/);
    var m = new RegExp(/st_(.*?)_basic/);
    var u = new RegExp(/st_(.*?)_circle/);
    var q = new RegExp(/(st_(.*?)_basic)|(st_(.*?)_circle)/);
    var g = new RegExp(/(st_(.*?)_brushed)|(st_(.*?)_shiny)/);
    var J = new RegExp(/(st_(.*?)_brushed)/);
    var X = new RegExp(/(st_(.*?)_shiny)/);
    var j = E.length;
    var c = false;
    var v = {};
    var H = 0,
        I, r, o, a = [],
        C = false;
    if (typeof(stRecentServices) != "undefined" && stRecentServices != "undefined" && stRecentServices != "false" && stRecentServices) {
        C = true
    }
    for (var K = 0; K < j; K++) {
        I = "";
        r = false;
        o = false;
        if (typeof(E[K].className) == "string" && E[K].className != "") {
            if (!(stlib.browser.mobile.isIOs() || stlib.browser.mobile.isAndroid()) && ((E[K].className.indexOf("whatsapp") !== -1 || E[K].className.indexOf("kik") !== -1) && window.location.pathname.indexOf("get-sharing-tools") === -1)) {
                continue
            }
            if (E[K].className.indexOf("kik") !== -1) {
                continue
            }
            if (E[K].className.match(W) && E[K].className.match(W).length >= 2 && E[K].className.match(W)[1]) {
                if (stButtons.testElem(E[K]) == false) {
                    o = true;
                    I = E[K].className.match(W)[1];
                    typeName = "custom";
                    if (I == "plusone" || I == "fblike" || I == "fbrec" || I == "fbsend" || I == "fbsub") {
                        typeName = "chicklet"
                    }
                    t.push({
                        service: I,
                        element: E[K],
                        url: E[K].getAttribute("st_url"),
                        short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                        title: E[K].getAttribute("st_title"),
                        image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                        pinterest_native: E[K].getAttribute("st_native"),
                        message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                        summary: E[K].getAttribute("st_summary"),
                        text: E[K].getAttribute("displayText"),
                        type: typeName
                    });
                    E[K].setAttribute("st_processed", "yes");
                    stlib.st_processed = true
                }
            } else {
                if (E[K].className.match(q) && E[K].className.match(q).length >= 2) {
                    if (stButtons.testElem(E[K]) == false) {
                        o = true;
                        I = E[K].className.split("_")[1];
                        var Y = "basic";
                        if (E[K].className.match(u)) {
                            Y = "circle"
                        }
                        t.push({
                            service: I,
                            element: E[K],
                            url: E[K].getAttribute("st_url"),
                            short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                            title: E[K].getAttribute("st_title"),
                            image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                            pinterest_native: E[K].getAttribute("st_native"),
                            message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                            summary: E[K].getAttribute("st_summary"),
                            text: E[K].getAttribute("displayText"),
                            type: Y,
                            size: E[K].className.split("$")[1],
                            color: E[K].className.split("$")[2]
                        });
                        E[K].setAttribute("st_processed", "yes");
                        stlib.st_processed = true
                    }
                } else {
                    if (E[K].className.match(g) && E[K].className.match(g).length >= 2) {
                        if (stButtons.testElem(E[K]) == false) {
                            o = true;
                            I = E[K].className.split("_")[1];
                            var Y = "brushed";
                            if (E[K].className.match(X)) {
                                Y = "shiny"
                            }
                            t.push({
                                service: I,
                                element: E[K],
                                url: E[K].getAttribute("st_url"),
                                short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                title: E[K].getAttribute("st_title"),
                                image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                pinterest_native: E[K].getAttribute("st_native"),
                                message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                summary: E[K].getAttribute("st_summary"),
                                text: E[K].getAttribute("displayText"),
                                type: Y,
                                size: E[K].className.split("$")[1]
                            });
                            E[K].setAttribute("st_processed", "yes");
                            stlib.st_processed = true
                        }
                    } else {
                        if (E[K].className.match(V) && E[K].className.match(V).length >= 2 && E[K].className.match(V)[1]) {
                            if (stButtons.testElem(E[K]) == false) {
                                o = true;
                                I = E[K].className.match(V)[1];
                                var N = "";
                                if (E[K].className.match(G) && E[K].className.match(G).length >= 2 && E[K].className.match(G)[1]) {
                                    N = "native"
                                }
                                t.push({
                                    service: I,
                                    element: E[K],
                                    url: E[K].getAttribute("st_url"),
                                    short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                    title: E[K].getAttribute("st_title"),
                                    image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                    pinterest_native: E[K].getAttribute("st_native"),
                                    message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                    summary: E[K].getAttribute("st_summary"),
                                    text: E[K].getAttribute("displayText"),
                                    type: "vcount",
                                    ctype: N
                                });
                                E[K].setAttribute("st_processed", "yes");
                                stlib.st_processed = true
                            }
                        } else {
                            if (E[K].className.match(U) && E[K].className.match(U).length >= 2 && E[K].className.match(U)[1]) {
                                if (stButtons.testElem(E[K]) == false) {
                                    o = true;
                                    I = E[K].className.match(U)[1];
                                    var N = "";
                                    if (E[K].className.match(s) && E[K].className.match(s).length >= 2 && E[K].className.match(s)[1]) {
                                        N = "native"
                                    }
                                    t.push({
                                        service: I,
                                        element: E[K],
                                        url: E[K].getAttribute("st_url"),
                                        short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                        title: E[K].getAttribute("st_title"),
                                        image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                        pinterest_native: E[K].getAttribute("st_native"),
                                        message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                        summary: E[K].getAttribute("st_summary"),
                                        text: E[K].getAttribute("displayText"),
                                        type: "hcount",
                                        ctype: N
                                    });
                                    E[K].setAttribute("st_processed", "yes");
                                    stlib.st_processed = true
                                }
                            } else {
                                if (E[K].className.match(T) && E[K].className.match(T).length >= 2 && E[K].className.match(T)[1]) {
                                    if (stButtons.testElem(E[K]) == false) {
                                        o = true;
                                        I = E[K].className.match(T)[1];
                                        t.push({
                                            service: I,
                                            element: E[K],
                                            url: E[K].getAttribute("st_url"),
                                            short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                            title: E[K].getAttribute("st_title"),
                                            image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                            pinterest_native: E[K].getAttribute("st_native"),
                                            message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                            summary: E[K].getAttribute("st_summary"),
                                            text: E[K].getAttribute("displayText"),
                                            type: "button"
                                        });
                                        E[K].setAttribute("st_processed", "yes");
                                        stlib.st_processed = true
                                    }
                                } else {
                                    if (E[K].className.match(S) && E[K].className.match(S).length >= 2 && E[K].className.match(S)[1]) {
                                        if (stButtons.testElem(E[K]) == false) {
                                            o = true;
                                            I = E[K].className.match(S)[1];
                                            t.push({
                                                service: I,
                                                element: E[K],
                                                url: E[K].getAttribute("st_url"),
                                                short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                                title: E[K].getAttribute("st_title"),
                                                image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                                pinterest_native: E[K].getAttribute("st_native"),
                                                message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                                summary: E[K].getAttribute("st_summary"),
                                                text: E[K].getAttribute("displayText"),
                                                type: "large"
                                            });
                                            E[K].setAttribute("st_processed", "yes");
                                            stlib.st_processed = true
                                        }
                                    } else {
                                        if (E[K].className.match(R) && E[K].className.match(R).length >= 2 && E[K].className.match(R)[1]) {
                                            if (stButtons.testElem(E[K]) == false) {
                                                o = true;
                                                I = E[K].className.match(R)[1];
                                                t.push({
                                                    service: I,
                                                    element: E[K],
                                                    url: E[K].getAttribute("st_url"),
                                                    short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                                    title: E[K].getAttribute("st_title"),
                                                    image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                                    pinterest_native: E[K].getAttribute("st_native"),
                                                    message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                                    summary: E[K].getAttribute("st_summary"),
                                                    text: E[K].getAttribute("displayText"),
                                                    type: "pcount",
                                                    count: K
                                                });
                                                E[K].setAttribute("st_processed", "yes");
                                                stlib.st_processed = true
                                            }
                                        } else {
                                            if (E[K].className.match(P) && E[K].className.match(P).length >= 2 && E[K].className.match(P)[1]) {
                                                if (stButtons.testElem(E[K]) == false) {
                                                    o = true;
                                                    I = E[K].className.match(P)[1];
                                                    t.push({
                                                        service: I,
                                                        element: E[K],
                                                        url: E[K].getAttribute("st_url"),
                                                        short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                                        title: E[K].getAttribute("st_title"),
                                                        image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                                        pinterest_native: E[K].getAttribute("st_native"),
                                                        message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                                        summary: E[K].getAttribute("st_summary"),
                                                        text: E[K].getAttribute("displayText"),
                                                        type: "stbar",
                                                        count: K
                                                    });
                                                    E[K].setAttribute("st_processed", "yes");
                                                    stlib.st_processed = true
                                                }
                                            } else {
                                                if (E[K].className.match(M) && E[K].className.match(M).length >= 2 && E[K].className.match(M)[1]) {
                                                    if (stButtons.testElem(E[K]) == false) {
                                                        o = true;
                                                        I = E[K].className.match(M)[1];
                                                        t.push({
                                                            service: I,
                                                            element: E[K],
                                                            url: E[K].getAttribute("st_url"),
                                                            short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                                            title: E[K].getAttribute("st_title"),
                                                            image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                                            pinterest_native: E[K].getAttribute("st_native"),
                                                            message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                                            summary: E[K].getAttribute("st_summary"),
                                                            text: E[K].getAttribute("displayText"),
                                                            type: "stsmbar",
                                                            count: K
                                                        });
                                                        E[K].setAttribute("st_processed", "yes");
                                                        stlib.st_processed = true
                                                    }
                                                } else {
                                                    if (E[K].className.match(L) && E[K].className.match(L).length >= 2 && E[K].className.match(L)[1]) {
                                                        if (stButtons.testElem(E[K]) == false) {
                                                            o = true;
                                                            I = E[K].className.match(L)[1];
                                                            var O = E[K].className.split("_");
                                                            t.push({
                                                                service: I,
                                                                element: E[K],
                                                                url: E[K].getAttribute("st_url"),
                                                                short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                                                title: E[K].getAttribute("st_title"),
                                                                image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                                                pinterest_native: E[K].getAttribute("st_native"),
                                                                message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                                                summary: E[K].getAttribute("st_summary"),
                                                                text: E[K].getAttribute("displayText"),
                                                                type: "css",
                                                                cssType: O[O.length - 1]
                                                            });
                                                            E[K].setAttribute("st_processed", "yes");
                                                            stlib.st_processed = true
                                                        }
                                                    } else {
                                                        if (E[K].className.match(D) && E[K].className.match(D).length >= 2 && E[K].className.match(D)[1]) {
                                                            if (stButtons.testElem(E[K]) == false) {
                                                                o = true;
                                                                I = E[K].className.match(D)[1];
                                                                t.push({
                                                                    service: I,
                                                                    element: E[K],
                                                                    url: E[K].getAttribute("st_url"),
                                                                    short_url: (E[K].getAttribute("st_short_url") != null) ? E[K].getAttribute("st_short_url") : "",
                                                                    title: E[K].getAttribute("st_title"),
                                                                    image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                                                                    pinterest_native: E[K].getAttribute("st_native"),
                                                                    message: (E[K].getAttribute("st_msg") != null) ? E[K].getAttribute("st_msg") : E[K].getAttribute("st_message"),
                                                                    summary: E[K].getAttribute("st_summary"),
                                                                    text: E[K].getAttribute("displayText"),
                                                                    type: "chicklet"
                                                                });
                                                                E[K].setAttribute("st_processed", "yes");
                                                                stlib.st_processed = true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (C) {
                if (o) {
                    for (H = 0; H < a.length; H++) {
                        if (a[H].service == I) {
                            a[H].count++;
                            r = true
                        }
                    }
                    if (!r) {
                        a.push({
                            service: I,
                            count: 1,
                            doNotReplace: false,
                            processed: false
                        })
                    }
                }
            }
            if (I == "sharethis") {
                if (stlib.browser.mobile.isMobile()) {
                    if (c) {
                        if (!stlib.browser.mobile.isExcerptImplementation) {
                            var d;
                            var f = document.getElementsByTagName("meta");
                            for (var B = 0, A = f.length; B < A; B++) {
                                if (f[B].name.toLowerCase() == "description") {
                                    d = f[B]
                                }
                            }
                            v.url = document.URL;
                            v.title = document.title;
                            v.image = null;
                            v.summary = d
                        }
                        stlib.browser.mobile.isExcerptImplementation = true
                    } else {
                        v = {
                            service: I,
                            url: E[K].getAttribute("st_url"),
                            title: E[K].getAttribute("st_title"),
                            image: (E[K].getAttribute("st_img") != null) ? E[K].getAttribute("st_img") : E[K].getAttribute("st_image"),
                            summary: E[K].getAttribute("st_summary"),
                            via: E[K].getAttribute("st_via"),
                            type: "button"
                        }
                    }
                }
                c = true
            }
        }
    }
    var p = stButtons.isBarsExist();
    if (stlib.browser.mobile.isMobile() && p && !c) {
        var d;
        var f = document.getElementsByTagName("meta");
        for (var B = 0, A = f.length; B < A; B++) {
            if (f[B].name.toLowerCase() == "description") {
                d = f[B]
            }
        }
        v = {
            service: "sharethis",
            url: document.URL,
            title: document.title,
            image: null,
            summary: d,
            type: "button"
        };
        c = true
    }
    if (C) {
        var Q = [];
        for (var B = a.length - 1; B >= 0; B--) {
            if (a[B].service == "sharethis" || a[B].doNotReplace) {
                a[B].processed = true;
                continue
            } else {
                for (var A in stRecentServices) {
                    var h = false;
                    if (!stRecentServices[A].processed) {
                        for (var b = 0; b < a.length; b++) {
                            if (A == a[b].service && !a[b].processed) {
                                h = true;
                                a[b].doNotReplace = true;
                                stRecentServices[A].processed = true;
                                break
                            }
                        }
                        if (h) {
                            a[B].processed = true
                        } else {
                            Q.push({
                                oldService: a[B].service,
                                newService: A
                            });
                            for (var w = 0; w < t.length; w++) {
                                if (t[w].service == a[B].service) {
                                    t[w].service = A;
                                    t[w].text = stRecentServices[A].title;
                                    t[w].element.setAttribute("displayText", stRecentServices[A].title);
                                    t[w].element.className = t[w].element.className.replace(a[B].service, A)
                                }
                            }
                            stRecentServices[A].processed = true;
                            a[B].processed = true;
                            break
                        }
                    }
                }
            }
        }
    }
    if (t.length > 0 && c && stlib.browser.mobile.isMobile() && stShowNewMobileWidget && !isMobileButtonLoaded) {
        var F = document.querySelector && document.querySelector('div[id="stToolPop"]');
        if (F == null) {
            stButtons.createMobileShareButton();
            v.element = document.getElementById("stToolPop");
            t.push(v);
            if (stWidget.mobileWidgetLoaded == false) {
                var n = "https://ws.sharethis.com/mobile/js/mobile.566f13d70dd23ba2235da8c858cab592.js";
                stlib.scriptLoader.loadJavascript(n, function() {
                    mobileWidget.init();
                    stWidget.mobileWidgetLoaded = true
                })
            }
        }
    }
    var l = t.length;
    for (var K = 0; K < l; K++) {
        if (!stButtons.isValidService(t[K].service)) {
            continue
        }
        stWidget.addEntry(t[K])
    }
    if (l > 0 && stShowNewMobileWidget && c && stlib.browser.mobile.isMobile()) {
        stButtons.hideBarsAndButtons()
    }
    if (!stlib.st_processed) {
        setTimeout(stButtons.locateElements, 300)
    }
};
stButtons.odcss = function(a, b) {
    this.head = document.getElementsByTagName("head")[0];
    this.scriptSrc = a;
    this.css = document.createElement("link");
    this.css.setAttribute("rel", "stylesheet");
    this.css.setAttribute("type", "text/css");
    this.css.setAttribute("href", this.scriptSrc);
    setTimeout(function() {
        b()
    }, 500);
    this.head.appendChild(this.css)
};
stButtons.makeButtons = function() {
    if (typeof(stButtons.button_css_called) == "undefined") {
        var a = "https://ws.sharethis.com/button/css/buttons-secure.css";
        stButtons.odcss(a, function() {});
        stButtons.button_css_called = true
    }
    stButtons.locateElements()
};
stButtons.getPlusOneFromGoogle = function(a) {
    if (stButtons.plusOneLoaded == false) {
        if (stButtons.plusOneLoading == false) {
            var b = document.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.setAttribute("src", "https://apis.google.com/js/plusone.js");
            b.async = stWidget.options.asyncPlusone;
            b.onload = function() {
                stButtons.renderPlusOneFromGoogle(a);
                stButtons.plusOneLoaded = true;
                stButtons.plusOneLoading = false
            };
            b.onreadystatechange = function() {
                if (this.readyState == "complete") {
                    stButtons.renderPlusOneFromGoogle(a);
                    stButtons.plusOneLoaded = true;
                    stButtons.plusOneLoading = false
                }
            };
            stButtons.plusOneLoading = true;
            document.getElementsByTagName("head")[0].appendChild(b)
        }
    } else {
        stButtons.renderPlusOneFromGoogle(a)
    }
};
stButtons.renderPlusOneFromGoogle = function(a) {
    if (a == "plusone") {
        gapi.plusone.go()
    } else {
        if (a == "googleplusfollow" || a == "googleplusadd") {
            gapi.plus.go()
        }
    }
};
stButtons.getXFBMLFromFB = function(c) {
    if (typeof(stWidget.options.fbLoad) != "undefined" && stWidget.options.fbLoad != true) {
        return
    }
    if (stButtons.xfbmlLoaded == false) {
        if (stButtons.xfbmlLoading == false) {
            stButtons.xfbmlLoading = true;
            var d = document.createElement("div");
            d.setAttribute("id", "fb-root");
            document.body.appendChild(d);
            var b = "en_US";
            if (typeof(stWidget.options.fbLang) != "undefined" && stWidget.options.fbLang != "") {
                b = stWidget.options.fbLang
            }
            var f, e = document.getElementsByTagName("script")[0];
            if (document.getElementById("facebook-jssdk")) {
                if (typeof(FB) != "undefined" && typeof(FB.XFBML) != "undefined" && typeof(FB.XFBML.parse) == "function") {
                    if (!(/iframe/).test(c.innerHTML)) {
                        FB.XFBML.parse(c)
                    }
                    stButtons.trackFB();
                    stButtons.xfbmlLoaded = true;
                    stButtons.xfbmlLoading = false
                }
                return
            }
            f = document.createElement("script");
            f.id = "facebook-jssdk";
            f.src = "//connect.facebook.net/" + b + "/sdk.js";
            f.async = stWidget.options.async;
            if (window.fbAsyncInit) {
                var a = window.fbAsyncInit;
                window.fbAsyncInit = function() {
                    a();
                    stButtons.initFB()
                }
            } else {
                stButtons.setupFBAsynch(f)
            }
            e.parentNode.insertBefore(f, e)
        }
    } else {
        if (!(/iframe/).test(c.innerHTML)) {
            FB.XFBML.parse(c)
        }
        stButtons.trackFB()
    }
};
stButtons.initFB = function() {
    stButtons.trackFB();
    stButtons.xfbmlLoaded = true;
    stButtons.xfbmlLoading = false
};
stButtons.setupFBAsynch = function(a) {
    a.onload = function() {
        FB.init({
            appId: "",
            xfbml: true,
            version: "v2.0"
        });
        stButtons.initFB()
    };
    a.onreadystatechange = function() {
        if (this.readyState == "complete" || this.readyState == "loaded") {
            FB.init({
                appId: "",
                xfbml: true,
                version: "v2.0"
            });
            stButtons.initFB()
        }
    }
};
stButtons.addCount = function(a) {
    stButtons.counts.push(a)
};
stButtons.getCountsFromService = function(a, g, e) {
    if (stButtons.checkQueue(a) == false) {
        var c = c + "-" + stButtons.cbVal;
        c = "stButtons.processCB";
        stButtons.cbVal++;
        var i = document.referrer;
        var d = i.replace("http://", "").replace("https://", "").split("/");
        var h = d.shift();
        var b = d.join("/");
        h = encodeURIComponent(h);
        b = encodeURIComponent(b);
        var f = stButtonsLib.publisher;
        var j = "https://ws.sharethis.com/api/getCount2.php?cb=" + c + "&refDomain=" + h + "&refQuery=" + b + "&pgurl=" + encodeURIComponent(document.location.href) + "&pubKey=" + f + "&url=";
        stButtonsLib.odjs(j + encodeURIComponent(a), function() {});
        stButtons.queue.push(a)
    }
    if (stButtons.countsResp[a]) {
        stButtons.processCount(stButtons.countsResp[a])
    }
};
stButtons.getServerCounts = function(a, g, e) {
    if (stButtons.checkQueue(a) == false) {
        var c = "stButtons.processCB";
        var b = "true";
        var f = "https://";
        var h = "count-server.sharethis.com/v2.0/get_counts";
        var d = "?url=" + encodeURIComponent(a) + "&cb=" + c + "&wd=" + b;
        var i = f + h + d;
        stButtons.cbVal++;
        stButtonsLib.odjs(i, function() {});
        stButtons.queue.push(a);
        stButtons.retrievedCounts[a] = true
    }
    if (stButtons.countsResp[a]) {
        stButtons.processCount(stButtons.countsResp[a])
    }
};
stButtons.incrementClicks = function(a) {
    var i = document.referrer;
    var c = i.replace("http://", "").replace("https://", "").split("/");
    var g = c.shift();
    var b = c.join("/");
    g = encodeURIComponent(g);
    b = encodeURIComponent(b);
    var e = "https://";
    var h = "count-server.sharethis.com/increment_clicks";
    var d = "?url=" + encodeURIComponent(a) + "&refDomain=" + g + "&refQuery=" + b;
    var f = e + h + d;
    if (g == "www.mangatown.com" || g == "imobiliariacasa.com.br") {
        return
    }
    stButtonsLib.odjs(f, function() {})
};
stButtons.checkQueue = function(a) {
    for (var b = 0; b < stButtons.queue.length; b++) {
        if (stButtons.queue[b] == a) {
            return true
        }
    }
    return false
};
stButtons.testElem = function(b) {
    var a = false;
    if (b.getAttribute("st_processed") != null) {
        return true
    } else {
        return false
    }
};
stButtons.createMobileShareButton = function() {
    if (document.getElementById("stToolPop") != null) {
        return
    }
    var b = document.createElement("div");
    var a = document.createElement("a");
    var d = document.createElement("img");
    var c = document.getElementsByTagName("body")[0];
    b.id = "stToolPop";
    b.className = "stToolPop-circular semiTrans gray";
    b.style.visibility = "hidden";
    a.className = "stToolPopLink";
    a.href = "javascript:void(0)";
    d.id = "stToolPop_logo";
    d.src = "https://ws.sharethis.com/images/st-logo-m-widget.png";
    a.appendChild(d);
    b.appendChild(a);
    c.appendChild(b);
    isMobileButtonLoaded = true
};
stButtons.hideBarsAndButtons = function() {
    var c = document.getElementById("sharebar");
    if (c != null) {
        c.style.cssText = "display:none !important"
    }
    var b = document.getElementById("sthoverbuttons");
    if (b != null) {
        b.style.visibility = "hidden"
    }
    var a = document.getElementById("stpulldown");
    if (a != null) {
        a.style.visibility = "hidden"
    }
};
stButtons.isBarsExist = function() {
    var b = false;
    var d = document.getElementById("sharebar");
    var c = document.getElementById("sthoverbuttons");
    var a = document.getElementById("stpulldown");
    if (d != null || c != null || a != null) {
        b = true
    }
    return b
};

function Shareable(c) {
    var a = {};
    a.facebook = "450";
    a.twitter = "684";
    a.yahoo = "500";
    a.linkedin = "600";
    var b = {};
    b.facebook = "300";
    b.twitter = "718";
    b.yahoo = "460";
    b.linkedin = "433";
    this.idx = -1;
    this.url = null;
    this.short_url = null;
    this.title = null;
    this.image = null;
    this.pinterest_native = null;
    this.element = null;
    this.service = null;
    this.message = null;
    this.screen = "home";
    this.summary = null;
    this.via = null;
    this.content = null;
    this.buttonText = null;
    this.frag = null;
    this.onhover = true;
    this.type = null;
    var d = this;
    var e = false;
    this.attachButton = function(f) {
        this.element = f;
        if ((this.onhover == true || this.onhover == "true") && !stlib.browser.mobile.isMobile() && ((stWidgetVersion == "4x") || ((stWidgetVersion == "5xa") && (c.service == "sharethis" || c.service == "email" || c.service == "wordpress")))) {
            f.onmouseover = this.mouseOn;
            f.onmouseout = this.mouseOut
        }
        f.onclick = function(g) {
            d.getSrcOfWidget(this);
            d.decideFastShare()
        }
    };
    this.getSrcOfWidget = function(h) {
        var g = new RegExp(/hoverbuttons/),
            i = null;
        if (h.className.match("buttonAnimate")) {
            i = "newhb"
        }
        if (null != i) {
            stlib.data.set("widSrc", i, "pageInfo")
        } else {
            var f = stlib.data.get("widSrc", "pageInfo");
            if (null != f || f) {
                stlib.data.unset("widSrc", "pageInfo")
            }
        }
    };
    this.init = function() {
        stWidget.merge(this, c);
        stWidget.shareables.push(this);
        if (c.element !== null) {
            this.attachButton(c.element)
        }
    };
    return this
}
if (typeof(stWidget) == "undefined" || (typeof(stWidget) != "undefined" && typeof(stWidget.readyRun) == "undefined")) {
    var stWidget = new function() {
        if (typeof(stWidget.readyRun) != "undefined" && stWidget.readyRun == true) {
            return
        }
        this.readyRun = true;
        this.shareables = [];
        this.entries = 0;
        this.widgetOpen = false;
        this.mouseOnTimer = null;
        this.mouseTimer = null;
        this.mouseOutTimer = null;
        this.frameReady = false;
        this.stopClosing = false;
        this.buttonClicked = false;
        this.widgetLoadingComplete = false;
        this.frameUrl5xa = this.frameUrl5x = "https://ws.sharethis.com/secure5x/index.html";
        this.frameUrl4x = "https://ws.sharethis.com/secure/index.html";
        this.secure = false;
        try {
            this.mainstframe = document.createElement('<iframe name="stLframe" allowTransparency="true" style="body{background:transparent;}" ></iframe>');
            this.mainstframe.onreadystatechange = function() {
                if (stWidget.mainstframe.readyState === "complete") {
                    stWidget.frameReady = true;
                    stButtons.pumpInstance = new stlib.pump(stWidget.mainstframe, stWidget.mainstframe, function() {
                        stButtons.messageQueueInstance.process()
                    });
                    stButtons.messageQueueInstance.setPumpInstance(stButtons.pumpInstance);
                    try {
                        stButtons.pumpInstance.broadcastSendMessage("Buttons Ready")
                    } catch (c) {}
                }
            }
        } catch (b) {
            this.mainstframe = document.createElement("iframe");
            this.mainstframe.allowTransparency = "true";
            this.mainstframe.setAttribute("allowTransparency", "true");
            this.mainstframe.onload = function() {
                stWidget.frameReady = true;
                stButtons.pumpInstance = new stlib.pump(stWidget.mainstframe, stWidget.mainstframe, function() {
                    stButtons.messageQueueInstance.process()
                });
                stButtons.messageQueueInstance.setPumpInstance(stButtons.pumpInstance);
                try {
                    stButtons.pumpInstance.broadcastSendMessage("Buttons Ready")
                } catch (c) {}
            }
        }
        this.mainstframe.id = "stLframe";
        this.mainstframe.className = "stLframe";
        this.mainstframe.name = "stLframe";
        this.mainstframe.frameBorder = "0";
        this.mainstframe.scrolling = "no";
        this.wrapper = document.createElement("div");
        this.wrapper.id = "stwrapper";
        this.wrapper.className = "stwrapper";
        this.wrapper.style.display = "none";
        var a = 0;
        this.widgetLoadInterval = self.setInterval(function() {
            stWidget.widgetLoad();
            a += 1;
            if (a > 90) {
                stWidget.forceDefaultWidgetSetting();
                window.clearInterval(stWidget.widgetLoadInterval)
            }
        }, 1000);
        this.ogtitle = null;
        this.ogdesc = null;
        this.ogurl = null;
        this.short_url = null;
        this.ogimg = null;
        this.ogtype = null;
        this.twittertitle = null;
        this.twitterdesc = null;
        this.twitterurl = null;
        this.twitterimg = null;
        this.twittercard = null;
        this.desc = null;
        this.initFire = false;
        this.merge = function(e, d) {
            for (var c in d) {
                if (e.hasOwnProperty(c) && d[c] !== null) {
                    e[c] = d[c]
                }
            }
        };
        this.oldScroll = 0;
        this.init = function() {
            if (stWidget.initFire == false) {
                stWidget.initFire = true;
                if (stButtons.messageQueueInstance == null) {
                    stButtons.messageQueueInstance = new stlib.messageQueue()
                }
                if (stlib.browser.ieFallback) {
                    setTimeout("stButtons.messageQueueInstance.send(stWidget.createFrag(stlib.data,'data'), 'data');", 1000)
                } else {
                    stButtons.messageQueueInstance.send(stWidget.createFrag(stlib.data, "data"), "data")
                }
                if (stlib.browser.ieFallback) {
                    setTimeout("stButtons.messageQueueInstance.send(stWidget.createFrag(null,'init'), 'init');", 2000);
                    setTimeout("stWidget.initIE=true;", 2500)
                } else {
                    stButtons.messageQueueInstance.send(stWidget.createFrag(null, "init"), "init")
                }
            }
        }
    }
}
stWidget.createWidgetContainer = function() {
    window.clearInterval(stWidget.widgetLoadInterval);
    if (stWidgetVersion == "5xa") {
        stWidget.frameUrlChoice = stWidget.frameUrl5xa;
        stWidget.wrapper.className += " stwrapper5x"
    } else {
        if (stWidgetVersion == "4x") {
            stWidget.frameUrlChoice = stWidget.frameUrl4x;
            stWidget.wrapper.className += " stwrapper4x"
        }
    }
    stWidget.mainstframe.src = stWidget.frameUrlChoice;
    stWidget.overlay = document.createElement("div");
    if (document.all && navigator.appVersion.indexOf("MSIE 6.") != -1) {
        stWidget.overlay.style.position = "absolute"
    }
    stWidget.overlay.setAttribute("id", "stOverlay");
    stWidget.overlay.setAttribute("onclick", "javascript:stWidget.closeWidget();");
    stWidget.wrapper.appendChild(stWidget.mainstframe);
    stWidget.widgetLoadingComplete = true
};
stWidget.widgetLoad = function() {
    stWidget.createWidgetContainer()
};
stWidget.forceDefaultWidgetSetting = function() {
    stButtonsLib.usePublisherDefaultSettings();
    stWidget.createWidgetContainer()
};
stWidget.mobileWidgetLoaded = false;
stWidget.mobileWidget = function(d, a, c) {
    if (stlib.browser.mobile.isMobile()) {
        if (!stShowNewMobileWidget) {
            return stlib.browser.mobile.handleForMobileFriendly(d, a, c)
        }
        if (stWidget.mobileWidgetLoaded == false) {
            var b = "https://ws.sharethis.com/mobile/js/mobile.566f13d70dd23ba2235da8c858cab592.js";
            stlib.scriptLoader.loadJavascript(b, function() {
                mobileWidget.loadMobileWidget(d, a, c);
                stWidget.mobileWidgetLoaded = true
            })
        } else {
            mobileWidget.loadMobileWidget(d, a, c)
        }
        return true
    }
    return false
};
stWidget.options = new function() {
    this.sessionID = null;
    this.publisher = null;
    this.tracking = true;
    this.send_services = null;
    this.exclusive_services = null;
    this.headerTitle = null;
    this.headerfg = null;
    this.headerbg = null;
    this.offsetLeft = null;
    this.offsetTop = null;
    this.onhover = false;
    this.async = false;
    this.asyncPlusone = false;
    this.autoclose = true;
    this.autoPosition = true;
    this.embeds = false;
    this.doneScreen = true;
    this.minorServices = true;
    this.excludeServices = null;
    this.theme = 1;
    this.serviceBarColor = null;
    this.shareButtonColor = null;
    this.footerColor = null;
    this.headerTextColor = null;
    this.helpTextColor = null;
    this.mainWidgetColor = null;
    this.textBoxFontColor = null;
    this.textRightToLeft = false;
    this.shorten = true;
    this.popup = false;
    this.newOrZero = "new";
    this.minShareCount = null;
    this.publisherGA = null;
    this.services = "";
    this.relatedDomain = null;
    this.hashAddressBar = null;
    this.doNotHash = null;
    this.doNotCopy = null;
    this.nativeCount = false;
    this.lang = "";
    this.fbLang = "";
    this.fbLoad = true;
    this.servicePopup = true;
    this.textcause = null;
    this.linkcause = null;
    this.snapsets = null;
    this.publisherMigration = false
};
stButtonsLib.options(stlib.stLightOptionsObj);
stWidget.addEntry = function(a) {
    if (!a.element) {
        return false
    }
    if (a && a.service && ((a.service == "email" || a.service == "sharethis" || a.service == "wordpress") || ((stIsLoggedIn && servicesLoggedIn && typeof(servicesLoggedIn[a.service]) != "undefined" && ((useFastShare || (!useFastShare && (stWidgetVersion == "5xa"))) && (a.service == "facebook" || a.service == "twitter" || a.service == "yahoo" || a.service == "linkedin")))))) {
        openWidget = true
    } else {
        openWidget = false
    }
    if (!openWidget) {
        if (a.type !== "custom") {
            a.element.appendChild(stButtons.makeButton(a));
            if (a.service == "plusone" || a.service == "googleplusfollow" || a.service == "googleplusadd") {
                stButtons.getPlusOneFromGoogle(a.service)
            }
            if (a.service == "fblike" || a.service == "fbsend" || a.service == "fbrec" || a.service == "fbLong" || a.service == "fbsub") {
                stButtons.getXFBMLFromFB(a.element)
            }
            if (stlib.nativeButtons.checkNativeButtonSupport(a.service)) {
                stlib.nativeButtons.loadService(a.service)
            }
        } else {
            stButtons.makeButton(a)
        }
        stlib.buttonInfo.addButton(a);
        return true
    } else {
        if (a.type != "custom") {
            a.element.appendChild(stButtons.makeButton(a));
            if (a.service == "plusone" || a.service == "googleplusfollow" || a.service == "googleplusadd") {
                stButtons.getPlusOneFromGoogle(a.service)
            }
            if (a.service == "fblike" || a.service == "fbsend" || a.service == "fbrec" || a.service == "fbLong" || a.service == "fbsub") {
                stButtons.getXFBMLFromFB(a.element)
            }
            if (stlib.nativeButtons.checkNativeButtonSupport(a.service)) {
                stlib.nativeButtons.loadService(a.service)
            }
        } else {
            stButtons.makeButton(a)
        }
        var c = new Shareable(a);
        c.idx = stWidget.entries;
        stWidget.entries++;
        c.publisher = stLight.publisher;
        c.sessionID = stLight.sessionID;
        if (a.element.getAttribute("st_via") != null) {
            c.via = a.element.getAttribute("st_via").replace(/^\s+|\s+$/g, "")
        }
        c.url = stWidget.ogurl ? stWidget.ogurl : (stWidget.twitterurl ? stWidget.twitterurl : document.location.href);
        c.url = a.url ? a.url : c.url;
        stlib.data.set("url", c.url, "shareInfo");
        stWidget.short_url = c.short_url;
        stlib.data.set("short_url", c.short_url, "shareInfo");
        c.title = stWidget.ogtitle ? stWidget.ogtitle : (stWidget.twittertitle ? stWidget.twittertitle : document.title);
        c.title = a.title ? a.title : c.title;
        var b = stWidget.ogimg ? stWidget.ogimg : (stWidget.twitterimg ? stWidget.twitterimg : (a.element.thumbnail ? a.element.thumbnail : null));
        c.image = (a.element.image) ? a.element.image : b;
        c.summary = stWidget.ogdesc ? stWidget.ogdesc : (stWidget.twitterdesc ? stWidget.twitterdesc : stWidget.desc);
        c.summary = a.element.summary ? a.element.summary : c.summary;
        stWidget.merge(c, stWidget.options);
        if (typeof(stWidget.options.textRightToLeft) != "undefined" && stWidget.options.textRightToLeft != "null" && stWidget.options.textRightToLeft == true) {
            document.getElementById("stwrapper").style.top = "auto";
            document.getElementById("stwrapper").style.left = "auto"
        }
        c.mouseOn = function() {
            stWidget.mouseOnTimer = setTimeout(function() {
                c.getSrcOfWidget(a.element);
                c.decideFastShare()
            }, 500)
        };
        c.mouseOut = function() {
            clearInterval(stWidget.mouseOnTimer)
        };
        c.decideFastShare = function() {
            if (stlib.browser.ieFallback) {
                if (typeof(stWidget.initIE) == "undefined" || stWidget.initIE != true) {
                    return
                }
            }
            if (!useFastShare || !stIsLoggedIn || a.service == "email" || a.service == "sharethis" || a.service == "wordpress" || (typeof(servicesLoggedIn[a.service]) == "undefined" && (a.service == "facebook" || a.service == "twitter" || a.service == "linkedin" || a.service == "yahoo"))) {
                if (stWidget.mobileWidget(c, a, stWidget.options)) {
                    stButtonsLib.log("widget", "mobile", a.service, a.type)
                } else {
                    c.popup()
                }
            } else {
                stButtonsLib.log("widget", "fastShare", a.service, a.type);
                stFastShareObj.url = c.url;
                stFastShareObj.short_url = c.short_url;
                stFastShareObj.title = c.title;
                stFastShareObj.image = c.image;
                if (typeof(c.summary) != "undefined" && c.summary != null) {
                    stFastShareObj.summary = c.summary
                }
                stFastShareObj.via = null;
                if (a.service == "twitter" && c.element.getAttribute("st_via") != null) {
                    stFastShareObj.via = c.element.getAttribute("st_via").replace(/^\s+|\s+$/g, "")
                }
                stFastShareObj.message = c.message;
                stFastShareObj.element = a.element;
                stFastShareObj.service = a.service;
                stFastShareObj.type = a.type;
                stFastShareObj.publisher = stlib.data.get("publisher", "pageInfo");
                stFastShareObj.sessionID = stlib.data.get("sessionID", "pageInfo");
                stFastShareObj.hostname = stlib.data.get("hostname", "pageInfo");
                stFastShareObj.username = servicesLoggedIn[a.service];
                if (typeof(fastShare) == "undefined") {
                    stButtonsLib.odjs("https://ws.sharethis.com/button/fastShare.js", function() {
                        fastShare.showWidget()
                    })
                } else {
                    fastShare.showWidget()
                }
            }
        };
        c.popup = function() {
            if (stWidget.widgetOpen == false) {
                if (stWidgetVersion == "4x") {
                    stWidget.stCancelClose()
                }
                var g = stButtonsLib.getSource2(a);
                stButtonsLib.log("widget", g, a.service, a.type);
                if (stWidget.options.popup && (stWidgetVersion == "4x")) {
                    var i = stWidget.createFrag(c);
                    _$d_();
                    _$d1("4x Popup Called");
                    _$d1(i);
                    _$d_();
                    window.open(stWidget.frameUrl4x + "#" + i, "newstframe", "status=1,toolbar=0,width=345,height=375")
                } else {
                    if (stWidget.options.popup && (stWidgetVersion == "5xa")) {
                        var h = "https://sharethis.com/share?url=" + c.url;
                        if (c.title != null) {
                            h += "&title=" + c.title
                        }
                        if (c.image != null) {
                            h += "&img=" + c.image
                        }
                        if (c.summary != null) {
                            h += "&summary=" + c.summary
                        }
                        if (a.type != null) {
                            h += "&type=" + a.type
                        }
                        if (c.via != null) {
                            h += "&via=" + c.via
                        }
                        var f = "";
                        if (stlib.data) {
                            var e = stlib.json.encode(stlib.data.pageInfo);
                            var d = stlib.json.encode(stlib.data.shareInfo);
                            if (stlib.browser.isFirefox() && !stlib.browser.firefox8Version()) {
                                e = encodeURIComponent(encodeURIComponent(e));
                                d = encodeURIComponent(encodeURIComponent(d))
                            } else {
                                e = encodeURIComponent(e);
                                d = encodeURIComponent(d)
                            }
                            f = "&pageInfo=" + e + "&shareInfo=" + d
                        }
                        window.open(h + f, "newstframe", "status=1,toolbar=0,width=820,height=950")
                    } else {
                        stButtons.hasOverlayCreated();
                        stButtons.messageQueueInstance.send(stWidget.createFrag(c), "light");
                        stWidget.positionWidget(c);
                        if (stWidget.options.embeds == false) {
                            stWidget.hideEmbeds()
                        }
                        setTimeout(function() {
                            stWidget.widgetOpen = true;
                            st_showing = true
                        }, 200)
                    }
                }
            } else {
                if (stWidget.widgetOpen == true && stWidget.options.onhover == false) {}
            }
            return false
        };
        c.init();
        stlib.buttonInfo.addButton(c);
        return c
    }
};
stWidget.createFrag = function(a, i) {
    var h = "light";
    h = stWidget.options.popup ? "popup" : h;
    __stgetPubGA();
    if (i == "data") {
        h = "data";
        for (var b in a) {
            if (a.hasOwnProperty(b) == true && a[b] !== null && typeof(a[b]) != "function") {
                if (typeof(a[b]) == "object") {
                    var d = stlib.json.encode(a[b])
                } else {
                    var d = a[b]
                }
                if (stlib.browser.isFirefox() && !stlib.browser.firefox8Version()) {
                    h = h + "/" + b + "=" + encodeURIComponent(encodeURIComponent(d))
                } else {
                    h = h + "/" + b + "=" + encodeURIComponent(d)
                }
            }
        }
    } else {
        if (i == "init") {
            h = "init";
            if (stWidget.options.tracking && stWidget.options.publisherGA == null) {
                if (typeof(pageTracker) != "undefined" && pageTracker !== null) {
                    if (typeof(pageTracker._getAccount) != "undefined") {
                        stWidget.options.publisherGA = pageTracker._getAccount()
                    }
                    if (typeof(ga) !== "undefined" && stWidget.options.publisherGA == null) {
                        ga(function() {
                            var o = ga.getAll();
                            for (var k = 0; k < o.length; ++k) {
                                var l = o[k];
                                var j = l.get("trackingId");
                                var m = j.indexOf("UA");
                                if (m >= 0) {
                                    stWidget.options.publisherGA = j
                                }
                            }
                        })
                    }
                } else {
                    if (stWidget.options.publisherGA == null && typeof(__stPubGA) !== "undefined") {
                        stWidget.options.publisherGA = __stPubGA
                    }
                }
            }
            for (var b in stWidget.options) {
                if (stWidget.options.hasOwnProperty(b) == true && stWidget.options[b] !== null && typeof(stWidget.options[b]) != "function" && typeof(stWidget.options[b]) != "object") {
                    var g = stWidget.options[b];
                    try {
                        g = decodeURIComponent(g);
                        g = decodeURIComponent(g)
                    } catch (c) {}
                    h = h + "/" + b + "=" + encodeURIComponent(g)
                }
            }
            h = h + "/pUrl=" + encodeURIComponent(encodeURIComponent(document.location.href)) + ((document.title != "") ? "/title=" + encodeURIComponent(encodeURIComponent(document.title)) : "") + "/stLight=true"
        } else {
            for (var b in a) {
                if (a.hasOwnProperty(b) == true && a[b] !== null && typeof(a[b]) != "function" && typeof(a[b]) != "object" && b !== "idx") {
                    h = h + "/" + b + "-=-" + encodeURIComponent(encodeURIComponent(a[b]))
                }
            }
            if (a.service == "email") {
                h = h + "/page-=-send"
            }
            if (stWidgetVersion == "5xa") {
                if (a.service == "facebook") {
                    h = h + "/page-=-fbhome"
                } else {
                    if (a.service == "twitter") {
                        h = h + "/page-=-twhome"
                    } else {
                        if (a.service == "yahoo") {
                            h = h + "/page-=-ybhome"
                        } else {
                            if (a.service == "linkedin") {
                                h = h + "/page-=-lihome"
                            } else {
                                if (a.service == "wordpress") {
                                    h = h + "/page-=-wphome"
                                }
                            }
                        }
                    }
                }
            }
            if (stlib.data) {
                var f = stlib.json.encode(stlib.data.pageInfo);
                var e = stlib.json.encode(stlib.data.shareInfo);
                if (stlib.browser.isFirefox() && !stlib.browser.firefox8Version()) {
                    f = encodeURIComponent(encodeURIComponent(f));
                    e = encodeURIComponent(encodeURIComponent(e))
                } else {
                    f = encodeURIComponent(f);
                    e = encodeURIComponent(e)
                }
                h += "/pageInfo-=-" + f;
                h += "/shareInfo-=-" + e
            }
        }
    }
    return h
};
stWidget.positionWidget = function(a) {
    if (!a) {
        return false
    }
    stWidget.overlay.style.display = "block";
    stWidget.wrapper.style.display = "block"
}, stWidget.hideWidget = function() {
    stWidget.wrapper.style.display = "none";
    stWidget.overlay.style.display = "none"
};
stWidget.pageSize = function() {
    var e = [0, 0, 0, 0];
    var b = 0;
    var a = 0;
    var d = 0;
    var c = 0;
    if (typeof(window.pageYOffset) == "number") {
        b = window.pageXOffset;
        a = window.pageYOffset
    } else {
        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            b = document.body.scrollLeft;
            a = document.body.scrollTop
        } else {
            if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                b = document.documentElement.scrollLeft;
                a = document.documentElement.scrollTop
            }
        }
    }
    if (window.innerWidth) {
        d = window.innerWidth;
        c = window.innerHeight
    } else {
        if (document.documentElement.offsetWidth) {
            d = document.documentElement.offsetWidth;
            c = document.documentElement.offsetHeight
        }
    }
    e = {
        scrX: b,
        scrY: a,
        width: d,
        height: c
    };
    return e
};
stWidget.closetimeout = null;
stWidget.stClose = function(a) {
    if (!a) {
        a = 1000
    }
    if ((stWidgetVersion == "4x") && stWidget.options.autoclose != null && (stWidget.options.autoclose == true || stWidget.options.autoclose == "true")) {
        if (stWidget.openDuration < 0.5 && stWidget.stopClosing == false) {
            stWidget.closetimeout = setTimeout("stWidget.closeWidget()", a)
        } else {
            stWidget.stopClosing = true
        }
    }
};
stWidget.stCancelClose = function() {
    clearTimeout(stWidget.closetimeout);
    stWidget.buttonClicked = true;
    setTimeout(function() {
        stWidget.buttonClicked = false
    }, 100)
};
stWidget.closeWidget = function() {
    if (st_showing == false) {
        return false
    }
    st_showing = false;
    stWidget.widgetOpen = false;
    stWidget.wrapper.style.display = "none";
    stWidget.showEmbeds();
    stWidget.sendEvent("screen", "home");
    stWidget.overlay.style.display = "none"
};
stWidget.hideEmbeds = function() {
    var b = document.getElementsByTagName("embed");
    for (var a = 0; a < b.length; a++) {
        b[a].style.visibility = "hidden"
    }
};
stWidget.showEmbeds = function() {
    if (stWidget.options.embeds == true) {
        return true
    }
    var b = document.getElementsByTagName("embed");
    for (var a = 0; a < b.length; a++) {
        b[a].style.visibility = "visible"
    }
};
stWidget.sendEvent = function(a, c) {
    var b = "widget/" + a + "=" + c;
    stButtons.messageQueueInstance.send(b, "widget")
};
stWidget.getMetaTags = function() {
    stWidget.getOGTags();
    stWidget.getTwitterTags()
};
stWidget.getOGTags = function() {
    var c = document.getElementsByTagName("meta");
    for (var a = 0; a < c.length; a++) {
        var b = c[a].getAttribute("property");
        if (b == null) {
            b = c[a].getAttribute("name")
        }
        if (b == "og:title") {
            stWidget.ogtitle = c[a].getAttribute("content")
        } else {
            if (b == "og:type") {
                stWidget.ogtype = c[a].getAttribute("content")
            } else {
                if (b == "og:url") {
                    stWidget.ogurl = c[a].getAttribute("content")
                } else {
                    if (b == "og:image") {
                        stWidget.ogimg = c[a].getAttribute("content").replace(/^\s+|\s+$/g, "")
                    } else {
                        if (b == "og:description") {
                            stWidget.ogdesc = c[a].getAttribute("content")
                        } else {
                            if (b == "description" || b == "Description") {
                                stWidget.desc = c[a].getAttribute("content")
                            }
                        }
                    }
                }
            }
        }
    }
};
stWidget.getTwitterTags = function() {
    var c = document.getElementsByTagName("meta");
    for (var a = 0; a < c.length; a++) {
        var b = c[a].getAttribute("name");
        if (b == null) {
            b = c[a].getAttribute("property")
        }
        if (b == "twitter:card") {
            stWidget.twittercard = c[a].getAttribute("content")
        } else {
            if (b == "twitter:url") {
                stWidget.twitterurl = c[a].getAttribute("content")
            } else {
                if (b == "twitter:title") {
                    stWidget.twittertitle = c[a].getAttribute("content")
                } else {
                    if (b == "twitter:description") {
                        stWidget.twitterdesc = c[a].getAttribute("content")
                    } else {
                        if (b == "twitter:image") {
                            stWidget.twitterimg = c[a].getAttribute("content")
                        } else {
                            if (b == "description" || b == "Description") {
                                stWidget.desc = c[a].getAttribute("content")
                            }
                        }
                    }
                }
            }
        }
    }
};

function shareLog(a, b) {
    if (typeof(ga) !== "undefined") {
        ga("send", "event", "ShareThis", a, b)
    } else {
        if (typeof(pageTracker) != "undefined" && pageTracker !== null && typeof(pageTracker._trackEvent) != "undefined") {
            pageTracker._trackEvent("ShareThis", a, b)
        } else {
            if (typeof(_gaq) != "undefined" && _gaq !== null) {
                _gaq.push(["_trackEvent", "ShareThis", a, b])
            } else {
                if (stButtons.publisherTracker !== null) {
                    stButtons.publisherTracker._trackEvent("ShareThis", a, b)
                } else {
                    if (typeof(_gat) != "undefined" && _gat !== null) {
                        if (typeof(stWidget.options.publisherGA) != "undefined" && stWidget.options.publisherGA != null) {
                            stButtons.publisherTracker = _gat._createTracker(stWidget.options.publisherGA);
                            stButtons.publisherTracker._trackEvent("ShareThis", a, b)
                        }
                    }
                }
            }
        }
    }
}
stButtons.completeInit = function() {
    if (!stButtons.goToInit) {
        stButtons.goToInit = true;
        var a = self.setInterval(function() {
            if (stButtons.hasOverlayCreated()) {
                window.clearInterval(a)
            }
        }, 1000)
    }
};
stButtons.hasOverlayCreated = function() {
    try {
        if (stWidget.widgetLoadingComplete && !stWidget.overloadComplete) {
            stWidget.getMetaTags();
            document.body.appendChild(stWidget.wrapper);
            document.body.appendChild(stWidget.overlay);
            stButtons.makeButtons();
            stWidget.init();
            stWidget.overloadComplete = true
        }
    } catch (a) {
        console.log("ERRRRROOOR" + a);
        return false
    }
    return true
};
plusoneCallback = function(a) {
    if (a.state == "on") {
        stlib.data.resetShareData();
        stlib.data.set("url", a.href, "shareInfo");
        stlib.data.set("short_url", stWidget.short_url, "shareInfo");
        stlib.data.set("destination", "plusone", "shareInfo");
        stlib.data.setSource("chicklet");
        stlib.data.set("buttonType", "chicklet", "shareInfo");
        stlib.sharer.share()
    }
};
stButtons.trackFB = function() {
    try {
        if (!stButtons.fbTracked && typeof(FB) != "undefined" && typeof(FB.Event) != "undefined" && typeof(FB.Event.subscribe) != "undefined") {
            stButtons.fbTracked = true;
            FB.Event.subscribe("edge.create", function(b) {
                stButtons.trackShare("fblike_auto", b);
                stButtonsLib.callSubscribers("click", "fblike", b)
            });
            FB.Event.subscribe("edge.remove", function(b) {
                stButtons.trackShare("fbunlike_auto", b);
                stButtonsLib.callSubscribers("click", "fbunlike", b)
            });
            FB.Event.subscribe("message.send", function(b) {
                stButtons.trackShare("fbsend_auto", b);
                stButtonsLib.callSubscribers("click", "fbsend", b)
            })
        }
    } catch (a) {}
};
stButtons.trackTwitter = function() {
    if (!stButtons.twitterTracked && typeof(twttr) != "undefined" && typeof(twttr.events) != "undefined" && typeof(twttr.events.bind) != "undefined") {
        stButtons.twitterTracked = true;
        twttr.events.bind("click", function(a) {
            stButtons.trackTwitterEvent("click");
            stButtonsLib.callSubscribers("click", "twitter")
        });
        twttr.events.bind("tweet", function() {
            stButtons.trackTwitterEvent("tweet")
        });
        twttr.events.bind("retweet", function() {
            stButtons.trackTwitterEvent("retweet");
            stButtonsLib.callSubscribers("click", "retweet")
        });
        twttr.events.bind("favorite", function() {
            stButtons.trackTwitterEvent("favorite");
            stButtonsLib.callSubscribers("click", "favorite")
        });
        twttr.events.bind("follow", function() {
            stButtons.trackTwitterEvent("follow");
            stButtonsLib.callSubscribers("click", "follow")
        })
    }
};
stButtons.trackTwitterEvent = function(a) {
    stButtons.trackShare("twitter_" + a + "_auto")
};
stButtons.trackShare = function(a, c) {
    if (typeof(c) !== "undefined" && c !== null) {
        var b = c
    } else {
        var b = document.location.href
    }
    stlib.data.resetShareData();
    stlib.data.set("url", b, "shareInfo");
    stlib.data.set("short_url", stWidget.short_url, "shareInfo");
    stlib.data.set("destination", a, "shareInfo");
    stlib.data.set("buttonType", "chicklet", "shareInfo");
    stlib.data.setSource("chicklet");
    stlib.sharer.share()
};
stButtonsLib.processSTQ = function() {
    if (typeof(_stq) != "undefined") {
        for (var a = 0; a < _stq.length; a++) {
            var b = _stq[a];
            stButtonsLib.options(b)
        }
    } else {
        return false
    }
};
stButtonsLib.onDomContentLoaded = function() {
    stButtonsLib.params.executedOnReady = false;
    stButtonsLib.onReady();
    stButtons.trackTwitter()
};
stButtonsLib.onDomContentLoadedLazy = function() {
    if (!stlib.st_processed) {
        stButtonsLib.loadServicesLoggedIn(function() {
            stButtonsLib.getAllAppDefault(function() {
                stlib.data.init();
                stButtons.makeButtons()
            })
        })
    }
};
stButtonsLib.messageReceiver = function(b) {
    if (b && (b.origin == "http://edge.sharethis.com" || b.origin == "https://ws.sharethis.com")) {
        var c = b.data;
        c = c.split("|");
        if (c[0] == "ShareThis" && c.length > 2) {
            var a = (typeof(c[3]) == "undefined") ? document.location.href : c[3];
            stButtonsLib.callSubscribers(c[1], c[2], a)
        }
    }
};
stButtonsLib.subscribe = function(b, a) {
    if (b == "click") {
        stButtonsLib.clickSubscribers.push(a)
    } else {
        stButtonsLib.nonClickSubscribers.push(a)
    }
};
stButtonsLib.callSubscribers = function(d, a, b) {
    if (d == "click") {
        for (var c = 0; c < stButtonsLib.clickSubscribers.length; c++) {
            stButtonsLib.clickSubscribers[c]("click", a, b)
        }
    }
    if (a == "Email" && d == "close") {
        stWidget.closeWidget()
    }
    if (a == "Print" && d == "close") {
        stWidget.closeWidget()
    }
};
stButtonsLib.gaTS = function(c, a, b) {
    var d = "";
    var e = "";
    if (a == "fblike") {
        d = "ShareThis_facebook";
        e = "Like"
    } else {
        if (a == "fbunlike") {
            d = "ShareThis_facebook";
            e = "UnLike"
        } else {
            if (a == "fbsend") {
                d = "ShareThis_facebook";
                e = "Send"
            } else {
                if (a == "twitter") {
                    d = "ShareThis_twitter";
                    e = "Share"
                } else {
                    if (a == "retweet") {
                        d = "ShareThis_twitter";
                        e = "ReTweet"
                    } else {
                        if (a == "favorite") {
                            d = "ShareThis_twitter";
                            e = "Favorite"
                        } else {
                            if (a == "follow") {
                                d = "ShareThis_twitter";
                                e = "Follow"
                            } else {
                                d = "ShareThis_" + a;
                                e = "Share"
                            }
                        }
                    }
                }
            }
        }
    }
    if (typeof(ga) !== "undefined") {
        ga("send", "social", d, e, b)
    } else {
        if (typeof(_gaq) != "undefined") {
            _gaq.push(["_trackSocial", d, e, b])
        }
    }
};
stButtons.onReady = function() {
    stWidget.createWidgetContainer();
    var g = document.getElementsByTagName("*");
    var b = [];
    var c = new RegExp(/sharethis_smartbuttons/);
    var a = false;
    for (var i = 0; i < g.length; i++) {
        if (typeof(g[i].className) == "string" && g[i].className != "") {
            if (g[i].className.match(c)) {
                a = true;
                break
            }
        }
    }
    if (a) {
        var f = document.getElementsByTagName("head")[0];
        var d = ["return=json", "cb=stButtons.smartifyButtons"];
        d = d.join("&");
        var e = "https://ws.sharethis.com/api/getRecentServices.php?" + d;
        var h = document.createElement("script");
        h.setAttribute("type", "text/javascript");
        h.setAttribute("src", e);
        f.appendChild(h);
        setTimeout("stButtons.completeInit()", 2000)
    } else {
        stButtons.completeInit()
    }
    stButtonsLib.subscribe("click", stButtonsLib.gaTS);
    if (stlib.browser.ieFallback && stlib.browser.getIEVersion() < 9) {
        return
    } else {
        stButtonsLib.getAllAppDefault(function() {
            if (stWidget.options.snapsets && typeof(stButtonsLib.snapSetsRun) == "undefined") {
                stButtonsLib.snapSetsRun = true;
                if (typeof(stlib.p6x) == "undefined") {
                    stButtonsLib.odjs("https://ws.sharethis.com/button/clipboard.js", function() {
                        stlib.p6x.init()
                    })
                }
            }
        })
    }
};
stButtonsLib.loadServicesLoggedIn(function() {
    stButtonsLib.getAllAppDefault(function() {
        stlib.data.init();
        if (stButtons.messageQueueInstance == null) {
            stButtons.messageQueueInstance = new stlib.messageQueue()
        }
        stButtons.makeButtons()
    })
});
stButtonsLib.domReady = function() {
    stButtonsLib.onReady();
    stButtons.trackTwitter();
    __stgetPubGA();
    if (typeof(__stPubGA) !== "undefined" && stLight.readyRun == true && stWidget.frameReady == true) {
        stWidget.sendEvent("publisherGA", __stPubGA)
    }
};
stWidget.getMetaTags();
var __stPubGA;
if (window.document.readyState == "complete") {
    stButtonsLib.onReady()
} else {
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("load", stButtonsLib.onReady, false)
    } else {
        if (typeof(document.addEventListener) != "undefined") {
            document.addEventListener("load", stButtonsLib.onReady, false)
        } else {
            if (typeof window.attachEvent != "undefined") {
                window.attachEvent("onload", stButtonsLib.onReady)
            }
        }
    }
}
if (window.document.readyState == "complete") {
    stButtonsLib.domReady()
} else {
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("load", stButtonsLib.domReady, false)
    } else {
        if (typeof(document.addEventListener) != "undefined") {
            document.addEventListener("load", stButtonsLib.domReady, false)
        } else {
            if (typeof window.attachEvent != "undefined") {
                window.attachEvent("onload", stButtonsLib.domReady)
            }
        }
    }
}
if (typeof(window.addEventListener) != "undefined") {
    window.addEventListener("click", function() {
        stWidget.closeWidget()
    }, false)
} else {
    if (typeof(document.addEventListener) != "undefined") {
        document.addEventListener("click", function() {
            stWidget.closeWidget()
        }, false)
    } else {
        if (typeof window.attachEvent != "undefined") {
            window.attachEvent("onclick", function() {
                stWidget.closeWidget()
            })
        }
    }
}
if (typeof(__st_loadLate) == "undefined") {
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("DOMContentLoaded", stButtonsLib.onDomContentLoaded, false)
    } else {
        if (typeof(document.addEventListener) != "undefined") {
            document.addEventListener("DOMContentLoaded", stButtonsLib.onDomContentLoaded, false)
        }
    }
} else {
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("DOMContentLoaded", stButtonsLib.onDomContentLoadedLazy, false)
    } else {
        if (typeof(document.addEventListener) != "undefined") {
            document.addEventListener("DOMContentLoaded", stButtonsLib.onDomContentLoadedLazy, false)
        }
    }
}
if (typeof(window.addEventListener) != "undefined") {
    window.addEventListener("message", stButtonsLib.messageReceiver, false)
} else {
    if (typeof(document.addEventListener) != "undefined") {
        document.addEventListener("message", stButtonsLib.messageReceiver, false)
    } else {
        if (typeof window.attachEvent != "undefined") {
            window.attachEvent("onmessage", stButtonsLib.messageReceiver)
        }
    }
}
if (document.readyState == "complete" && stLight.readyRun == false) {
    stButtonsLib.domReady()
}
var async_buttons = (function() {
    return {
        stButtons: stButtons,
        stWidget: stWidget
    }
})();
ShareThisEvent.trigger("on_async_buttons_load");