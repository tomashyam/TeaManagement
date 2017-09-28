/**
 * Created by hack on 28/09/2017.
 */

const _  = require('underscore');
const moment = require('moment');
const chart = require('chart.js');

export class userDisplay implements ng.IDirective {
    templateUrl = 'user/userDisplay.html';
    controller= userDisplayController;
    bindigs = {
        userId: "@"
    }
    cotrollerAs = 'vm';
}

export class userDisplayController implements ng.IController {

    public userId:any;

    public user:any;

     constructor (){
        // this.dataProvider.getUser(this.userId).then((user:any) => {
        //     this.user = user;
         this.user = this.json;
         let ctx = document.getElementById("myChart").getContext('2d');
            var myBarChart = new Chart(ctx, {
                 type: 'bar',
                 data: this.getUserTimeUsage()
             });
        // });

    }

    private getUserTimeUsage(){
        this.user.forEach((use:any) => {
            _.extendOwn(use, {took: Math.round((((use.FocusEndTime - use.FocusStartTime) % 86400000) % 3600000) / 60000)});
        });

        const usageByDate =  _.groupBy(this.user, (use:any)=>{
            return moment(use).startOf('day').format();
        });

        usageByDate.map((usage,date) => {
            return {x: date, y: usage.took};
        })

        return usageByDate;
    }



