/**
 * Created by zhangheng on 2016/4/27.
 */
var aladdinObj = {
    serverTime: 0,
    init: function () {
        this.initServerData();
    },
    initServerData: function () {
        $.ajax({
            url: "/ajax/queryServerData.html?r=" + Math.random(),
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (result) {
                aladdinObj.serverTime = result.serverTime;
            }
        });
    },
    queryGotActs: function (acData, callback) {
        seajs.use('jdf/1.0.0/unit/login/1.0.0/login.js', function (login) {
            login.isLogin(function (isLogin, userInfo) {
                var url;
                if (isLogin) {
                    url = "/ajax/queryGotActs.html";
                } else {
                    url = "/ajax/queryActsStatus.html";
                }
                $.ajax({
                    url: url + "?r=" + Math.random(),
                    data: {"acData": acData},
                    type: 'post',
                    dataType: 'json',
                    async: true,
                    success: function (result) {
                        callback(result);
                    }
                })
            });
        });
    },
    queryCouponNum: function (callback) {
        $.ajax({
            url: "/myCoupon/num.html?r=" + Math.random(),
            data: "",
            type: 'post',
            dataType: 'json',
            async: true,
            success: function (res) {
                callback(res);
            },
            error: function (data, status, e) {
                $(".quantarget li:eq(0)").find("a").find("em").text(0);
                $(".quantarget li:eq(1)").find("a").find("em").text(0);
                $(".quantarget li:eq(2)").find(".uc-num").text(0);
            }
        });
    },
    beanExchangeCoupon: function (id, callback) {
        $.getJSON("/ajax/beanExchangeCoupon.html?id=" + id + "&r=" + Math.random(),
            function (result) {
                callback(result);
            });
    },
    freeGetCoupon: function (key, callback) {
        $.getJSON("/ajax/freeGetCoupon.html?key=" + key + "&r=" + Math.random(),
            function (result) {
                callback(result);
            });
    },
    queryGotBeanAct: function (acData, callback) {
        seajs.use('jdf/1.0.0/unit/login/1.0.0/login.js', function (login) {
            login.isLogin(function (isLogin, userInfo) {
                var url;
                if (isLogin) {
                    url = "/ajax/queryGotBeanActs.html";
                } else {
                    url = "/ajax/queryBeanActsStatus.html";
                }
                $.ajax({
                    url: url + "?r=" + Math.random(),
                    data: {"acData": acData},
                    type: 'post',
                    dataType: 'json',
                    async: true,
                    success: function (result) {
                        callback(result);
                    }
                })
            });
        });
    }
};

