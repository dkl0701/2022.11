// setCookie() —— 创建Cookie
                //  键名  值  几天有效期
                function setCookie(key, val, time) {
                    var timer = new Date();
                    timer.setDate(timer.getDate() + time);
                    document.cookie = `${key}=${val};expires=${timer}`;
                }
                
                // getCookie() —— 获取Cookie
                                //   key
                function getCookie(key) {
                    var arry = document.cookie.split('; ');
                    for (var item of arry) {
                        var newArry = item.split('=');
                        if (newArry[0] == key) {
                            return newArry[1];
                        }
                    }
                }
                
                // removeCookie() —— 删除Cookie
                function removeCookie(key) {
                    // 调用当前的设置cookie  把时间  改成-1
                    // function setCookie(key, val, time) 
                    this.setCookie(key, '', -1);
                }
                
                // 清空 cookie
                function clearCookie() {
                    var arry = document.cookie.split('; ');
                    for (var item of arry) {
                        newArry = item.split('=');
                        this.setCookie(newArry[0], '', -1);
                    }
                }