"use strict";(self.webpackChunkmaterial_dashboard_angular=self.webpackChunkmaterial_dashboard_angular||[]).push([[36],{24036:function(n,t,e){e.r(t),e.d(t,{TenantAreaModule:function(){return p}});var o=e(39895),a=e(37716),r=e(25572),c=e(38583);function i(n,t){if(1&n&&(a.ynx(0),a.TgZ(1,"p",18),a._uU(2),a.qZA(),a.BQk()),2&n){const n=t.$implicit;a.xp6(2),a.hij("",null==n?null:n.unit_name," ")}}function g(n,t){if(1&n&&(a.ynx(0),a.TgZ(1,"tr"),a.TgZ(2,"td"),a.TgZ(3,"p",12),a._uU(4),a.qZA(),a.qZA(),a.TgZ(5,"td"),a.TgZ(6,"p",17),a._uU(7),a.qZA(),a.qZA(),a.TgZ(8,"td"),a.YNc(9,i,3,1,"ng-container",16),a.qZA(),a.TgZ(10,"td"),a.TgZ(11,"p",18),a._uU(12),a.qZA(),a.qZA(),a.qZA(),a.BQk()),2&n){const n=t.$implicit;a.xp6(4),a.hij("",null==n.property?null:n.property.property_name," "),a.xp6(3),a.hij(" (",null==n.property?null:n.property.property_code,")"),a.xp6(2),a.Q6J("ngForOf",n.units),a.xp6(3),a.hij(" - ",null==n.property?null:n.property.location," ")}}const l=o.Bz.forChild([{path:"",component:(()=>{class n{constructor(n){this.route=n,this.lineChartLabels=[],this.lineChartData=[],this.lineChartType="line",this.options={responsive:!0,maintainAspectRatio:!1},this.lineChartLegend=!0,this.lineChartColors=[{backgroundColor:["rgba(0,255,0,0.3)","rgba(0,0,255,0.3)"]}]}ngOnInit(){var n;this.route.snapshot.data.tenantData&&(this.tenantSummary=this.route.snapshot.data.tenantData);const t=[],e=[];(null===(n=this.tenantSummary)||void 0===n?void 0:n.payment_data.reverse()).forEach(function(n){t.push(null==n?void 0:n.date),e.push(null==n?void 0:n.amount)}),this.lineChartLabels=t,this.lineChartData=[{data:e,label:"Payment"}]}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(o.gz))},n.\u0275cmp=a.Xpm({type:n,selectors:[["robi-landlord-area"]],decls:35,vars:9,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12","col-md-12"],[1,"card"],[1,"card-header","card-header-accent"],[1,"card-body"],[2,"display","block"],["baseChart","",3,"colors","options","datasets","labels","legend","chartType"],[1,"col-lg-3","col-md-6","col-sm-6"],[1,"card","card-stats"],[1,"card-header","card-header-info"],[1,"card-title"],[1,"card-footer"],[1,"stats"],[1,"col-lg-6","col-md-12","col-sm-12"],[4,"ngFor","ngForOf"],[1,"card-title","ml-1"],[1,"card-title","ml-2"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"div",5),a._uU(6," Past Payments "),a.qZA(),a.TgZ(7,"div",6),a.TgZ(8,"div"),a.TgZ(9,"div",7),a._UZ(10,"canvas",8),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"div",2),a.TgZ(12,"div",9),a.TgZ(13,"div",10),a.TgZ(14,"div",11),a.TgZ(15,"p",12),a._uU(16),a.qZA(),a.qZA(),a.TgZ(17,"div",13),a.TgZ(18,"div",14),a._uU(19," Pending Amount "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(20,"div",9),a.TgZ(21,"div",10),a.TgZ(22,"div",5),a.TgZ(23,"p",12),a._uU(24),a.qZA(),a.qZA(),a.TgZ(25,"div",13),a.TgZ(26,"div",14),a._uU(27," Total Leases "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(28,"div",15),a.TgZ(29,"div",10),a.TgZ(30,"div",11),a.YNc(31,g,13,4,"ng-container",16),a.qZA(),a.TgZ(32,"div",13),a.TgZ(33,"div",14),a._uU(34," Property "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(10),a.Q6J("colors",t.lineChartColors)("options",t.options)("datasets",t.lineChartData)("labels",t.lineChartLabels)("legend",t.lineChartLegend)("chartType",t.lineChartType),a.xp6(6),a.Oqu(null==t.tenantSummary?null:t.tenantSummary.pending_amount),a.xp6(8),a.Oqu(null==t.tenantSummary?null:t.tenantSummary.total_leases),a.xp6(7),a.Q6J("ngForOf",null==t.tenantSummary?null:t.tenantSummary.leases))},directives:[r.jh,c.sg],styles:[".fab-container[_ngcontent-%COMP%]{position:fixed;bottom:35px;right:35px;z-index:100;display:flex;flex-direction:column-reverse;align-items:center}.fab-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;align-items:center;margin-bottom:5px}.fab-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:17px}.fab-toggler[_ngcontent-%COMP%]{float:right;z-index:100}.card[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #FFFFFF;border-radius:4px;color:#444}.card-container[_ngcontent-%COMP%], .front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{width:100%;height:390px;border-radius:4px}.card[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{height:105px;overflow:hidden;border-radius:4px 4px 0 0}.card[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.user[_ngcontent-%COMP%]{border-radius:50%;display:block;height:120px;margin:-55px auto 0;overflow:hidden;width:120px;box-shadow:0 16px 38px -12px rgba(0,0,0,.561),0 4px 25px rgba(0,0,0,.122),0 8px 10px -5px rgba(0,0,0,.2)}.card[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #FFFFFF;border:4px solid #FFFFFF;width:100%}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-color:rgba(0,0,0,0);box-shadow:none;padding:10px 20px 20px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{min-height:160px}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{height:215px}.card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:22px;line-height:28px;margin:10px 0 0;text-align:center;text-transform:capitalize}.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:5px 0;font-weight:400;line-height:20px}.card[_ngcontent-%COMP%]   .profession[_ngcontent-%COMP%]{color:#999;text-align:center;margin-bottom:20px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{border-top:1px solid #EEEEEE;color:#999;margin:0;padding:10px 0 0;text-align:center}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{font-size:18px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 7px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-simple[_ngcontent-%COMP%]{margin-top:-6px}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:15px 20px;height:90px}.card[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%]{border-bottom:1px solid #EEEEEE;color:#999;font-size:14px;font-weight:400;padding-bottom:10px;text-align:center}.card[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]{width:100%;margin-top:20px;display:flex;justify-content:center}.card[_ngcontent-%COMP%]   .property-stats[_ngcontent-%COMP%]{display:block;float:left;width:33.333333%;text-align:center}.card[_ngcontent-%COMP%]   .property-stats[_ngcontent-%COMP%]:first-child{border-right:1px solid #EEEEEE}.card[_ngcontent-%COMP%]   .property-stats[_ngcontent-%COMP%]:last-child{border-left:1px solid #EEEEEE}.card[_ngcontent-%COMP%]   .property-stats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:300;margin-bottom:5px}.card[_ngcontent-%COMP%]   .property-stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#777}.title[_ngcontent-%COMP%]{color:#506a85;text-align:center;font-weight:300;font-size:44px;margin-bottom:90px;line-height:90%}.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:17px;color:#999;text-transform:uppercase;margin:0}.space-30[_ngcontent-%COMP%]{height:30px;display:block}.space-50[_ngcontent-%COMP%]{height:50px;display:block}.space-200[_ngcontent-%COMP%]{height:200px;display:block}.white-board[_ngcontent-%COMP%]{background-color:#fff;min-height:200px;padding:60px 60px 20px}.ct-heart[_ngcontent-%COMP%]{color:#f74933}pre.prettyprint[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #999;margin-top:20px;padding:20px;text-align:left}.atv[_ngcontent-%COMP%], .str[_ngcontent-%COMP%]{color:#05ae0e}.tag[_ngcontent-%COMP%], .pln[_ngcontent-%COMP%], .kwd[_ngcontent-%COMP%]{color:#3472f7}.atn[_ngcontent-%COMP%]{color:#2c93ff}.pln[_ngcontent-%COMP%]{color:#333}.com[_ngcontent-%COMP%]{color:#999}.btn-simple[_ngcontent-%COMP%]{opacity:.8;color:#666;background-color:transparent}.btn-simple[_ngcontent-%COMP%]:hover, .btn-simple[_ngcontent-%COMP%]:focus{background-color:transparent;box-shadow:none;opacity:1}.btn-simple[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px}.navbar-brand-logo[_ngcontent-%COMP%]{padding:0}.navbar-brand-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border:1px solid #333333;border-radius:50%;float:left;overflow:hidden;width:60px}.navbar[_ngcontent-%COMP%]   .navbar-brand-logo[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#fff;float:left;font-size:18px;font-weight:400;line-height:20px;margin-left:10px;margin-top:10px;width:60px}.navbar-default[_ngcontent-%COMP%]   .navbar-brand-logo[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#555}.clickable[_ngcontent-%COMP%]{cursor:pointer}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{-webkit-backface-visibility:visible;backface-visibility:visible}.back[_ngcontent-%COMP%]{visibility:hidden;-ms-transition:all .2s cubic-bezier(.92,.01,.83,.67)}.front[_ngcontent-%COMP%]{z-index:4}.card-container[_ngcontent-%COMP%]:not(.manual-flip):hover   .back[_ngcontent-%COMP%], .card-container.manual-flip.hover[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{z-index:5;visibility:visible}}"]}),n})()}]);var d=e(83893);let p=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[d.m,l,r.m9]]}),n})()}}]);