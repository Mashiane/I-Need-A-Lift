var json2xml=(function(undefined){"use strict";var tag=function(name,closing){return"<"+(closing?"/":"")+name+">";};return function(obj,rootname){var xml="";for(var i in obj){if(obj.hasOwnProperty(i)){var value=obj[i],type=typeof value;if(value instanceof Array&&type=='object'){for(var Sub in value){xml+=json2xml(value[Sub]);}}else if(value instanceof Object&&type=='object'){xml+=tag(i)+json2xml(value)+tag(i,1);}else{xml+=tag(i)+value+tag(i,{closing:1});}}}
return rootname?tag(rootname)+xml+tag(rootname,1):xml;};})(json2xml||{});function passwordcreate(len){var length=(len)?(len):(10);var string="abcdefghijklnopqrstuvwxyz";var numeric='0123456789';var punctuation='!@#$%^*()_+~`|}{[]\:;?><,./-=';var password="";var character="";var crunch=true;punctuation='!@#_';punctuation='';while(password.length<length){entity1=Math.ceil(string.length*Math.random()*Math.random());entity2=Math.ceil(numeric.length*Math.random()*Math.random());entity3=Math.ceil(punctuation.length*Math.random()*Math.random());hold=string.charAt(entity1);hold=(entity1%2==0)?(hold.toUpperCase()):(hold);character+=hold;character+=numeric.charAt(entity2);character+=punctuation.charAt(entity3);password=character;}
return password;}
window.addEventListener('load',function(){frmRegCode.style.display='block';NSB.addProperties(hdRegCode);NSB.addDisableProperty(hdRegCode);hdRegCode_left.onclick=function(){ChangeForm(frmSignUp)};if(typeof(hdRegCode.onclick)=='function'){if(typeof(hdRegCode_left)!='undefined')hdRegCode_left.onclick=function(){hdRegCode.onclick(hdRegCode_left.getAttribute('nsbvalue'))};if(typeof(hdRegCode_right)!='undefined')hdRegCode_right.onclick=function(){hdRegCode.onclick(hdRegCode_right.getAttribute('nsbvalue'))}};NSB.MultiInput_init('txtRegCode');NSB.addProperties(txtRegCode);ftRegCode.refresh=function(){setTimeout(NSB.FooterBarRefresh,10,ftRegCode)};NSB.FooterBar_jqm_init('ftRegCode','Activate,Resend');NSB.addProperties(ftRegCode);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('ftRegCode_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.addProperties(Label1);frmRegCode.style.display='none';},false);frmRegCode.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmRegCode);function ResizeRegCode(){savethefunction_rvar="";txtRegCode.Left=0;txtRegCode.Top=42;txtRegCode.Width=frmRegCode.Width-20;Label1.Width=frmRegCode.Width-20;return savethefunction_rvar;}
frmRegCode.onshow=function(){savethefunction_rvar="";user=localStorage.getItem("user");ResizeRegCode();txtRegCode.setValue(1,user);txtRegCode.setValue(2,"");return savethefunction_rvar;}
function UserActivate(){savethefunction_rvar="";user=txtRegCode.getValue(1);user=LCase(Trim(user));usrCode=Trim(txtRegCode.getValue(2));if(IsBlank(user,"Cellphone #",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(usrCode,"Secret Code",usrProfile.first)==True){return savethefunction_rvar;}
localStorage.setItem("user",user);ReadUser(user);VerifySecretCode();return savethefunction_rvar;}
function VerifySecretCode(){savethefunction_rvar="";if(TypeName(usrProfile)=="null"){NSB.MsgBox(AskRegister,"The user profile for the specified Cellphone Number does not exist, would you like to register to I-Need-A-Lift now "+usrProfile.first+"?",4+32,"Profile Error");return savethefunction_rvar;}
var icell,icode;usrFound=False;icell=usrProfile.mobile;icode=usrProfile.code;if(icell==user){if(icode==usrCode){usrFound=True;}}
NSB.WaitCursor(False);if(usrFound==True){usrProfile.blocked="n";usrProfile.lastlogin=FormatDateTime(CDATE(new Date()),"yyyy-mm-dd");SaveUser();ChangeForm(frmLogin);}else{NSB.MsgBox("This user profile cannot be activated, please enter a correct secret code "+usrProfile.first+"!");return savethefunction_rvar;}
return savethefunction_rvar;}
ftRegCode.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Activate"):UserActivate();break;case((choice)=="Resend"):user=txtRegCode.getValue(1);user=LCase(Trim(user));if(IsBlank(user,"Cellphone #",usrProfile.first)==True){return savethefunction_rvar;}
localStorage.setItem("user",user);ReadUser(user);ResendSecretCode();}
return savethefunction_rvar;}
function ResendSecretCode(){savethefunction_rvar="";if(TypeName(usrProfile)=="null"){NSB.MsgBox(AskRegister,"The user profile for the specified Cellphone Number does not exist, would you like to register to I-Need-A-Lift now?",4+32,"Profile Error");return False;}
NSB.WaitCursor(False);usrSent=SendSMS("27",usrProfile.mobile,"I-Need-A-Lift: Good day "+usrProfile.first+", your Secret Code is "+usrProfile.code+". Enter this on the Activate screen to bring your profile into life. I-Need-A-Lift Development Team @ http://www.mbangas.com/i-need-a-lift");return usrSent;return savethefunction_rvar;}
window.addEventListener('load',function(){frmNextOfKin.style.display='block';NSB.addProperties(hdNextOfKin);NSB.addDisableProperty(hdNextOfKin);hdNextOfKin_left.onclick=function(){ChangeForm(frmChooser)};if(typeof(hdNextOfKin.onclick)=='function'){if(typeof(hdNextOfKin_left)!='undefined')hdNextOfKin_left.onclick=function(){hdNextOfKin.onclick(hdNextOfKin_left.getAttribute('nsbvalue'))};if(typeof(hdNextOfKin_right)!='undefined')hdNextOfKin_right.onclick=function(){hdNextOfKin.onclick(hdNextOfKin_right.getAttribute('nsbvalue'))}};NSB.MultiInput_init('txtNextOfKin');NSB.addProperties(txtNextOfKin);frmNextOfKin.style.display='none';},false);frmNextOfKin.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmNextOfKin);frmNextOfKin.onshow=function(){savethefunction_rvar="";txtNextOfKin.Width=frmNextOfKin.Width-20;ClearNOK();SetNOK();return savethefunction_rvar;}
function ClearNOK(){savethefunction_rvar="";txtNextOfKin.setValue(1,"");txtNextOfKin.setValue(2,"");txtNextOfKin.setValue(3,"");txtNextOfKin.setValue(4,"");return savethefunction_rvar;}
function SetNOK(){savethefunction_rvar="";txtNextOfKin.setValue(1,usrProfile.nokfirst);txtNextOfKin.setValue(2,usrProfile.noklast);txtNextOfKin.setValue(3,usrProfile.nokmobile);txtNextOfKin.setValue(4,usrProfile.nokmobile);return savethefunction_rvar;}
function SaveNOK(){savethefunction_rvar="";var cmobile,uSaved,uExist,nokcode;nokcode=passwordcreate(8);nokcode=UCase(nokcode);usrProfile.nokfirst=txtNextOfKin.getValue(1);usrProfile.noklast=txtNextOfKin.getValue(2);usrProfile.nokmobile=txtNextOfKin.getValue(3);cmobile=txtNextOfKin.getValue(4);usrProfile.nokcode=nokcode;if(IsBlank(usrProfile.nokfirst,"First Name",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(usrProfile.noklast,"Last Name",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(usrProfile.nokmobile,"Cellphone No",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(cmobile,"Confirm Cellphone No",usrProfile.first)==True){return savethefunction_rvar;}
if(IsSame(usrProfile.nokmobile,cmobile,"Cellphone No","Confirm Cellphone No",usrProfile.first)==False){return savethefunction_rvar;}
if(IsNotSame(usrProfile.mobile,usrProfile.nokmobile,"Cellphone No","Next of Kin Cellphone No",usrProfile.first)==True){return savethefunction_rvar;}
uSaved=SaveUser();if(uSaved==True){uExist=ProfileExists(usrProfile.mobile);if(uExist==True){}else{NSB.MsgBox("The user profile could not be saved, please try again "+usrProfile.first+"!");return savethefunction_rvar;}
localStorage.setItem("user",usrProfile.mobile);ChangeForm(frmChooser);}else{NSB.MsgBox("The user profile could not be saved, please try again "+usrProfile.first+"!");}
return savethefunction_rvar;}
hdNextOfKin.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Apply"):SaveNOK();break;case((choice)=="Back"):ChangeForm(frmChooser);}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmChooser.style.display='block';NSB.addProperties(hdChooser);NSB.addDisableProperty(hdChooser);hdChooser_left.onclick=function(){ChangeForm(frmAfterLogin)};if(typeof(hdChooser.onclick)=='function'){if(typeof(hdChooser_left)!='undefined')hdChooser_left.onclick=function(){hdChooser.onclick(hdChooser_left.getAttribute('nsbvalue'))};if(typeof(hdChooser_right)!='undefined')hdChooser_right.onclick=function(){hdChooser.onclick(hdChooser_right.getAttribute('nsbvalue'))}};NSB.List_jqm_init14('lstChooser','One',false,'100%',false,false);lstChooser.refresh=function(){if(typeof lstChooser_ref!='undefined')setTimeout(NSB.refresh,100,lstChooser_ref)};NSB.addProperties(lstChooser);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstChooser_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
frmChooser.style.display='none';},false);frmChooser.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmChooser);frmChooser.onshow=function(){savethefunction_rvar="";$("#hdChooser h1").text(usrProfile.fullname);ListViewClear(lstChooser);lstChooser.addItem("<br/>My Bookings","ticket80.png");lstChooser.addItem("<br/>My Offers","lifts.png");lstChooser.addItem("<br/>My Requests","requests80.png");lstChooser.addItem("<br/>My Details","profile80.png");lstChooser.addItem("<br/>My Next of Kin","nok80.png");lstChooser.addItem("<br/>My Vehicles","lift.png");return savethefunction_rvar;}
lstChooser.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
switch(True){case((i)==0):ChangeForm(frmMyBookings);break;case((i)==1):ChangeForm(frmMyOffers);break;case((i)==2):ChangeForm(frmMyRequests);break;case((i)==3):usrFrom="frmChooser";ChangeForm(frmSignUp);break;case((i)==4):ChangeForm(frmNextOfKin);break;case((i)==5):ChangeForm(frmVehicles);}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmRequest.style.display='block';NSB.addProperties(hdRequest);NSB.addDisableProperty(hdRequest);hdRequest_left.onclick=function(){ChangeForm(frmMain)};if(typeof(hdRequest.onclick)=='function'){if(typeof(hdRequest_left)!='undefined')hdRequest_left.onclick=function(){hdRequest.onclick(hdRequest_left.getAttribute('nsbvalue'))};if(typeof(hdRequest_right)!='undefined')hdRequest_right.onclick=function(){hdRequest.onclick(hdRequest_right.getAttribute('nsbvalue'))}};NSB.MultiInput_init('liftRequest');NSB.addProperties(liftRequest);NSB.MultiInput_init('liftRequest1');NSB.addProperties(liftRequest1);txtRequestNotes.ontouchmove=function(e){e.stopPropagation()};NSB.addProperties(txtRequestNotes);delete cboRequestFrom.childNodes[0];NSB.ComboBox_init('cboRequestFrom');NSB.addProperties(cboRequestFrom);delete cboRequestTo.childNodes[0];NSB.ComboBox_init('cboRequestTo');NSB.addProperties(cboRequestTo);frmRequest.style.display='none';},false);frmRequest.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmRequest);function SaveRequest(){savethefunction_rvar="";var lift;lift=[];var oSaved;oSaved=False;lift.origin=cboRequestFrom.selectedItem();lift.destination=cboRequestTo.selectedItem();lift.date=liftRequest.getValue(3);lift.time=liftRequest.getValue(4);lift.passengers=liftRequest1.getValue(1);lift.fee=liftRequest1.getValue(2);if(Len(lift.fee)==0){lift.fee="0.00";}
lift.status="Open";lift.offermobile=usrProfile.mobile;lift.offerby=usrProfile.fullname;lift.notes=txtRequestNotes.text;localStorage.setItem("request",lift.id);if(IsBlank(lift.origin,"Place From",usrProfile.first)==True){return savethefunction_rvar;}
if(IsEqual(lift.origin,"---Select From---","Place From",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(lift.destination,"Place To",usrProfile.first)==True){return savethefunction_rvar;}
if(IsEqual(lift.destination,"---Select To---","Place To",usrProfile.first)==True){return savethefunction_rvar;}
if(IsSame1(lift.origin,lift.destination,"Place From","Place To",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(lift.date,"Trip Date",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(lift.time,"Trip Time",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(lift.passengers,"Passengers",usrProfile.first)==True){return savethefunction_rvar;}
if(IsBlank(lift.fee,"Fee Per Person",usrProfile.first)==True){return savethefunction_rvar;}
lift.time=UCase(lift.time);lift.id=SysInfo(10);SaveLiftRequest(lift);oSaved=RequestExists(lift.id);if(oSaved==True){NSB.MsgBox(ShowLifts,"Your lift request has been successfully saved, and has been listed as available "+usrprofile.first+"!",0+64,"Lift Saved");}else{NSB.MsgBox("Your lift request has not been successfully saved, please try again "+usrProfile.first+"!");}
return savethefunction_rvar;}
function ShowLifts(result){if(result==1){ChangeForm(frmLifts);}}
function ClearRequest(){savethefunction_rvar="";liftRequest.setValue(1,"");liftRequest.setValue(2,"");liftRequest.setValue(3,"");liftRequest.setValue(4,"");liftRequest1.setValue(1,"");liftRequest1.setValue(2,"");txtRequestNotes.text="";cboRequestFrom.clear();cboRequestTo.clear();return savethefunction_rvar;}
function ResizeRequest(){savethefunction_rvar="";liftRequest.Width=frmRequest.Width-20;liftRequest1.Width=frmRequest.Width-20;txtRequestNotes.Width=frmRequest.Width-20;cboRequestFrom.Left=(liftRequest.Width/2)+10;cboRequestFrom.Width=(liftRequest.Width/2)-5;cboRequestTo.Left=(liftRequest.Width/2)+10;cboRequestTo.Width=(liftRequest.Width/2)-5;return savethefunction_rvar;}
function RequestCombos(){savethefunction_rvar="";cboRequestFrom.addItem("---Select From---","---Select From---");cboRequestTo.addItem("---Select To---","---Select To---");var p;p=Split(strPlaces,";");var i,pr;for(i=0;i<=p.length-1;i++){pr=p[i];cboRequestFrom.addItem(pr,pr);cboRequestTo.addItem(pr,pr);}
cboRequestFrom.setValue("---Select From---");cboRequestTo.setValue("---Select To---");return savethefunction_rvar;}
frmRequest.onshow=function(){savethefunction_rvar="";NSB.WaitCursor(True);ClearRequest();ResizeRequest();RequestCombos();NSB.WaitCursor(False);return savethefunction_rvar;}
hdRequest.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Apply"):SaveRequest();break;case((choice)=="Back"):ChangeForm(frmLifts);}
return savethefunction_rvar;}
var dbName;var dbObj;var sourceForm;var catFrom,sqlList,rCnt,query,recid,isnew;var DB_REAL="REAL";var DB_INTEGER="INTEGER";var DB_BLOB="BLOB";var DB_TEXT="TEXT";var DB_FLOAT="FLOAT";var DB_NUMERIC="NUMERIC";var VM=Chr(253);var FM=Chr(254);var LF=Chr(10);var CR=Chr(13);var Quote=Chr(34);var DQuote=Chr(34)+Chr(34);var InsertCommands,UpdateCommands,dbExport,dbJSON,dbImport;function ChangeFormByName(frmTo){savethefunction_rvar="";ChangeForm(window[frmTo]);return savethefunction_rvar;}
function FormSlide(sourceForm,targetForm){savethefunction_rvar="";sourceForm.style.webkitTransitionDuration="1000ms";sourceForm.style.webkitTransform="translateX(-"+SysInfo(0)+"px)";var xShow;xShow=ShowAnotherForm(sourceForm,targetForm);setTimeout(xShow,1000);return savethefunction_rvar;}
function ShowAnotherForm(sourceForm,targetForm){nsbDOMAttr(sourceForm,'style.display',"none");nsbDOMAttr(targetForm,'style.display',"block");targetForm.style.webkitTransform="translateX(0px)";}
function NormalizeText(sText){savethefunction_rvar="";sText="<span style="+Quote+"font-weight:normal;font-size:small;"+Quote+">"+sText+"</span>";return sText;return savethefunction_rvar;}
function RedBold(sText){savethefunction_rvar="";sText="<font color='red'><b>"+sText+"</b></font>";return sText;return savethefunction_rvar;}
function GreenBold(sText){savethefunction_rvar="";sText="<font color='green'><b>"+sText+"</b></font>";return sText;return savethefunction_rvar;}
function CleanHeader(sHeader){savethefunction_rvar="";return sHeader;return savethefunction_rvar;}
function InDoubleQuotes(svalue){savethefunction_rvar="";svalue=Quote+svalue+Quote;return svalue;return savethefunction_rvar;}
function TableDistinctList(sourceTable,sourceField){savethefunction_rvar="";SaveSetting("distinct",sourceField);var cboList;cboList=[];query="SELECT ["+sourceField+"]  FROM ["+sourceTable+"] ORDER BY ["+sourceField+"];";cboList[0]=[query,TableDistinctList1];Sql(dbObj,cboList);return savethefunction_rvar;}
function TableDistinctList1(transaction,results){savethefunction_rvar="";var row,i,sdistinct,svalue,svalues;sdistinct=GetSetting("distinct");svalues="";for(i=0;i<=results.rows.length-1;i++){row=results.rows.item(i);svalue=row[sdistinct];svalues=svalues+svalue+FM;}
svalues=RemoveDelim(svalues,FM);SaveSetting("distinct_"+sdistinct,svalues);return savethefunction_rvar;}
function ComboBoxDef(){savethefunction_rvar="";var strDef;strDef="<html><Select style="+DQuote;strDef=strDef+" name="+DQuote;strDef=strDef+" data-role="+InDoubleQuotes("none")+">";strDef=strDef+"<option value="+DQuote+"></option></Select>";strDef=strDef+"<span class="+InDoubleQuotes("arrow")+"></span></html>";return strDef;return savethefunction_rvar;}
function NumericOnly(svalue){savethefunction_rvar="";var sout,lenvalue,i,spart;sout="";lenvalue=Len(svalue);for(i=1;i<=lenvalue;i++){spart=Mid(svalue,i,1);switch(True){case((spart)=="1"):sout=sout+spart;break;case((spart)=="2"):sout=sout+spart;break;case((spart)=="3"):sout=sout+spart;break;case((spart)=="4"):sout=sout+spart;break;case((spart)=="5"):sout=sout+spart;break;case((spart)=="6"):sout=sout+spart;break;case((spart)=="7"):sout=sout+spart;break;case((spart)=="8"):sout=sout+spart;break;case((spart)=="9"):sout=sout+spart;break;case((spart)=="0"):sout=sout+spart;break;case((spart)=="-"):sout=sout+spart;}}
return sout;return savethefunction_rvar;}
function FixMonths(smonths){savethefunction_rvar="";smonths=CStr(smonths);var lenx;lenx=Len(smonths);if(lenx==1){return smonths;}else{var part1,part2;part1=Left(smonths,1);part2=Mid(smonths,2);smonths=part1+"."+part2;smonths=Round(smonths,0);return smonths;}
return savethefunction_rvar;}
function InitializeList(lstname,stritems,delim,bclear){var spitems,rscnt,rstot,strItem;if(bclear==True){lstname.deleteItem("all");}
spitems=Split(stritems,delim);rstot=spitems.length-1;for(rscnt=0;rscnt<=rstot;rscnt++){strItem=spitems[rscnt];lstname.addItem(strItem);}
lstname.refresh();}
function ListAddTextDescription(targetList,sText,sdescription){sText="<span class="+InDoubleQuotes("name")+">"+sText+"</span><span class="+InDoubleQuotes("comment")+">"+sdescription+"</span>";targetList.addItem(sText);}
function ResizeHeaderList(form,header,child){child.Left=0;child.Top=header.Height;child.Height=form.Height-header.Height;child.refresh();}
function RemoveDelim(strmv,delim){savethefunction_rvar="";var lendelim,rightpart,strout;lendelim=Len(delim);rightpart=Right(strmv,lendelim);strout=strmv;if(rightpart==delim){strout=Left(strmv,Len(strmv)-lendelim);}
return strout;return savethefunction_rvar;}
function MvRemoveItem(strmv,sremove,delim){savethefunction_rvar="";sremove=LCase(sremove);var sout,lendelim;sout="";var spv;spv=Split(strmv,delim);var stot,scnt,sitem;lendelim=Len(delim);stot=spv.length-1;for(scnt=0;scnt<=stot;scnt++){sitem=LCase(spv[scnt]);if(sitem!=sremove){sout=sout+spv[scnt]+delim;}}
sout=Left(sout,Len(sout)-lendelim);return sout;return savethefunction_rvar;}
function MvRemoveDuplicates(strmv,delim){savethefunction_rvar="";var sout;sout="";var spv;spv=Split(strmv,delim);var stot,scnt,sitem;var xpos;stot=spv.length-1;for(scnt=0;scnt<=stot;scnt++){sitem=Trim(spv[scnt]);if(Len(sitem)>0){xpos=MvSearch(sout,sitem,delim);if(xpos==-1){if(Len(sout)==0){sout=sitem;}else{sout=sout+delim+sitem;}}}}
return sout;return savethefunction_rvar;}
function MvSearch(searchvalues,strsearch,delim){savethefunction_rvar="";if(Len(searchvalues)==0){return-1;}
var spvalues,i,itot,ivalue;spvalues=Split(searchvalues,delim);strsearch=LCase(strsearch);itot=spvalues.length-1;for(i=0;i<=itot;i++){ivalue=spvalues[i];ivalue=LCase(ivalue);if(ivalue==strsearch){return i;}}
return-1;return savethefunction_rvar;}
function DbDateOut(sDate){savethefunction_rvar="";var xToday;xToday=CDate(sDate);xToday=FormatDateTime(xToday,"DD/MM/YYYY");return xToday;return savethefunction_rvar;}
function DbDateOut1(sDate){savethefunction_rvar="";var xToday;xToday=CDate(sDate);xToday=FormatDateTime(xToday,"YYYYMMDD");return xToday;return savethefunction_rvar;}
function ToDay(){savethefunction_rvar="";return FormatDateTime(dateadd("s",0,new Date()),"DD/MM/YYYY");return savethefunction_rvar;}
function ToDay1(){savethefunction_rvar="";return FormatDateTime(dateadd("s",0,new Date()),"YYYYMMDD");return savethefunction_rvar;}
function MvField(svalue,iposition,delimiter){savethefunction_rvar="";var mvalues,tvalues,xvalue;mvalues=Split(svalue,delimiter);tvalues=mvalues.length-1;iposition=iposition-1;if(iposition<=-1){xvalue=mvalues[tvalues];return xvalue;}
if(iposition>tvalues){return"";}
xvalue=mvalues[iposition];return xvalue;return savethefunction_rvar;}
function MvCount(svalue,delimiter){savethefunction_rvar="";if(Len(svalue)==0){return 0;}
var mvalues;mvalues=Split(svalue,delimiter);return mvalues.length;return savethefunction_rvar;}
function MvRest(svalue,iposition,delimiter){savethefunction_rvar="";var mvalues,tvalues,xvalue,x,y,resultx;var lendelim;lendelim=Len(delimiter);mvalues=Split(svalue,delimiter);tvalues=mvalues.length-1;iposition=iposition-1;if(iposition<=-1){xvalue=mvalues[tvalues];return xvalue;}
if(iposition>tvalues){return"";}
resultx="";x=iposition+1;for(y=x;y<=tvalues;y++){xvalue=mvalues[y];resultx=resultx+xvalue+delimiter;}
resultx=Left(resultx,Len(resultx)-lendelim);return resultx;return savethefunction_rvar;}
function MakeMoney(svalue){savethefunction_rvar="";svalue=ProperAmount(svalue);svalue=FormatNumber(svalue,2);return svalue;return savethefunction_rvar;}
function ProperAmount(svalue){savethefunction_rvar="";svalue=Replace(svalue,",","");dpos=InStr(1,svalue,".");if(dpos==0){svalue=svalue+".00";}
return svalue;return savethefunction_rvar;}
function InSingleQuote(strV){savethefunction_rvar="";return"'"+strV+"'";}
function MonthNames(intM){savethefunction_rvar="";return MonthName(intM,True);return savethefunction_rvar;}
function MonthNumber(strM){savethefunction_rvar="";strM=LCase(strM);switch(True){case((strM)=="jan"):return 1;break;case((strM)=="feb"):return 2;break;case((strM)=="mar"):return 3;break;case((strM)=="apr"):return 4;break;case((strM)=="may"):return 5;break;case((strM)=="jun"):return 6;break;case((strM)=="jul"):return 7;break;case((strM)=="aug"):return 8;break;case((strM)=="sep"):return 9;break;case((strM)=="oct"):return 10;break;case((strM)=="nov"):return 11;break;case((strM)=="dec"):return 12;}
return savethefunction_rvar;}
function SetHeaderTitle(hdObj,hdTitle){var shd;shd="#"+hdObj+" h1";$(shd).text(hdTitle);}
function GridRowColColour(grdName,rowPos,colPos,colour){grdName.cell(rowPos,colPos).style.color=colour;grdName.refresh();}
function GridRowColBackgroundColour(grdName,rowPos,colPos,colour){grdName.cell(rowPos,colPos).style.backgroundColor=colour;grdName.refresh();}
function GridRowColor(grdName,rowPos,colour){var grdCols,i;grdCols=grdName.getColCount();for(i=0;i<=grdCols-1;i++){grdName.cell(rowPos,i).style.color=color;}
grdName.refresh();}
function GridCenterAlign(grdName,startCol,endCol){var grdRows,i;grdRows=grdName.getRowCount();for(i=0;i<=grdRows-1;i++){for(col=startCol;col<=endCol;col++){grdName.cell(i,col).style.textAlign="center";}}
grdName.refresh();}
function GridRightAlign(grdName,startCol,endCol){var grdRows,i;grdRows=grdName.getRowCount();for(i=0;i<=grdRows-1;i++){for(col=startCol;col<=endCol;col++){grdName.cell(i,col).style.textAlign="right";}}
grdName.refresh();}
function GridSetHeight(grdName,grdRowHeight){var grdRows,i;grdRows=grdName.getRowCount();for(i=1;i<=grdRows-1;i++){grdName.setRowHeight(i,grdRowHeight);}
grdName.refresh();}
function GridBoldRow(grdName,rowPos){var grdCols,i;grdCols=grdName.getColCount();for(i=0;i<=grdCols-1;i++){grdName.cell(rowPos,i).style.fontWeight="bold";}
grdName.refresh();}
function GridAlternateColor(grdName){var grdRows,grdCols,i;grdRows=grdName.getRowCount();grdCols=grdName.getColCount();for(i=1;i<=grdRows-1;i++){for(col=0;col<=grdCols-1;col++){if((Math.abs(i)%2)==1){grdName.cell(i,col).style.backgroundColor=RGB(255,255,240);}else{grdName.cell(i,col).style.backgroundColor=RGB(240,248,255);}}}
grdName.refresh();}
function InsertRecord(tblName,tblRecord){savethefunction_rvar="";var sqlInst;sqlInst=[];var flds,vals;flds="";vals="";for(item in tblRecord){flds=flds+"["+item+"],";vals=vals+tblRecord[item]+",";}
flds=Left(flds,Len(flds)-1);vals=Left(vals,Len(vals)-1);sqlInst[0]="INSERT OR REPLACE INTO ["+tblName+"] ("+flds+") VALUES ("+vals+");";Sql(dbObj,sqlInst);return savethefunction_rvar;}
function InsertRecord1(tblName,tblRecord,Position){savethefunction_rvar="";var flds,vals;flds="";vals="";for(item in tblRecord){flds=flds+"["+item+"],";vals=vals+tblRecord[item]+",";}
flds=Left(flds,Len(flds)-1);vals=Left(vals,Len(vals)-1);InsertCommands[Position]="INSERT OR REPLACE INTO ["+tblName+"] ("+flds+") VALUES ("+vals+");";return savethefunction_rvar;}
function CreateTable(TableName,FieldsAndTypes,PrimaryKey,AutoIncrement){savethefunction_rvar="";var sb,fdef,sqlCreate;TableName=Replace(TableName," ","_");sb="(";for(item in FieldsAndTypes){fdef="["+item+"] "+UCase(FieldsAndTypes[item]);sb=sb+fdef;if(item==PrimaryKey){sb=sb+" NOT NULL PRIMARY KEY";}
if(item==AutoIncrement){sb=sb+" AUTOINCREMENT";}
sb=sb+", ";}
sb=Left(sb,Len(sb)-2);sb=sb+")";sb="CREATE TABLE IF NOT EXISTS ["+TableName+"] "+sb+";";sqlCreate=[];sqlCreate[0]=sb;console.log(sb);Sql(dbObj,sqlCreate);}
function DeleteIndex(TableName,idxname){savethefunction_rvar="";var idxkey,sb,delidx;TableName=Replace(TableName," ","_");idxkey=TableName+"_"+idxname;delidx=[];delidx[0]="DROP INDEX IF EXISTS "+idxkey+";";delidx[1]="DROP INDEX IF EXISTS "+idxname+";";Sql(dbObj,delidx);return savethefunction_rvar;}
function CreateTableIndexes(TableName,Indexes){savethefunction_rvar="";TableName=Replace(TableName," ","_");var sb,idef,sqlCreateIdx,idxname;var spidx,idxtot,idxcnt,idx;spidx=Split(Indexes,",");idxtot=spidx.length-1;sqlCreateIdx=[];for(idxcnt=0;idxcnt<=idxtot;idxcnt++){idx=spidx[idxcnt];idxname=TableName+"_"+idx;idef="CREATE INDEX IF NOT EXISTS ["+idxname+"] ON ["+TableName+"] (["+idx+"]);";sqlCreateIdx[idxcnt]=idef;console.log(idef);}
Sql(dbObj,sqlCreateIdx);return savethefunction_rvar;}
function ResetInsertCommands(){savethefunction_rvar="";InsertCommands=[];return savethefunction_rvar;}
function ExecuteInsertCommands(){savethefunction_rvar="";Sql(dbObj,InsertCommands);return savethefunction_rvar;}
function ExecuteUpdateCommands(){savethefunction_rvar="";Sql(dbObj,UpdateCommands);return savethefunction_rvar;}
function MvSum(strvalues,delim){savethefunction_rvar="";var dtot,i;dtot=0;var spvalues;spvalues=Split(strvalues,delim);var dlen;dlen=spvalues.length-1;for(i=0;i<=dlen;i++){dtot=parseFloat(dtot)+parseFloat(spvalues[i]);}
dtot=Round(dtot,2);return dtot;return savethefunction_rvar;}
function DeleteTable(tblName){savethefunction_rvar="";var sqlD;sqlD=[];sqlD[0]=["DROP TABLE IF EXISTS ["+tblName+"];"];Sql(dbObj,sqlD);return savethefunction_rvar;}
function UpdateRecord(tblName,tblRecord,tblWhere){savethefunction_rvar="";var sqlUpd;sqlUpd=[];var vals,wvals;vals="";wvals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);sqlUpd[0]="UPDATE ["+tblName+"] SET "+vals+" WHERE "+wvals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function UpdateRecords(tblName,tblRecord){savethefunction_rvar="";var sqlUpd,vals;sqlUpd=[];vals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);sqlUpd[0]="UPDATE ["+tblName+"] SET "+vals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function DeleteRecord(tblName,tblWhere){savethefunction_rvar="";var sqlUpd;sqlUpd=[];var wvals;wvals="";for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);sqlUpd[0]="DELETE FROM ["+tblName+"] WHERE "+wvals+";";Sql(dbObj,sqlUpd);return savethefunction_rvar;}
function DeleteRecords(tblName){savethefunction_rvar="";var sqlDel;sqlDel=[];sqlDel[0]="DELETE FROM ["+tblName+"];";Sql(dbObj,sqlDel);return savethefunction_rvar;}
function UpdateRecord1(tblName,tblRecord,tblWhere,Position){savethefunction_rvar="";var vals,wvals;vals="";wvals="";for(item in tblRecord){vals=vals+"["+item+"] = "+tblRecord[item]+",";}
vals=Left(vals,Len(vals)-1);for(item in tblWhere){wvals=wvals+"["+item+"] = "+tblWhere[item]+",";}
wvals=Left(wvals,Len(wvals)-1);UpdateCommands[Position]="UPDATE ["+tblName+"] SET "+vals+" WHERE "+wvals+";";return savethefunction_rvar;}
function ComboIndexOf(cboBox,cboSearch){savethefunction_rvar="";var cboOut;cboOut=-1;var cboTot;cboTot=cboBox.getItemCount();var xitem,i;for(i=0;i<=cboTot-1;i++){xitem=cboBox.List(i);if(xitem==cboSearch){return i;}}
return cboOut;return savethefunction_rvar;}
function GridDefault(grdName){savethefunction_rvar="";GridSetHeight(grdName,"32px");GridAlternateColor(grdName);return savethefunction_rvar;}
function GridAddRow(grdName,colValues,delim,rowPos){savethefunction_rvar="";var vTot,spvalues,i;spvalues=Split(colValues,delim);vTot=spvalues.length;grdName.addRows(1);for(i=0;i<=vTot-1;i++){grdName.setValue(rowPos,i,spvalues[i]);}
return savethefunction_rvar;}
function GridAddNextRow(grdName,colValues,delim){savethefunction_rvar="";var vTot,rowPos,spvalues,i;rowPos=grdName.getRowCount();spvalues=Split(colValues,delim);vTot=spvalues.length;grdName.addRows(1);for(i=0;i<=vTot-1;i++){grdName.setValue(rowPos,i,spvalues[i]);}
return savethefunction_rvar;}
function GridAddImage(grdName,rowPos,colPos,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";grdName.setValue(rowPos,colPos,imgDef);return savethefunction_rvar;}
function GridAddTextImage(grdName,rowPos,colPos,text,IMG){savethefunction_rvar="";var imgDef,imgID;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef=text+"<img src='"+IMG+"' align='right' id='"+imgID+"'>";grdName.setValue(rowPos,colPos,imgDef);return savethefunction_rvar;}
function GridAddTextImageDefinition(grdName,rowPos,colPos,text,IMG){savethefunction_rvar="";var imgDef,imgID;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef=text+"  <img width=20px height=20px src='"+IMG+"' align='right' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDefinition(grdName,rowPos,colPos,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+rowPos+"_"+colPos;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDefinitionAction(grdName,grdAction,grdId,imgName){savethefunction_rvar="";var imgID,imgDef;imgID=grdName+"_"+grdAction+"_"+grdId;imgDef="<img width=25px height=25px style=cursor:pointer src='"+imgName+"' id='"+imgID+"'>";return imgDef;return savethefunction_rvar;}
function GridAddImageDelete(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"delete.png");return savethefunction_rvar;}
function GridAddImageEdit(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"edit.png");return savethefunction_rvar;}
function GridAddImageChart(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"chart.png");return savethefunction_rvar;}
function GridAddImageView(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"view.png");return savethefunction_rvar;}
function GridAddImagePayTo(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"payto.png");return savethefunction_rvar;}
function GridAddImageDrillDown(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"drill.png");return savethefunction_rvar;}
function GridAddImageDuplicate(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"duplicate.png");return savethefunction_rvar;}
function GridAddImageReverse(grdName,rowPos,colPos){savethefunction_rvar="";GridAddImage(grdName,rowPos,colPos,"reverse.png");return savethefunction_rvar;}
function email(t,subject,body){savethefunction_rvar="";location="mailto:"+encodeURI(t)+"?subject="+encodeURI(subject)+"&body="+encodeURI(body);return savethefunction_rvar;}
function phone(tel){savethefunction_rvar="";location="tel:"+tel;return savethefunction_rvar;}
function skype(tel){savethefunction_rvar="";location="skype:"+tel;return savethefunction_rvar;}
function sms(tel,body){savethefunction_rvar="";location="sms:"+tel+"?body="+encodeURI(body);return savethefunction_rvar;}
function ReadTableRecord(stable,sprimarykey,svalue,sfields){savethefunction_rvar="";var skey;skey=stable+"*"+svalue;SaveSetting("read_table",stable);SaveSetting("read_pk",sprimarykey);SaveSetting("read_id",svalue);SaveSetting("read_flds",sfields);SaveSetting(skey,"");query="select * from ["+stable+"] where ["+sprimarykey+"] = "+svalue+";";var sqlRead;sqlRead=[];sqlRead[0]=[query,ReadTableRecordH,ReadRecordE];Sql(dbObj,sqlRead);return savethefunction_rvar;}
function ReadTableRecordH(transaction,results){savethefunction_rvar="";var stable,spk,svalue,sfields,skey,spfields,ftot,row,rtot,fcnt,fstr,fvalue,sout;stable=GetSetting("read_table");spk=GetSetting("read_pk");svalue=GetSetting("read_id");sfields=GetSetting("read_flds");if(IsNull(stable)==True){return savethefunction_rvar;}
if(IsNull(spk)==True){return savethefunction_rvar;}
if(IsNull(svalue)==True){return savethefunction_rvar;}
if(IsNull(sfields)==True){return savethefunction_rvar;}
sout="";skey=stable+"*"+svalue;rtot=results.rows.length-1;if(_jsCint(rtot)==-1){return savethefunction_rvar;}
row=results.rows.item(0);spfields=Split(sfields,",");ftot=spfields.length-1;for(fcnt=0;fcnt<=ftot;fcnt++){fstr=spfields[fcnt];fvalue=row[fstr];if(IsNull(fvalue)==True){fvalue="";}
sout=sout+fvalue+FM;}
sout=RemoveDelim(sout,FM);SaveSetting(skey,sout);return savethefunction_rvar;}
function ReadRecordE(transaction,results){savethefunction_rvar="";currentRecord=null;console.log(results.code+"-"+results.message);return savethefunction_rvar;}
function NextAvailableId(frmToShow){savethefunction_rvar="";var stable,sprimarykey,sqlList;SaveSetting("action","new");SaveSetting("form",frmToShow);stable=GetSetting("table");sprimarykey=GetSetting("primarykey");sqlList=[];sqlList[0]=["SELECT MAX("+sprimarykey+") as MaxValue FROM ["+stable+"];",NextAvailableIdH,NextAvailableIdE];Sql(dbObj,sqlList);return savethefunction_rvar;}
function NextAvailableIdH(transaction,results){savethefunction_rvar="";var sid,sform;sform=GetSetting("form");sid=results.rows.item(0)["MaxValue"];sid=_jsCint(sid)+1;SaveSetting("id",sid);return savethefunction_rvar;}
function NextAvailableIdE(transaction,results){savethefunction_rvar="";SaveSetting("id","-1");console.log(results.code+"-"+results.message);return savethefunction_rvar;}
function MapSum(mapobj,mapkey,mapitem){var xitem;xitem=mapobj[mapkey];if(IsNull(xitem)==True){mapobj[mapkey]=mapitem;}else{xitem=parseFloat(xitem)+parseFloat(mapitem);mapobj[mapkey]=xitem;}}
function MapUpdate(mapobj,mapkey,mapitem){var xitem;xitem=mapobj[mapkey];if(IsNull(xitem)==True){mapobj[mapkey]=mapitem;}else{mapobj[mapkey]=mapitem;}}
function MapSearch(mapobj,keySearch){savethefunction_rvar="";var xitem;xitem=mapobj[keySearch];if(IsNull(xitem)==True){return True;}else{return False;}
return savethefunction_rvar;}
function ListViewAddTitleDescription(lstView,title,Description){savethefunction_rvar="";var sText;sText="<h2>"+title+"</h2><p>"+Description+"</p>";lstView.addItem(sText);return savethefunction_rvar;}
function ListViewAddTitleDescriptionSideContent(lstView,title,Description,Counted,Content,ID,IMG){savethefunction_rvar="";var sText;sText="<h2>"+title+"</h2><p>"+Description+"</p>";if(Len(Content)>0){sText=sText+"<span class='ui-li-aside'>"+Content+"</span>";}
if(Len(Counted)>0){sText=sText+"<span class='ui-li-count'>"+Counted+"</span>";}
lstView.addItem(sText,IMG,ID);return savethefunction_rvar;}
function ListViewClear(lstView){savethefunction_rvar="";lstView.deleteItem("all");return savethefunction_rvar;}
function ListViewRefresh(lstView){savethefunction_rvar="";lstView.refresh();return savethefunction_rvar;}
function ListViewAddTitleCount(lstView,title,Counted){savethefunction_rvar="";var sText;sText=title+"<span class='ui-li-count'>"+Counted+"</span>";lstView.addItem(sText);return savethefunction_rvar;}
function Alphabets(svalue){savethefunction_rvar="";var sout,slen,i,schar,isnum;sout="";slen=Len(svalue);schar=Mid(svalue,slen,1);isnum=IsNumeric(schar);do{if(isnum==False)break;svalue=Left(svalue,slen-1);slen=Len(svalue);schar=Mid(svalue,slen,1);isnum=IsNumeric(schar);}while(0<1);return svalue;return savethefunction_rvar;}
function ListViewAddTitleAsideContent(lstView,title,Content){savethefunction_rvar="";var sText;sText=title+"<span class='ui-li-aside'><p>"+Content+"</p></span>";lstView.addItem(sText);return savethefunction_rvar;}
function ListViewAddTextBoxWithLabel(lstView,ID,caption){savethefunction_rvar="";var slabel;slabel="<label for='"+ID+"'>"+caption+"</label>";var sText;sText="<input type='text' name='"+ID+"' id='"+ID+"' value=''/>";lstView.addItem(slabel+sText);return savethefunction_rvar;}
function ListViewAddTextBox(lstView,ID,caption){savethefunction_rvar="";var sText;sText="<input type='text' name='"+ID+"' id='"+ID+"' value=''/>";lstView.addItem(sText);return savethefunction_rvar;}
function ListViewAddSplit(lstView,title,lnkid,lnkicon,lnkonclick,lnktheme,lnktitle){savethefunction_rvar="";var strItem;strItem="<a id='"+lnkid+"' data-icon='"+lnkicon+"' href='#' onclick='javascript:"+lnkonclick+"();' data-theme='";strItem=strItem+lnktheme+"'>"+lnktitle+"</a>";strItem=title+strItem;lstView.addItem(strItem);return savethefunction_rvar;}
function SaveSetting(key,value){savethefunction_rvar="";key=CStr(key);key=Trim(key);value=CStr(value);value=Trim(value);localStorage.setItem(key,value);return savethefunction_rvar;}
function GetSetting(key){savethefunction_rvar="";key=CStr(key);key=Trim(key);var svalue;svalue=localStorage.getItem(key);if(IsNull(svalue)==True){svalue="";}
svalue=CStr(svalue);svalue=Trim(svalue);return svalue;return savethefunction_rvar;}
function IsBlank(valueToCheck,title,username){savethefunction_rvar="";if(Len(valueToCheck)==0){NSB.MsgBox("The "+title+" cannot be blank, please enter the "+LCase(title)+" "+username+"!");return True;}else{return False;}
return savethefunction_rvar;}
function IsEqual(valueToCheck,valueToCheck1,valueToCheckTitle,username){savethefunction_rvar="";if(valueToCheck==valueToCheck1){NSB.MsgBox("The "+valueToCheckTitle+" should not be "+valueToCheck1+", please correct this "+username+"!");return True;}else{return False;}
return savethefunction_rvar;}
function IsSame(valueToCheck,valueToCheck1,valueToCheckTitle,valueToCheck1Title,username){savethefunction_rvar="";if(valueToCheck!=valueToCheck1){NSB.MsgBox("The "+valueToCheckTitle+" and the "+valueToCheck1Title+" do not match, please correct this "+username+"!");return False;}else{return True;}
return savethefunction_rvar;}
function IsSame1(valueToCheck,valueToCheck1,valueToCheckTitle,valueToCheck1Title,username){savethefunction_rvar="";if(valueToCheck==valueToCheck1){NSB.MsgBox("The "+valueToCheckTitle+" and the "+valueToCheck1Title+" must not be the same, please correct this "+username+"!");return True;}else{return False;}
return savethefunction_rvar;}
function IsNotSame(valueToCheck,valueToCheck1,valueToCheckTitle,valueToCheck1Title,username){savethefunction_rvar="";if(valueToCheck==valueToCheck1){NSB.MsgBox("The "+valueToCheckTitle+" and the "+valueToCheck1Title+" are the same, please correct this "+username+"!");return True;}else{return False;}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmRequests.style.display='block';NSB.addProperties(hdRequests);NSB.addDisableProperty(hdRequests);hdRequests_left.onclick=function(){ChangeForm(frmLifts)};if(typeof(hdRequests.onclick)=='function'){if(typeof(hdRequests_left)!='undefined')hdRequests_left.onclick=function(){hdRequests.onclick(hdRequests_left.getAttribute('nsbvalue'))};if(typeof(hdRequests_right)!='undefined')hdRequests_right.onclick=function(){hdRequests.onclick(hdRequests_right.getAttribute('nsbvalue'))}};NSB.List_jqm_init14('lstRequests','Places',true,'100%',false,false);lstRequests_ref=new IScroll(lstRequests_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false,click:iScrollClick()});lstRequests.refresh=function(){if(typeof lstRequests_ref!='undefined')setTimeout(NSB.refresh,100,lstRequests_ref)};NSB.addProperties(lstRequests,lstRequests_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstRequests_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
frmRequests.style.display='none';},false);frmRequests.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmRequests);var requestfile,requestfiles;var requests;function ResizeRequests(){savethefunction_rvar="";lstRequests.Left=0;lstRequests.Top=42;lstRequests.Height=frmRequests.Height-42;lstRequests.Width=frmRequests.Width;return savethefunction_rvar;}
function RefreshRequests(){savethefunction_rvar="";var i,rCnt,stable,sFromTo;NSB.WaitCursor(True);ListViewClear(lstRequests);requests=[];req=Ajax("ajaxRequests.php");if(req.status==200){requestfiles=Split(req.responseText,'\n');for(i=0;i<=requestfiles.length-1;i++){requestfile=Trim(requestfiles[i]);if(Len(requestfile)>0){req=Ajax("ajaxRequests.php?file="+encodeURIComponent(requestfile));if(req.status==200){usrRequest=$.xml2json(req.responseText);if(usrRequest.status=="Open"){requests.push(usrRequest);}}}}
requests=sortJSON(requests,"origin");for(i=0;i<=requests.length-1;i++){usrRequest=requests[i];stable=RequestTable(usrRequest);sFromTo=usrRequest.origin+" to "+usrRequest.destination;ListViewAddTitleDescriptionSideContent(lstRequests,sFromTo,stable,"","",usrRequest.id,"");}
ListViewRefresh(lstRequests);}else{if(req.status==404){req.err="No files found!";}
NSB.MsgBox("Error while retrieving lift requests: "+req.err);}
NSB.WaitCursor(False);return savethefunction_rvar;}
frmRequests.onshow=function(){savethefunction_rvar="";ResizeRequests();RefreshRequests();return savethefunction_rvar;}
lstRequests.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
return savethefunction_rvar;}
hdRequests.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Back"):ChangeForm(frmLifts);break;case((choice)=="Refresh"):RefreshRequests();}
return savethefunction_rvar;}
function sortJSON(data,key){return data.sort(function(a,b){var x=a[key];var y=b[key];return((x==y)?0:((x.toLowerCase()>y.toLowerCase())?1:-1));});}
window.addEventListener('load',function(){frmOffers.style.display='block';NSB.addProperties(hdOffers);NSB.addDisableProperty(hdOffers);hdOffers_left.onclick=function(){ChangeForm(frmLifts)};if(typeof(hdOffers.onclick)=='function'){if(typeof(hdOffers_left)!='undefined')hdOffers_left.onclick=function(){hdOffers.onclick(hdOffers_left.getAttribute('nsbvalue'))};if(typeof(hdOffers_right)!='undefined')hdOffers_right.onclick=function(){hdOffers.onclick(hdOffers_right.getAttribute('nsbvalue'))}};NSB.List_jqm_init14('lstOffers','Offers',true,'100%',false,false);lstOffers_ref=new IScroll(lstOffers_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false,click:iScrollClick()});lstOffers.refresh=function(){if(typeof lstOffers_ref!='undefined')setTimeout(NSB.refresh,100,lstOffers_ref)};NSB.addProperties(lstOffers,lstOffers_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstOffers_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
frmOffers.style.display='none';},false);frmOffers.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmOffers);function ResizeOffers(){savethefunction_rvar="";lstOffers.Left=0;lstOffers.Top=42;lstOffers.Height=frmOffers.Height-42;lstOffers.Width=frmOffers.Width;return savethefunction_rvar;}
function RefreshOffers(){savethefunction_rvar="";var i,rCnt,stable,sFromTo;NSB.WaitCursor(True);ListViewClear(lstOffers);offers=[];req=Ajax("ajaxOffers.php");if(req.status==200){offerfiles=Split(req.responseText,'\n');for(i=0;i<=offerfiles.length-1;i++){offerfile=Trim(offerfiles[i]);if(Len(offerfile)>0){req=Ajax("ajaxOffers.php?file="+encodeURIComponent(offerfile));if(req.status==200){usrOffer=$.xml2json(req.responseText);if(usrOffer.status=="Open"){offers.push(usrOffer);}}}}
offers=sortJSON(offers,"origin");for(i=0;i<=offers.length-1;i++){usrOffer=offers[i];stable=OfferTable(usrOffer);sFromTo=usrOffer.origin+" to "+usrOffer.destination;ListViewAddTitleDescriptionSideContent(lstOffers,sFromTo,stable,"","",usrOffer.id,"");}
ListViewRefresh(lstOffers);}else{if(req.status==404){req.err="No files found!";}
NSB.MsgBox("Error while retrieving lift offers: "+req.err);}
NSB.WaitCursor(False);return savethefunction_rvar;}
frmOffers.onshow=function(){savethefunction_rvar="";ResizeOffers();RefreshOffers();return savethefunction_rvar;}
lstOffers.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
offerfile=i;ChangeForm(frmOpenOffer);return savethefunction_rvar;}
hdOffers.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Back"):ChangeForm(frmLifts);break;case((choice)=="Refresh"):RefreshOffers();}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmVehicles.style.display='block';NSB.addProperties(hdVehicles);NSB.addDisableProperty(hdVehicles);hdVehicles_left.onclick=function(){ChangeForm(frmChooser)};hdVehicles_right.onclick=function(){ChangeForm(frmAddVehicle)};if(typeof(hdVehicles.onclick)=='function'){if(typeof(hdVehicles_left)!='undefined')hdVehicles_left.onclick=function(){hdVehicles.onclick(hdVehicles_left.getAttribute('nsbvalue'))};if(typeof(hdVehicles_right)!='undefined')hdVehicles_right.onclick=function(){hdVehicles.onclick(hdVehicles_right.getAttribute('nsbvalue'))}};NSB.List_jqm_init14('lstVehicles','Vehicles',true,'100%',false,false);lstVehicles_ref=new IScroll(lstVehicles_scroller,{mouseWheel:true,scrollbars:true,bounce:true,zoom:false,click:iScrollClick()});lstVehicles.refresh=function(){if(typeof lstVehicles_ref!='undefined')setTimeout(NSB.refresh,100,lstVehicles_ref)};NSB.addProperties(lstVehicles,lstVehicles_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstVehicles_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
frmVehicles.style.display='none';},false);frmVehicles.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmVehicles);function ResizeVehicles(){savethefunction_rvar="";lstVehicles.Left=0;lstVehicles.Top=42;lstVehicles.Height=frmVehicles.Height-42;lstVehicles.Width=frmVehicles.Width;return savethefunction_rvar;}
frmVehicles.onshow=function(){savethefunction_rvar="";var i;vehNew=True;NSB.WaitCursor(True);ListViewClear(lstVehicles);ResizeVehicles();GetUserVehicles();for(i=0;i<=vehicles.length-1;i++){usrVehicle=vehicles[i];lstVehicles.addItem(usrVehicle.registration);strVehicleDetails=JSON.stringify(usrVehicle);SaveSetting(usrVehicle.registration,strVehicleDetails);}
ListViewRefresh(lstVehicles);NSB.WaitCursor(False);return savethefunction_rvar;}
lstVehicles.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
strVehicle=lstVehicles.getItem(i);strVehicleDetails=GetSetting(strVehicle);usrVehicle=JSON.parse(strVehicleDetails);vehNew=False;ChangeForm(frmAddVehicle);return savethefunction_rvar;}
window.addEventListener('load',function(){frmOpenOffer.style.display='block';NSB.addProperties(hdOpenOffer);NSB.addDisableProperty(hdOpenOffer);hdOpenOffer_left.onclick=function(){ChangeForm(frmOffers)};if(typeof(hdOpenOffer.onclick)=='function'){if(typeof(hdOpenOffer_left)!='undefined')hdOpenOffer_left.onclick=function(){hdOpenOffer.onclick(hdOpenOffer_left.getAttribute('nsbvalue'))};if(typeof(hdOpenOffer_right)!='undefined')hdOpenOffer_right.onclick=function(){hdOpenOffer.onclick(hdOpenOffer_right.getAttribute('nsbvalue'))}};NSB.List_jqm_init14('lstOpenOffer','Offer',false,'100%',false,false);lstOpenOffer.refresh=function(){if(typeof lstOpenOffer_ref!='undefined')setTimeout(NSB.refresh,100,lstOpenOffer_ref)};NSB.addProperties(lstOpenOffer);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstOpenOffer_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
fbOpenOffer.refresh=function(){setTimeout(NSB.FooterBarRefresh,10,fbOpenOffer)};NSB.FooterBar_jqm_init('fbOpenOffer','Call,SMS,Accept');NSB.addProperties(fbOpenOffer);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('fbOpenOffer_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
frmOpenOffer.style.display='none';},false);frmOpenOffer.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmOpenOffer);fbOpenOffer.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Call"):phone(usrOffer.offermobile);break;case((choice)=="SMS"):sms(usrOffer.offermobile,"");break;case((choice)=="Accept"):NSB.MsgBox(ConfirmOffer,"Are you sure that you want to Accept this lift offer "+usrProfile.first+"?",4+32,"Accept Offer");}
return savethefunction_rvar;}
function ConfirmOffer(result){if(result==7){return;}
ReadOffer(usrOffer.id);var stracceptedby;if(TypeName(usrOffer)=="null"){NSB.MsgBox("This lift offer does no longer exist, try and find another offer "+usrProfile.first+"!");return;}
if(usrOffer.status=="Closed"){NSB.MsgBox("This lift offer has already been closed now, try and find another offer "+usrProfile.first+"!");return;}
stracceptedby=usrOffer.acceptedby;stracceptedby=stracceptedby+";"+usrProfile.mobile;stracceptedby=MvRemoveDuplicates(stracceptedby,";");usrOffer.acceptedby=stracceptedby;usrOffer.taken=MvCount(usrOffer.acceptedby,";");if(usrOffer.passengers==usrOffer.taken){usrOffer.status="Closed";}else{usrOffer.status="Open";}
SaveLiftOffer(usrOffer);oSaved=OfferExists(usrOffer.id);if(oSaved==True){NSB.MsgBox(ShowLift,"Your lift acceptance has been successfully saved "+usrProfile.first+"!");}else{NSB.MsgBox("Your lift acceptable has not been successfully saved, please try again "+usrProfile.first+"!");}
return savethefunction_rvar;}
function ShowLift(result){ChangeForm(frmOpenOffer);}
frmOpenOffer.onshow=function(){savethefunction_rvar="";var sFromTo,stable;lstOpenOffer.Left=0;lstOpenOffer.Top=42;lstOpenOffer.Height=frmOpenOffer.Height-42;lstOpenOffer.Width=frmOpenOffer.Width;ListViewClear(lstOpenOffer);ReadOffer(offerfile);if(TypeName(usrOffer)=="null"){NSB.MsgBox("This lift offer could not be read, please try again "+usrProfile.first+"!");return savethefunction_rvar;}
sFromTo=usrOffer.origin+" to "+usrOffer.destination;stable=OfferTable(usrOffer);ListViewAddTitleDescriptionSideContent(lstOpenOffer,sFromTo,stable,"","",usrOffer.id,"");return savethefunction_rvar;}