var couponObj = {
    setGetedSeckillHtml: function (result) {
        var skItem = $("#sk-" + result.ruleId);
        var linkUrl = skItem.attr("data-linkUrl");
        if (!linkUrl) linkUrl = "//www.jd.com";
        skItem.removeClass("quan-gray-sk-item");
        var getedHtml = "<b class=\"semi-circle\"></b>";
        getedHtml += "<div class=\"btn-state  btn-geted\"></div>";
        getedHtml += "<a href=\"" + linkUrl + "\" class=\"q-btn q-btn-02\" target='_blank' clstag='pageclick|keycount|aladdin_201605165|1'><span class=\"txt\">立即使用</span><b></b></a>";
        skItem.find(".q-opbtns").html(getedHtml);
    },
    setGetendSeckillHtml: function (result) {
        var skItem = $("#sk-" + result.ruleId);
        skItem.addClass("quan-gray-sk-item");
        var getendHtml = "<b class=\"semi-circle\"></b>";
        getendHtml += "<div class=\"btn-state btn-getend\"></div>";
        getendHtml += "<a href=\"javascript:void(0);\" class=\"q-btn\"><span class=\"txt\">今日已领完</span><b></b></a>";
        skItem.find(".q-opbtns").html(getendHtml);
    },
    setGetedCouponHtml: function (result) {
        var couponItem = $("#" + result.ruleId + "_a");
        var linkUrl = couponItem.attr("data-linkUrl");
        if (!linkUrl) linkUrl = "//www.jd.com";
        couponItem.find(".q-opbtns").html('<a href="' + linkUrl + '" target="_blank"  clstag="pageclick|keycount|aladdin_201605165|2"><b class="semi-circle"></b>立即使用</a>');
        couponItem.find(".q-state").html("<div class='btn-state btn-geted'>已领取</div>");
    },
    setGetendCouponHtml: function (result) {
        var couponItem = $("#" + result.ruleId + "_a");

        if (result.nextTime!=null && result.nextTime>0) {
            var timeDate = new Date(result.nextTime);
            var timeText = (timeDate.getHours() < 10 ? "0" : "") + timeDate.getHours() + "\r\n&nbsp;：\r\n" + (timeDate.getMinutes() < 10 ? "0" : "") + timeDate.getMinutes();
            couponItem.find(".q-opbtns").html('<a href="javascript:void(0);"><b class="semi-circle"></b>'+timeText+'开抢</a>');
            couponItem.find(".q-opbtns a").css("cursor", "default").css("color", "#fff");

        }else {
            couponItem.addClass("quan-gray-item");
            couponItem.find(".q-opbtns").html('<a href="javascript:void(0);"><b class="semi-circle"></b>今日已领完</a>');
            couponItem.find(".q-state").html('<div class="btn-state btn-getend">已抢完</div>');
        }
    },
    setGetCouponHtml: function (result) {
    },
    getActiveCouponHtml: function (linkUrl, obj) {
        var html = '<div class="tip-box icon-box ">';
        if (obj.value == 999) {
            html += '<span class="success-icon m-icon"></span>';
        } else {
            html += '<span class="warn-icon m-icon"></span>';
        }
        if (obj.value == -501) {
            obj.desc = "活动太火爆，逛逛再来吧!";
        } else if (obj.value == -601) {
            obj.desc = "玩得太嗨了，臣妾做不到啊~";
        } else if (obj.value == 101) {
            obj.desc = "玩得太嗨了，逛逛再来吧~";
        } else if (obj.value == 102) {
            obj.desc = "钱包都被挤爆了，明天再来吧~";
        } else if (obj.value == 103) {
            obj.desc = "抢得太快了，臣妾做不到啊~";
        } else if (obj.value == -999) {
            obj.desc = "活动太火爆，逛逛再来吧~";
        } else if (obj.value == 901) {
            obj.desc = "优惠券已抢完，逛逛再来吧~";
        }
        if (obj.desc == undefined) obj.desc = "活动太火爆，逛逛再来吧~~";
        html += '<div class="item-fore">';
        html += '<h3>' + obj.desc + '</h3>';
        html += '<div class="txt ftx-03">本活动为概率性事件，不能保证所有客户成功领取优惠券</div>';
        html += '<div class="op-btns mt30">';
        if (obj.value == 999) {
            if (!linkUrl) linkUrl = "//www.jd.com";
            html += '<a href="' + linkUrl + '" target="_blank" class="btn-02 btn-m" clstag="pageclick|keycount|aladdin_201605165|1">立即使用</a>';
        } else if (obj.value == 34) {
            html += '<a href="//authpay.jd.com/auth/toAuthPage.action?source=59&directReturnUrl=' + location.href + '" target="_blank" class="btn-02 btn-m">去实名认证</a>';
        }
        html += '<a href="javascript:closeThis(\'.ui-dialog-close\');" class="btn-09 btn-m2 ml70">关闭</a>';
        html += '</div></div></div>';
        return html;
    },
    setGetedSearchHtml: function (result) {
        var couponItem = $("#" + result.ruleId);
        couponItem.find(".q-state").append("<div class='btn-state btn-geted'>已领取</div>");
        var linkUrl = couponItem.attr("data-linkUrl");
        if (!linkUrl) linkUrl = "//www.jd.com";
        couponItem.find(".q-opbtns").html('<a href="' + linkUrl + '" class="q-btn q-btn-02" target="_blank" clstag="pageclick|keycount|aladdin_201605165|3"><span class="txt">立即使用</span><b></b></a>');
    },
    setGetendSearchHtml: function (result) {
        var couponItem = $("#" + result.ruleId);
        couponItem.addClass("quan-gray-item");
        couponItem.find(".q-opbtns").html('<a href="javascript:void(0);" class="q-btn"><span class="txt">今日已领完</span><b></b></a>');
        couponItem.find(".q-state").html('<div class="btn-state btn-getend">已抢完</div>');
    }
};


