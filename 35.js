
frmOffer.innerHTML=[  NSB.HeaderBar_jqm14('hdOffer', 'Offer a Lift', 'Back', 'arrow-l', 'left', 'Apply', 'check', 'right', ' style="" class=" "', ' ui-corner-all', ''),
  NSB.MultiInput("liftoffer", 4, "smallfield", "Place From,Place To,Trip Date,Trip Time", "Place From<span style=color:red;>*</span>,Place To<span style=color:red;>*</span>,Trip Date<span style=color:red;>*</span>,Trip Time<span style=color:red;>*</span>", "text,text,date,time", "", " style=  ", false),
  NSB.MultiInput("liftoffer1", 3, "smallfield", "Passengers,Car Registration,Fee PP", "Passengers<span style=color:red;>*</span>,Car Registration<span style=color:red;>*</span>,Fee PP<span style=color:red;>*</span>", "number,text,number", "", " style=  ", false),
  "<textarea id='txtNotes' class='ui-mini  ' name='' style='display:block; margin-top:0px; text-align:left; ; font-family:; font-style:; font-weight:; color:; background-color:;-webkit-overflow-scrolling:touch; max-height:auto; '  autocorrect='on'  autocomplete='on'  autocapitalize='on' data-autogrow=false  placeholder='Notes'></textarea>",
  NSB.ComboBox("cboOfferFrom", "One,Two", "1,2", "", ""),
  NSB.ComboBox("cboOfferTo", "One,Two", "1,2", "", ""),
  NSB.ComboBox("cboOfferVehicle", "One,Two", "1,2", "", ""),
  ].join('');
