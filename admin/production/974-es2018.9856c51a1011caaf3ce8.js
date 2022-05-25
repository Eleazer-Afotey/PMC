"use strict";(self.webpackChunkmaterial_dashboard_angular=self.webpackChunkmaterial_dashboard_angular||[]).push([[974],{24974:function(t,e,a){a.r(e),a.d(e,{AccountingModule:function(){return ie}});var i=a(39895),n=a(37716),o=a(65939);const r=function(){return{exact:!0}},c=function(){return["ledger"]},l=function(){return["journal"]};let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-accounting"]],decls:23,vars:9,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-info"],[1,"card-title"],[1,"card-body"],["mat-tab-nav-bar",""],["mat-tab-link","","routerLinkActive","","routerLink","/reports",3,"active","routerLinkActiveOptions"],["general","routerLinkActive"],[1,"nav-text"],["mat-tab-link","","routerLinkActive","","routerLink","/ledger",3,"active","routerLink"],["ledger","routerLinkActive"],["mat-tab-link","","routerLinkActive","",3,"active","routerLink"],["journal","routerLinkActive"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n.TgZ(5,"div",5),n.TgZ(6,"h4",6),n._uU(7,"Reports"),n.qZA(),n.qZA(),n.TgZ(8,"div",7),n.TgZ(9,"nav",8),n.TgZ(10,"a",9,10),n.TgZ(12,"span",11),n._uU(13," Property Report "),n.qZA(),n.qZA(),n.TgZ(14,"a",12,13),n.TgZ(16,"span",11),n._uU(17," General Ledger "),n.qZA(),n.qZA(),n.TgZ(18,"a",14,15),n.TgZ(20,"span",11),n._uU(21," Journal "),n.qZA(),n.qZA(),n.qZA(),n._UZ(22,"router-outlet"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t){const t=n.MAs(11),e=n.MAs(15),a=n.MAs(19);n.xp6(10),n.Q6J("active",t.isActive)("routerLinkActiveOptions",n.DdM(6,r)),n.xp6(4),n.Q6J("active",e.isActive)("routerLink",n.DdM(7,c)),n.xp6(4),n.Q6J("active",a.isActive)("routerLink",n.DdM(8,l))}},directives:[o.BU,i.yS,o.Nj,i.Od,i.lC],styles:[""]}),t})();var d=a(22238),u=a(99692),p=a(11494),m=a(1581);class g extends m.y{constructor(t){super(t)}}var f=a(3679),h=a(83558),Z=a(57404),v=a(38583),A=a(51095),b=a(4885),y=a(32789);const _=["stepper"];function T(t,e){1&t&&(n.TgZ(0,"div",7),n._uU(1," Statement ... "),n._UZ(2,"mat-spinner",8),n.qZA()),2&t&&(n.xp6(2),n.Q6J("diameter",40))}function q(t,e){if(1&t&&(n.TgZ(0,"div",9),n.TgZ(1,"div"),n.TgZ(2,"span"),n._uU(3," Account Statement "),n.qZA(),n.qZA(),n.TgZ(4,"div",10),n.TgZ(5,"div",11),n.TgZ(6,"div",12),n._uU(7),n.qZA(),n.TgZ(8,"div",12),n._uU(9),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t){const t=n.oxw();n.xp6(7),n.hij("A/C Name: ",null==t.account?null:t.account.account_display_name,""),n.xp6(2),n.hij("A/C Number: ",null==t.account?null:t.account.account_number,"")}}function x(t,e){1&t&&(n.TgZ(0,"mat-header-cell",30),n._uU(1," Date "),n.qZA())}function S(t,e){if(1&t&&(n.TgZ(0,"mat-cell",30),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.created_at," ")}}function w(t,e){1&t&&(n.TgZ(0,"mat-header-cell",31),n._uU(1," Narration "),n.qZA())}function C(t,e){if(1&t&&(n.TgZ(0,"mat-cell",31),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.narration," ")}}function Y(t,e){1&t&&(n.TgZ(0,"mat-header-cell",32),n._uU(1," Debit "),n.qZA())}function D(t,e){if(1&t&&(n.TgZ(0,"mat-cell",32),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.is_dr?t.display_amount:"0.00"," ")}}function N(t,e){1&t&&(n.TgZ(0,"mat-header-cell",32),n._uU(1," Credit "),n.qZA())}function U(t,e){if(1&t&&(n.TgZ(0,"mat-cell",32),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.is_cr?t.display_amount:"0.00"," ")}}function J(t,e){1&t&&(n.TgZ(0,"mat-header-cell",32),n._uU(1," Balance "),n.qZA())}function Q(t,e){if(1&t&&(n.TgZ(0,"mat-cell",32),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.balance," ")}}function I(t,e){1&t&&n._UZ(0,"mat-header-row")}function k(t,e){1&t&&n._UZ(0,"mat-row")}function O(t,e){1&t&&(n.TgZ(0,"span"),n._uU(1,"No Activity"),n.qZA())}function R(t,e){if(1&t&&(n.TgZ(0,"div",13),n.TgZ(1,"mat-table",14,15),n.ynx(3,16),n.YNc(4,x,2,0,"mat-header-cell",17),n.YNc(5,S,2,1,"mat-cell",18),n.BQk(),n.ynx(6,19),n.YNc(7,w,2,0,"mat-header-cell",20),n.YNc(8,C,2,1,"mat-cell",21),n.BQk(),n.ynx(9,22),n.YNc(10,Y,2,0,"mat-header-cell",23),n.YNc(11,D,2,1,"mat-cell",24),n.BQk(),n.ynx(12,25),n.YNc(13,N,2,0,"mat-header-cell",23),n.YNc(14,U,2,1,"mat-cell",24),n.BQk(),n.ynx(15,26),n.YNc(16,J,2,0,"mat-header-cell",23),n.YNc(17,Q,2,1,"mat-cell",24),n.BQk(),n.YNc(18,I,1,0,"mat-header-row",27),n.YNc(19,k,1,0,"mat-row",28),n.qZA(),n.YNc(20,O,2,0,"span",29),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Q6J("dataSource",t.dataSource),n.xp6(17),n.Q6J("matHeaderRowDef",t.tableColumns)("matHeaderRowDefSticky",!0),n.xp6(1),n.Q6J("matRowDefColumns",t.tableColumns),n.xp6(1),n.Q6J("ngIf",0===t.dataSource.length)}}function j(t,e){1&t&&n.GkF(0,33)}let L=(()=>{class t{constructor(t,e,a,i,n){this.fb=e,this.accountingService=a,this.notification=i,this.dialogRef=n,this.loader=!1,this.tableColumns=["date","narration","debit","credit","balance"],this.id=t.id,this.type=t.type}ngOnInit(){switch(this.loader=!0,this.type){case"general":this.generalAccountStatement(this.id,!1);break;case"member":this.depositAccountStatement(this.id,!1);break;case"lease":this.leaseAccountStatement(this.id,!1)}}downloadPdf(){switch(this.type){case"general":this.generalAccountStatement(this.id,!0);break;case"member":this.depositAccountStatement(this.id,!0);break;case"loan":this.leaseAccountStatement(this.id,!0)}}showFile(t){const e=new Blob([t],{type:"application/pdf"});if(window.navigator&&window.navigator.msSaveOrOpenBlob)return void window.navigator.msSaveOrOpenBlob(e);const a=window.URL.createObjectURL(e),i=document.createElement("a");i.href=a,i.download="statement.pdf",i.click(),setTimeout(function(){window.URL.revokeObjectURL(a)},100)}depositAccountStatement(t,e){!0===e&&(this.loader=!0,this.accountingService.downloadMemberAccountStatement({id:t,pdf:e}).subscribe(t=>{this.dialogRef.close(),this.showFile(t)},()=>{this.loader=!1,this.dialogRef.close()})),this.accountingService.getDepositAccountStatement({id:t,pdf:e}).subscribe(t=>{this.loader=!1,this.dataSource=t.statement,this.account=t},()=>{this.loader=!1,this.dataSource=[]})}leaseAccountStatement(t,e){!0===e&&(this.loader=!0,this.accountingService.downloadLeaseAccountStatement({id:t,pdf:e}).subscribe(t=>{this.dialogRef.close(),this.showFile(t)},()=>{this.loader=!1,this.dialogRef.close()})),this.accountingService.getLeaseAccountStatement({id:t,pdf:e}).subscribe(t=>{this.loader=!1,this.dataSource=t.statement,this.account=t},()=>{this.loader=!1,this.dataSource=[]})}generalAccountStatement(t,e){!0===e&&(this.loader=!0,this.accountingService.downloadGeneralAccountStatement({id:t,pdf:e}).subscribe(t=>{this.dialogRef.close(),this.showFile(t)},()=>{this.loader=!1,this.dialogRef.close()})),this.accountingService.getGeneralAccountStatement({id:t,pdf:e}).subscribe(t=>{this.loader=!1,this.dataSource=t.statement,this.account=t},()=>{this.loader=!1,this.dataSource=[]})}close(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.WI),n.Y36(f.qu),n.Y36(h.S),n.Y36(Z.g),n.Y36(d.so))},t.\u0275cmp=n.Xpm({type:t,selectors:[["robi-statement"]],viewQuery:function(t,e){if(1&t&&n.Gf(_,7),2&t){let t;n.iGM(t=n.CRH())&&(e.stepper=t.first)}},decls:8,vars:5,consts:[["class","d-flex justify-content-center spinner-container",4,"ngIf"],["class","card-header align-center small-font",4,"ngIf"],[1,"mat-dialog-data"],["class","table-responsive",4,"ngIf"],["align","center"],["mat-button","",1,"mat-raised-button","button-separate",3,"mat-dialog-close"],["align","right",4,"ngIf"],[1,"d-flex","justify-content-center","spinner-container"],[3,"diameter"],[1,"card-header","align-center","small-font"],[1,"row","col-12"],[1,"col-12"],[1,"row"],[1,"table-responsive"],[3,"dataSource"],["table",""],["matColumnDef","date"],["class","date",4,"matHeaderCellDef"],["class","date",4,"matCellDef"],["matColumnDef","narration"],["class","narration",4,"matHeaderCellDef"],["class","narration",4,"matCellDef"],["matColumnDef","debit"],["class","money-cell",4,"matHeaderCellDef"],["class","money-cell",4,"matCellDef"],["matColumnDef","credit"],["matColumnDef","balance"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[4,"ngIf"],[1,"date"],[1,"narration"],[1,"money-cell"],["align","right"]],template:function(t,e){1&t&&(n.YNc(0,T,3,1,"div",0),n.YNc(1,q,10,2,"div",1),n.TgZ(2,"mat-dialog-content",2),n.YNc(3,R,21,5,"div",3),n.qZA(),n.TgZ(4,"mat-dialog-actions",4),n.TgZ(5,"button",5),n._uU(6,"Close"),n.qZA(),n.YNc(7,j,1,0,"ng-container",6),n.qZA()),2&t&&(n.Q6J("ngIf",e.loader),n.xp6(1),n.Q6J("ngIf",!e.loader),n.xp6(2),n.Q6J("ngIf",!e.loader),n.xp6(2),n.Q6J("mat-dialog-close",!0),n.xp6(2),n.Q6J("ngIf",!e.loader))},directives:[v.O5,d.xY,d.H8,A.lW,d.ZT,b.$g,y.BZ,y.w1,y.fO,y.Dz,y.as,y.nj,y.ge,y.ev,y.XQ,y.Gk],styles:["mat-table[_ngcontent-%COMP%]{min-width:600px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{font-weight:bold}.mat-cell[_ngcontent-%COMP%]{font-size:12px}.narration[_ngcontent-%COMP%]{min-width:200px}.date[_ngcontent-%COMP%]{min-width:150px}.header[_ngcontent-%COMP%]{background-color:transparent;padding:0 5px;height:20px}.fx-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.align-center[_ngcontent-%COMP%]{text-align:center}.small-font[_ngcontent-%COMP%]{font-size:small}.money-cell[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),t})();var M=a(22759),P=a(66682),F=a(54395),H=a(87519),B=a(68307),$=a(22958),G=a(65),E=a(91841);let z=(()=>{class t extends G.b{constructor(t){super(t,"journals")}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(E.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var W=a(63385),X=a(98295),V=a(67441),K=a(49983),tt=a(72458),et=a(76627),at=a(11436),it=a(12178);const nt=["search"];function ot(t,e){if(1&t&&(n.TgZ(0,"mat-option",33),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.Q6J("value",t.id),n.xp6(1),n.hij(" ",t.property_name," ")}}function rt(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"button",34),n.NdJ("click",function(){return n.CHM(t),n.oxw().clearSearch()}),n.TgZ(1,"mat-icon"),n._uU(2,"close"),n.qZA(),n.qZA()}}function ct(t,e){1&t&&(n.TgZ(0,"mat-header-cell",35),n._uU(1," Account Number "),n.qZA())}function lt(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.account_number," ")}}function st(t,e){1&t&&(n.TgZ(0,"mat-header-cell",35),n._uU(1," Account Name "),n.qZA())}function dt(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.account_display_name," ")}}function ut(t,e){1&t&&(n.TgZ(0,"mat-header-cell"),n._uU(1," Balance "),n.qZA())}function pt(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.accountBalance," ")}}function mt(t,e){1&t&&(n.TgZ(0,"mat-header-cell"),n._uU(1," Statement "),n.qZA())}function gt(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"mat-cell",36),n.TgZ(1,"button",37),n.NdJ("click",function(){const e=n.CHM(t).$implicit;return n.oxw().viewStatement(e)}),n.TgZ(2,"mat-icon",38),n._uU(3,"visibility"),n.qZA(),n.qZA(),n.TgZ(4,"button",39),n.NdJ("click",function(){const e=n.CHM(t).$implicit;return n.oxw().viewPdfStatement(e)}),n.TgZ(5,"mat-icon"),n._uU(6,"picture_as_pdf"),n.qZA(),n.qZA(),n.qZA()}if(2&t){const t=n.oxw();n.xp6(1),n.Q6J("disabled",t.loader)("matTooltipPosition","above"),n.xp6(3),n.Q6J("disabled",t.loader)("matTooltipPosition","above")}}function ft(t,e){1&t&&n._UZ(0,"mat-header-row")}function ht(t,e){1&t&&n._UZ(0,"mat-row")}function Zt(t,e){1&t&&(n.TgZ(0,"span"),n._uU(1,"No Data"),n.qZA())}function vt(t,e){1&t&&(n.TgZ(0,"div",40),n._UZ(1,"mat-progress-bar",41),n.qZA())}let At=(()=>{class t{constructor(t,e,a,i,n,o,r){this.fb=t,this.service=e,this.generalJournalService=a,this.notification=i,this.dialog=n,this.memberService=o,this.propertyService=r,this.displayedColumns=["account_number","account_name","balance","actions"],this.loader=!1,this.pageIndex=0,this.pageSizeOptions=[5,10,25,50,100]}ngOnInit(){this.dataSource=new g(this.service),this.dataSource.meta$.subscribe(t=>this.meta=t),this.dataSource.load("",0,0,"account_number","desc","property_id",this.propertyID),this.properties$=this.propertyService.list(["property_name"]),this.form=this.fb.group({property_id:[this.propertyID],include_members:[""]})}onPropertyChange(t){this.propertyID=t,this.loadData()}viewStatement(t){const e=t.id,a=new d.vA;a.disableClose=!0,a.autoFocus=!0,a.data={id:e,type:"general"},this.dialog.open(L,a)}viewPdfStatement(t){const e=null==t?void 0:t.id,a=new d.vA;a.disableClose=!0,a.autoFocus=!0,a.data={id:e},a.width="600px",this.dialog.open($.K,a)}loadData(){this.dataSource.load(this.search.nativeElement.value,this.paginator.pageIndex+1,this.paginator.pageSize,this.sort.active,this.sort.direction,"property_id",this.propertyID)}ngAfterViewInit(){(0,M.R)(this.search.nativeElement,"keyup").pipe((0,F.b)(1e3),(0,H.x)(),(0,B.b)(()=>{this.paginator.pageIndex=0,this.loadData()})).subscribe(),this.paginator.page.pipe((0,B.b)(()=>this.loadData())).subscribe(),this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),(0,P.T)(this.sort.sortChange,this.paginator.page).pipe((0,B.b)(()=>this.loadData())).subscribe()}clearSearch(){this.search.nativeElement.value="",this.loadData()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.qu),n.Y36(h.S),n.Y36(z),n.Y36(Z.g),n.Y36(d.uw),n.Y36(Z.g),n.Y36(W.b))},t.\u0275cmp=n.Xpm({type:t,selectors:[["robi-ledger"]],viewQuery:function(t,e){if(1&t&&(n.Gf(nt,5),n.Gf(u.NW,7),n.Gf(p.YE,7)),2&t){let t;n.iGM(t=n.CRH())&&(e.search=t.first),n.iGM(t=n.CRH())&&(e.paginator=t.first),n.iGM(t=n.CRH())&&(e.sort=t.first)}},decls:40,vars:16,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col-5"],["color","primary",1,"search-form-field"],["placeholder","Property","formControlName","property_id",3,"selectionChange"],["propertySelect",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","search-form-section"],[1,"col-11"],[1,"search-form-field"],["matInput","","placeholder","Filter","autocomplete","off",3,"disabled"],["search",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"table-responsive"],["matSort","","matSortActive","account_number","matSortDirection","desc","matSortDisableClear","",3,"dataSource"],["table",""],["matColumnDef","account_number"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","account_name"],["matColumnDef","balance"],[4,"matHeaderCellDef"],["matColumnDef","actions"],["class","button-row",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["class","d-flex justify-content-center spinner-container",4,"ngIf"],["showFirstLastButtons","",3,"length","pageIndex","pageSizeOptions"],["pagination",""],[3,"value"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-sort-header",""],[1,"button-row"],["mat-icon-button","","matTooltip","View Account Statement.",3,"disabled","matTooltipPosition","click"],["color","primary"],["mat-icon-button","","matTooltip","Download Account Statement.",3,"disabled","matTooltipPosition","click"],[1,"d-flex","justify-content-center","spinner-container"],["color","green","mode","query","value","50","bufferValue","75"]],template:function(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"form",4),n.TgZ(5,"div",0),n.TgZ(6,"div",5),n.TgZ(7,"mat-form-field",6),n.TgZ(8,"mat-select",7,8),n.NdJ("selectionChange",function(){n.CHM(t);const a=n.MAs(9);return e.onPropertyChange(a.value)}),n.YNc(10,ot,2,2,"mat-option",9),n.ALo(11,"async"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(12,"div",10),n.TgZ(13,"div",11),n.TgZ(14,"mat-form-field",12),n._UZ(15,"input",13,14),n.YNc(17,rt,3,0,"button",15),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",16),n.TgZ(19,"mat-table",17,18),n.ynx(21,19),n.YNc(22,ct,2,0,"mat-header-cell",20),n.YNc(23,lt,2,1,"mat-cell",21),n.BQk(),n.ynx(24,22),n.YNc(25,st,2,0,"mat-header-cell",20),n.YNc(26,dt,2,1,"mat-cell",21),n.BQk(),n.ynx(27,23),n.YNc(28,ut,2,0,"mat-header-cell",24),n.YNc(29,pt,2,1,"mat-cell",21),n.BQk(),n.ynx(30,25),n.YNc(31,mt,2,0,"mat-header-cell",24),n.YNc(32,gt,7,4,"mat-cell",26),n.BQk(),n.YNc(33,ft,1,0,"mat-header-row",27),n.YNc(34,ht,1,0,"mat-row",28),n.qZA(),n.YNc(35,Zt,2,0,"span",29),n.YNc(36,vt,2,0,"div",30),n.ALo(37,"async"),n._UZ(38,"mat-paginator",31,32),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&t){const t=n.MAs(16);n.xp6(4),n.Q6J("formGroup",e.form),n.xp6(6),n.Q6J("ngForOf",n.lcZ(11,12,e.properties$)),n.xp6(5),n.Q6J("disabled",0===(null==e.meta?null:e.meta.total)),n.xp6(2),n.Q6J("ngIf",t.value),n.xp6(2),n.Q6J("dataSource",e.dataSource),n.xp6(14),n.Q6J("matHeaderRowDef",e.displayedColumns),n.xp6(1),n.Q6J("matRowDefColumns",e.displayedColumns),n.xp6(1),n.Q6J("ngIf",0===(null==e.meta?null:e.meta.total)),n.xp6(1),n.Q6J("ngIf",n.lcZ(37,14,null==e.dataSource?null:e.dataSource.loading$)||e.loader),n.xp6(2),n.Q6J("length",null==e.meta?null:e.meta.total)("pageIndex",e.pageIndex)("pageSizeOptions",e.pageSizeOptions)}},directives:[f._Y,f.JL,f.sg,X.KE,V.gD,f.JJ,f.u,v.sg,K.Nt,v.O5,y.BZ,p.YE,y.w1,y.fO,y.Dz,y.as,y.nj,u.NW,tt.ey,A.lW,X.R9,et.Hw,y.ge,p.nU,y.ev,at.gM,y.XQ,y.Gk,it.pW],pipes:[v.Ov],styles:[""]}),t})();class bt extends m.y{constructor(t){super(t)}}var yt=a(86710);const _t=["search"];function Tt(t,e){if(1&t&&(n.TgZ(0,"mat-option",34),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.Q6J("value",t.id),n.xp6(1),n.hij(" ",t.property_name," ")}}function qt(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"button",35),n.NdJ("click",function(){return n.CHM(t),n.oxw().clearSearch()}),n.TgZ(1,"mat-icon"),n._uU(2,"close"),n.qZA(),n.qZA()}}function xt(t,e){1&t&&(n.TgZ(0,"mat-header-cell",36),n._uU(1," Date "),n.qZA())}function St(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.created_at," ")}}function wt(t,e){1&t&&(n.TgZ(0,"mat-header-cell",36),n._uU(1," Narration "),n.qZA())}function Ct(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.narration," ")}}function Yt(t,e){1&t&&(n.TgZ(0,"mat-header-cell",36),n._uU(1," Debit Account "),n.qZA())}function Dt(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.debitAccount.account_display_name," ")}}function Nt(t,e){1&t&&(n.TgZ(0,"mat-header-cell",36),n._uU(1," Credit Account "),n.qZA())}function Ut(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.creditAccount.account_display_name," ")}}function Jt(t,e){1&t&&(n.TgZ(0,"mat-header-cell"),n._uU(1," Amount "),n.qZA())}function Qt(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.amount," ")}}function It(t,e){1&t&&(n.TgZ(0,"mat-header-cell"),n._uU(1," Prepared By "),n.qZA())}function kt(t,e){if(1&t&&(n.TgZ(0,"mat-cell"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij(" ",t.preparedBy?null==t.preparedBy?null:t.preparedBy.first_name:"-"," ")}}function Ot(t,e){1&t&&n._UZ(0,"mat-header-row")}function Rt(t,e){1&t&&n._UZ(0,"mat-row")}function jt(t,e){1&t&&(n.TgZ(0,"span"),n._uU(1,"No Data"),n.qZA())}function Lt(t,e){1&t&&(n.TgZ(0,"div",37),n._UZ(1,"mat-progress-bar",38),n.qZA())}let Mt=(()=>{class t{constructor(t,e,a,i,n,o,r,c){this.fb=t,this.service=e,this.generalJournalService=a,this.store=i,this.notification=n,this.dialog=o,this.memberService=r,this.propertyService=c,this.journalColumns=["created_at","narration","debit_account_id","credit_account_id","amount","prepared_by"],this.loader=!1,this.pageIndex=0,this.pageSizeOptions=[5,10,25,50,100]}ngOnInit(){this.dataSourceJournal=new bt(this.generalJournalService),this.dataSourceJournal.meta$.subscribe(t=>this.metaLedger=t),this.dataSourceJournal.load("",0,0,"created_at","desc","property_id",this.propertyID),this.properties$=this.propertyService.list(["property_name"]),this.form=this.fb.group({property_id:[this.propertyID],include_members:[""]})}onPropertyChange(t){this.propertyID=t,this.loadData()}loadData(){this.dataSourceJournal.load(this.search.nativeElement.value,this.paginator.pageIndex+1,this.paginator.pageSize,this.sort.active,this.sort.direction,"property_id",this.propertyID)}ngAfterViewInit(){(0,M.R)(this.search.nativeElement,"keyup").pipe((0,F.b)(1e3),(0,H.x)(),(0,B.b)(()=>{this.paginator.pageIndex=0,this.loadData()})).subscribe(),this.paginator.page.pipe((0,B.b)(()=>this.loadData())).subscribe(),this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),(0,P.T)(this.sort.sortChange,this.paginator.page).pipe((0,B.b)(()=>this.loadData())).subscribe()}clearSearch(){this.search.nativeElement.value="",this.loadData()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.qu),n.Y36(h.S),n.Y36(z),n.Y36(yt.yh),n.Y36(Z.g),n.Y36(d.uw),n.Y36(Z.g),n.Y36(W.b))},t.\u0275cmp=n.Xpm({type:t,selectors:[["robi-journal"]],viewQuery:function(t,e){if(1&t&&(n.Gf(_t,5),n.Gf(u.NW,7),n.Gf(p.YE,7)),2&t){let t;n.iGM(t=n.CRH())&&(e.search=t.first),n.iGM(t=n.CRH())&&(e.paginator=t.first),n.iGM(t=n.CRH())&&(e.sort=t.first)}},decls:46,vars:16,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col-5"],["color","primary",1,"search-form-field"],["placeholder","Property","formControlName","property_id",3,"selectionChange"],["propertySelect",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","search-form-section"],[1,"col-11"],[1,"search-form-field"],["matInput","","placeholder","Filter","autocomplete","off",3,"disabled"],["search",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"table-responsive"],["matSort","","matSortActive","created_at","matSortDirection","desc","matSortDisableClear","",3,"dataSource"],["table",""],["matColumnDef","created_at"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","narration"],["matColumnDef","debit_account_id"],["matColumnDef","credit_account_id"],["matColumnDef","amount"],[4,"matHeaderCellDef"],["matColumnDef","prepared_by"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["class","d-flex justify-content-center spinner-container",4,"ngIf"],["showFirstLastButtons","",3,"length","pageIndex","pageSizeOptions"],["pagination",""],[3,"value"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-sort-header",""],[1,"d-flex","justify-content-center","spinner-container"],["color","green","mode","query","value","50","bufferValue","75"]],template:function(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"form",4),n.TgZ(5,"div",0),n.TgZ(6,"div",5),n.TgZ(7,"mat-form-field",6),n.TgZ(8,"mat-select",7,8),n.NdJ("selectionChange",function(){n.CHM(t);const a=n.MAs(9);return e.onPropertyChange(a.value)}),n.YNc(10,Tt,2,2,"mat-option",9),n.ALo(11,"async"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(12,"div",10),n.TgZ(13,"div",11),n.TgZ(14,"mat-form-field",12),n._UZ(15,"input",13,14),n.YNc(17,qt,3,0,"button",15),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",16),n.TgZ(19,"mat-table",17,18),n.ynx(21,19),n.YNc(22,xt,2,0,"mat-header-cell",20),n.YNc(23,St,2,1,"mat-cell",21),n.BQk(),n.ynx(24,22),n.YNc(25,wt,2,0,"mat-header-cell",20),n.YNc(26,Ct,2,1,"mat-cell",21),n.BQk(),n.ynx(27,23),n.YNc(28,Yt,2,0,"mat-header-cell",20),n.YNc(29,Dt,2,1,"mat-cell",21),n.BQk(),n.ynx(30,24),n.YNc(31,Nt,2,0,"mat-header-cell",20),n.YNc(32,Ut,2,1,"mat-cell",21),n.BQk(),n.ynx(33,25),n.YNc(34,Jt,2,0,"mat-header-cell",26),n.YNc(35,Qt,2,1,"mat-cell",21),n.BQk(),n.ynx(36,27),n.YNc(37,It,2,0,"mat-header-cell",26),n.YNc(38,kt,2,1,"mat-cell",21),n.BQk(),n.YNc(39,Ot,1,0,"mat-header-row",28),n.YNc(40,Rt,1,0,"mat-row",29),n.qZA(),n.YNc(41,jt,2,0,"span",30),n.YNc(42,Lt,2,0,"div",31),n.ALo(43,"async"),n._UZ(44,"mat-paginator",32,33),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&t){const t=n.MAs(16);n.xp6(4),n.Q6J("formGroup",e.form),n.xp6(6),n.Q6J("ngForOf",n.lcZ(11,12,e.properties$)),n.xp6(5),n.Q6J("disabled",0===(null==e.metaLedger?null:e.metaLedger.total)),n.xp6(2),n.Q6J("ngIf",t.value),n.xp6(2),n.Q6J("dataSource",e.dataSourceJournal),n.xp6(20),n.Q6J("matHeaderRowDef",e.journalColumns),n.xp6(1),n.Q6J("matRowDefColumns",e.journalColumns),n.xp6(1),n.Q6J("ngIf",0===(null==e.meta?null:e.meta.total)),n.xp6(1),n.Q6J("ngIf",n.lcZ(43,14,null==e.dataSourceJournal?null:e.dataSourceJournal.loading$)||e.loader),n.xp6(2),n.Q6J("length",null==e.metaLedger?null:e.metaLedger.total)("pageIndex",e.pageIndex)("pageSizeOptions",e.pageSizeOptions)}},directives:[f._Y,f.JL,f.sg,X.KE,V.gD,f.JJ,f.u,v.sg,K.Nt,v.O5,y.BZ,p.YE,y.w1,y.fO,y.Dz,y.as,y.nj,u.NW,tt.ey,A.lW,X.R9,et.Hw,y.ge,p.nU,y.ev,y.XQ,y.Gk,it.pW],pipes:[v.Ov],styles:[""]}),t})();var Pt=a(88229),Ft=a(79765),Ht=a(45435),Bt=a(46782),$t=a(88002),Gt=a(65792),Et=a(39075),zt=a(52218);function Wt(t,e){if(1&t&&(n.TgZ(0,"mat-option",18),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.Q6J("value",t.id),n.xp6(1),n.AsE(" ",t.property_name," - ",t.property_code," ")}}function Xt(t,e){if(1&t&&(n.TgZ(0,"mat-option",18),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.Q6J("value",t.id),n.xp6(1),n.hij(" ",t.name," ")}}function Vt(t,e){1&t&&(n.TgZ(0,"div",19),n._uU(1," downloading report ... "),n.qZA())}function Kt(t,e){1&t&&(n.TgZ(0,"div",19),n._UZ(1,"mat-progress-bar",20),n.qZA())}function te(t,e){if(1&t&&n._UZ(0,"iframe",21),2&t){const t=n.oxw();n.Q6J("src",t.pdfSrc,n.uOi)}}const ee=i.Bz.forChild([{path:"",component:s,children:[{path:"",component:(()=>{class t{constructor(t,e,a,i,n,o,r,c){this.fb=t,this.service=e,this.generalJournalService=a,this.notification=n,this.dialog=o,this.memberService=r,this.propertyService=c,this.loader=!1,this.propertyServerSideFilteringCtrl=new f.NI,this.searching=!1,this.filteredServerSideProperties=new Pt.t(1),this._onDestroy=new Ft.xQ,this.domSanitizer=i}ngOnInit(){this.form=this.fb.group({property_id:[""],period_id:[""]}),this.propertyServerSideFilteringCtrl.valueChanges.pipe((0,Ht.h)(t=>!!t),(0,B.b)(()=>this.searching=!0),(0,Bt.R)(this._onDestroy),(0,F.b)(2e3),(0,H.x)(),(0,$t.U)(t=>{t=t.toLowerCase(),this.propertiesFiltered$=this.propertyService.search(t)}),(0,Gt.g)(500)).subscribe(t=>{this.searching=!1,this.filteredServerSideProperties.next(t)},t=>{this.searching=!1})}onPropertyItemChange(t){this.periods$=this.propertyService.periods(t)}onPeriodItemChange(t){}fetchReport(){const t={...this.form.value};this.loader=!0,this.propertyService.report(t).subscribe(t=>{this.pdfSrc=this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(t)),this.loader=!1},()=>{this.loader=!1,this.notification.showNotification("danger","Error downloading Report !")})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.qu),n.Y36(h.S),n.Y36(z),n.Y36(Et.H7),n.Y36(Z.g),n.Y36(d.uw),n.Y36(Z.g),n.Y36(W.b))},t.\u0275cmp=n.Xpm({type:t,selectors:[["robi-property-report"]],decls:36,vars:13,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"col-4"],[3,"formGroup"],[1,"col-12"],["color","primary","appearance","outline"],["formControlName","property_id",3,"selectionChange"],["propertySelect",""],["placeholderLabel","Find Property...","noEntriesFoundLabel","No matching Property found ...",3,"formControl","searching"],[3,"value",4,"ngFor","ngForOf"],["formControlName","period_id",3,"selectionChange"],["periodSelect",""],["mat-raised-button","","color","primary",1,"float-right",3,"disabled","click"],[1,"col-8"],["class","d-flex justify-content-center spinner-container",4,"ngIf"],["width","500","height","600","style","width: 100%","type","application/pdf",3,"src",4,"ngIf"],[3,"value"],[1,"d-flex","justify-content-center","spinner-container"],["color","primary","mode","query","value","50","bufferValue","75"],["width","500","height","600","type","application/pdf",2,"width","100%",3,"src"]],template:function(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div",0),n.TgZ(5,"div",4),n.TgZ(6,"form",5),n.TgZ(7,"div",0),n.TgZ(8,"div",6),n.TgZ(9,"mat-form-field",7),n.TgZ(10,"mat-label"),n._uU(11,"Property"),n.qZA(),n.TgZ(12,"mat-select",8,9),n.NdJ("selectionChange",function(){n.CHM(t);const a=n.MAs(13);return e.onPropertyItemChange(a.value)}),n.TgZ(14,"mat-option"),n._UZ(15,"ngx-mat-select-search",10),n.qZA(),n.YNc(16,Wt,2,3,"mat-option",11),n.ALo(17,"async"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",0),n.TgZ(19,"div",6),n.TgZ(20,"mat-form-field",7),n.TgZ(21,"mat-label"),n._uU(22,"Period"),n.qZA(),n.TgZ(23,"mat-select",12,13),n.NdJ("selectionChange",function(){n.CHM(t);const a=n.MAs(24);return e.onPeriodItemChange(a.value)}),n.YNc(25,Xt,2,2,"mat-option",11),n.ALo(26,"async"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(27,"div",0),n.TgZ(28,"div",6),n.TgZ(29,"button",14),n.NdJ("click",function(){return e.fetchReport()}),n.TgZ(30,"span"),n._uU(31,"Download"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(32,"div",15),n.YNc(33,Vt,2,0,"div",16),n.YNc(34,Kt,2,0,"div",16),n.YNc(35,te,1,1,"iframe",17),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}2&t&&(n.xp6(6),n.Q6J("formGroup",e.form),n.xp6(9),n.Q6J("formControl",e.propertyServerSideFilteringCtrl)("searching",e.searching),n.xp6(1),n.Q6J("ngForOf",n.lcZ(17,9,e.propertiesFiltered$)),n.xp6(9),n.Q6J("ngForOf",n.lcZ(26,11,e.periods$)),n.xp6(4),n.Q6J("disabled",!e.form.valid||e.loader),n.xp6(4),n.Q6J("ngIf",e.loader),n.xp6(1),n.Q6J("ngIf",e.loader),n.xp6(1),n.Q6J("ngIf",e.pdfSrc))},directives:[f._Y,f.JL,f.sg,X.KE,X.hX,V.gD,f.JJ,f.u,tt.ey,zt.nu,f.oH,v.sg,A.lW,v.O5,it.pW],pipes:[v.Ov],styles:[""]}),t})()},{path:"ledger",component:At},{path:"journal",component:Mt}]}]);var ae=a(83893);let ie=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[ae.m,ee,zt.Co]]}),t})()}}]);