//加载js时执行初始化
aladdinObj.init();

jQuery.fn.getRemainTime = function (sysSecond) {
    if (sysSecond > 0) {
        var second = Math.floor(sysSecond % 60);             // 计算秒
        var minite = Math.floor((sysSecond / 60) % 60);      //计算分
        var hour = Math.floor((sysSecond / 3600) % 24);      //计算小时
        var day = Math.floor((sysSecond / 3600) / 24);        //计算天
        return (day + "天" + hour + "小时" + minite + "分" + second + "秒");
    } else {
        return "0天00小时00分00秒";
    }
};

jQuery.fn.couponCountdown = function (options) {
    if (!options) options = '()';
    if (jQuery(this).length == 0) return false;
    var obj = this;

    if ( options.seconds < (options.callbackSeconds || 0) ) {
        if (options.callback) eval(options.callback(obj));
        if (options.repeatCallback && !options.repeatCallback(obj)) return null;
        if (options.seconds<0) return null;
    }

    window.setTimeout(
        function () {
            jQuery(obj).text((options.text || "") + $().getRemainTime(options.seconds));
            --options.seconds;
            jQuery(obj).couponCountdown(options);
        }
        , 1000
    );
    return this;
};

jQuery.fn.renderCoupon = function (options) {
    if (!options) options = '()';
    var _this = $(this);
    if (_this.length == 0) return false;

    //领券活动item选择器
    var keyAttr = options.keyAttr;
    var getedCallback = options.getedCallback;
    var endCallback = options.endCallback;
    var getCallback = options.getCallback;

    var acData = [];
    _this.each(function () {
        var key = $(this).attr(keyAttr);
        if (key) acData.push(key);
    });

    aladdinObj.queryGotActs(acData, function (acResult) {
        if (acResult.success) {
            $(acResult.data).each(function () {
                if (this.status == 1) {
                    if (getedCallback) eval(getedCallback(this));
                } else if (this.status == 3 || this.status == 4 || this.status == 901) {
                    //已结束、已抢完
                    if (endCallback) eval(endCallback(this));
                }else if(this.status == 5 || this.status == 2){
                    if (getCallback) eval(getCallback(this));
                }
            });
        } else {
            _this.attr("error", acResult.error);
        }
    });
};

jQuery.fn.renderFreeGet = function (options) {
    if (!options) options = '()';
    var _this = $(this);
    if (_this.length == 0) return false;

    var keyAttr = options.keyAttr;
    var getedCallback = options.getedCallback;
    var endCallback = options.endCallback;
    var getNumCallback = options.getNumCallback;

    var acData = [];
    _this.each(function () {
        var key = $(this).attr(keyAttr);
        if (key) acData.push(key);
    });

    aladdinObj.queryGotActs(acData, function (acResult) {
        if (acResult.success) {
            $(acResult.data).each(function () {
                if (this.status == 0 || this.status == 5) {
                    //填充已领取数量
                    if (getNumCallback) eval(getNumCallback(this));
                }else if (this.status == 1) {
                    if (getedCallback) eval(getedCallback(this));
                }else if (this.status == 3 || this.status == 4 || this.status == 901) {
                    //已结束、已抢完
                    if (endCallback) eval(endCallback(this));
                }
            });
        } else {
            _this.attr("error", acResult.error);
        }
    });
};

var addUrlParam = function (url, name, value) {
    var target = url;
    var exp = "(\\?|&)" + name + "=([^&?]*)";
    var reg1 = new RegExp(exp);
    var m = url.match(reg1);

    if (m != null) {
        target = url.replace(m[0], m[1] + name + "=" + value);
    } else {
        if (url.indexOf("?") > -1) {
            target += "&" + name + "=" + value;
        } else {
            target += "?" + name + "=" + value;
        }
    }
    return target;
};

