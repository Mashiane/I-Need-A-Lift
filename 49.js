
frmRequest.innerHTML=[  NSB.HeaderBar_jqm14('hdRequest', 'Request a Lift', 'Back', 'arrow-l', 'left', 'Apply', 'check', 'right', ' style="" class=" "', ' ui-corner-all', ''),
  NSB.MultiInput("liftRequest", 4, "smallfield", "Place From,Place To,Trip Date,Trip Time", "Place From<span style=color:red;>*</span>,Place To<span style=color:red;>*</span>,Trip Date<span style=color:red;>*</span>,Trip Time<span style=color:red;>*</span>", "text,text,date,time", "", " style=  ", false),
  NSB.MultiInput("liftRequest1", 2, "smallfield", "Passengers,Fee PP", "Passengers<span style=color:red;>*</span>,Fee PP<span style=color:red;>*</span>", "number,number", "", " style=  ", false),
  "<textarea id='txtRequestNotes' class='ui-mini  ' name='' style='display:block; margin-top:0px; text-align:left; ; font-family:; font-style:; font-weight:; color:; background-color:;-webkit-overflow-scrolling:touch; max-height:auto; '  autocorrect='on'  autocomplete='on'  autocapitalize='on' data-autogrow=false  placeholder='Notes'></textarea>",
  NSB.ComboBox("cboRequestFrom", "One,Two", "1,2", "", ""),
  NSB.ComboBox("cboRequestTo", "One,Two", "1,2", "", ""),
  ].join('');
