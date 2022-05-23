"use strict";(self.webpackChunkmaterial_dashboard_angular=self.webpackChunkmaterial_dashboard_angular||[]).push([[186],{66957:function(t,e,i){i.r(e),i.d(e,{EmailConfigSettingModule:function(){return T}});var r=i(39895),a=i(99692),o=i(11494),s=i(3679),n=i(37716),l=i(86710),m=i(95270),d=i(57404),u=i(90171),f=i(98295),p=i(49983),Z=i(38583),g=i(51095),c=i(12178);const h=["search"];function q(t,e){1&t&&(n.TgZ(0,"div",16),n._UZ(1,"mat-progress-bar",17),n.qZA())}const v=r.Bz.forChild([{path:"",component:(()=>{class t{constructor(t,e,i,r,a){this.store=t,this.fb=e,this.route=i,this.emailConfigService=r,this.notification=a,this.loader=!1,this.pageIndex=0,this.pageSizeOptions=[5,10,25,50,100],this.roles=[],this.employees=[],this.branches=[],this.form=this.fb.group({driver:["",[s.kI.required,s.kI.minLength(2)]],host:["",[s.kI.required,s.kI.minLength(2)]],username:[""],password:[""],port:[""],from_address:[""],from_name:[""]}),this.smsConfigForm=this.fb.group({gateway:[{value:"",disabled:!0}],template:["",[s.kI.required,s.kI.minLength(2)]],body:[""],tags:[{value:"",disabled:!0}]})}ngOnInit(){this.route.snapshot.data.setting&&this.prePopulateForm(this.route.snapshot.data.setting)}prePopulateForm(t){this.setting=t,this.form.patchValue({driver:this.setting.driver,host:this.setting.host,username:this.setting.username,password:this.setting.password,port:this.setting.port,from_address:this.setting.from_address,from_name:this.setting.from_name})}onSubmit(){}update(){const t=Object.assign({},this.setting,this.form.value);(new FormData).append("id",t.id),this.loader=!0,this.emailConfigService.create(t).subscribe(t=>{this.loader=!1,this.notification.showNotification("success","Success !! Email Config Setting has been updated.")},t=>{var e;if(this.loader=!1,0!==t.payment&&(this.formErrors=t,this.formErrors))for(const i in this.formErrors)this.form&&(null===(e=this.form.controls[i])||void 0===e||e.markAsTouched(),this.form.controls[i].setErrors({incorrect:!0}))})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.yh),n.Y36(s.qu),n.Y36(r.gz),n.Y36(m.x),n.Y36(d.g))},t.\u0275cmp=n.Xpm({type:t,selectors:[["robi-email-general-setting"]],viewQuery:function(t,e){if(1&t&&(n.Gf(h,7),n.Gf(a.NW,7),n.Gf(o.YE,7)),2&t){let t;n.iGM(t=n.CRH())&&(e.search=t.first),n.iGM(t=n.CRH())&&(e.paginator=t.first),n.iGM(t=n.CRH())&&(e.sort=t.first)}},decls:56,vars:4,consts:[[1,"row"],[1,"col-md-12"],[3,"expanded"],[3,"formGroup"],["color","primary","appearance","outline",1,"full-width"],["matInput","","placeholder","Mail Driver","formControlName","driver"],["matInput","","placeholder","Mail Host","formControlName","host"],["matInput","","placeholder","Mail Username","formControlName","username"],["matInput","","placeholder","Mail Password","formControlName","password"],["matInput","","placeholder","Mail Port","formControlName","port"],["matInput","","placeholder","Mail From Address","formControlName","from_address"],["matInput","","placeholder","Mail From Name","formControlName","from_name"],[1,"divider","divider-md"],["class","d-flex justify-content-center spinner-container",4,"ngIf"],["mat-raised-button","","type","submit","color","accent",1,"btn","pull-right",3,"disabled","click"],[1,"clearfix"],[1,"d-flex","justify-content-center","spinner-container"],["color","green","mode","query","value","50","bufferValue","75"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"mat-accordion"),n.TgZ(3,"mat-expansion-panel",2),n.TgZ(4,"mat-expansion-panel-header"),n.TgZ(5,"mat-panel-title"),n._uU(6," Email Config "),n.qZA(),n.qZA(),n.TgZ(7,"form",3),n.TgZ(8,"div",0),n.TgZ(9,"div",1),n.TgZ(10,"mat-form-field",4),n.TgZ(11,"mat-label"),n._uU(12,"Mail Driver"),n.qZA(),n._UZ(13,"input",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"div",0),n.TgZ(15,"div",1),n.TgZ(16,"mat-form-field",4),n.TgZ(17,"mat-label"),n._uU(18,"Mail Host"),n.qZA(),n._UZ(19,"input",6),n.qZA(),n.qZA(),n.qZA(),n.TgZ(20,"div",0),n.TgZ(21,"div",1),n.TgZ(22,"mat-form-field",4),n.TgZ(23,"mat-label"),n._uU(24,"Mail Username"),n.qZA(),n._UZ(25,"input",7),n.qZA(),n.qZA(),n.qZA(),n.TgZ(26,"div",0),n.TgZ(27,"div",1),n.TgZ(28,"mat-form-field",4),n.TgZ(29,"mat-label"),n._uU(30,"Mail Password"),n.qZA(),n._UZ(31,"input",8),n.qZA(),n.qZA(),n.qZA(),n.TgZ(32,"div",0),n.TgZ(33,"div",1),n.TgZ(34,"mat-form-field",4),n.TgZ(35,"mat-label"),n._uU(36,"Mail Port"),n.qZA(),n._UZ(37,"input",9),n.qZA(),n.qZA(),n.qZA(),n.TgZ(38,"div",0),n.TgZ(39,"div",1),n.TgZ(40,"mat-form-field",4),n.TgZ(41,"mat-label"),n._uU(42,"Mail From Address"),n.qZA(),n._UZ(43,"input",10),n.qZA(),n.qZA(),n.qZA(),n.TgZ(44,"div",0),n.TgZ(45,"div",1),n.TgZ(46,"mat-form-field",4),n.TgZ(47,"mat-label"),n._uU(48,"Mail From Name"),n.qZA(),n._UZ(49,"input",11),n.qZA(),n.qZA(),n.qZA(),n._UZ(50,"div",12),n.YNc(51,q,2,0,"div",13),n.TgZ(52,"div"),n.TgZ(53,"button",14),n.NdJ("click",function(){return e.update()}),n._uU(54,"Update Settings"),n.qZA(),n.qZA(),n._UZ(55,"div",15),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.Q6J("expanded",!0),n.xp6(4),n.Q6J("formGroup",e.form),n.xp6(44),n.Q6J("ngIf",e.loader),n.xp6(2),n.Q6J("disabled",!e.form.valid||e.loader))},directives:[u.pp,u.ib,u.yz,u.yK,s._Y,s.JL,s.sg,f.KE,f.hX,p.Nt,s.Fj,s.JJ,s.u,Z.O5,g.lW,c.pW],styles:[""]}),t})()}]);var A=i(83893);let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[A.m,v]]}),t})()}}]);