jQuery.fn.filterCoupons = function (options) {
    if (!options) options = '()';
    if (jQuery(this).length == 0) return false;

    jQuery(this).bind("click", function () {
        var obj = jQuery(this);
        var cssClass = options.cssClass;
        var paramAttr = options.paramAttr;
        var seprAttr = options.seprAttr;
        var valueAttr = options.valueAttr;

        var param = obj.attr(paramAttr);
        var sepr = obj.attr(seprAttr);
        var value = 0;

        var url = location.href;
        var css = obj.attr("class");
        if (css != undefined && css.indexOf(cssClass) > -1) {
            $(this).removeClass(cssClass);
        } else {
            $(this).addClass(cssClass);
        }

        if (sepr != undefined) {
            obj.parent().find("[class=" + cssClass + "]").each(function () {
                var item = jQuery(this);
                if (item.attr(seprAttr) != sepr) {
                    item.removeClass(cssClass);
                } else {
                    var child = item.attr(valueAttr);
                    if (value == 0) value = child;
                    if (value.indexOf(child) == -1) {
                        value += sepr + child;
                    }
                }
            });
        }
        var toUrl = addUrlParam(url, param, value);
        location.href = addUrlParam(toUrl, "page", "1");
    });
};

var activeCoupon = function (linkUrl, key, getedCallback, endCallback) {
    seajs.use(['jdf/1.0.0/ui/dialog/1.0.0/dialog'], function () {
        aladdinObj.freeGetCoupon(key, function (result) {
            $('body').dialog({
                title: '免费抢券',
                width: 550,
                autoCloseTime: 5,
                source: couponObj.getActiveCouponHtml(linkUrl, result),
                onCancel: function () {
                    //关闭窗口后获取领取状态
                    aladdinObj.queryGotActs([key], function (acResult) {
                        if (acResult.success) {
                            var data = acResult.data[0];
                            if (data.status == 1) {
                                getedCallback(data);
                            }
                            if (data.status == 3 || data.status == 4 || data.status == 901) {
                                //已结束、已抢完
                                endCallback(data);
                            }
                        }
                    });
                }
            });
        });
    });
};

var createQrCode = function () {
    //生成二维码
    seajs.use(['jdf/1.0.0/ui/qrcode/1.0.0/qrcode'], function () {
        $("#quan-seckill .quan-sk-item").each(function () {
            var url = $(this).attr("data-url");
            $(this).find(".code-img").html("").qrcode({
                text: url,
                width: 88,
                height: 84
            });
        });
    });
};

jQuery.fn.bindActiveCoupon = function (options) {
    if (!options) options = '()';
    var _this = $(this);
    if (_this.length == 0) return false;
    seajs.use([
        'jdf/1.0.0/unit/login/1.0.0/login.js'
    ], function (login) {
        var jdUser = {
            // 登陆
            login: function (fuc, isRefresh) {
                var lgn = this;
                var cb = fuc || $.noop;
                // 登陆弹框
                login({
                    modal: true,//false跳转,true显示登录注册弹层
                    complete: function () {
                        lgn.isLogin = true;
                        //isRefresh 判断登录成功后是否刷新页面，默认不刷新
                        isRefresh ? location.reload(true) : cb();
                    }
                });
            }
        };
        _this.each(function () {
            var key = $(this).attr(options.keyAttr);
            var sku = $(this).attr(options.skuKey);
            var linkUrl = $(this).attr(options.linkUrlAttr);
            $(this).delegate(options.aSelector, 'click', function () {
                login.isLogin(function (isLogin, userInfo) {
                    if (isLogin) {
                        //已登录操作
                        activeCoupon(linkUrl, key, options.getedCallback, options.endCallback);
                        if (sku) {
                            getWishCoupon(sku);
                        }
                    } else {
                        jdUser.login($.noop, true);
                    }
                })
            });
        });
    });
};