    private json = `[{ 
    "_id" : "59cb9dd1bc7181266daf394a", 
    "Name" : "IntelliJ.exe", 
    "WindowTitle" : "IntelliJ", 
    "FocusStartTime" : ISODate"2017-09-27T12:47:13.601+0000", 
    "FocusEndTime" : ISODate"2017-09-27T12:47:13.601+0000", 
    "UserId" : "dor"
},
{ 
    "_id" : "59cba84ece7fd432b8a79be1", 
    "Name" : "notepad.exe", 
    "WindowTitle" : "notepad", 
    "FocusStartTime" : "2017-09-27T12:47:13.601+0000", 
    "FocusEndTime" : "2017-09-27T12:47:13.601+0000", 
    "UserId" : "dor"
},
{ 
    "_id" : "59cba878ce7fd432b8a79be2", 
    "Name" : "notepad.exe", 
    "WindowTitle" : "notepad", 
    "FocusStartTime" : "2017-09-27T12:47:13.601+0000", 
    "FocusEndTime" : "2017-09-27T12:47:13.601+0000", 
    "UserId" : "dor"
},
{ 
    "_id" : "59cbaa3e3a9b1e0a30d1abe7", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:12.7808133+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abe8", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:13.6575221+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abe9", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:12.7808133+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abea", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:14.3254756+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abeb", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:14.8727642+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abec", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:15.3193073+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abed", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:18.6714337+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abee", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:18.9677507+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abef", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:20.9329042+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf0", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:30.8428057+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf1", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:31.6614411+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf2", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:32.7153302+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf3", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:32.7734552+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf4", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:32.8326115+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf5", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:32.8942986+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf6", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:32.9564399+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf7", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:33.0286009+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf8", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:33.0949942+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abf9", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:33.1552943+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abfa", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:33.2135101+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abfb", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:33.7166198+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abfc", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:41.7090868+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abfd", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:41.777279+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abfe", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:44.9198868+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1abff", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:44.9899016+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1ac00", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:40:50.0427039+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1ac01", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:41:05.0023517+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa7f3a9b1e0a30d1ac02", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:40:09.2234213+03:00", 
    "FocusEndTime" : "2017-09-27T16:41:05.06652+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa843a9b1e0a30d1ac03", 
    "Name" : "notepad.exe", 
    "WindowTitle" : "Untitled - Notepad", 
    "FocusStartTime" : "2017-09-27T16:40:10.8676635+03:00", 
    "FocusEndTime" : "2017-09-27T16:41:24.8150956+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa843a9b1e0a30d1ac04", 
    "Name" : "notepad.exe", 
    "WindowTitle" : "Untitled - Notepad", 
    "FocusStartTime" : "2017-09-27T16:40:10.8676635+03:00", 
    "FocusEndTime" : "2017-09-27T16:41:24.8901627+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa883a9b1e0a30d1ac05", 
    "Name" : "notepad.exe", 
    "WindowTitle" : "Untitled - Notepad", 
    "FocusStartTime" : "2017-09-27T16:40:10.8676635+03:00", 
    "FocusEndTime" : "2017-09-27T16:41:24.9570793+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa893a9b1e0a30d1ac06", 
    "Name" : "devenv.exe", 
    "WindowTitle" : "ConsoleAgentService Debugging - Microsoft Visual Studio Administrator", 
    "FocusStartTime" : "2017-09-27T16:41:24.9570793+03:00", 
    "FocusEndTime" : "2017-09-27T16:41:29.2370973+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbaa8e3a9b1e0a30d1ac07", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:41:29.2370973+03:00", 
    "FocusEndTime" : "2017-09-27T16:41:34.1030969+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbab7e3a9b1e0a30d1ac08", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:45:30.5727836+03:00", 
    "FocusEndTime" : "2017-09-27T16:45:34.6392848+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbab7e3a9b1e0a30d1ac09", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T16:45:30.5727836+03:00", 
    "FocusEndTime" : "2017-09-27T16:45:34.6392848+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbab853a9b1e0a30d1ac0a", 
    "Name" : "notepad.exe", 
    "WindowTitle" : "", 
    "FocusStartTime" : "2017-09-27T16:45:34.6392848+03:00", 
    "FocusEndTime" : "2017-09-27T16:45:41.0842318+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbab853a9b1e0a30d1ac0b", 
    "Name" : "notepad.exe", 
    "WindowTitle" : "", 
    "FocusStartTime" : "2017-09-27T16:45:34.6392848+03:00", 
    "FocusEndTime" : "2017-09-27T16:45:41.1273453+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cbab8a3a9b1e0a30d1ac0c", 
    "Name" : "chrome.exe", 
    "WindowTitle" : "New Tab - Google Chrome", 
    "FocusStartTime" : "2017-09-27T16:45:41.1273453+03:00", 
    "FocusEndTime" : "2017-09-27T16:45:46.1520051+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04b199c8b63880a921ba", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T23:05:57.0372612+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:05.7131248+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04b199c8b63880a921bb", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T23:05:57.0372612+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:05.7131248+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04b199c8b63880a921bc", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T23:05:57.0372612+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:08.9313359+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04b399c8b63880a921bd", 
    "Name" : "ConsoleAgentService.vshost.exe", 
    "WindowTitle" : "OK", 
    "FocusStartTime" : "2017-09-27T23:05:57.0372612+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:10.0207929+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04bd99c8b63880a921be", 
    "Name" : "devenv.exe", 
    "WindowTitle" : "ConsoleAgentService Debugging - Microsoft Visual Studio Administrator", 
    "FocusStartTime" : "2017-09-27T23:06:10.0207929+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:12.6763184+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04d499c8b63880a921bf", 
    "Name" : "devenv.exe", 
    "WindowTitle" : "ConsoleAgentService Debugging - Microsoft Visual Studio Administrator", 
    "FocusStartTime" : "2017-09-27T23:06:10.0207929+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:21.5199164+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04d599c8b63880a921c0", 
    "Name" : "devenv.exe", 
    "WindowTitle" : "ConsoleAgentService Debugging - Microsoft Visual Studio Administrator", 
    "FocusStartTime" : "2017-09-27T23:06:10.0207929+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:44.3068141+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04d599c8b63880a921c1", 
    "Name" : "devenv.exe", 
    "WindowTitle" : "ConsoleAgentService Debugging - Microsoft Visual Studio Administrator", 
    "FocusStartTime" : "2017-09-27T23:06:10.0207929+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:45.1125944+03:00", 
    "UserId" : null
},
{ 
    "_id" : "59cc04d799c8b63880a921c2", 
    "Name" : null, 
    "WindowTitle" : "", 
    "FocusStartTime" : "2017-09-27T23:06:45.6687271+03:00", 
    "FocusEndTime" : "2017-09-27T23:06:45.7644831+03:00", 
    "UserId" : null
}]`
}