jQuery.fn.renderTasks = function () {
    //任务已开始
    jQuery(this).find(".count-down").each(function () {
        $(this).couponCountdown({
            seconds: parseInt(($(this).attr("data-endtime") - aladdinObj.serverTime) / 1000),
            callback: function (element) {
                var item = $("#" + $(element).attr("data-id"));
                item.attr("class", "quan-task-item task-end");
                item.find(".clr").prepend('<div class="task-state"><i class="i1"></i>活动已结束<i class="i2"></i></div>');
            }
        });
    });
    //任务未开始
    jQuery(this).find(".task-begin").each(function () {
        var beginTime = $(this).attr("data-begintime");
        var id = $(this).attr("data-id");
        if (beginTime > aladdinObj.serverTime) {
            var parent = $("#" + id);
            parent.removeClass("task-todo").addClass("task-doing");
            parent.find(".task-state").remove();
            $(this).couponCountdown({
                seconds: parseInt(($(this).attr("data-endtime") - aladdinObj.serverTime) / 1000),
                text: "剩余",
                callback: function (element) {
                    var item = $("#" + $(element).attr("data-id"));
                    item.attr("class", "quan-task-item task-end");
                    item.find(".clr").prepend('<div class="task-state"><i class="i1"></i>活动已结束<i class="i2"></i></div>');
                }
            });
        }
    });
};

//使用coupon-item的可以直接调用
jQuery.fn.renderCouponsList = function () {
    jQuery(this).find(".quan-item-acoupon").renderCoupon({
        keyAttr: "data-key",
        getedCallback: function (data) {
            couponObj.setGetedCouponHtml(data);
        },
        endCallback: function (data) {
            couponObj.setGetendCouponHtml(data);
        },
        getCallback: function (data) {
            if (couponObj.setGetCouponHtml) {
                couponObj.setGetCouponHtml(data);
            }
        }
    });
    jQuery(this).find(".quan-item-dcoupon").renderBean({
        keyAttr: "data-id",
        gotBeanCallback: function (data) {
            beanObj.setGotBeanHtml(data);
        },
        endBeanCallback: function (data) {
            beanObj.setGotEndBeanHtml(data);
        }
    })
};

var closeThis = function close(selector) {
    $(selector).trigger("click");
};

var beanObj = {
    successTip: '<div class="qs-tips"><i class="s-icon succ-icon"></i><span class="txt">兑换成功</span></div>',
    errorTip: function (msg) {
        return '<div class="qs-tips"><i class="s-icon warn-icon"></i><span class="txt">' + msg + '</span></div>';
    },
    getBeanHtml: function (obj) {
        var html = '<div class="tip-box icon-box ">';
        html += '<span class="warn-icon m-icon"></span>';
        html += '<div class="item-fore">';
        if (obj.discount.indexOf("运费") > -1) {
            html += '<h3>您正在使用' + obj.beanNum + '京豆兑换' + obj.name + '，确定兑换？</h3>';
        } else {
            html += '<h3>您正在使用' + obj.beanNum + '京豆兑换' + obj.discount + '元' + obj.name + '，确定兑换？</h3>';
        }
        html += '<div class="txt ftx-03">本活动为概率性事件，不能保证所有客户成功兑换优惠券</div>';
        html += '<div class="op-btns mt30">';
        html += '<a href="javascript:void(0);" id="beanExchange" class="btn-02 btn-m" clstag="pageclick|keycount|aladdin_201605165|4">确定</a>';
        html += '<a href="javascript:closeThis(\'.ui-dialog-close\');" class="btn-09 btn-m2 ml70">取消</a>';
        html += '</div></div></div>';
        return html;
    },
    setGotBeanHtml: function (result) {
        var couponItem = $("[data-id='" + result.ruleId + "']");
        var linkUrl = couponItem.attr("data-linkUrl");
        if (!linkUrl) linkUrl = "//www.jd.com";
        couponItem.find(".q-opbtns").html('<a href="' + linkUrl + '" target="_blank"  clstag="pageclick|keycount|aladdin_201605165|2"><b class="semi-circle"></b>立即使用</a>');
        couponItem.find(".q-state").html("<div class='btn-state btn-geted'>已兑换</div>");
    },
    setGotEndBeanHtml: function (result) {
        var couponItem = $("[data-id='" + result.ruleId + "']");
        couponItem.addClass("quan-gray-item");
        couponItem.find(".q-opbtns").html('<a href="javascript:void(0);"><b class="semi-circle"></b>今日已领完</a>');
        couponItem.find(".q-state").html('<div class="btn-state btn-getend">已抢完</div>');
    }
};

var beanExchange = function (beanId, gotBeanCallback, endBeanCallback) {
    aladdinObj.beanExchangeCoupon(beanId, function (result) {
        closeThis(".ui-dialog-close");
        var tips;
        if (result.success) {
            tips = beanObj.successTip;
        } else {
            tips = beanObj.errorTip(result.msg);
        }
        $('body').dialog({
            title: '京豆抢券',
            autoCloseTime: 5,
            source: tips,
            onCancel: function () {
                //关闭窗口后获取领取状态
                aladdinObj.queryGotBeanAct([beanId], function (acResult) {
                    if (acResult.success) {
                        var data = acResult.data[0];
                        if (data.status == 1) {
                            gotBeanCallback(data);
                        }
                        if (data.status == 3 || data.status == 4) {
                            //已结束、已抢完
                            endBeanCallback(data);
                        }
                    }
                });
            }
        });
    });
};

var beanCouponDialog = function (obj,gotBeanCallback,endBeanCallback) {
    $('body').dialog({
        title: '京豆抢券',
        width: 520,
        height: 160,
        type: 'text',
        mainId: 'quan-dialog',
        source: beanObj.getBeanHtml(obj),
        onReady: function(){
            $(".tip-box").delegate("#beanExchange", 'click', function () {
                beanExchange(obj.beanId, gotBeanCallback, endBeanCallback);
            });
        }
    });
};

jQuery.fn.bindBeanCoupon = function (options) {
    if (!options) options = '()';
    var _this = $(this);
    if (_this.length == 0) return false;
    seajs.use([
        'jdf/1.0.0/unit/login/1.0.0/login.js'
    ], function (login) {
        var jdUser = {
            // 登陆
            login: function (fuc, isRefresh) {
                var lgn = this;
                var cb = fuc || $.noop;
                // 登陆弹框
                login({
                    modal: true,//false跳转,true显示登录注册弹层
                    complete: function () {
                        lgn.isLogin = true;
                        //isRefresh 判断登录成功后是否刷新页面，默认不刷新
                        isRefresh ? location.reload(true) : cb();
                    }
                });
            }
        };
        _this.each(function () {
            var obj = {
                beanId: $(this).attr(options.beanIdAttr),
                beanNum: $(this).attr(options.beanNumAttr),
                discount: $(this).find(options.priceSelector).text(),
                name: $(this).find(options.typSelector).text()
            };
            $(this).delegate(options.aSelector, 'click', function () {
                login.isLogin(function (isLogin, userInfo) {
                    if (isLogin) {
                        //已登录操作
                        beanCouponDialog(obj,options.gotBeanCallback,options.endBeanCallback);
                    } else {
                        jdUser.login($.noop, true);
                    }
                })
            });
        });
    });
};

jQuery.fn.renderBean = function (options) {
    if (!options) options = '()';
    var _this = $(this);
    if (_this.length == 0) return false;

    var keyAttr = options.keyAttr;
    var gotBeanCallback = options.gotBeanCallback;
    var endBeanCallback = options.endBeanCallback;

    var acData = [];
    _this.each(function () {
        var key = $(this).attr(keyAttr);
        if (key) acData.push(key);
    });

    aladdinObj.queryGotBeanAct(acData, function (acResult) {
        if (acResult.success) {
            $(acResult.data).each(function () {
                if (this.status == 1) {
                    if (gotBeanCallback) eval(gotBeanCallback(this));
                } else if (this.status == 3 || this.status == 4) {
                    //已结束、已抢完
                    if (endBeanCallback) eval(endBeanCallback(this));
                }
            });
        } else {
            _this.attr("error", acResult.error);
        }
    });
};

/**
 * 获取优惠券的时间
 * 在标签上添加[coupon-time="batchid"]属性, 调用这个方法会填充时间
 */
var loadBatchTime = function () {
    var tagArray = $("[coupon-time]");
    var paramArray = [];
    for (var i=0;i<tagArray.length;i++){
        var tag = $(tagArray[i]);
        var value = tag.attr("coupon-time");
        paramArray.push(value);
    }

    $.ajax({
        url: "//a.jd.com/batchTime.html",
        type:"POST",
        dataType: "json",
        traditional: true,
        data: {batchId: paramArray},
        success: function(json){
            for (var batch in json) {
                var tag = $("[coupon-time='" + batch + "']");
                tag.html(json[batch]);
            }
        }
    });
// loadBatchTime
};

